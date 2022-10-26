const mongoose = require('mongoose');

const orderSchema=mongoose.Schema({
    OrderItem:String,
    CustomerName:String,
    TotalAmount:String,
    OrderID:String,
    Location:String,
});

module.exports=mongoose.model('order',orderSchema);