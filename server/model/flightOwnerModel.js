const mongoose = require('mongoose');

const flightOwnerSchema=mongoose.Schema({
    flightCompanyName:String,
    companyId:String,
    email:String,
    contactNumber:String,
   
   
});

module.exports=mongoose.model('flightOwner',flightOwnerSchema);