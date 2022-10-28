const mongoose = require('mongoose');

const hotelOwnerSchema=mongoose.Schema({
    ownerName:String,
    hotelName:String,
    contant:String,
    rooms:String,
    email:String,
});

module.exports=mongoose.model('hotelOwner',hotelOwnerSchema);