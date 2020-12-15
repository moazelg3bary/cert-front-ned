import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user: any = {};
  error: any;

  constructor(private router: Router, private authService: AuthService, private loader: NgxUiLoaderService) { }

  ngOnInit() {
  }

  navTo(page) {
    this.router.navigate([page]);
  }

  login() {
    this.loader.start();
    this.authService.login(this.user).subscribe((res: any) => {
      const accessToken = res.data.token;
      const userData = res.data;
      localStorage.setItem('iprotect__token', accessToken);
      localStorage.setItem('iprotect__user', JSON.stringify(userData));
      let page = userData['profile_completed'] == 0 ? 'complete-profile' : 'dashboard';
      this.router.navigate([page]);
      this.loader.stop();
    }, (err: any) => {
      this.error = err.error.message;
      this.loader.stop();
    })
  }

}
