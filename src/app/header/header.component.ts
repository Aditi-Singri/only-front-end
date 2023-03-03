import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/Service/signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  constructor(private signup : SignupService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.signup.isLoggedIn;
  }
  register(){

  }
  onLogout() {
    this.isLoggedIn=false;} 
  signin(){
    
  }
}
