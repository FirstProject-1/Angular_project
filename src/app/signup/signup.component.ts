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
  Div: string;
  err: number=0
  
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
      response =>{/* localStorage.setItem('token',response['tokenAuth']) */
      this.user.registered=true
      console.log(response)
    }
      ,
      error => {console.log(error.error.Msg);
      this.err=1
      this.Div = error.error.Msg as string;}
      )

  }



}
