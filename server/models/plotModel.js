const mongoose = require('mongoose');

const plotSchema = new mongoose.Schema({
  size: { type: String, required: true },

  farmhouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmhouse',
    required: true,
  },

  
  isBooked: { type: Boolean, default: false },

  
 bookedInfo: {
    name: String,
    email: String,
    phone: String,
    orderId: String,
    city: String,
    state: String,
    razorpay_order_id: String,
    razorpay_payment_id: String,
    date: { type: Date, default: Date.now }
  }
});

module.exports = mongoose.model('Plot', plotSchema);
