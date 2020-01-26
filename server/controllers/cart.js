var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

// create cart and add products to it
route.get("/add/:id/:price",function(req,resp,next){
    productPrice=parseInt(req.params.price)
    var productAddedToCart={
        _id:req.params.id,
        price:productPrice
    }
   console.log(req.params.price)
    mongoose.model('cart').findOne((err,cart)=>{
        if (!cart){
            var cartModel = mongoose.model("cart")
            var cart = new cartModel()
            cart.products=[productAddedToCart]
            cart.totalPrice=productPrice
            cart.totalQuantity=1;
            // console.log(cart._id)
            cart.save(function(err,data){
            resp.json(data);
            console.log(data);
            })
        
        }
        if(cart){
            var indexOfProduct=-1;
            for (let i=0; i<cart.products.length; i++){
                if(req.params.id==cart.products[i]){
                    indexOfProduct=i;
                    console.log("yes you have added this to cart");
                    break;
                }
            }
            if(indexOfProduct>=0){
                console.log("this product is in your cart ... need to update it")
                
            }
            else{
                console.log("no this isn'i't in your cart lets add it")
                cart.totalQuantity=cart.totalQuantity +1;
                cart.totalPrice= cart.totalPrice + productPrice
                cart.products.push(productAddedToCart)
                mongoose.model('cart').updateOne({_id:cart._id},{$set: cart},(err,data)=>{
                    if(err){console.log(err)}
                        console.log(data)
                        console.log(cart)
                   
                })
                
            }
            console.log(indexOfProduct)
        }
    })
    
})


//////// show all products in cart
route.get('/details', function (req, resp) {
    // show all products in last cart in cats collection
    /* mongoose.model("cart").find().limit(1).sort({$natural:-1}).populate('products').exec(function (err,data){
        console.log(data[0].products)
        resp.send(data[0].products)
    }) */
    // show all products in first cart in carts collection
    mongoose.model("cart").findOne().populate('products').exec(function (err,data){
        console.log(data.products)
        resp.send(data.products)
    })
      
})

route.get('/clear/:id',function(req, resp){
    mongoose.model("cart").findOne().populate('products').exec(function (err,data){
        data.products.forEach(element => {
            console.log(element)
            if(element._id==req.body.id){
                console.log(element._id)
                data.products.findOneAndDelete({_id:req.body.id},function (err,datat){
                    console.log(datat)
                }) 
            }
        });
    })
    resp.end()
        
})


// price sum
/* mongoose.model("cart").findOne().populate('products').exec(function (err,data){
    // console.log(data.products.length)
    var totalPrice=0;
    for (let i=0;i<=data.products.length;i++){
        var price=data.products[i].price
         console.log(data.products[i].price)
    }
    // var price=data.products[1].price
    resp.end()
}) */
module.exports = route;