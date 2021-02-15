import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPaymentComponent } from './box-payment.component';

describe('BoxPaymentComponent', () => {
  let component: BoxPaymentComponent;
  let fixture: ComponentFixture<BoxPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
