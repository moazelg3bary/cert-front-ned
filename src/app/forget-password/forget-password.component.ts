import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.scss"],
})
export class ForgetPasswordComponent implements OnInit {
  inputPassword1 = true;
  inputPassword2 = true;
  constructor() {}

  ngOnInit() {}
}
