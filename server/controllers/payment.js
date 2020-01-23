var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
 var app = express();
  

 var middlewareBodyParser= bodyParser.json()

 route.post("/pay",middlewareBodyParser,function(req,resp){

    var paymentModel=mongoose.model("payment")
    var new_pay=new paymentModel()
    new_pay.card=req.body.card;
    new_pay.card_verification=req.body.card_verification;
    mongoose.model("admin").find({
        card:req.body.card,
      card_verification:req.body.card_verification
    },(function(err,data){
      
      if(data.length === 0){
        resp.json("sorry you have not correct number ")
      }else{
        resp.json("welcome have a nice day")
       
      }
    }))
        
               
})


module.exports=route;