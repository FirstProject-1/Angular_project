var express=require('express');
var app= express();
var router=express();
var mongoose=require("mongoose");
var fs=require('fs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();


router.post("/addProduct",middlewareBodyParser,function(req,resp,next){
    var productModel = mongoose.model("products")
    var product = new productModel()
    product.name=req.body.name;
    product.categorey=req.body.categorey;
    product.description=req.body.description;
    product.maker = req.body.maker;
    product.price =req.body.price;
    product.img =req.body.img;

product.save(function(err,data){
    resp.json(data);
    console.log(data);
})
})

// list Proudct
router.get('/listProudct',function(req,resp){
    mongoose.model('products').find(function(err,data){
        resp.send(data)
    })
})

//Details product by _Id
router.get('/productDetails/:_id',function(req,resp){
    var _id=req.params._id
    mongoose.model('products').findOne({_id:_id},function(err,data){
        resp.json(data)
    })
})

// delete proudct
router.get('/deleteProduct/:_id',function(req,resp){
    mongoose.model('products').remove({_id:req.params._id},function(err,data){
        if(!err) console.log("Proudct Deleted")
    })
    resp.redirect('/product/listProudct')
})
//  update product
router.put('/updateProduct/:_id',function(req,resp){
    mongoose.model('products').update()
})


// delete product

module.exports=router;