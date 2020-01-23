var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var products=new Schema({
    name:String,
    desc:String,
    price:Number,
    brand:String,
    macker:String,
    img:String,
    categorey:String
    
})
// ORM
mongoose.model("products",products);