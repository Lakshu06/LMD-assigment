const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   activityName: { type: String,  required: true },
    specficMotion: { type: String, required: true },
    metvalue: { type: String, required: true },
    

});


module.exports =Activity= mongoose.model('Activity', schema);
