import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-my-idea',
  templateUrl: './review-my-idea.component.html',
  styleUrls: ['./review-my-idea.component.scss']
})
export class ReviewMyIdeaComponent implements OnInit {

  // init name & types vars
  FormReviewMyIdea: FormGroup

  constructor(private FB: FormBuilder) { 

    // init value Vars
    this.FormReviewMyIdea = this.FB.group({
      test: ["select", Validators.required],
      note: ["", Validators.required],
    });

  }

  ngOnInit() {
  }

}
