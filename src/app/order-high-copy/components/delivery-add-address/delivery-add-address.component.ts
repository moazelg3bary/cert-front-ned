import { EditProfileService } from 'src/app/services/edit-profile.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: "app-delivery-add-address",
  templateUrl: "./delivery-add-address.component.html",
  styleUrls: ["./delivery-add-address.component.scss"],
})
export class DeliveryAddAddressComponent implements OnInit {

  // init names var
  isLoading: boolean;
  FormAddAdress: FormGroup;
  constructor(private FB: FormBuilder, private EditProfile: EditProfileService) {
    
    // init vars
    this.FormAddAdress = this.FB.group({
      country: ["", Validators.required],
      city: ["select", Validators.required],
      code: ["", Validators.required],
      address: ["", Validators.required],
      note: ["", Validators.required],
    });
  }

  ngOnInit() {}

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
