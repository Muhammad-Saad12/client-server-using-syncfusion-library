const asyncHandler=require('express-async-handler');
const Order=require('../model/orderModel');

const getOrders=asyncHandler( async(req,res)=>{
    const orders=await Order.find();
    res.status(200).json(orders);
})

const setOrders=asyncHandler( async(req,res)=>{
    const order=await Order.create({
        OrderItem:req.body.OrderItem,
        CustomerName:req.body.CustomerName,
        TotalAmount:req.body.TotalAmount,
        OrderID:req.body.OrderID,
        Location:req.body.Location,
    })
    res.status(200).json(order);
})

module.exports={
    getOrders,
    setOrders
}