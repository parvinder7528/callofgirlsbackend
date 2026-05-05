const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },

  // 📍 Step Tracking
  currentStep: { 
    type: Number, 
    default: 1, 
    enum: [1, 2, 3, 4,5] 
  },
  isProfileComplete: { 
    type: Boolean, 
    default: false 
  },

  // Step 1: Basic Info
  age: { type: Number },
  phoneNumber: { type: String },

  // Step 2: Location & Category
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },

  ethnicity: { type: String },
  nationality: { type: String },

  // Physical Attributes
  breast: [{ type: String }],
  hair: [{ type: String }],
  body: [{ type: String }],

  // Step 3: Bio & Services
  bio: { type: String, maxLength: 500 },

 services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
place: [{ type: mongoose.Schema.Types.ObjectId, ref: "Place" }],

  attention: [{ type: String }],

  pricing: {
    oneHour: { type: Number, default: 0 },
    threeHours: { type: Number, default: 0 },
    fullNight: { type: Number, default: 0 }
  },

  // Step 4: Media & Contact
  gallery: [{ type: String }], // match "photos"
  
  whatsAppNumber: { type: String },
  phone: { type: String },

  contactMethod: { 
    type: String, 
    enum: ['phone', 'whatsapp', 'telegram', 'both'] 
  },

  whatsapp: { type: Boolean, default: false },
  telegram: { type: Boolean, default: false },

  // Availability
  timeSlot: { type: String }, // e.g. "morning"
  days: { type: Number },

  // Extras
  coins: { type: Number, default: 0 },
  coupon: { type: String },

  agree: { type: Boolean },

  isVerifiedAge: { type: Boolean, default: false }

}, { timestamps: true });

userSchema.index({ location: '2dsphere' });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};
module.exports = mongoose.model('User', userSchema);