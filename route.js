'use strict';


var request = require('request');

var Promises = require('promise');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//  var login = require("./functions/login")
// var landdetails = require("./functions/landdetails")
var register= require('./functions/register')

var path = require('path');
var cors = require('cors');
var cloudinary = require('cloudinary');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
const nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

var Web3 = require('web3')
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];
    console.log(web3.eth.defaultAccount)
}
module.exports = router => {


    router.post('/register',cors(),(req,res)=> {
        var registerdetails= req.body.persondetails
        console.log(registerdetails)
        res.send({registerdetails:"Register sucessfully"})
    });

router.get('/accountdetails',function(req, res){
    var person = ([{
        "firstname":"arjun",
        "lastname":"sankar",
        "dob":"24/02/1995",
       "phone no":"9967711100",
       "addresses":"Thiruvottiyur"
    }])

res.send(person);
console.log("arjun");
console.log(person);
})
}
//         const firstname = req.body.firstname;
//         console.log(firstname);
//         const lastname = req.body.lastname;
//         console.log(lastname);
//         const dateofbirth = req.body.dateofbirth;
//         console.log(dateofbirth);
//         const phonenumber = req.body.phonenumber;
//         console.log(phonenumber);
//         const email = req.body.email;
//         console.log(email);
//         const password = req.body.password;
//         console.log(password);
//         const retypepassword = req.body.retypepassword;
//         console.log(retypepassword);
//         const usertype = req.body.usertype;
//         console.log(usertype);

//         if (!firstname || !lastname || !phonenumber|| !dateofbirth || !email || !password || !retypepassword || !usertype || !userId) {

//             res
//                 .status(400)
//                 .json({
//                     message: 'Invalid Request !'
//                 });

//         } else {

//     register
//      .register(firstname,lastname,dateofbirth,phonenumber,email,password,retypepassword,usertype)
//      .then(result => {   
//         console.log("result ===>>>",result)
//         console.log("hello")
//         res.send({
//             "message": "Register sucessfully",
//             "status": true,
//             "usertype":result.users.usertype
//         });

//     })
//     .catch(err => res.status(err.status).json({
//         message: err.message
//     }).json({
//         status: err.status
//     }));
// }}
// });
// router.post('/login',cors(),(req,res)=> {
//     var email=req.body.email;
//     console.log("email:",email);
//     var password=req.body.password;
//     console.log("password",password);

//     login
//      .login(email,password)
//      .then(result => {   
//         console.log("result ===>>>",result)
//         console.log("hello")
//         res.send({
//             "message": "Login sucessfully",
//             "status": true,
//             "usertype":result.users.usertype
//         });

//     })
//     .catch(err => res.status(err.status).json({
//         message: err.message
//     }).json({
//         status: err.status
//     }));
// }
// )}


//  router.post('/landdetails', cors(), (req, res) => {
//      console.log("Land  Details");
//      var sellername=req.body.sellername;
//      console.log("person Name:",sellername);
//         var addresses=req.body.addresses;
//      console.log("addresses",addresses);
//      var landsqft=req.body.landsqft;
//      console.log("landsqft:",landsqft);
//      var landvalue=req.body.landvalue;
//      console.log("landvalue:",landvalue)

//    landdetails
//          .landdetails(sellername,addresses,landsqft,landvalue)
//          console.log("arjun")
//          .then(result => {   
//              console.log("result ===>>>",result)

//              res.send({
//                  "message": "Seller details Adding Successful",
//                  "status": true,
//                  "usertype":result.users.usertype
//              });

//        })
//         .catch(err => res.status(err.status).json({
//             message: err.message
//         }).json({
//             status: err.status
//         }));
//     });

// }

