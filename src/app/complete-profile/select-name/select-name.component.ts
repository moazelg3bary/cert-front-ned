import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-select-name',
  templateUrl: './select-name.component.html',
  styleUrls: ['./select-name.component.scss']
})
export class SelectNameComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page]);
  }

  back() {
    this.location.back();
  }

}
