import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesForgotPasswordComponent } from './succes-forgot-password.component';

describe('SuccesForgotPasswordComponent', () => {
  let component: SuccesForgotPasswordComponent;
  let fixture: ComponentFixture<SuccesForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
