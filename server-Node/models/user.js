const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String,  required: true },
    weight: { type: String, required: true },
    height: { type: String, required: true },
    sex: { type:String,required: true },
    age: {type: Number, required: true}
});


module.exports =User= mongoose.model('User', schema);
