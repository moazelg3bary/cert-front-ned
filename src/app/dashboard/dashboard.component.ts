import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showDashboard: any = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page]);
  }

}
