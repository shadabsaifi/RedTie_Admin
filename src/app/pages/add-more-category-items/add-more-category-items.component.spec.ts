import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreCategoryItemsComponent } from './add-more-category-items.component';

describe('AddMoreCategoryItemsComponent', () => {
  let component: AddMoreCategoryItemsComponent;
  let fixture: ComponentFixture<AddMoreCategoryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoreCategoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoreCategoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
