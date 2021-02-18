import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewMyIdeaComponent } from './review-my-idea.component';

describe('ReviewMyIdeaComponent', () => {
  let component: ReviewMyIdeaComponent;
  let fixture: ComponentFixture<ReviewMyIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewMyIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewMyIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
