const express = require('express');
const router = express.Router();
const{getOrders,setOrders}=require('../controllers/orderController');

router.get('/orders',getOrders);

router.post('/orders',setOrders);

module.exports=router;