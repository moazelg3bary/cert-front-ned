import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-profile-picture',
  templateUrl: './select-profile-picture.component.html',
  styleUrls: ['./select-profile-picture.component.scss']
})
export class SelectProfilePictureComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page]);
  }

  back() {
    this.location.back();
  }

}
