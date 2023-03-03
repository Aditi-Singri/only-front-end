import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelOverview, RoomType, Image } from 'src/app/model/HotelModels';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelBookingOperationsService {

  constructor(private http : HttpClient) { }

  public viewHotelOverview(hid:number):Observable<HotelOverview[]>{
 
    return this.http.get<HotelOverview[]>(`${environment.apiUrl}/${"HotelOverview?hotelId="}${hid}`);
  }

  public roomTypeImages(hid:number):Observable<Image[]>{
 
    return this.http.get<Image[]>(`${environment.apiUrl}/${"RoomImages?hotelId="}${hid}`);
  }

  public roomTypes(hid:number):Observable<RoomType[]>{
    return this.http.get<RoomType[]>(`${environment.apiUrl}/${"RoomType?hotelId="}${hid}`)
  }

   public roomAvailaibility(hid:number, fromdate:string,todate:string,numofrooms:number,numofmem:number):Observable<number[]>{
     return this.http.get<number[]>(`${environment.apiUrl}/${"AvailaibleRooms?hotelId="}${hid}${"&fromdate="}${fromdate}${"&todate="}${todate}${"&numofrooms="}${numofrooms}${"&numofmem="}${numofmem}`)
  }

  public roomsReserved(rid:number, fromdate:string,todate:string,numofrooms:number):Observable<any>{
    return this.http.put<any>(`${environment.apiUrl}/${"RoomsReserved?roomtypeid="}${rid}${"&fromdate="}${fromdate}${"&todate="}${todate}${"&numofroomsreserved="}${numofrooms}`,{})
 }
  public roomFacilities(hid:number):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/${"RoomFacilitiesAsPerRoomTypeId?hotelId="}${hid}`)
 }
}
