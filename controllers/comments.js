//importing data
const comments = require('../data/comments');
let counter = (comments.length);

const list = function (req,res){
    res.json(comments);
} 

const show = (req,res)=> {
    const commentobj = comments.find(singlecomment => singlecomment._id == req.params.id);
    res.json(commentobj);
}

const create = (req,res)=>{
    counter++;
    const newComment = {
        "_id": counter,
        "body": req.body.body
      }
    //counter = counter + 1;
      comments.push(newComment);
      res.json(comments);
}

module.exports = { list, show, create }