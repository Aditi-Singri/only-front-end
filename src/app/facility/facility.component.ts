import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/Service/variables.service';
import { HotelBasicFacility, HotelFamilyandkid, HotelFoodandDrink, HotelTransfer, ImageDatas, SafetyandSecurity } from '../model/HotelModels';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  hotelbasicfacility:HotelBasicFacility []=[];
  hoteltransfers:HotelTransfer[]=[];
  hotelfooddrinks:HotelFoodandDrink[]=[];
  hotelfamilykid:HotelFamilyandkid[]=[];
  hotelsafety:SafetyandSecurity[]=[];
  hotelimage:ImageDatas[]=[];
  hid=0;

  constructor(private http:HttpClient, private variableService:VariablesService){}

  ngOnInit() {
    this.hid=this.variableService.hotelId
    this.getHotelFacilities(this.hid);
    this.getTansfers(this.hid);
    this.getFoodandDrink(this.hid);
    this.getFamilyandKid(this.hid);
    this.getSafetySecurity(this.hid);
    this.gethotelimage(this.hid);

  }

  getHotelFacilities(hotelId: number){
    this.http.get<HotelBasicFacility[]>(`https://localhost:7231/api/Hotel/BasicFacility?hotelId=${hotelId}`)
    .subscribe(hotelbasicfacility=>{
      this.hotelbasicfacility=hotelbasicfacility;
      console.log(this.hotelbasicfacility);
    });
  }  

  getTansfers(hotelId: number){
    this.http.get<HotelTransfer[]>(`https://localhost:7231/api/Hotel/Transfers?hotelId=${hotelId}`)
    .subscribe(hoteltransfers=>{
      this.hoteltransfers=hoteltransfers;
      console.log(this.hoteltransfers);
    });
  }  

  getFoodandDrink(hotelId: number){
    this.http.get<HotelFoodandDrink[]>(`https://localhost:7231/api/Hotel/FoodDrink?hotelId=${hotelId}`)
    .subscribe(hotelfooddrinks=>{
      this.hotelfooddrinks=hotelfooddrinks;
      console.log(this.hotelfooddrinks);
    });
  }  

  getFamilyandKid(hotelId: number){
    this.http.get<HotelFamilyandkid[]>(`https://localhost:7231/api/Hotel/Familykid?hotelId=${hotelId}`)
    .subscribe(hotelfamilykid=>{
      this.hotelfamilykid=hotelfamilykid;
      console.log(this.hotelfamilykid);
    });
  }  

  getSafetySecurity(hotelId: number){
    this.http.get<SafetyandSecurity[]>(`https://localhost:7231/api/Hotel/SafetySecurity?hotelId=${hotelId}`)
    .subscribe(hotelsafety=>{
      this.hotelsafety=hotelsafety;
      console.log(this.hotelsafety);
    });
  }  

  gethotelimage(hotelId: number){
    this.http.get<ImageDatas[]>(`https://localhost:7231/api/Hotel/Image?hotelId=${hotelId}`)
    .subscribe(hotelimage=>{
      this.hotelimage=hotelimage;
      console.log(this.hotelimage);
    });
  }

}
