import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styleUrls: ["./success.component.scss"],
})
export class SuccessComponent implements OnInit {

  // init props & input coming
  @Input("title") title: string;
  @Input("body") body: string;

  // init all Output data send to parent component
  @Output() eventClosePopup: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    document.getElementById("body").innerHTML = this.body;
  }

  // if this func run => Output eventClosePopup will back data to parent component and
  //  the app-succes-forgot-password is hide
  closePopup() {
    this.eventClosePopup.emit(false);
  }
}
