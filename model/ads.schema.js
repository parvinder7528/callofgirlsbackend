const mongoose = require('mongoose');

const adsSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  title: String,
  description: String,

  category: {
    type: String,
    enum: ['top', 'medium', 'normal'],
    default: 'normal'
  },

  durationType: {
    type: String,
    enum: ['week', 'month', 'year', 'custom'],
    required: true
  },

  // 🆕 custom days
  customDays: {
    type: Number,
    min: 1
  },

  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },

  endDate: {
    type: Date
  },

  totalDays: {
    type: Number
  },

  budget: {
    type: Number,
    required: true,
    min: 0
  },
  spentBudget: {
    type: Number,
    default: 0
  },

  remainingBudget: {
    type: Number
  },

  status: {
    type: String,
    enum: ['pending', 'running', 'paused', 'expired'],
    default: 'pending'
  },

  isActive: {
    type: Boolean,
    default: true
  }

}, {
  timestamps: true
});

adsSchema.pre('save', function () {

  const now = new Date();
  let days = 0;

  // 📌 fixed durations
  if (this.durationType === 'week') {
    days = 7;
  }

  if (this.durationType === 'month') {
    days = 30;
  }

  if (this.durationType === 'year') {
    days = 365;
  }

  // 📌 custom duration
  if (this.durationType === 'custom') {
    days = this.customDays || 1;
  }

  // 📌 set totalDays
  this.totalDays = days;

  // 📌 set endDate automatically
  this.endDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);
});

module.exports = new mongoose.model("ads", adsSchema)