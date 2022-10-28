const express = require('express');
const router = express.Router();
const{getFlightOrder,setFlightOrder}=require('../controllers/flightOrderController');


router.get('/flightOrder',getFlightOrder);
router.post('/flightOrder',setFlightOrder);

module.exports=router;