import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EditProfileService } from '../services/edit-profile.service';

@Component({
  selector: "app-order-high-copy",
  templateUrl: "./order-high-copy.component.html",
  styleUrls: ["./order-high-copy.component.scss"],
})
export class OrderHighCopyComponent implements OnInit {
  // init outPut value
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  // init names var
  isLoading: boolean;
  isClose: boolean;
  typeAddress: string;
  typePayment: string;
  FormAddAdress: FormGroup;
  toggle_DeliveryWithPayment: boolean;

  constructor(
    private FB: FormBuilder,
    private EditProfile: EditProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // init vars
    this.FormAddAdress = this.FB.group({
      country: ["", Validators.required],
      city: ["select", Validators.required],
      code: ["", Validators.required],
      address: ["", Validators.required],
      note: ["", Validators.required],
    });
    this.isLoading = false;
    this.isClose = false;
    this.typeAddress = "def";
    this.typePayment = "def";
    this.toggle_DeliveryWithPayment = true;
  }

  ngOnInit() {}

  // if run func this component will distroy
  closePopUp() {
    this.close.emit(false);
  }

  //
  addAddress() {
    this.isLoading = true;

    this.EditProfile.addAddress({ ...this.FormAddAdress.value }).subscribe(
      (res) => {
        this.isLoading = false;
      }
    );
  }
}
