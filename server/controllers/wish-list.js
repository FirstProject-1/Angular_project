var express=require('express');
var app= express();
var router=express();
var mongoose=require("mongoose");
var fs=require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();
