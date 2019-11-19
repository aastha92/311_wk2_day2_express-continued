const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

//static
app.use(express.static('public'));

//body-parser
app.use(bodyParser.json()); 

//routers
const contactsroute = require('./routes/contacts');
app.use(contactsroute);
const commentsroute = require('./routes/comments');
app.use(commentsroute);
const vehiclesroute = require('./routes/vehicles');
app.use(vehiclesroute);
const productsroute = require('./routes/products');
app.use(productsroute);

//server
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
