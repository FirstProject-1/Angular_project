var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
 var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
  

 var middlewareBodyParser= bodyParser.json()

 route.post("/pay",middlewareBodyParser,function(req,resp){

    var paymentModel=mongoose.model("payment")
    var new_pay=new paymentModel()
    new_pay.card=req.body.card;
    new_pay.verification=req.body.verification;
    mongoose.model("payment").find({
        card:req.body.card,
        verification:req.body.verification
    },(function(err,data){
      
      if(data.length == 0){
        resp.json("correct data ")
      }else{
        resp.json("done")
       
      }
    }))
        
               
})


module.exports=route;