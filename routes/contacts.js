const express = require('express');
const router = express.Router();
contactsController = require('../controllers/contacts');


//getting all things
router.get('/contacts', contactsController.list)

//getting single thing
router.get('/contacts/:id', contactsController.show)

//creating a thing
router.post('/contacts', contactsController.create)

module.exports = router;