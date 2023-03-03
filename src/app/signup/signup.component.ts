import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/Service/signup.service';
import { Signup } from '../model/HotelModels';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: Signup = {
    name: "",
    mobile: 0,
    emailId: "",
    password: "",

  }


  constructor(private signupService: SignupService) { }

  ngOnInit(): void {

  }
  signupform = new FormGroup({
    mobile: new FormControl('', [Validators.required,
      Validators.pattern("[0-9]*"),
    Validators.minLength(10),Validators.maxLength(10),
  ]),
  email:new FormControl('', [Validators.required,
    Validators.email]),

  password:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
  name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')])

  });

  get Mobile():FormControl{
    return this.signupform.get('mobile') as FormControl;

  }
  get Email():FormControl{
    console.log(this.signupform.get('email'))
    return this.signupform.get('email') as FormControl;
  }
  get Password():FormControl{
    return this.signupform.get('password') as FormControl;
  }
  get Name():FormControl{
    return this.signupform.get('name') as FormControl;
  }

  onSubmit() {
    this.signup.mobile = this.Mobile.value as number;
    this.signup.emailId = this.Email.value;
    this.signup.name=this.Name.value;
    this.signup.password=this.Password.value;
    this.signupService.createSignup(this.signup).subscribe((result) => {
      alert("User Registered")
    }, (err: HttpErrorResponse) => {
      alert("Already existing user !!")
    });
  }
 

}
