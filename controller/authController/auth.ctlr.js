
const model = require("../../model/index.js")
const { generateToken } = require("../../helpers/tokenGenAndVerification.js")
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
    const userId = req.user.id;

    let update = {};

    // ✅ Step progression (max = 5)
    if (step) {
      update.currentStep = Math.min(step + 1, 5);
    }

    // 🟢 Step 1: Basic Info
    if (step === 1) {
      if (data.name) update.name = data.name;
      if (data.age) update.age = Number(data.age);
      if (data.phone) update.phone = data.phone;
    }

    // 🟢 Step 2: Location & Category
    if (step === 2) {
      if (data.city) update.city = data.city;
      if (data.category) update.category = data.category;

      if (data.ethnicity) update.ethnicity = data.ethnicity;
      if (data.nationality) update.nationality = data.nationality;

      if (data.breast) update.breast = data.breast;
      if (data.hair) update.hair = data.hair;
      if (data.body) update.body = data.body;
    }

    // 🟢 Step 3: Bio & Services
    if (step === 3) {
      if (data.bio) update.bio = data.bio;
      if (data.services) update.services = data.services;
      if (data.attention) update.attention = data.attention;
      if (data.place) update.place = data.place;

      if (data.pricing) {
        update.pricing = {
          oneHour: data.pricing.oneHour || 0,
          threeHours: data.pricing.threeHours || 0,
          fullNight: data.pricing.fullNight || 0
        };
      }
    }

    // 🟢 Step 4: Photos & Verification
    if (step === 4) {
      if (data.photos) update.gallery = data.photos;

      if (data.isVerifiedAge !== undefined) {
        update.isVerifiedAge = data.isVerifiedAge;
      }
    }

    // 🟢 Step 5: Contact Info (FINAL STEP ✅)
    if (step === 5) {
      if (data.whatsAppNumber) update.whatsAppNumber = data.whatsAppNumber;
      if (data.phone) update.phone = data.phone;

      if (data.contactMethod) update.contactMethod = data.contactMethod;

      update.whatsapp = data.whatsapp ?? false;
      update.telegram = data.telegram ?? false;

      if (data.timeSlot) update.timeSlot = data.timeSlot;
      if (data.days) update.days = data.days;

      if (data.coins) update.coins = data.coins;
      if (data.coupon) update.coupon = data.coupon;

      update.agree = data.agree ?? false;

      // ✅ ONLY HERE profile becomes complete
      update.isProfileComplete = true;
      update.currentStep = 5;
    }

    // ❗ Clean undefined fields
    Object.keys(update).forEach(
      key => update[key] === undefined && delete update[key]
    );

    const user = await model.userModel.findByIdAndUpdate(
      userId,
      { $set: update },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      currentStep: user.currentStep,
      isProfileComplete: user.isProfileComplete
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
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

exports.getCityCategoryService = async (req, res) => {
  try {
    const { Category, City, Service,place } = model.cityCategoryServiceModel;
         const [categories, cities, services,placeData] = await Promise.all([
             Category.find().sort({ name: 1 }).lean(),
             City.find().sort({ name: 1 }).lean(),
             Service.find().sort({ name: 1 }).lean(),
            place.find().sort({ name: 1 }).lean()
         ]);

   return res.status(200).json({
      success: true,
      data: {
        cities,
        categories,
        services,
        placeData
      }
    });
  } catch (error) {
   return res.status(500).json({ success: false, message: error.message });
  }
};

exports.checkCurrentStep = async (req, res) => {
    try {
        const userId = req.user.id; 
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