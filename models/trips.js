const { default: mongoose } = require("mongoose");

const citySchema = mongoose.Schema({
    departure : String,
    arrival : String,
    date : Date,
    price : Number,
})

const Trip = mongoose.model('trips', citySchema);
module.exports = Trip ;