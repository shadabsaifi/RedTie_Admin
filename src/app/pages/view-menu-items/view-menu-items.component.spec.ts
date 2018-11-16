import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuItemsComponent } from './view-menu-items.component';

describe('ViewMenuItemsComponent', () => {
  let component: ViewMenuItemsComponent;
  let fixture: ComponentFixture<ViewMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
