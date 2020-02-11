var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();



var Token = ''
function verifytoken(req,res,next){
  // console.log(req.query.userToken);
let userToken=req.query.userToken
jwt.verify(userToken,'Shhhh',(err , verifytoken)=>
{if (err)
  return res.status(400).json({Msg : 'you are unauthorized'})
  if (verifytoken)
    {
      Token = verifytoken;
    next();}
  }
)}
// create cart and add products to it
route.get("/add/:id/:price/:name",verifytoken,function(req,resp,next){
    // console.log(req.headers);
    cartId=Token.userId
    console.log(Token);
    
    productId=req.params.id
    productPrice=parseInt(req.params.price);
    console.log(req.query.img);
    
    const productAddedToCart = {
        price:productPrice,
        name:req.params.name,
        quantity: 1,
        _id:productId,
        img:req.query.img
    }
    mongoose.model('cart').findOne({user:cartId},(err,cart)=>{
        if (!cart){
            var cartModel = mongoose.model("cart")
            var cart = new cartModel()
            cart.products=[productAddedToCart]
            cart.totalPrice=productPrice
            cart.totalQuantity=1;
            cart.user=cartId
            cart.save(function(err,data){
            resp.send(data);
            console.log(data);
            })
        
        }else{
            var indexOfProduct=-1;
            for (let i=0; i<cart.products.length; i++){
                if(req.params.id===cart.products[i]._id){
                    indexOfProduct=i;
                    console.log("you have added this to cart already");
                    break;
                }
                }
            if(indexOfProduct>=0){
                console.log("this product is in your cart , need to update "+indexOfProduct)
                cart.products[indexOfProduct].quantity+=1
                // console.log(cart.products[indexOfProduct].quantity)
                cart.products[indexOfProduct].price+=productPrice;
                cart.totalQuantity+=1;
                cart.totalPrice+=productPrice
                mongoose.model('cart').updateOne({user:cartId},{$set: cart},(err,data)=>{
                    if(err){console.log(err)}
                        console.log(data)
                        console.log(cart)
                   
                })
                
            }else{
                console.log("no this isn'i't in your cart lets add it")
                cart.totalQuantity=cart.totalQuantity +1;
                cart.totalPrice= cart.totalPrice + productPrice
                cart.products.push(productAddedToCart)
                mongoose.model('cart').updateOne({user:cartId},{$set: cart},(err,data)=>{
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
route.get('/details',verifytoken, function (req, resp) {
    // show all products in last cart in cats collection
    /* mongoose.model("cart").find().limit(1).sort({$natural:-1}).populate('products').exec(async function (err,data){
        try{ 
           await resp.send(data[0].products)
           console.log(data[0].products)
        } catch(err){
            console.log(err)
        }
        
    }) */
    // show all products in first cart in carts collection
    cartId=Token.userId
    

     mongoose.model("cart").findOne({user : cartId}, function (err,data){
        if (!err){
            console.log(Token.userId);
             resp.send(data)
            console.log(data)
        }else{
            console.log(err)
        }
    })
      
})

// delete specific product in cart
route.get('/deleteItem/:id',verifytoken, function (req, resp) {
    cartId=Token.userId
    mongoose.model('cart').update({user:cartId},{ $pull:{ products :{_id:req.params.id} } },()=>console.log("deleted"+req.params.id)
    )

    resp.end()
})

route.get('/clear',verifytoken,function(req, resp){
    cartId=Token.userId
    mongoose.model("cart").deleteOne({user:cartId},(err,data)=>console.log(data))
    resp.end()
        
})

// make products of quantity -1
//    mongoose.model('cart').update({},{ $inc: { "products.$[].quantity" : -1 } })

// mongoose.model("cart").products.dropIndeax({_id:req.params.id})

/* route.get('/clear/:id',function(req, resp){
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
        
}) */

module.exports = route;