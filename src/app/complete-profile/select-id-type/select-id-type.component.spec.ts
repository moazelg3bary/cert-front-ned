import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIdTypeComponent } from './select-id-type.component';

describe('SelectIdTypeComponent', () => {
  let component: SelectIdTypeComponent;
  let fixture: ComponentFixture<SelectIdTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectIdTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIdTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
