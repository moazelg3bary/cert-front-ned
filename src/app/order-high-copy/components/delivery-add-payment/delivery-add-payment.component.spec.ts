import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAddPaymentComponent } from './delivery-add-payment.component';

describe('DeliveryAddPaymentComponent', () => {
  let component: DeliveryAddPaymentComponent;
  let fixture: ComponentFixture<DeliveryAddPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryAddPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAddPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
