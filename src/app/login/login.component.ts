import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/Service/signup.service';
import { Login } from '../model/HotelModels';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  login: Login = {
    emailId: '',
    password: ''
  }

  data: any

  constructor(private signupService: SignupService, private router : Router) { }

  ngOnInit(): void {

  }
 
  onlogin() 
  {
     this.signupService.getLogin(this.login).subscribe(data => {
      this.data = data;
      this.login.emailId = data.emailId
      this.signupService.isLoggedIn=true;
      alert("Login Successfull !! Go back to proceed")
      
      // this.router.navigate(['']);
     },(err: HttpErrorResponse) => {
      alert("Invalid Email Id or password !!")
    });
    }
}
