var express = require("express")
var ProductController = require("./controllers/product")
var adminloginController = require("./controllers/admin-login")
var userController = require("./controllers/user")
var categoryController= require('./controllers/category')
var mongoose=require("mongoose");
var fs=require('fs')
var categoryController= require("./controllers/category")
var ProductController = require("./controllers/product")
var paymentControlle = require("./controllers/payment")
var CartController = require("./controllers/cart")


//create my server
var app = express()
mongoose.connect("mongodb://127.0.0.1:27017/Masn_DB");

//middlewareBodyParser
var router = express.Router();


// cross origin 
app.all('*',function (req, resp, next) {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  resp.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept")
  next()
})

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//use my middelwares
app.use(express.static("public"))


//files in models
var files_arr=fs.readdirSync(__dirname+"/models")
files_arr.forEach(function(file){
  require(__dirname+"/models/"+file);
});


//midelware for product
app.use('/product',ProductController)

//midelware for Category
app.use('/Category',categoryController)

//midelware for admin
app.use('/admin',adminloginController)

//midelware for user
app.use('/user',userController)
//midelware for payment
app.use('/payment',paymentControlle)

//midelware for cart
app.use('/cart',CartController)

//listen 
app.listen(8080,function(){
    console.log("server on port 8080 ");
})
