var mongoose = require('mongoose');
var urldb = require('../models/config').myUrl
var URL = process.env.URL || urldb;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
 require('../models/user');
 require('../models/activities');
 require('../models/food')
var db = mongoose.connection;
dbl=mongoose.connection.collection('food');
//We enebled the Listener
db.on('error', () => {
    console.error('Error occured in db connection');
});

db.on('open', () => {
    console.log('DB Connection established successfully');
});
module.exports= dbl