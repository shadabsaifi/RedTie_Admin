import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueManagementComponent } from './venue-management.component';

describe('VenueManagementComponent', () => {
  let component: VenueManagementComponent;
  let fixture: ComponentFixture<VenueManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
