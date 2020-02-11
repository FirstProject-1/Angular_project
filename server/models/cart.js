var mongoose=require("mongoose")
var Schema=mongoose.Schema
var cart=new Schema({
    note:String,
    totalPrice:Number,
    totalQuantity:Number
    ,products:Array,
    user:{
        type:Schema.Types.ObjectId
        ,ref:'users'
        ,required:true
    }
})

mongoose.model("cart",cart)