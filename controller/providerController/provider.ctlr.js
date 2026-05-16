const model = require("../../model/index.js");

exports.getTrendingProfiles = async (req, res) => {
    try {
        // Sirf wahi profiles jinka intensity High ya Medium hai
        const trendingFilter = {
            isProfileComplete: true,
            isBoosted: true,
            boostIntensity: { $in: ['high', 'medium'] } 
        };

        const profiles = await model.userModel.aggregate([
            { $match: trendingFilter },
            
            {
                $addFields: {
                    trendingWeight: {
                        $cond: {
                            if: { $eq: [{ $toLower: "$boostIntensity" }, "high"] },
                            then: 2, // High priority
                            else: 1  // Medium priority
                        }
                    }
                }
            },

            {
                $sort: {
                    trendingWeight: -1,
                    // createdAt: -1
                }
            },


            {
                $lookup: {
                    from: "cities",
                    localField: "city",
                    foreignField: "_id",
                    as: "city"
                }
            },
            { $unwind: { path: "$city", preserveNullAndEmptyArrays: true } },
            
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                }
            },
            { $unwind: { path: "$category", preserveNullAndEmptyArrays: true } }
        ]);

        res.status(200).json({
            success: true,
            results: profiles.length,
            message: "Trending profiles fetched successfully",
            data: profiles
        });

    } catch (error) {
        console.error("Trending API Error:", error);
        res.status(500).json({
            success: false,
            message: "Trending profiles load nahi ho payi",
            error: error.message
        });
    }
};
exports.getAllProfiles = async (req, res) => {
    try {
        const { city, category } = req.query;

        let filter = {
            isProfileComplete: true,
        };

        if (city) filter.city = city;
        if (category) filter.category = category;

        const profiles = await model.userModel.find(filter)
            .populate('city', 'name')
            .populate('category', 'name')
            .populate('services', 'name')
            .populate('place', 'name')
            .select('-password')
            .lean();

        const priority = {
            high: 1,
            medium: 2,
            low: 3,
        };

        const sortedProfiles = profiles.sort((a, b) => {

            // 1. Boosted profiles top
            if (a.isBoosted && !b.isBoosted) return -1;
            if (!a.isBoosted && b.isBoosted) return 1;

            // 2. Both boosted => sort by intensity
            if (a.isBoosted && b.isBoosted) {

                const aPriority =
                    priority[(a.boostIntensity || "").toLowerCase()] || 999;

                const bPriority =
                    priority[(b.boostIntensity || "").toLowerCase()] || 999;

                return aPriority - bPriority;
            }

            // 3. Normal profiles latest first
            return new Date(b.createdAt) - new Date(a.createdAt);
        });

        res.status(200).json({
            success: true,
            results: sortedProfiles.length,
            data: sortedProfiles,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
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