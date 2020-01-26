var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

// create cart and add products to it
route.post("/add",middlewareBodyParser,function(req,resp,next){
    var cartModel = mongoose.model("cart")
    var cart = new cartModel()
    cart.note=req.body.note
    cart.totalPrice =req.body.totalPrice;
    cart.products =req.body.productId;
    
     cart.save(function(err,data){
      resp.json(data);
      console.log(data);
        })
        // resp.send(data)
    
    mongoose.model("cart").find(function(err,data)
    {/* 
        mongoose.model("cart").populate(data,{
            path: "products"
        }) */
        resp.send(data)
    })
    
})

// select specific category by id
route.get('/details/:id',function(req,resp){
    mongoose.model('category').findOne({_id:req.params.id},function(err,data){
        resp.json(data)
        if(!err) console.log(req.params._id)
    })
})


////////

module.exports = route;