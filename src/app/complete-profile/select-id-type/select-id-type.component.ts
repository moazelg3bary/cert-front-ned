import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-id-type',
  templateUrl: './select-id-type.component.html',
  styleUrls: ['./select-id-type.component.scss']
})
export class SelectIdTypeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  navTo(page, type) {
    this.router.navigate(['../' + page], {
      relativeTo: this.route,
      queryParams: {id_type: type}
    });
  }

}
