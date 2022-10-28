const express = require('express');
const router = express.Router();
const{getCustomers,setCustomers}=require('../controllers/customerController');


router.get('/customers',getCustomers);
router.post('/customers',setCustomers);

module.exports=router;