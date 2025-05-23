const express = require('express');
const router = express.Router();
const Farmhouse = require('../models/formhouseModel');
const Plot = require('../models/plotModel');
const { capturePayment, paymentVerification } = require('../controllers/payment');

/* ------------------- FARMHOUSE ------------------- */

// 👉 Create a new farmhouse
router.post('/farmhouse', async (req, res) => {
  try {
    const { name, location } = req.body;
    const farmhouse = await Farmhouse.create({ name, location });

    res.status(201).json({
      success: true,
      message: 'Farmhouse created successfully',
      data: farmhouse,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
});

/* --------------------- PLOTS --------------------- */

// 👉 Create a new plot
router.post('/plot', async (req, res) => {
  try {
    const { size, farmhouseId } = req.body;
    const plot = await Plot.create({ size, farmhouse: farmhouseId });

    res.status(201).json({
      success: true,
      message: 'Plot created successfully',
      data: plot,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
});

// 👉 Get all plots of a farmhouse
router.get('/farmhouse/:id/plots', async (req, res) => {
  try {
    const plots = await Plot.find({ farmhouse: req.params.id });

    res.status(200).json({
      success: true,
      message: 'Plots fetched successfully',
      data: plots,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
});

/* ------------------- BOOK A PLOT ------------------- */

// 👉 Book a plot with user details (name, email, phone)
router.post('/plot/book', async (req, res) => {
  try {
    const { plotId, name, email, phone } = req.body;

    const plot = await Plot.findById(plotId);
    if (!plot) {
      return res.status(404).json({
        success: false,
        message: 'Plot not found',
      });
    }

    if (plot.isBooked) {
      return res.status(400).json({
        success: false,
        message: 'Plot is already booked',
      });
    }

    plot.isBooked = true;
    plot.bookedInfo = { name, email, phone };
    await plot.save();

    res.status(200).json({
      success: true,
      message: 'Plot booked successfully',
      data: plot,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error });
  }
});


// GET all farmhouses with their plots
router.get('/farmhouses-with-plots', async (req, res) => {
  try {
    const farmhouses = await Farmhouse.find();

    const results = await Promise.all(
      farmhouses.map(async (farm) => {
        const plots = await Plot.find({ farmhouse: farm._id });
        return {
          ...farm.toObject(),
          plots,
        };
      })
    );

    res.status(200).json({
      success: true,
      message: 'All farmhouses with plots fetched successfully',
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
});


router.post("/capturePayment", capturePayment)
router.post("/verifyPayment",  paymentVerification)
module.exports = router;
