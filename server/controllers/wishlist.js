var express=require('express');

var router=express.Router()
var mongoose=require("mongoose");


// add to wish
router.get("/addWishlist/:id/:name/:price",function(req,resp,next){
    productId=req.params.id;
    productName=req.params.name.toString();
    productPrice=parseInt(req.params.price);
    
    const productOnWishlist = {
        _id:productId,
        name:productName,
        price:productPrice,
        // img:req.query.img.toString()
    }
    mongoose.model('wishlist').findOne((err,wishlist)=>{
        if (!wishlist){
            var wishlistModel = mongoose.model("wishlist")
            var wishList = new wishlistModel()
            wishList.products=[productOnWishlist]
            wishList.totalPrice=productPrice
            
            wishList.save(function(err,data){
            resp.send(data);
            console.log(data);
            })
        }
        // else{
            
        //     var indexOfProduct=-1;
        //     for (let i=0; i<wishList.products.length; i++){
        //         if(req.params.id===wishList.products[i]._id){
        //             indexOfProduct=i;
        //             console.log("you have added this to wishlist already");
        //             break;
        //         }
        //     }
        //     if(indexOfProduct>=0){
        //         console.log("this product is in your wishlist , need to update " + indexOfProduct)
        //         wishList.products[indexOfProduct].quantity+=1
        //         wishList.products[indexOfProduct].price = wishList.products[indexOfProduct].price +productPrice;
        //         wishList.totalQuantity = wishList.totalQuantity +1;
        //         wishList.totalPrice = wishList.totalPrice + productPrice
        //         mongoose.model('wishlist').updateOne({_id:wishlist._id},{$set: wishlist},(err,data)=>{
        //             if(err){console.log(err)}
        //                 console.log(data)
        //                 console.log(wishlist)
                   
        //         })
                
        //     }else{
        //         console.log("no this isn'i't in your wishlist go to  adding it")
        //         wishList.totalQuantity=cart.totalQuantity +1;
        //         wishList.totalPrice= cart.totalPrice + productPrice
        //         wishList.products.push(productAddedToCart)
        //         mongoose.model('wishlist').updateOne({_id:wishlist._id},{$set: wishlist},(err,data)=>{
        //             if(err){console.log(err)}
        //                 console.log(data)
        //                 console.log(wishlist)
                   
        //         })
                
        //     }
        //     console.log(indexOfProduct)
        // }
    })
    
})
 // show all products in last iwshlist in cats collection
 router.get('/wishlistDetails', async function (req, resp) {
     mongoose.model("wishlist").findOne(async function (err,data){
        try{
            await resp.send(data)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    })
      
})

module.exports=router;