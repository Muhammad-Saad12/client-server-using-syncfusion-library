const express = require('express');
const router = express.Router();
const{getHotelOrder,setHotelOrder}=require('../controllers/hotelOrderController');


router.get('/hotelOrder',getHotelOrder);
router.post('/hotelOrder',setHotelOrder);

module.exports=router;