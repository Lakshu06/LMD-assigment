const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   foodName: { type: String,  required: true },
   servingSize: { type: String, required: true },
    caloriesperSerSize: { type: String, required: true },
    

});


module.exports =Food= mongoose.model('Food', schema);
