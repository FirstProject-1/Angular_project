import { Component, OnInit } from '@angular/core';
import { Signup } from './signup';
import { UsersignupService } from './usersignup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  topicHasErr=false;
  constructor( private user:UsersignupService) { }
  public userModel=new Signup('','','','')
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
  

  onSubmit(){
    console.log(this.userModel)
    this.user.addUser(this.userModel).subscribe(
      response => console.log('toooooooo db', response),
      error => console.log('error',error)
      )
  }

}
