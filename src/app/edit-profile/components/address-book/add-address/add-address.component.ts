import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EditProfileService } from './../../../../services/edit-profile.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-add-address",
  templateUrl: "./add-address.component.html",
  styleUrls: ["./add-address.component.scss"],
})
export class AddAddressComponent implements OnInit {
  
  // init names var
  isLoading: boolean;
  FormAddAdress: FormGroup;

  constructor(
    private FB: FormBuilder,
    private EditProfile: EditProfileService,
    private router: Router,
    private route : ActivatedRoute) {
    // init vars
    this.FormAddAdress = this.FB.group({
      country: ["", Validators.required],
      city: ["select", Validators.required],
      code: ["", Validators.required],
      address: ["", Validators.required],
      note: ["", Validators.required],
    });
    this.isLoading = false
  }

  ngOnInit() {}

  //
  addAddress() {
    this.isLoading = true;
    
    this.EditProfile.addAddress({...this.FormAddAdress.value}).subscribe(res => {
      this.isLoading = false;
      this.router.navigate(["../"], { relativeTo: this.route });
    })
  }

}
