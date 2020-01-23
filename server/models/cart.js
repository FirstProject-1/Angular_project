var mongoose=require("mongoose")
var Schema=mongoose.Schema
var cart=new Schema({
    note:String,
    totalPrice:Number

    ,products:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "products"
      }],
    // user:[]
})
// ORM
mongoose.model("cart",cart)