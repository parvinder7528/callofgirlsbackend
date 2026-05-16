const mongoose = require('mongoose');
const ProfileBoostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    extras: [
        {
            label: String,
            price: Number,
            boostCount: Number
        }
    ],
    timeSlots: [{
        slotName: {
            type: String,
            enum: ['Morning', 'Afternoon', 'Evening', 'Night'],
            required: true
        },
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String,
            required: true
        }
    }],

    // durationDays: {
    //     type: Number,
    //     required: true,
    //     min: 1
    // },
    totalBoostCount: {
        type: Number,
        required: true,
        min: 1
    },
    runBoostCount: {
        type: Number,
        default: 0
    },
    lastProcessedSlot: {
        type: String,
        enum: ['Morning', 'Afternoon', 'Evening', 'Night', null],
        default: null
    },

    intensity: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low',
        required: true
    },

    // 4. Order Summary & Pricing (As seen in image_a208bf.png)
    pricing: {
        subtotal: { type: Number, required: true },
        discount: { type: Number, default: 0 },
        totalAmount: { type: Number, required: true },
        couponApplied: { type: String, default: null }
    },

    // --- PAYMENT VERIFICATION FIELDS ---
    isPaymentVerified: {
        type: Boolean,
        default: false
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'captured', 'failed', 'refunded'],
        default: 'pending'
    },
    razorpay_order_id: { type: String },
    razorpay_payment_id: { type: String }, // Payment success ke baad fill hoga
    razorpay_signature: { type: String },  // Verification ke liye zaroori hai

    // --- BOOST TIMING ---
    status: {
        type: String,
        enum: ['waiting_for_payment', 'active', 'expired'],
        default: 'waiting_for_payment'
    },
    isRunning: {
        type: Boolean,
        default: false
    },

    activatedAt: { type: Date }, // Actual boost start time
    expiresAt: { type: Date,default:null },   // activatedAt + durationDays

    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

// Indexing for performance
ProfileBoostSchema.index({ status: 1, userId: 1 });

module.exports = mongoose.model('ProfileBoost', ProfileBoostSchema);