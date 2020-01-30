var express=require('express');
var router=express.Router()
var mongoose=require("mongoose");
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();
// add to wish

router.get("/addWishlist/:id/:name/:price",function(req,resp,next){
    productId=req.params.id
    // productName=req.params.name.toString();
    productPrice=parseInt(req.params.price);
    
    const productOnWishlist = {
        _id:productId,
        name:req.params.name,
        price:productPrice,
        img:req.query.img
    }
    mongoose.model('wishlist').findOne((err,wishlist)=>{
        if (!wishlist){
            var wishlistModel = mongoose.model("wishlist")
            var wishList = new wishlistModel()
            wishList.products=[productOnWishlist]
            wishList.totalPrice=productPrice;
            
            wishList.save(function(err,data){
            resp.send(data);
            console.log(data);
            })
        }
        else{
            
            var indexOfProduct=-1;
            for (let i=0; i<wishlist.products.length; i++){
                if(req.params.id===wishlist.products[i]._id){
                    indexOfProduct=i;
                    console.log("you have added this to wishlist already");
                    break;
                }
            }
            if(indexOfProduct>=0){
                console.log("this product is in your wishlist , need to update " + indexOfProduct)
                wishlist.products[indexOfProduct].quantity+=1
                wishlist.products[indexOfProduct].price = wishlist.products[indexOfProduct].price +productPrice;
                //wishlist.totalQuantity = wishList.totalQuantity +1;
                wishlist.totalPrice = wishlist.totalPrice + productPrice
                mongoose.model('wishlist').updateOne({_id:wishlist._id},{$set: wishlist},(err,data)=>{
                    if(err){console.log(err)}
                        console.log(data)
                        console.log(wishlist)
                   
                })
                
            }else{
                console.log("no this isn'i't in your wishlist go to  adding it")
                wishlist.totalQuantity=wishlist.totalQuantity +1;
                wishlist.totalPrice= wishlist.totalPrice + productPrice
                wishlist.products.push(productOnWishlist)
                mongoose.model('wishlist').updateOne({_id:wishlist._id},{$set: wishlist},(err,data)=>{
                    if(err){console.log(err)}
                        console.log(data)
                        console.log(wishlist)
                   
                })
                
            }
            console.log(indexOfProduct)
        }
    })
    
})
 // show all products in last iwshlist in cats collection
 router.get('/wishlistDetails', async function (req, resp) {
     mongoose.model("wishlist").findOne(async function (err,data){
        try{
            await resp.send(data.products)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    })
      
})

// delete wishlist 
router.get('/clearWishlist',function(req, resp){
    mongoose.model("wishlist").deleteMany((err,data)=>console.log(data))
    resp.end()
        
})

module.exports=router;