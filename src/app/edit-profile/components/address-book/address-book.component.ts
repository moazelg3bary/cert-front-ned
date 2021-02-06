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

  constructor(private router: ActivatedRoute,private getAddress: ProfileService) { }

  ngOnInit() {
    // use resolve guard to get Data before view component
    this.router.data.subscribe(res => this.addressUser = res.address.data);
  }

}
