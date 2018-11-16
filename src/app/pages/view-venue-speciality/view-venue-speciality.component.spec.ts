import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVenueSpecialityComponent } from './view-venue-speciality.component';

describe('ViewVenueSpecialityComponent', () => {
  let component: ViewVenueSpecialityComponent;
  let fixture: ComponentFixture<ViewVenueSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVenueSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVenueSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
