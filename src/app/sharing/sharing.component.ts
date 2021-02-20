import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-sharing",
  templateUrl: "./sharing.component.html",
  styleUrls: ["./sharing.component.scss"],
})
export class SharingComponent implements OnInit {

  // init names & type vars
  typeShare: string;
  isloading: boolean;
  isSuccess:boolean
  FormInvitation: FormGroup;

  constructor(private FB: FormBuilder, private Auth: AuthService) {

    // init vaue vars
    this.FormInvitation = this.FB.group({
      email: ["", [Validators.required, Validators.email]],
    });
    this.typeShare = "def";
    this.isloading = false;
    this.isSuccess = false
  }

  ngOnInit() {}

  invitation() {
    
    this.isloading = true;

    this.Auth.invitation({...this.FormInvitation.value}).subscribe({
      next: (res) => {
        this.isSuccess = true
      },
      error: (err) => {
        console.log(err);
        this.isloading = false;
        alert(err.error.message);
      },
      complete: () => {
        this.isloading = false;
      }
    })
    
    // this.isloading = false;

    // const { message, success } = res

    // if (success == false) {
    //   alert(message);
    //   return null
    // }
    // console.log(res)
    // console.log(this.FormInvitation);
  }
}
