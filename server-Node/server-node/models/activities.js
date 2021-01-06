const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   ActivityName: { type: String,  required: true },
    SpecficMotion: { type: String, required: true },
    METValue: { type: String, required: true },
    

});


module.exports =Activity= mongoose.model('Activity', schema);
