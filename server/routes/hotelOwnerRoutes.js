const express = require('express');
const router = express.Router();
const{getHotelOwner,setHotelOwner}=require('../controllers/hotelOwnerController');


router.get('/hotelOwner',getHotelOwner);
router.post('/hotelOwner',setHotelOwner);

module.exports=router;