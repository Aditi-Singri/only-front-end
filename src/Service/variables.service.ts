import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  cityId=0;
  hotelId=0;
  startdate="";
  enddate="";
  numofrooms=0;
  numofmem=0;
  roomtypeId=0;
  constructor() { }
}
