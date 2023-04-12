var express = require('express');
var router = express.Router();
const Trip = require('../models/trips')

router.get('/', (req,res) => {
    Trip.find().then(data => res.json({Trips : data}))
  })

router.get('/:departure/:arrival', (req,res) => {
    Trip.find({departure:{$regex: new RegExp(req.params.departure, 'i')},arrival:{$regex: new RegExp(req.params.arrival, 'i')}}).then(data=>{
        if(data.length>0){
            res.json({Trips : data})
        }
        else {
            res.json({ error : "No trip found"})
        }
    })
       
  })
  module.exports = router;