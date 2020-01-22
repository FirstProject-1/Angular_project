var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
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
           console.log("saved...");
            resp.json(data)
        }else console.log(err)
      })
})

route.post("/login",middlewareBodyParser,function(req,resp){

  var userModel=mongoose.model("user")
  var _user=new userModel()
  _user.email=req.body.txtmail;
  _user.password=req.body.password;
  _user.save(function(err,data){
      if(data.length==0){
           resp.status(403);
           resp.json("not exist");
        } else{
          resp.json("sucess");
        } 
      })       
})


module.exports=route;