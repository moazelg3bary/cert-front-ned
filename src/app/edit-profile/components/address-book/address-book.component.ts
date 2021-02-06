import { EditProfileService } from './../../../services/edit-profile.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

  // init names var
  addressUser: {}[] | any

  constructor(private router: ActivatedRoute,private EditProfile: EditProfileService, private profile: ProfileService) { }

  ngOnInit() {
    // use resolve guard to get Data before view component
    this.router.data.subscribe(res => this.addressUser = res.address.data);
  }
  
  // func deleteAddress run => delete address user & after respons is back 
  // fun func getAddressUser to get new list fo address user
  deleteAddress(id: string | number) {
    this.EditProfile.deleteAddress({address_id: id}).subscribe((res: any) => {
      res.success ?  this.profile.getAddressUser().subscribe((res: any) => this.addressUser = res.data) : null
    })
  }

}
