import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAndRoomtypesComponent } from './overview-and-roomtypes.component';

describe('OverviewAndRoomtypesComponent', () => {
  let component: OverviewAndRoomtypesComponent;
  let fixture: ComponentFixture<OverviewAndRoomtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewAndRoomtypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewAndRoomtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
