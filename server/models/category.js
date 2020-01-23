var mongoose=require("mongoose")
var Schema=mongoose.Schema
var category=new Schema({
  catName:String,
  catDescription:String
})
// ORM
mongoose.model("category",category)