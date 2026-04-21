
const model = require("../../model/index")
const { generateToken } = require("../../helpers/tokenGenAndVerification")
exports.signup = async (req, res) => {
  try {
    const { name, email, password, age, phoneNumber, role, location } = req.body;

    // 1. Basic validation
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and password are required'
      });
    }

    const existingUser = await model.userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }

    let safeRole = role || 'provider';
    if (['superadmin'].includes(role)) {
      safeRole = 'user';
    }

    // 4. Geo Location handling
    let userLocation = {
      type: 'Point',
      coordinates: [0, 0]
    };

    if (location?.coordinates && Array.isArray(location.coordinates)) {
      userLocation = {
        type: 'Point',
        coordinates: location.coordinates
      };
    }

    const user = await model.userModel.create({
      name,
      email,
      password,
      age,
      phoneNumber,
      role: safeRole,
      location: userLocation,
      currentStep: 2,
      isProfileComplete: false
    });

    const token = generateToken(user._id, user.role);

    return res.status(201).json({
      success: true,
      message: 'Step 1: Registration completed successfully',
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        currentStep: user.currentStep,
        token
      }
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
exports.manageProfile = async (req, res) => {
  try {
    const { step, data } = req.body;
    const userId = req.user.id; // From Protect Middleware

    let update = { currentStep: step + 1 };

    // Step wise data mapping
    if (step === 2) { update.city = data.cityId; update.category = data.categoryId; }
    if (step === 3) { update.bio = data.bio; update.services = data.servicesIds; update.pricing = data.pricing; }
    if (step === 4) { update.isProfileComplete = true; update.whatsAppNumber = data.whatsAppNumber;update.gallery=data.gallery }

    const user = await model.userModel.findByIdAndUpdate(userId, update, { new: true });

    res.status(200).json({ success: true, currentStep: user.currentStep });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user + password field include
    const user = await model.userModel.findOne({ email }).select('+password');

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    // Generate token
    const token = generateToken(user._id, user.role);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        role: user.role,
        token
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.me = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
const userData= await model.userModel.findById(user._id)
    return res.status(200).json({
      success: true,
      userData
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};




//
exports.getCityCategoryService = async (req, res) => {
  try {
    const { City, Category, Service } = model.cityCategoryServiceModel;
    const [cities, categories, services] = await Promise.all([
      City.find().sort({ name: 1 }),       // A-Z sort
      Category.find().sort({ name: 1 }),
      Service.find().sort({ name: 1 })
    ]);

   return res.status(200).json({
      success: true,
      data: {
        cities,
        categories,
        services
      }
    });
  } catch (error) {
   return res.status(500).json({ success: false, message: error.message });
  }
};

exports.checkCurrentStep = async (req, res) => {
    try {
        const userId = req.user.id; // Protect middleware se ID milegi
console.log(userId,"--")
        const user = await model.userModel.findById(userId).select('currentStep isProfileComplete name');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: {
                currentStep: user.currentStep,
                isProfileComplete: user.isProfileComplete,
                name: user.name
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};