import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-select-name',
  templateUrl: './select-name.component.html',
  styleUrls: ['./select-name.component.scss']
})
export class SelectNameComponent implements OnInit {

  data: any = {};

  constructor(private router: Router, private location: Location, private route: ActivatedRoute, private loader: NgxUiLoaderService) { }

  ngOnInit() {
    this.data = JSON.parse(JSON.stringify(this.route.snapshot.queryParams));
  }

  navTo(page) {
    this.loader.start();
    setTimeout(() => {
      this.loader.stop();
    }, 500);
    this.router.navigate(['../' + page], {
      relativeTo: this.route,
      queryParams: this.data
    });
  }

  back() {
    this.location.back();
  }

}
