var express =require("express")
var mongoose=require("mongoose");
var fs=require('fs')
var categoryController= require("./controllers/category")
var ProductController = require("./controllers/product")


//create my server
var app = express()
mongoose.connect("mongodb://127.0.0.1:27017/Masn_DB");
//middlewareBodyParser
var router = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

// cross origin 
app.all('*',function (req, resp, next) {
  resp.setHeader("Access-Control-Allow-Origin", "*");
  resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  resp.setHeader("Access-Control-Allow-Headers","Content-Type")
  next()
})

//files in models
var files_arr=fs.readdirSync(__dirname+"/models")
files_arr.forEach(function(file){
  require(__dirname+"/models/"+file);
});

//use my middelwares
app.use(express.static("public"))


//midelware for product
app.use('/product',ProductController)

//midelware for Category
app.use('/Category',categoryController)


//listen 
app.listen(8080,function(){
    console.log("server on port 8080 ");
})
