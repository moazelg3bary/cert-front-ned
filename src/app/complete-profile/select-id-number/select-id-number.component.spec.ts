import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIdNumberComponent } from './select-id-number.component';

describe('SelectIdNumberComponent', () => {
  let component: SelectIdNumberComponent;
  let fixture: ComponentFixture<SelectIdNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectIdNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIdNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
