const model = require("../model/index.js")


// 🔥 CREATE BOOST

exports.createAds = async (req, res) => {
    try {
        const {
            title,
            description,
            category,
            durationType,
            customDays,
            startDate,
            budget
        } = req.body;

        const userId = req.user._id;

        // 📌 Validation
        if (!title || !durationType || !startDate || !budget) {
            return res.status(400).json({
                success: false,
                message: 'Required fields missing'
            });
        }

        // 📌 customDays validation
        if (durationType === 'custom' && !customDays) {
            return res.status(400).json({
                success: false,
                message: 'customDays is required for custom duration'
            });
        }

        // 💰 Create Ads (endDate + totalDays auto schema me handle hoga)
        const ads = await model.adsModel.create({
            user: userId,
            title,
            description,
            category: category || 'normal',
            durationType,
            customDays,
            startDate,
            budget,
            remainingBudget: budget,
            status: 'pending'
        });

        return res.status(201).json({
            success: true,
            message: 'Ad created successfully',
            data: ads
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.myads = async (req, res) => {
    try {
        const boosts = await model.adsModel.find({ user: req.user._id })
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: boosts.length,
            data: boosts
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
exports.activeAds = async (req, res) => {
    try {
        const now = new Date();

        const boosts = await model.adsModel.find({
            isActive: true,
            startDate: { $lte: now },
            endDate: { $gte: now }
        }).populate('user', 'name image role');

        return res.status(200).json({
            success: true,
            count: boosts.length,
            data: boosts
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.getProfileList = async (req, res) => {
  try {

    const now = new Date();

    const users = await model.userModel.find({ isActive: true });

    const result = await Promise.all(users.map(async (user) => {

      const ads = await model.adsModel.find({
        user: user._id,
        status: 'running',
        startDate: { $lte: now },
        endDate: { $gte: now }
      });

      let totalScore = 0;
      let remainingDays = 0;
      let remainingBudget = 0;

      // 🆕 SINGLE AD ID ONLY
      let runningAdId = null;

      ads.forEach(ad => {

        const diff = new Date(ad.endDate) - now;
        const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

        remainingDays += daysLeft;
        remainingBudget += ad.remainingBudget || 0;

        totalScore += (ad.remainingBudget || 0) + (daysLeft * 10);

        // 👇 take ONLY first running ad
        if (!runningAdId) {
          runningAdId = ad._id;
        }
      });

      return {
        _id: user._id,
        name: user.name,
        image: user.image,
        role: user.role,

        adsCount: ads.length,

        // 🔥 SINGLE VALUE (NOT ARRAY)
        runningAdId,

        remainingDays,
        remainingBudget,
        score: totalScore
      };
    }));

    result.sort((a, b) => b.score - a.score);

    return res.status(200).json({
      success: true,
      count: result.length,
      data: result
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.pauseAd = async (req, res) => {
  try {
    const adId = req.params.id;
    const userId = req.user._id;

    // 📌 find ad
    const ad = await model.adsModel.findOne({
      _id: adId,
      user: userId
    });

    if (!ad) {
      return res.status(404).json({
        success: false,
        message: 'Ad not found'
      });
    }

    // ❌ already paused or expired
    if (ad.status === 'paused') {
      return res.status(400).json({
        success: false,
        message: 'Ad already paused'
      });
    }

    if (ad.status === 'expired') {
      return res.status(400).json({
        success: false,
        message: 'Ad already expired'
      });
    }

    // ⏸️ pause ad
    ad.status = 'paused';
    await ad.save();

    return res.status(200).json({
      success: true,
      message: 'Ad paused successfully',
      data: ad
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.resumeAd = async (req, res) => {
  try {
    const adId = req.params.id;
    const userId = req.user._id;

    const ad = await model.adsModel.findOne({
      _id: adId,
      user: userId
    });

    if (!ad) {
      return res.status(404).json({
        success: false,
        message: 'Ad not found'
      });
    }

    if (ad.status === 'running') {
      return res.status(400).json({
        success: false,
        message: 'Ad already running'
      });
    }

    if (ad.status === 'expired') {
      return res.status(400).json({
        success: false,
        message: 'Cannot resume expired ad'
      });
    }

    // ▶️ resume ad
    ad.status = 'running';
    await ad.save();

    return res.status(200).json({
      success: true,
      message: 'Ad resumed successfully',
      data: ad
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};