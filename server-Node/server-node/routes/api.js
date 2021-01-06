const express = require('express');
const router = express.Router();
const User = require('./../models/user');
const  errorHandler =require('./../middlewares/errorhandler')
const http = require('https');

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
           res.json(err);
  })

});


router.post('/CreateUser', function(req,res,next){
    console.log(req.body)
      var newUser = new User({
        Name: req.body.Name,
        Weight: req.body.Weight,
        Height:req.body.Height,
        Sex: req.body.Sex
      
    })
      newUser.save(function (err) {
      if (err)
           throw err;
        else
       console.log('User added to the Database Successfully!');
       res.json({message : "User Added to the Database Successfully"});
    })
})


module.exports = router;