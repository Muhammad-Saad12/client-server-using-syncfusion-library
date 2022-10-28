const asyncHandler=require('express-async-handler');
const FLightOwner=require('../model/flightOwnerModel');

const getFlightOwners=asyncHandler( async(req,res)=>{
    const flightowner=await FLightOwner.find();
    res.status(200).json(flightowner);
})

const setFlightOwners=asyncHandler( async(req,res)=>{
    const flightowner=await FLightOwner.create({
        flightCompanyName:req.body.flightCompanyName,
        companyId:req.body.companyId,
        email:req.body.email,
        contactNumber:req.body.contactNumber,
        
    })
    res.status(200).json(flightowner);
})

module.exports={
    getFlightOwners,
    setFlightOwners
}