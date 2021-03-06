import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-btn",
  templateUrl: "./btn.component.html",
  styleUrls: ["./btn.component.scss"],
})
export class BtnComponent implements OnInit {

  // init props & inputs
  @Input("btn_title") btn_title: string;
  @Input("icon") icon: string;
  @Input("color") color: string;
  @Input('b_color') b_color: string
  @Input('bg_color') bg_color: string
  @Input("btn_type") btn_type: string;
  @Input("slideNext") slideNext: string;
  @Input("isloading") isloading: boolean;
  @Input("disabled") disabled: boolean;

  constructor() {}

  ngOnInit() {
    console.log()
  }
}
