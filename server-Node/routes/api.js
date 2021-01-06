const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const  errorHandler =require('./../middlewares/errorhandler')
const Food = require('./../models/food');
var mongoose = require('mongoose');
const food = require('./../models/food');
var dbl = require('./../config/connection')

router.get('/:_id', (req, res) => {
       User.findById({_id: req.params._id}).then(function (userDetail) {
            res.send(userDetail)
    }).catch(err => {
       errorHandler(err, '', res, '')
   })
    
})
router.delete('/:_id', (req, res) => {
    User.findByIdAndRemove({ _id: req.params._id }).then(function (User) {
        User =  [];
        res.json({message : "user deleted successfully "})
    }).catch(function (err) {
        console.log(err);
        errorHandler(err, '', res, '')
    })
 
})

router.get('/', (req, res) => {
 User.find({}).then(function (dbuser) {
      res.send(dbuser);
       }).catch(function (err) {
        res.json({ error: err })
  })

});


router.post('/createUser',(req,res)=>{
    console.log(req.body.name)
      var newUser = new User({
        name: req.body.name,
        weight: req.body.weight,
        height:req.body.height,
        sex: req.body.sex,
        age: req.body.age,
      
    })
      newUser.save(function (err) {
      if (err)
             {
          res.json(err)
          }
         
        else{console.log('User added to the Database Successfully!');
        res.json({message : "User Added to the Database Successfully"});}
       
    })
})


module.exports = router;