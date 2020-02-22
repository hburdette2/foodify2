const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: Number,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);