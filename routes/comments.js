const express = require('express');
const router = express.Router();
commentController = require('../controllers/comments');


//getting all things
router.get('/comments', commentController.list)

//getting single thing
router.get('/comments/:id', commentController.show)

//creating a thing
router.post('/comments', commentController.create)

module.exports = router;