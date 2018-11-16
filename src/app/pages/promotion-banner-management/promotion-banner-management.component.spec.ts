import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionBannerManagementComponent } from './promotion-banner-management.component';

describe('PromotionBannerManagementComponent', () => {
  let component: PromotionBannerManagementComponent;
  let fixture: ComponentFixture<PromotionBannerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionBannerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionBannerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
