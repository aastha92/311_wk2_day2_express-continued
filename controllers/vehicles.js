const vehicles  = require('../data/vehicles');
let counter = (vehicles.length);

const list = (req,res)=>{
    res.json(vehicles);
}

const show = (req,res)=>{
    const vehicleobj = vehicles.find(singlevehicle => singlevehicle._id == req.params.id);
    res.json(vehicleobj);
}

const create = (req,res)=>{
    counter++;
    const newVehicle = {
        "_id": counter,
        "year": req.body.year,
        "make": req.body.make,
        "model": req.body.model
      }
      vehicles.push(newVehicle);
      res.json(vehicles);
}

module.exports = { list, show, create }