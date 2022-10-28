const express = require('express');
const router = express.Router();
const{getFlightOwners,setFlightOwners}=require('../controllers/flightOwnerController');


router.get('/flightOwner',getFlightOwners);
router.post('/flightOwner',setFlightOwners);

module.exports=router;