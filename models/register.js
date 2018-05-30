'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerpageSchema = mongoose.Schema({
    
 firstname:String,
lastname:String,
dateofbirth:Number,
phonenumber:Number,
email:String,
password:Number,
retypepassword:Number,
usertype:String
});


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect('mongodb://harini:Harini!96@ds119406.mlab.com:19406/mortgage', {
    useMongoClient: true
});



module.exports = mongoose.model('user', registerpageSchema);