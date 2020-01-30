import { Component, OnInit } from '@angular/core';
import { AdminLogin } from './admin-login';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  topicHasErr=false;
  constructor( private log:AdminService,private route:Router) { }
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
      response => { console.log('toooooooo db', response)
      localStorage.setItem('tokenAuthAdmin',response['tokenAuthAdmin'])
      this.route.navigate(["/home"])
    }
        ,
        error => console.log('error',error)
        )
    }

}
