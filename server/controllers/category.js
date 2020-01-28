var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

// add Category
route.post("/add", middlewareBodyParser, function (req, resp,next) {
    
    var categoryModel = mongoose.model("category")
    var new_category = new categoryModel()
    new_category.catName = req.body.catName;
    new_category.catDescription = req.body.catDescription;
    new_category.save(function (err,data) {
        if (!err){
            console.log(req.body);
             resp.json(data);
            
         }
    })
    
})

route.get('/list',function(req,resp){
    mongoose.model('category').find(function(err,data){
        resp.send(data);
    })
})

route.get('/delete/:id',middlewareBodyParser,function(req,resp){
    mongoose.model('category').deleteOne({_id:req.params.id},function(err,data){
        if(!err) console.log(req.params.id)

    })
})

// select specific category by id
route.get('/details/:id',function(req,resp){
    mongoose.model('category').findOne({_id:req.params.id},function(err,data){
        resp.json(data)
        if(!err) console.log(req.params._id)
    })
})

//show products in each category
route.get('/categoryProducts/:id',function(req,resp){
    mongoose.model('category').findOne({_id:req.params.id},function(err,data){
        // resp.json(data.catName)
        var selectedCateg=data.catName
        mongoose.model('products').find({categorey:selectedCateg},function(err,data){
            resp.json(data)
        })
        if(err) console.log(err)
    })
})
module.exports = route;
