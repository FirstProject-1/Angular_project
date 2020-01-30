var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
var jwt = require('jsonwebtoken')
 var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

 
route.post("/signup",middlewareBodyParser,function(req,resp){
    var UserModel=mongoose.model("user")
    var new_user=new UserModel()
    new_user.firstname=req.body.txtfname;
    new_user.lastname=req.body.txtlname;
    new_user.email=req.body.txtmail;
    new_user.password=req.body.password;
    
    new_user.save(function(err,data){
      if(!err){
        const payload= { subject: new_user._id}
        const tokenAuth = jwt.sign(payload,"this is secret key")
           console.log("saved...");
            // resp.json(data)
            resp.send({tokenAuth})
        }else console.log(err)
      })
})

route.post("/login",middlewareBodyParser,function(req,resp){

  var userModel=mongoose.model("user")
  var _user=new userModel()
  _user.email=req.body.txtmail;
  _user.password=req.body.password;

    mongoose.model("user").findOne({email:req.body.txtmail},(err,data)=>{
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
          const payload= { subject: _user._id}
          const tokenAuth = jwt.sign(payload,"this is secret key")
            // resp.json("sucess");
            resp.send({tokenAuth})
         }
        
       } console.log(data);
      }
     
    })
     
          
})


module.exports=route;