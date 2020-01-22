var express = require("express")
var ProductController = require("./controllers/product")
var adminloginController = require("./controllers/admin-login")
var userController = require("./controllers/user")
var categoryController= require('./controllers/category')
var mongoose=require("mongoose");
var fs=require('fs')
// const cors=require('cors');

//create my server
var app = express()

app.all('*',function (req, resp, next) {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  resp.setHeader("Access-Control-Allow-Headers","Content-Type")
  next()
})
//use my middelwares
app.use(express.static("public"))

app.use('/Category',categoryController)
app.use('/product',ProductController)
app.use('/admin',adminloginController)
app.use('/user',userController)
// app.use(cors());

//connect to DB
mongoose.connect("mongodb://127.0.0.1:27017/market_an");

// require for model files


// app.use(bodyParser.urlencoded({ extended: true }));


var files_arr=fs.readdirSync(__dirname+"/models")
files_arr.forEach(function(file){
  require(__dirname+"/models/"+file);
});

//product controller midelWare



app.get("",function (req,resp) {
  console.log("this is get request");  
  resp.send("this is response from '/'")

})
 

//listen 
const port=8080;
app.listen(port,function(){
    console.log("server on port "+port);
    
})
