const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const charitySchema = new Schema({
    name: String,
    has_freezer: Boolean,
    geolocation: {
        long: Number,
        lat: Number
    },
    accepts_damaged_goods: Boolean,
    accepts_non_food_items: Boolean
})


const Charity = mongoose.model('Charity', charitySchema)

module.exports = Charity;