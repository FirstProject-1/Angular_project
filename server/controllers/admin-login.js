var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()

var jwt = require('jsonwebtoken')
 var app = express();
  

 var middlewareBodyParser= bodyParser.json()
<<<<<<< HEAD
 
=======

 /* route.post("/signup",middlewareBodyParser,function(req,resp){
  var adminModel=mongoose.model("admin")
    var new_admin=new adminModel()
    new_admin.email=req.body.txtmail;
    new_admin.password=req.body.password;
    new_admin.save(function(err,data){
    if(!err){
         console.log("saved...");
          resp.json(data)
      }else console.log(err)
    })
}) */
/* 
>>>>>>> 730071ca292d59cd47063c383a889ac2b35d8c0f
 route.post("/login",middlewareBodyParser,function(req,resp){

    // var adminModel=mongoose.model("admin")
    // var new_admin=new adminModel()
    // new_admin.email=req.body.txtmail;
    // new_admin.password=req.body.password;
    mongoose.model("admin").find({
      email:req.body.txtmail,
      password:req.body.password
    },(function(err,data){
      
      if(data.length === 0){
        resp.json("sorry you are not allowed")
      }
      else{
        const payload= { subject: req.body._id}
        const tokenAuthAdmin = jwt.sign(payload,"this is secret key")
          if (tokenAuthAdmin === undefined)
          {console.log("not an admin");
          }
          else{
            resp.send({tokenAuthAdmin})
          }
       
      }
    }))
        
               
}) */

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