import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-succes-forgot-password',
  templateUrl: './succes-forgot-password.component.html',
  styleUrls: ['./succes-forgot-password.component.scss']
})
export class SuccesForgotPasswordComponent implements OnInit {

  // init all Output data send to parent component
  @Output() eventClosePopup: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  // if this func run => Output eventClosePopup will back data to parent component and
  //  the app-succes-forgot-password is hide
  closePopup() {
    this.eventClosePopup.emit(false)
  }

}
