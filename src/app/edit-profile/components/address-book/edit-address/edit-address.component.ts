import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { EditProfileService } from 'src/app/services/edit-profile.service';

@Component({
  selector: "app-edit-address",
  templateUrl: "./edit-address.component.html",
  styleUrls: ["./edit-address.component.scss"],
})
export class EditAddressComponent implements OnInit {
  // init names var
  addressById: {} | any;
  isLoading: boolean;
  FormEditAdress: FormGroup;
  address_id: string | number;

  constructor(
    private FB: FormBuilder,
    private EditProfile: EditProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // set singleAddress to addressById
    this.route.data.subscribe(
      (res) => (this.addressById = res.singleAddress.data)
    );

    // get id Address
    this.route.params.subscribe((res) => this.address_id = res.address_id);    

    // init vars
    this.FormEditAdress = this.FB.group({
      country: ["", Validators.required],
      city: [this.addressById.city, Validators.required],
      code: [this.addressById.code, Validators.required],
      address: [this.addressById.address, Validators.required],
      note: [this.addressById.note, Validators.required],
    });
    this.isLoading = false;
  }

  ngOnInit() {
  }

  // 
  EditAddress() {

    this.isLoading = true;

    this.EditProfile.updateAddress({...this.FormEditAdress.value, id: this.address_id}).subscribe(res => {
      this.isLoading = false;
      this.router.navigate(["../../"], { relativeTo: this.route });
    })
  }
}
