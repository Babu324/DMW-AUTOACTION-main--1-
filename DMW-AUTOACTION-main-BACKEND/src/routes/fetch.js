const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Ensure this path is correct

// POST route to save purchase order
router.post('/', async (req, res) => {
    const { personalDetails, vehicle, selectedParts } = req.body;

    try {
        const newOrder = new Order({
            personalDetails,
            vehicle,
            selectedParts
        });

        await newOrder.save();
        return res.status(201).json({ message: 'Order saved successfully', order: newOrder });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to save order', error: error.message });
    }
});

// GET route to fetch all orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
    }
});

module.exports = router;
