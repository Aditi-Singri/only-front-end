import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { HotelBookingOperationsService } from 'src/Service/hotel-booking-operations.service';
import { SignupService } from 'src/Service/signup.service';
import { VariablesService } from 'src/Service/variables.service';
import { GuestDetails } from '../model/HotelModels';
@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  repeatPass: string ='none';

  displayMsg: string ='';
  isAccountCreated: boolean = false;
  guestDetails : GuestDetails={
    bookingFor: "",
    firstName: "",
    lastName: "",
    emailId:"",
    mobileNumber:""
  }
  roomsReserved=0;
  constructor(private http : HttpClient, private signupService : SignupService, private router: Router, private varService : VariablesService, private hotelServiice: HotelBookingOperationsService){}

  ngOnInit() {
     
  }

  guestdetailsForm = new FormGroup({
    firstname: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    lastname: new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*'),
    ]),
email: new FormControl('',[Validators.required,
Validators.email]),
mobile: new FormControl('',[
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.minLength(10),
      Validators.maxLength(10)
]),
booking: new FormControl('', [Validators.required]),
// pwd: new FormControl('',[
//       Validators.required,
//       Validators.minLength(6),
//       Validators.maxLength(15),
//     ]),
//     rpwd: new FormControl(''),
});
InsertUserDetails(){
if(this.signupService.isLoggedIn){
  this.hotelServiice.roomsReserved(this.varService.roomtypeId,this.varService.startdate,this.varService.enddate,this.varService.numofrooms).subscribe((result)=>{
    this.roomsReserved=result;
});  
  this.http.post(`https://localhost:7231/api/Hotel/GuestDetails`,this.guestDetails).subscribe((res)=>{
    if(res==1)
      {
        alert("Room Booked Successfully , Have a great time !!");
        console.log(this.varService.cityId)
        this.guestdetailsForm.reset();
        this.router.navigate([''])
      }
    
  });
  

}
else{
  alert("please login before you proceed");
  this.router.navigate(['login'])
}
}
  
    
    get FirstName(): FormControl {
      return this.guestdetailsForm.get("firstname") as FormControl;
    }
    get LastName(): FormControl {
      return this.guestdetailsForm.get("lastname") as FormControl;
    }
    get Email(): FormControl {
      return this.guestdetailsForm.get("email") as FormControl;
    }
    get Mobile(): FormControl {
      return this.guestdetailsForm.get("mobile") as FormControl;
    }
    get Booking(): FormControl {
      return this.guestdetailsForm.get("booking") as FormControl;
    }
    

}
