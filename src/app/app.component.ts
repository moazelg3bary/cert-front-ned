import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { NgxUiLoaderService, SPINNER } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'iprotect';
  private spinner = SPINNER;

  constructor(private loader: LoaderService, private ngxService: NgxUiLoaderService) {}

  ngOnInit() {
  }
}
