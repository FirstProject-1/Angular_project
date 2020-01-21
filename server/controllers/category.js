var express = require("express")
var route = express.Router()
var app = express()
var bodyParser = require("body-parser")

var mongoose = require("mongoose")

app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

route.post("/addCategory/added", middlewareBodyParser, function (req, resp) {
    
    var categoryModel = mongoose.model("category")
    var new_category = new categoryModel()
    new_category.name = req.body.catName;
    new_category.description = req.body.catDescription;

    new_category.save(function (err,data) {
        resp.json(data);
        /* 
        if (!err){
            console.log(req.body);
        } */
    })
    // resp.send("this category is added ")

})

route.get('/addCategory/list',function(req,resp){
    mongoose.model('category').find(function(err,data){
        resp.send(data)
    })
})

route.get('/deleteCategory/:id',middlewareBodyParser,function(req,resp){
    mongoose.model('category').remove({_id:req.params.id},function(err,data){
        if(!err) console.log(req.params.id)
    })
    resp.send("this category is deleted ")
})
module.exports = route;
