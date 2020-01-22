import { Component, OnInit } from '@angular/core';
import { UserLogin } from './user-login';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  topicHasErr=false;
  constructor() { }
  userModel=new UserLogin('asmaaayman@yahoo.com',"dhdgugj54253")
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

}
