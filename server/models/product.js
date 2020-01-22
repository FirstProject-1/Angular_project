var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var products=new Schema({
    name:String,
    categorey:String,
    description:String,
    maker:String,
    price:Number,
    img:String
})
// ORM
mongoose.model("products",products);