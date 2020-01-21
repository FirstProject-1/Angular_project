var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var products=new Schema({
    name:String,
    categorey:String,
    macker:String,
    price:Number,
    desc:String,
    img:String
})
// ORM
mongoose.model("products",products);