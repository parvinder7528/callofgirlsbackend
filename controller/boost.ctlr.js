const Razorpay = require('razorpay');
const models = require('../model/index.js');
const CryptoJS = require("crypto-js");
// Razorpay Instance (Apni keys env se uthao)
// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

/**
 * 1. Create Boost Order
 * User jab saare slots select karke 'Pay' click karega
 */
const capitalize = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1);
exports.createBoost = async (req, res) => {
    try {
        const { timeSlots, durationDays, intensity, pricing, profileId, startDate,extras } = req.body;
        const userId = req.user._id;
        const isActiveBoost = await models.boostModel.findOne({
            userId,
            expiresAt: { $gt: new Date() }
        });
        if (isActiveBoost) {
            return res.status(400).json({
                success: false,
                message: "You already have an active boost."
            });
        }
        const dummyOrderId = `order_dummy_${Math.random().toString(36).slice(2, 9)}`;

        const newBoost = new models.boostModel({
            userId,
            timeSlots,
            durationDays,
            extras,
            activatedAt: startDate,
            expiresAt: new Date(new Date(startDate).getTime() + durationDays * 24 * 60 * 60 * 1000),
            intensity: capitalize(intensity),
            pricing,
            razorpay_order_id: dummyOrderId,
            status: 'waiting_for_payment'
        });

        await newBoost.save();

        res.status(201).json({
            success: true,
            message: "Dummy order created",
            order: {
                id: dummyOrderId,
                amount: pricing.totalAmount * 100,
                currency: "INR"
            },
            boostId: newBoost._id
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// exports.createBoost = async (req, res) => {
//     try {
//         const { timeSlots, durationDays, intensity, pricing, profileId } = req.body;
//         const userId = req.user._id; // Auth middleware se

//         // 1. Razorpay Order Create karein
//         const options = {
//             amount: pricing.totalAmount * 100, // Paise mein (e.g. 500 INR = 50000)
//             currency: "INR",
//             receipt: `boost_rcpt_${Date.now()}`,
//         };

//         const order = await razorpay.orders.create(options);

//         // 2. Database mein Pending Boost save karein
//         const newBoost = new models.ProfileBoost({
//             userId,
//             profileId,
//             timeSlots, // Frontend se format: [{slotName: 'Morning', startTime: '06:00', endTime: '12:00'}]
//             durationDays,
//             intensity,
//             pricing,
//             razorpay_order_id: order.id,
//             status: 'waiting_for_payment'
//         });

//         await newBoost.save();

//         res.status(201).json({
//             success: true,
//             order, // Ye frontend pe Razorpay checkout kholne ke kaam aayega
//             boostId: newBoost._id
//         });

//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

/**
 * 2. Get Boost Details by ID
 * Dashboard ya Success page ke liye
 */
exports.getBoostById = async (req, res) => {
    try {
        const { id } = req.params;
        const boost = await ProfileBoost.findById(id).populate('userId', 'name email');

        if (!boost) {
            return res.status(404).json({ success: false, message: "Boost not found" });
        }

        res.status(200).json({
            success: true,
            data: boost
        });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


exports.verifyAndActivateBoost = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // --- 1. PAYMENT VERIFICATION ---
        const isTestMode = true; // 🛠️ Live pe isse false kar dena
        let isValid = false;

        if (isTestMode) {
            isValid = true; 
        } else {
            const secret = process.env.RAZORPAY_KEY_SECRET;
            const payload = razorpay_order_id + "|" + razorpay_payment_id;
            const generated_signature = CryptoJS.HmacSHA256(payload, secret).toString();
            
            isValid = generated_signature === razorpay_signature;
        }

        if (!isValid) {
            return res.status(400).json({ success: false, message: "Payment verification failed" });
        }

        // --- 2. STATUS UPDATE ---
        // Kyuki startDate/endDate pehle se store hain, bas status aur payment IDs update karni hain
        const updatedBoost = await models.boostModel.findOneAndUpdate(
            { razorpay_order_id },
            {
                status: 'active',
                isPaymentVerified: true,
                paymentStatus: 'captured',
                razorpay_payment_id,
                razorpay_signature: razorpay_signature || 'test_sig',
            },
            { new: true }
        );

        if (!updatedBoost) {
            return res.status(404).json({ success: false, message: "Boost record not found" });
        }

        res.status(200).json({ 
            success: true, 
            message: "Boost Activated!", 
            data: updatedBoost 
        });

    } catch (error) {
        console.error("Verification Error:", error);
        res.status(500).json({ success: false, message: "Server error during activation" });
    }
};