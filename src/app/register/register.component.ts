import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

declare var jQuery: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit, AfterViewInit {
  countries: any[] = [];
  user: any = {};
  password_confirm: string = '';
  errors: any = {};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.initErrors();
  }

  ngAfterViewInit() {
    jQuery('[data-toggle="tooltip"]').tooltip()
    this.getCountries();
  }

  initErrors() {
    this.errors = {nationality: [], email: [], password: [], password_confirm: ''};
  }

  getCountries() {
    this.authService.getCountries().subscribe((res: any) => {
      this.countries = res;
    });
  }

  submit() {
    this.initErrors();
    if(this.user.password !== this.password_confirm) {
      this.errors.password_confirm = 'Passwords does not match';
      return;
    }
    this.authService.register(this.user).subscribe((res: any) => {
      // this.router.navigate(['complete'])
      localStorage.setItem('iprotect__token', res.data.token);
      localStorage.setItem('iprotect__user', JSON.stringify(res.data));
      this.router.navigate(['complete-profile']);
    }, (err: any) => {
      for(let k in this.errors) {
        this.errors[k] = err.error.errors[k] || [];
      }
    })
  }

  navTo(page) {
    this.router.navigate([page]);
  }

}
