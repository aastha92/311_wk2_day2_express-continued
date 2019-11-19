const express = require('express');
const router = express.Router();
vehiclesController = require('../controllers/vehicles');


//getting all things
router.get('/vehicles', vehiclesController.list)

//getting single thing
router.get('/vehicles/:id', vehiclesController.show)

//creating a thing
router.post('/vehicles', vehiclesController.create)

module.exports = router;