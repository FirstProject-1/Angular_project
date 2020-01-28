var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var wishList=new Schema({
    // time:Number,
    // user:{
    //     type:Schema.ObjectId,
    //     ref:"user"
    //   },
    products:{
        type:Schema.ObjectId,
        ref:"products"
      }
})