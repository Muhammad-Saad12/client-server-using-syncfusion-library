const asyncHandler=require('express-async-handler');
const hotelOrder=require('../model/hotelOrderModel');

const getHotelOrder=asyncHandler( async(req,res)=>{
    const hotelOrders=await hotelOrder.find();
    res.status(200).json(hotelOrders);
})

const setHotelOrder=asyncHandler( async(req,res)=>{
    const hotelOrders=await hotelOrder.create({
        name:req.body.name,
        hotelRoom:req.body.hotelRoom,
        date:req.body.date,
        clientName:req.body.clientName,
        
    })
    res.status(200).json(hotelOrders);
})

module.exports={
    getHotelOrder,
    setHotelOrder
}