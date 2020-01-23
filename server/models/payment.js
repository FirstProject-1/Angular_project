var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var  userpay= new Schema({
    card: String,
  card_verification: String
  
});

mongoose.model("payment",userpay);