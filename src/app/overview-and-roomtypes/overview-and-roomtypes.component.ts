import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelBookingOperationsService } from 'src/Service/hotel-booking-operations.service';
import { VariablesService } from 'src/Service/variables.service';
import { HotelOverview, RoomType ,Image} from '../model/HotelModels';

@Component({
  selector: 'app-overview-and-roomtypes',
  templateUrl: './overview-and-roomtypes.component.html',
  styleUrls: ['./overview-and-roomtypes.component.css']
})
export class OverviewAndRoomtypesComponent implements OnInit {

  ImagePath: string;
  allHotelOverviews:HotelOverview[]=[];
  roomTypes : RoomType[]=[];
  RoomFacilities : any;
  rt1img: any;
  images:Image[]=[];
  roomsAvailaible:number[]=[]

  constructor(private HotelOverviewService : HotelBookingOperationsService, private http: HttpClient, private variableService: VariablesService, private router : Router) {
    //image location
    this.ImagePath = '../assets/img/roomtype1.jpg'
    
  }
  ngOnInit(){
    this.HotelOverviewService.viewHotelOverview(this.variableService.hotelId).subscribe((result)=>
    {
      
      console.log(result);
      this.allHotelOverviews = result;
      console.log(this.allHotelOverviews);
      console.log(this.allHotelOverviews[2].description);
    
    })

   //for room facilities
  this.HotelOverviewService.roomFacilities(this.variableService.hotelId).subscribe((result)=>
  {
      console.log("room facilities yaar");
       console.log(result);
       this.RoomFacilities = result;
     
    
  })

    //for room types
    this.HotelOverviewService.roomTypes(this.variableService.hotelId).subscribe((result)=>{
        this.roomTypes=result;
  });

      //for images
      this.HotelOverviewService.roomTypeImages(this.variableService.hotelId).subscribe(images => {
        this.images = images;
      });
      this.HotelOverviewService.roomAvailaibility(this.variableService.hotelId,this.variableService.startdate,this.variableService.enddate,this.variableService.numofrooms,this.variableService.numofmem).subscribe((result)=>{
        this.roomsAvailaible=result;
  });
        
    }

    proceedToConfirm(roomtypeid:number){
      this.variableService.roomtypeId=roomtypeid;
      this.router.navigate(['Guestdetails'])
    }
}
