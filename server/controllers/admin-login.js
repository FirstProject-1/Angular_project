var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
 var app = express();
  

 var middlewareBodyParser= bodyParser.json()

//  route.post("/signup",middlewareBodyParser,function(req,resp){
//   var UserModel=mongoose.model("admin")
//   var new_user=new UserModel()
 
//   new_user.email=req.body.txtmail;
//   new_user.password=req.body.password;
  
//   new_user.save(function(err,data){
//     if(!err){
//          console.log("saved...");
//           resp.json(data)
//       }else console.log(err)
//     })
// })

 route.post("/login",middlewareBodyParser,function(req,resp){

    var adminModel=mongoose.model("admin")
    var new_admin=new adminModel()
    new_admin.email=req.body.txtmail;
    new_admin.password=req.body.password;
    mongoose.model("admin").find({
      "email":req.body.txtmail,
      "password":req.body.password
    },(function(err,data){
      
      if(data.length === 0){
        resp.json("sorrrrrry you are not allowed")
      }else{
        resp.json("welcome")
       
      }
    }))
        
               
})


module.exports=route;