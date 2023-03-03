import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VariablesService } from 'src/Service/variables.service';
import { HotelRating } from '../model/HotelModels';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  hotelratings: HotelRating[]=[];

  constructor(private http: HttpClient, private variableService : VariablesService) { }

  ngOnInit() {
    this.getRatings(this.variableService.hotelId);
  }

  getRatings(hotelId: number) {
    this.http.get<HotelRating[]>(`https://localhost:7231/api/Hotel/Ratings?hotelId=${hotelId}`)
      .subscribe(ratings => {
        this.hotelratings = ratings;
        console.log(this.hotelratings);
      });
  }

}
