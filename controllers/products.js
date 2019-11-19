const products = require('../data/products');
let counter = (products.length);

const list = function (req,res){
    res.json(products);
} 

const show = (req,res)=>{
    const productobj = products.find(singleproduct => singleproduct._id == req.params.id);
    res.json(productobj);
}

const create = (req,res)=>{
    counter++;
    const newProduct = {
        "_id": counter,
        "name": req.body.name,
        "description": req.body.description
      }
      products.push(newProduct);
      res.json(products);
}

module.exports = { list, show, create }