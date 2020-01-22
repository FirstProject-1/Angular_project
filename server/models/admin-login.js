var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var adminlogin = new Schema({
  email: String,
  password: String
  
});

mongoose.model("admin",adminlogin);