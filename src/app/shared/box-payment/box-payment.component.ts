import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-box-payment',
  templateUrl: './box-payment.component.html',
  styleUrls: ['./box-payment.component.scss']
})
export class BoxPaymentComponent implements OnInit {

  // init props & input coming
  @Input('formGroupParent') formGroupParent: FormGroup

  constructor() {

  }

  ngOnInit() {}

}
