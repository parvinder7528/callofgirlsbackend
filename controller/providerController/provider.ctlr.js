const model = require("../../model/index.js");

exports.getAllProfiles = async (req, res) => {
    try {
        const { city, category, all } = req.query;

        let filter = { isProfileComplete: true };

        if (city) filter.city = city;
        if (category) filter.category = category;

        let limit = all === 'true' ? 0 : 4;

        const profiles = await model.userModel.find(filter)
            .populate('city', 'name')
            .populate('category', 'name')
            .populate('services', 'name')
            .populate('place', 'name')
            .limit(limit)
            .sort({ createdAt: -1 })
            .lean();
        res.status(200).json({
            success: true,
            results: profiles.length,
            data: profiles
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Profiles fetch karne mein dikkat aayi",
            error: error.message
        });
    }
};


exports.getProfileById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ success: false, message: "Profile ID zaroori hai" });
        }

        const profile = await model.userModel.findById(id)
            .populate('city', 'name')
            .populate('category', 'name')
            .populate('services', 'name')
            .select('-password') // Security: Password hide karein
            .lean();

        if (!profile) {
            return res.status(404).json({
                success: false,
                message: "Profile nahi mili"
            });
        }

        res.status(200).json({
            success: true,
            data: profile
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Profile fetch karne mein error",
            error: error.message
        });
    }
};



exports.getAllCategory = async (req, res) => {
    try {
        const { Category } = model.cityCategoryServiceModel;

        const categories = await Category.find()
            .sort({ name: 1 })
            .lean();

        return res.status(200).json({
            success: true,
            data: categories
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Categories fetch karne mein dikkat aayi",
            error: error.message
        });
    }
};


exports.getAllCityCategoryService = async (req, res) => {
    try {
        const { Category, City, Service, place } = model.cityCategoryServiceModel;
        const [categories, cities, services, placeData] = await Promise.all([
            Category.find().sort({ name: 1 }).lean(),
            City.find().sort({ name: 1 }).lean(),
            Service.find().sort({ name: 1 }).lean(),
            place.find().sort({ name: 1 }).lean()
        ]);
        console.log(categories, cities, services, placeData, "==")

        return res.status(200).json({
            success: true,
            data: {
                categories,
                cities,
                services,
                placeData
            }
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Data fetch karne mein dikkat aayi",
            error: error.message
        });
    }
};