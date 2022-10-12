const express = require('express');
const mongoose = require('mongoose');
const routes = require('./route/food-route');

mongoose.connect('mongodb+srv://TheLN:The541998a@food.qblwamq.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('Error', (err) => {
    console.log(err)
})

db.once('Open', () => {
    console.log('Database Connection')
})

const app = express();

app.use(express.json());
app.use('/api', routes)

module.exports = app;