const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number,
    },
    name: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    headline: {
        required: true,
        type: String
    },
    stars: {
        required: true,
        type: Number
    },
    price: {
        required: true,
        type: Number
    },
    description: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('FoodPopulars', dataSchema)