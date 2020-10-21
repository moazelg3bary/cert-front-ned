import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input('avatar') avatar: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page]);
  }

}
