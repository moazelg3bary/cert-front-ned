import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-id-number',
  templateUrl: './select-id-number.component.html',
  styleUrls: ['./select-id-number.component.scss']
})
export class SelectIdNumberComponent implements OnInit {

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
