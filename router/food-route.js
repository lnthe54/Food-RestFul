const express = require('express');
const { Model } = require('mongoose');
const FoodModel = require('../models/FoodModel');
const router = express.Router()


//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

// Import Food Banners
router.post('/post-food-banners', async (req, res) => {
    const data = new FoodModel({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        headline: req.body.headline,
        stars: req.body.stars,
        price: req.body.price,
        description: req.body.description
    })

    try {
        const dataSave = await data.save();
        res.status(200).json(dataSave)
    }
    catch(error) {
        res.status(400).json({
            message: error.message
        })
    }
})

//Get all Method
router.get('/getFoodBanners', async (req, res) => {
    try {
        const data = await FoodModel.find();
        res.json(data)
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;