import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EditProfileService } from 'src/app/services/edit-profile.service';

@Component({
  selector: "app-add-payment",
  templateUrl: "./edit-payment.component.html",
  styleUrls: ["./edit-payment.component.scss"],
})
export class EditPaymentComponent implements OnInit {

  // init name & type vars
  cardByID: {} | any;
  isloading: boolean;
  card_id: string | number;
  FormUpdateCard: FormGroup;

  constructor(
    private FB: FormBuilder,
    private EditProfile: EditProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // init value vars
    this.route.data.subscribe(res => this.cardByID = res.singelCard.data)

    // get id card 
    this.route.params.subscribe((res) => (this.card_id = res.card_id));

    this.FormUpdateCard = this.FB.group({
      number: [
        this.cardByID.number,
        [
          Validators.required,
          Validators.minLength(16),
          Validators.pattern("[0-9]*"),
        ],
      ],
      "Exp-Month": [this.cardByID["Exp-Month"], Validators.required],
      "Exp-Year": [this.cardByID["Exp-year"], Validators.required],
      name: [this.cardByID.name, Validators.required],
      ccv: [
        this.cardByID.ccv,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("[0-9]*"),
        ],
      ],
    });

    this.isloading = false;
  }

  ngOnInit() {
    console.log(this.cardByID)
  }

  // func AddCard => add card user to profile
  UpdateCard() {
    this.isloading = true

    this.EditProfile.updateCard({ ...this.FormUpdateCard.value,  id: this.card_id}).subscribe(
      (res: any) => {
        this.isloading = false;
        this.router.navigate(["../../"], { relativeTo: this.route });
      }
    );
  }
}
