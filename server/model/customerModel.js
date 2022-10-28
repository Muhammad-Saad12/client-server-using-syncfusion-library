const mongoose = require('mongoose');

const customerSchema=mongoose.Schema({
    Name:String,
    Email:String,
    Birthday:String,
    PhoneNumber:String,
   
});

module.exports=mongoose.model('customer',customerSchema);