const asyncHandler=require('express-async-handler');
const FLightOrder=require('../model/flightOrderModel');

const getFlightOrder=asyncHandler( async(req,res)=>{
    const flightorders=await FLightOrder.find();
    res.status(200).json(flightorders);
})

const setFlightOrder=asyncHandler( async(req,res)=>{
    const flightorders=await FLightOrder.create({
        flightCompanyName:req.body.flightCompanyName,
        departureCity:req.body.departureCity,
        arrivalCity:req.body.arrivalCity,
        departureHours:req.body.departureHours,
        arrivalHours:req.body.arrivalHours,
        ticketPrize:req.body.ticketPrize,
    })
    res.status(200).json(flightorders);
})

module.exports={
    getFlightOrder,
    setFlightOrder
}