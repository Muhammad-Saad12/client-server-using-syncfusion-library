const asyncHandler=require('express-async-handler');
const Customer=require('../model/customerModel');

const getCustomers=asyncHandler( async(req,res)=>{
    const customers=await Customer.find();
    res.status(200).json(customers);
})

const setCustomers=asyncHandler( async(req,res)=>{
    const customers=await Customer.create({
        Name:req.body.Name,
        Email:req.body.Email,
        Birthday:req.body.Birthday,
        PhoneNumber:req.body.PhoneNumber,
        
    })
    res.status(200).json(customers);
})

module.exports={
    getCustomers,
    setCustomers
}