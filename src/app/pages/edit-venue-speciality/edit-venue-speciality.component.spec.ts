import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVenueSpecialityComponent } from './edit-venue-speciality.component';

describe('EditVenueSpecialityComponent', () => {
  let component: EditVenueSpecialityComponent;
  let fixture: ComponentFixture<EditVenueSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVenueSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVenueSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
