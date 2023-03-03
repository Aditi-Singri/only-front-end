import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Signup } from 'src/app/model/HotelModels';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  isLoggedIn=false;
  constructor(private http: HttpClient) { }

  public getLogin(login: Login) {

    return this.http.get<Signup>(`https://localhost:7231/api/Hotel/${login.emailId}/${login.password}`)
  }

  public createSignup(signup: Signup) {
    return this.http.post<Signup>(`https://localhost:7231/api/Hotel/insertUser`, signup);

    //  return this.http.post(this.url,signup)

  }}
