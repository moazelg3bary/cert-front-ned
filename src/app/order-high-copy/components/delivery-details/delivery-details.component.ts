import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss']
})
export class DeliveryDetailsComponent implements OnInit {

  // init names var
  addressUser: {}[] | any
  getIdAddress: string | number

  constructor(private Profile: ProfileService, private FB: FormBuilder, private router: Router) { 

  }

  ngOnInit() {
    // use resolve guard to get Data before view component
    this.Profile.getAddressUser().subscribe((res: any) => this.addressUser = res.data)
  }

  sendIdAddress(id: string | number) {
    this.getIdAddress = id
  }
  
}
