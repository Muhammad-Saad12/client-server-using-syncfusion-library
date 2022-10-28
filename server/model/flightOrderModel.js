const mongoose = require('mongoose');

const flightOrderSchema=mongoose.Schema({
    flightCompanyName:String,
    departureCity:String,
    arrivalCity:String,
    departureHours:String,
    arrivalHours:String,
    ticketPrize:String,
   
});

module.exports=mongoose.model('flightOrder',flightOrderSchema);