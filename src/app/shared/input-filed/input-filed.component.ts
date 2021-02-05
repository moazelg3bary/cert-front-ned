import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-input-filed",
  templateUrl: "./input-filed.component.html",
  styleUrls: ["./input-filed.component.scss"],
})
export class InputFiledComponent implements OnInit {
  
  //init props & inputs
  @Input("lable") lable: string;
  @Input("items") items: [];
  @Input("defInput") defInput: string;
  @Input("typeInput") typeInput: string;
  @Input("nameInput") nameInput: string;
  @Input("placeholder") placeholder: string;
  @Input("formGroupParent") formGroupParent: FormGroup;

  constructor() {}

  ngOnInit() {}
}
