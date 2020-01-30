var mongoose=require("mongoose")
var Schema=mongoose.Schema
var cart=new Schema({
    note:String,
    totalPrice:Number,
    totalQuantity:Number
    ,products:Array
})

mongoose.model("cart",cart)