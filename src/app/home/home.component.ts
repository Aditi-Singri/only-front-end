import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VariablesService } from 'src/Service/variables.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  selectedValue="";
  startdate="";
  enddate="";
  noofrooms="";
  noofmem="";

  roomForm: FormGroup;
  roomOptions = [1, 2, 3, 4, 5]; // Change to your desired options
  memberOptions = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]; // Change to your desired options

 


  constructor(private variablesService : VariablesService, private router : Router, private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      rooms: [1], // Set the default value to 1
      members: [1] // Set the default value to 1
    });
   }

  ngOnInit(): void {
   
  }
  getLocation(){
    console.log(this.selectedValue);
    console.log(this.noofmem);
    this.variablesService.startdate=this.startdate;
    this.variablesService.enddate=this.enddate;
    this.variablesService.numofrooms=parseInt(this.noofrooms);
    this.variablesService.numofmem=parseInt(this.noofmem);
    if(this.selectedValue=="goa")
      this.variablesService.cityId=1;
    else
      this.variablesService.cityId=2;
    this.router.navigate(['hotelcity'])

  }

}
