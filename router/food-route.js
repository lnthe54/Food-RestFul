const express = require('express');
const { Model } = require('mongoose');
const FoodBanner = require('../models/FoodBanner');
const FoodPopular = require('../models/FoodPopular');
const router = express.Router()

// Import Food Banners
router.post('/post-food-banners', async (req, res) => {
    const data = new FoodBanner({
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

// Get all food banners
router.get('/getFoodBanners', async (req, res) => {
    try {
        const data = await FoodBanner.find();
        res.json(data)
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
})

// Import Food Popular
router.post('/post-food-populars', async (req, res) => {
    const data = new FoodPopular({
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

// Get all food popular
router.get('/getFoodPopulars', async (req, res) => {
    try {
        const data = await FoodPopular.find();
        res.json(data)
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;