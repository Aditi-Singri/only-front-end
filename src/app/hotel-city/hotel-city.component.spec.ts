import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCityComponent } from './hotel-city.component';

describe('HotelCityComponent', () => {
  let component: HotelCityComponent;
  let fixture: ComponentFixture<HotelCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
