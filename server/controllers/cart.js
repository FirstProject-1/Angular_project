var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

// create cart and add products to it
route.get("/add/:id",function(req,resp,next){
    var productId= req.params.id
   
    mongoose.model('cart').find((err,cart)=>{
        if (cart){
            var cartModel = mongoose.model("cart")
            var cart = new cartModel()
            cart.products=[productId]
            cart.save(function(err,data){
            resp.json(data);
            console.log(data);
            })
        
        }
        if(!cart){
            console.log('update')
            cart.products.push(req.params.id)
        }
    })
    
})


//////// show all products in cart
route.get('/details', function (req, resp) {
    // show all products in last cart in cats collection
    mongoose.model("cart").find().limit(1).sort({$natural:-1}).populate('products').exec(function (err,data){
        console.log(data[0].products)
        resp.send(data[0].products)
    })
    // show all products in first cart in carts collection
    /* mongoose.model("cart").findOne().populate('products').exec(function (err,data){
        console.log(data.products)
        resp.send(data.products)
    }) */
      
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