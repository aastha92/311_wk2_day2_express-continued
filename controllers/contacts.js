const contacts = require('../data/contacts');
let counter = (contacts.length);
//let counter = (contacts.length + 1 );

const list = (req,res)=>{
    res.json(contacts);
}

const show = (req,res)=>{
    const contactobj = contacts.find(singlecontact => singlecontact._id == req.params.id);
    res.json(contactobj);
    /* const contacts_id = contacts._id == req.params.id
    res.json(contacts_id) */
}
const create = (req,res)=>{
    counter++;
    const newContact = {
        "_id": counter,
        "name": req.body.name,
        "occupation": req.body.occupation,
        "avatar": req.body.avatar
      }
    //counter = counter + 1;
      contacts.push(newContact);
      res.json(contacts);
}

module.exports = { list, show, create }