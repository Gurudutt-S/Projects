import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStockPriceComponent } from './manage-stock-price.component';

describe('ManageStockPriceComponent', () => {
  let component: ManageStockPriceComponent;
  let fixture: ComponentFixture<ManageStockPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageStockPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageStockPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
