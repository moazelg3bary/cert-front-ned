import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAddAddressComponent } from './delivery-add-address.component';

describe('DeliveryAddAddressComponent', () => {
  let component: DeliveryAddAddressComponent;
  let fixture: ComponentFixture<DeliveryAddAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryAddAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
