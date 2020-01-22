import { Component, OnInit } from '@angular/core';
import { UserLogin } from './user-login';
import { UserloginService } from './userlogin.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  topicHasErr=false;
  constructor( private log:UserloginService) { }
  public userModel=new UserLogin('','')
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
      response => console.log('toooooooo db', response),
      error => console.log('error',error)
      )
    }


}
