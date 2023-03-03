import { TestBed } from '@angular/core/testing';

import { HotelCityService } from './hotel-city.service';

describe('HotelCityService', () => {
  let service: HotelCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
