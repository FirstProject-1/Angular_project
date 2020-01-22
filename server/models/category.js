var mongoose=require("mongoose")
// register model
var Schema=mongoose.Schema
var category=new Schema({
  name:String,
  description:String
})
// ORM
mongoose.model("category",category)