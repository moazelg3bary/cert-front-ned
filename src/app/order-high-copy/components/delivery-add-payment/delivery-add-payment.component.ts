import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EditProfileService } from 'src/app/services/edit-profile.service';

@Component({
  selector: 'app-delivery-add-payment',
  templateUrl: './delivery-add-payment.component.html',
  styleUrls: ['./delivery-add-payment.component.scss']
})
export class DeliveryAddPaymentComponent implements OnInit {

  // init name & type vars
  isloading: boolean;
  FormAddCard: FormGroup;

  constructor(
    private FB: FormBuilder,
    private EditProfile: EditProfileService,
    private router: Router,
    private route: ActivatedRoute
    ) {

    // init value vars
    this.FormAddCard = this.FB.group({
      number: ["", [Validators.required, Validators.minLength(16), Validators.pattern("[0-9]*")]],
      "Exp-Month": ["Month", Validators.required],
      "Exp-Year": ["Year", Validators.required],
      name: ["", Validators.required],
      ccv: ["", [Validators.required, Validators.minLength(3), Validators.pattern("[0-9]*")]],
    });
    this.isloading = false;
  }

  ngOnInit() {}

  // func AddCard => add card user to profile
  AddCard() {

    this,this.isloading = true

    this.EditProfile.addCard({...this.FormAddCard.value}).subscribe((res: any) => {
      this,this.isloading = false
      this.router.navigate(['../'], {relativeTo: this.route})
    })
  }

}
