import { Component, OnInit } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  countries: any[] = [];
  data: any = {};
  loading: boolean = false;
  errors: any = {};

  constructor(private authService: AuthService, private toast: Toaster) { }

  ngOnInit() {
    this.getData();
    this.getCountries();
    this.initErrors();
  }

  getData() {
    this.authService.me().subscribe((res: any) => {
      this.data = res.data;
    })
  }

  getCountries() {
    this.authService.getCountries(true).subscribe((res: any) => {
      this.countries = res;
    });
  }

  initErrors() {
    this.errors = { nationality: [], email: [], first_name: [], middle_name: [], last_name: [], country_of_residence: [], phone_number: [], id_number: [] };
  }

  saveData() {
    this.initErrors();
    this.loading = true;
    this.authService.updateProfile(this.data).subscribe((res: any) => {
      this.toast.open({text: 'Done', type: 'success'});
      this.loading = false;
    }, err => {
      for (let k in this.errors) {
        this.errors[k] = err.error.errors[k] || [];
      }
      this.loading = false;
    })
  }

}
