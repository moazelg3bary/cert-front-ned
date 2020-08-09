import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-id-type',
  templateUrl: './select-id-type.component.html',
  styleUrls: ['./select-id-type.component.scss']
})
export class SelectIdTypeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page]);
  }

}
