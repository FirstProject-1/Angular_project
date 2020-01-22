import { Component, OnInit } from '@angular/core';
import { AdminLogin } from './admin-login';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  topicHasErr=false;
  constructor( private log:AdminService) { }
  public adminModel=new AdminLogin('','')
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
    // console.log(this.adminModel)
    this.log.logAdmin(this.adminModel).subscribe(
      response => console.log('login try done', response),
      error => console.log('error',error)
      )
    }

}
