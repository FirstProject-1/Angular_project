var express = require("express")
var route = express.Router()
var app = express()
// var cors= cors()
var bodyParser = require("body-parser")

var mongoose = require("mongoose")


var parseUrlencoded = bodyParser.urlencoded({ extended: true })

route.post("/addCategory/added", parseUrlencoded, function (req, resp) {
    
    var categoryModel = mongoose.model("category")
    var new_category = new categoryModel()
    new_category.name = req.body.name;
    new_category.description = req.body.description;
    new_category.save(function (err) {
        if (!err){
            console.log(req.body);
        }
    })
    resp.send("this category is added ")

})
module.exports = route;
