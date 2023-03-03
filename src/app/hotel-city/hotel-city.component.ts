
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HotelCityService } from 'src/Service/hotel-city.service';
import { VariablesService } from 'src/Service/variables.service';
import { City, Hotel, HotelDto, HotelRating, Picture, Rating, RoomType, touristplace, touristplaceDto } from '../model/HotelModels';

@Component({
  selector: 'app-hotel-city',
  templateUrl: './hotel-city.component.html',
  styleUrls: ['./hotel-city.component.css']
})
export class HotelCityComponent implements OnInit {

  title = 'HotelCity'
  Hotels : Hotel[] = [];
  images : Hotel[] =[];
  tourists : touristplace[] = [];
  cities : City[] = []
  Ratings : Rating[] = []
  Rooms : RoomType[] = []
  hoteldto : HotelDto[] = []
  hotelg : touristplaceDto[] = []
  id=0;

  constructor(private hotelcityservice : HotelCityService,private http : HttpClient ,private variablesservice: VariablesService,private router : Router){}
  
  ngOnInit() : void {
    this.id=this.variablesservice.cityId
    this.http.get<Hotel[]>(`${environment.apiUrl}/${'Picture?cityid='}${this.id}`).subscribe(images => {
      this.images = images;
       })
        this.http.get<RoomType[]>(`${environment.apiUrl}/${'RoomTypePrice?cityid='}${this.id}`).subscribe(Rooms => {
        this.Rooms = Rooms;
        console.log(this.Rooms)
       })
      this.http.get<HotelDto[]>(`${environment.apiUrl}/${'Hotel?cityid='}${this.id}`).subscribe(hoteldto => {
        this.hoteldto = hoteldto;
      })

}

  getHotelInfo(hid:number)
  {
    this.variablesservice.hotelId=hid;
    this.router.navigate(['Hotel'])
  }

}
