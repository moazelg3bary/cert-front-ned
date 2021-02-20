import { CertificatesService } from 'src/app/services/certificates.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-review-my-idea",
  templateUrl: "./review-my-idea.component.html",
  styleUrls: ["./review-my-idea.component.scss"],
})
export class ReviewMyIdeaComponent implements OnInit {
  // init name & types vars
  isLoading: boolean;
  isDisable: boolean;
  isSuccess: boolean;
  FormReviewMyIdea: FormGroup;

  constructor(private FB: FormBuilder, private Cert: CertificatesService) {
    // init value Vars
    this.FormReviewMyIdea = this.FB.group({
      status: ["select", Validators.required],
      business: ["", Validators.required],
    });
    this.isLoading = false;
    this.isSuccess = false;
  }

  ngOnInit() {}

  // send state & business
  ReviewMyIdea() {

    this.isLoading = true;

    this.Cert.reviewIdeaEmail({ ...this.FormReviewMyIdea.value }).subscribe((res: any) => {

        // loading response
        this.isLoading = false;

        // destraction es6
        const { message, success } = res;
        // if success true show app-success component 
        success ? this.isSuccess = true : null;
      }
    );
  }
}
