import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHighCopyComponent } from './order-high-copy.component';

describe('OrderHighCopyComponent', () => {
  let component: OrderHighCopyComponent;
  let fixture: ComponentFixture<OrderHighCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHighCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHighCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
