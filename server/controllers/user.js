var express =require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser")
var route=express.Router()
var jwt = require('jsonwebtoken')
 var app = express();
const bcrypt = require('bcryptjs');


app.use(bodyParser.urlencoded({ extended: true }));
var middlewareBodyParser = bodyParser.json();

 
route.post("/signup",middlewareBodyParser,function(req,resp){
  const {txtfname,txtlname,txtmail , password}= req.body
  // console.log({txtfname,txtlname,txtmail , password});

  if (!txtfname || !txtlname || !txtmail || !password) {
    resp.status(501).json({Msg: 'Please enter all fields'}) ;
      }

    else{
      mongoose.model("user").findOne({ email: txtmail }).then(user => {
        if (user) {
          resp.status(501).json({Msg: "this email is already exists"});
            } 
        else {
          var UserModel=mongoose.model("user")
          var new_user=new UserModel()
          new_user.firstname=req.body.txtfname;
          new_user.lastname=req.body.txtlname;
          new_user.email=req.body.txtmail;
          new_user.password=req.body.password;

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(new_user.password, salt, (err, hash) => {
              new_user.password = hash;
              new_user.save()
                .then(user => {
                  resp.status(200).json({Msg: 'Registerd Succesfully'}) ;
                
                })
                .catch(err => console.log(err));
            });
          });

                  }
      })
    }
    
    /* 
    new_user.save(function(err,user){
      if(!err){
        const payload= { subject: user._id}
        const tokenAuth = jwt.sign(payload,"this is secret key")
           console.log("saved...");
            // resp.json(data)
            resp.json({tokenAuth})
            // console.log({firstname,lastname,email , password});
        }else console.log(err)
      }) */

})

route.post("/login",middlewareBodyParser,function(req,resp){

    mongoose.model("user").findOne({email:req.body.txtmail},(err,data)=>{
      if(err){console.log(err);
      }
      else{
        if(!data){
          resp.status(501).json({Msg :'Email Not Registered'});
       } 
       else{ 
             // Match password
        bcrypt.compare(req.body.password, data.password, (err, isMatch) => {
          if (isMatch) {
            let token = jwt.sign({username : data.firstname ,userId: data._id} ,'Shhhh',{expiresIn:'1h'})
            console.log(token);
            
            resp.status(200).json(token);
          } else {
            resp.status(501).json({Msg :'Password Does not Match'});
          }
        });
        /*  if(data.password !==req.body.password){
         resp.send("invalid password")
         }
         else {
          const payload= { subject: data._id}
          const tokenAuth = jwt.sign(payload,"this is secret key")
          console.log(payload);
         resp.send({tokenAuth})
         } */
        
       } 
      }
     
    })
     
          
})

route.get('/userName',verifytoken ,(req,res,next)=>{
  console.log(req.query.userToken);
  if(req.query.userToken != null){
  return res.status(200).json(Token.username)
  }
  else{
    res.status(200).json('no user login')
  }
})

var Token = ''
function verifytoken(req,res,next){
  console.log(req.query.userToken);
let userToken=req.query.userToken
jwt.verify(userToken,'Shhhh',(err , verifytoken)=>
{if (err)
  return res.status(400).json({Msg : 'you are unauthorized'})
  if (verifytoken)
    {
      Token = verifytoken;
    next();}
  }
)}

module.exports=route;