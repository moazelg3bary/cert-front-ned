import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private loader: NgxUiLoaderService, private router: Router) { }

  getCountries(cities = false) {
    // return this.http.get('https://restcountries.eu/rest/v2/all');
    let prefix = cities ? '_cities' : '';
    return this.http.get(`assets/json/countries${prefix}.json`);
  }

  register(user) {
    return this.http.post('register', user);
  }

  login(user) {
    return this.http.post('login', user);
  }

  completeProfile(data) {
    return this.http.post('auth/complete-profile', data);
  }

  updateProfile(data) {
    return this.http.post('auth/profile', data);
  }

  me() {
    return this.http.get('auth/me');
  }
  
  forgotPassword(data: {}) {
    return this.http.post('forget-password', data);
  }

  resrtPassword(token, data) {
    return this.http.post(`password/reset/${token}`, data);
  }

  invitation(data: {}) {
    return this.http.post("auth/invite", data);
  }

  public upload(formData) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post<any>('auth/upload', formData, {
      reportProgress: true,
      observe: 'events',
      headers: headers
    });
  }

  public logout() {
    localStorage.clear();
    this.router.navigate(['login']);
    this.loader.start();
    setTimeout(() => {
      this.loader.stop();
    }, 500);
  }
}
