import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any = {};

  constructor(private router: Router, private authService: AuthService, private location: Location) { }

  ngOnInit() {
    this.authService.me().subscribe((res: any) => {
      this.user = res.data;
    })
  }

  navTo(page) {
    this.router.navigate([page]);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
