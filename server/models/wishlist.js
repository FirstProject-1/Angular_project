var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var wishlist=new Schema({
    note:String,
    totalPrice:Number,
    totalQuantity:Number,
    products:Array
    
})
// ORM
mongoose.model("wishlist",wishlist);
