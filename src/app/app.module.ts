import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilityComponent } from './facility/facility.component';
import { RatingComponent } from './rating/rating.component';
import { OverviewAndRoomtypesComponent } from './overview-and-roomtypes/overview-and-roomtypes.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { GuestDetailsComponent } from './guest-details/guest-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelhomeComponent } from './hotelhome/hotelhome.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HotelCityComponent } from './hotel-city/hotel-city.component';

const appRoute: Routes=[

  {path: '' , component: HomeComponent},
  {path:'Guestdetails',component:GuestDetailsComponent},
  {path:'Hotel',component:HotelhomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'overview',component:OverviewAndRoomtypesComponent},
  {path:'facility',component:FacilityComponent},
  {path:'rating',component:RatingComponent},
  {path:'footer',component:FooterComponent},
  {path:'header',component:HeaderComponent},
  {path:'card',component:CardComponent},
  {path:'hotelcity',component:HotelCityComponent},



  //{path: "" ,redirectTo:'Home' , pathMatch:'full'}
 
  ];

@NgModule({
  declarations: [
    AppComponent,
    FacilityComponent,
    RatingComponent,
    OverviewAndRoomtypesComponent,
    HomeComponent,
    GuestDetailsComponent,
    HotelhomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    CardComponent,
    HotelCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute),
    FontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
