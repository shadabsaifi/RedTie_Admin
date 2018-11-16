import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromotionBannerComponent } from './add-promotion-banner.component';

describe('AddPromotionBannerComponent', () => {
  let component: AddPromotionBannerComponent;
  let fixture: ComponentFixture<AddPromotionBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPromotionBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPromotionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
