import { Component, OnInit } from '@angular/core';
import { Toaster } from 'ngx-toast-notifications';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

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

  constructor(private authService: AuthService, private toast: Toaster, private loader: NgxUiLoaderService, private location: Location) { }

  ngOnInit() {
    this.getData();
    this.getCountries();
    this.initErrors();
  }

  getData() {
    this.loader.start();
    this.authService.me().subscribe((res: any) => {
      this.data = res.data;
      this.loader.stop();
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
    this.loader.start();
    this.loading = true;
    this.authService.updateProfile(this.data).subscribe((res: any) => {
      this.toast.open({text: 'Done', type: 'success'});
      this.loading = false;
      this.loader.stop();
    }, err => {
      for (let k in this.errors) {
        this.errors[k] = err.error.errors[k] || [];
      }
      this.loading = false;
      this.loader.stop();
    })
  }

  back() {
    this.location.back();
  }

}
