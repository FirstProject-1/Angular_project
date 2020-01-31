var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()

var jwt = require('jsonwebtoken')
 var app = express();
  

 var middlewareBodyParser= bodyParser.json()
 


route.post("/login",middlewareBodyParser,function(req,resp){

  
    mongoose.model("admin").findOne({email:req.body.txtmail},(err,data)=>{
      if(err){console.log(err);
      }
      else{
        if(!data){
          resp.send("not exist");
       } 
       else{ 
         if(data.password !==req.body.password){
           
         resp.send("invalid password")
         }
         else {
          const payload= { subject: data._id}
          const tokenAuthAdmin = jwt.sign(payload,"this is secret key")
          console.log(payload);
          resp.send({tokenAuthAdmin})
         }
        
       } 
      }
     
    }) 
     
          
})


module.exports=route;