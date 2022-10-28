const mongoose = require('mongoose');

const hotelOrderSchema=mongoose.Schema({
    name:String,
    hotelRoom:String,
    date:String,
    clientName:String,
   
});

module.exports=mongoose.model('hotelOrder',hotelOrderSchema);