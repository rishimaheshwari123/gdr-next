const { instance } = require("../config/razorpay")
const axios = require("axios")
const crypto = require("crypto")
const Plot = require('../models/plotModel');




const capturePayment = async (req, res) => {
  const { ammount } = req.body;


  try {




    // Prepare payment options
    const options = {
      amount: ammount * 100, // Amount in paise (multiplied by 100)
      currency: "INR",
      receipt: Math.random(Date.now()).toString(),
    };

    // Initiate payment using your preferred gateway (e.g., Razorpay)
    const paymentResponse = await instance.orders.create(options);
    // console.log("Payment Response:", paymentResponse);

    // Send success response with payment data
    res.json({
      success: true,
      data: paymentResponse,
    });

  } catch (error) {
    console.error("Capture Payment Error:", error);
    res.status(500).json({ success: false, message: "Could not initiate order." });
  }
};


const paymentVerification = async (req, res) => {
  console.log("enter verify")
  const razorpay_order_id = req.body?.razorpay_order_id
  const razorpay_payment_id = req.body?.razorpay_payment_id
  const razorpay_signature = req.body?.razorpay_signature
  const {
    plotId,
    name,
    email,
    phone,
    orderId,
    state,
    city,



  } = req.body;

  let body = razorpay_order_id + "|" + razorpay_payment_id

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body.toString())
    .digest("hex")

  if (expectedSignature === razorpay_signature) {
    try {

      await plotBook(plotId, name, email, phone, orderId, state, city, razorpay_order_id, razorpay_payment_id);

      // Send the response after the order is successfully created
      return res.status(200).json({ success: true, message: "Payment Verified" });
    } catch (error) {
      // Handle any errors that occur during order creation
      console.error("Error creating order:", error);
      return res.status(500).json({ success: false, message: "Error creating order" });
    }
  }


  return res.status(200).json({ success: false, message: "Payment Failed" })
};



const plotBook = async (plotId, name, email, phone, orderId, state, city, razorpay_order_id, razorpay_payment_id) => {
  try {
    const plot = await Plot.findById(plotId);
    if (!plot) {
      throw new Error('Plot not found');
    }

    if (plot.isBooked) {
      throw new Error('Plot is already booked');
    }

    plot.isBooked = true;
    plot.bookedInfo = { plotId, name, email, phone, razorpay_order_id, razorpay_payment_id, date: Date.now(),state:state,city:city,orderId };
    await plot.save();

    // Optionally return success data if needed
    return { success: true, message: 'Plot booked successfully', plot };

  } catch (error) {
    // Re-throw the error to be handled by the caller
    throw error;
  }
};
module.exports = {
  capturePayment,
  paymentVerification,

};
