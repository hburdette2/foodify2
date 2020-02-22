const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    title: String,
    cuisine: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);