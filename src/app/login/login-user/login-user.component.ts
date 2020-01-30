import { Component, OnInit } from '@angular/core';
import { UserLogin } from './user-login';
import { UserloginService } from './userlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  topicHasErr=false;
  constructor( private log:UserloginService,private route:Router) { }
  public userModel=new UserLogin('','')
  public token:Object;
  ValidateTopic(topicValue)
  {
   if(topicValue==='default')
  {
   this.topicHasErr=true;
  }
   else
  {
   this.topicHasErr=false;
  }
  }
  ngOnInit() {
  }


  onSubmit() {
    // console.log(this.userModel)
    this.log.logUser(this.userModel).subscribe(
      response =>{ console.log('toooooooo db', response)
      localStorage.setItem('tokenAuth',response['tokenAuth'])
      this.route.navigate(["/home"])
    },
      error => console.log('error',error)
      )
    }


}
