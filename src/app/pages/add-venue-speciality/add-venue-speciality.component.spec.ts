import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVenueSpecialityComponent } from './add-venue-speciality.component';

describe('AddVenueSpecialityComponent', () => {
  let component: AddVenueSpecialityComponent;
  let fixture: ComponentFixture<AddVenueSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVenueSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVenueSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
