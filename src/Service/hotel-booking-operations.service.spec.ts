import { TestBed } from '@angular/core/testing';

import { HotelBookingOperationsService } from './hotel-booking-operations.service';

describe('HotelBookingOperationsService', () => {
  let service: HotelBookingOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelBookingOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
