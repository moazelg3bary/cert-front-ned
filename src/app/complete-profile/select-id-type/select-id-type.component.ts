import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-select-id-type',
  templateUrl: './select-id-type.component.html',
  styleUrls: ['./select-id-type.component.scss']
})
export class SelectIdTypeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private loader: NgxUiLoaderService) { }

  ngOnInit() {
  }

  navTo(page, type) {
    this.loader.start();
    setTimeout(() => {
      this.loader.stop();
    }, 500);
    this.router.navigate(['../' + page], {
      relativeTo: this.route,
      queryParams: {id_type: type}
    });
  }

}
