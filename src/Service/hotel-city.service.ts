import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/model/HotelModels';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelCityService {

  private url = "Hotel";

  constructor(private http : HttpClient) { }
  public getHotelCity(cityId:number) : Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${environment.apiUrl}/${"hotelcitydetails?cityId="}${cityId}`);

}
}
