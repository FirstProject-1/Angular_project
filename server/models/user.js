var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var userlogin = new Schema({
  firstname:String,
  lastname:String,
  email: String,
  password: String
  
});

mongoose.model("user",userlogin);