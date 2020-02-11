import { Component, OnInit } from '@angular/core';
import { UserLogin } from './user-login';
import { UserloginService } from './userlogin.service';
import { Router } from '@angular/router';
import {UsersignupService} from '../../signup/usersignup.service'

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  topicHasErr=false;
  isErr: boolean;
  constructor( private log:UserloginService,private route:Router ,private UsersignupService:UsersignupService) { }
  public userModel=new UserLogin('','')
  public token:Object;
  public isRegistered=false
  public Div;
  
  ngOnInit() {
    if (this.UsersignupService.registered)
    {
      console.log("asd")
      this.isRegistered = true
    this.Div= "Registerd Successfully, Login to Continue"
    }
    if (this.UsersignupService.authorized)
    {
      this.isErr = true
    this.Div= "Please Login To view this Page"
    }
  }


  onSubmit() {
    // console.log(this.userModel)
    this.log.logUser(this.userModel).subscribe(
      res=>
      {
        this.isErr = true;
         console.log(res)
        localStorage.setItem('userToken',res as string)
        this.route.navigate(['/home'])
        
    },
    error=>
    {
      this.isErr = true;
      this.Div=error.error.Msg
      console.log("erro")
    }
    );
   /*  this.log.logUser(this.userModel).subscribe(
      response =>{ console.log('toooooooo db', response)
      localStorage.setItem('tokenAuth',response['tokenAuth'])
      this.route.navigate(["/home"])
    },
      error => console.log('error',error)
      )*/
    } 


}
