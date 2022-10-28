const asyncHandler=require('express-async-handler');
const HotelOwner=require('../model/hotelOwnerModel');

const getHotelOwner=asyncHandler( async(req,res)=>{
    const hotelowner=await HotelOwner.find();
    res.status(200).json(hotelowner);
})

const setHotelOwner=asyncHandler( async(req,res)=>{
    const hotelowner=await HotelOwner.create({
        ownerName:req.body.ownerName,
        hotelName:req.body.hotelName,
        contant:req.body.contant,
        rooms:req.body.rooms,
        email:req.body.email,
    })
    res.status(200).json(hotelowner);
})

module.exports={
    getHotelOwner,
    setHotelOwner
}