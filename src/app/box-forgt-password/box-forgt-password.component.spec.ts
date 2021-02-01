import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxForgtPasswordComponent } from './box-forgt-password.component';

describe('BoxForgtPasswordComponent', () => {
  let component: BoxForgtPasswordComponent;
  let fixture: ComponentFixture<BoxForgtPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxForgtPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxForgtPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
