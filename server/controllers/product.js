var express=require('express');
var app= express();
var router=express();
var mongoose=require("mongoose");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

function verifyToken(req,resp,next){
    if(!req.headers.authorization){
      return resp.status(401).send("req unauthor..")
    }
    let token= req.headers.authorization.split(' ')[1]
    if (token==='null'){
      return resp.status(401).send('req unauthor..')
    }
    let payload=jwt.verify(token,'secret key')
    if (!payload){
      return resp.status(401).send('req unauthor..')
    }
    req.adminId= payload.subject
    next()
  }

// add product
router.post("/addProduct",middlewareBodyParser,function(req,resp,next){
    // console.log(req.headers);
    
    var productModel = mongoose.model("products")
    var product = new productModel()
     product.name=req.body.name;
     product.desc =req.body.desc;
     product.price =req.body.price;
     product.brand =req.body.brand;
     product.macker = req.body.maker;
     product.img =req.body.img;
     product.categorey=req.body.category;
     
    
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
    mongoose.model('products').findOne({_id:req.params._id},function(err,data){
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


module.exports=router;