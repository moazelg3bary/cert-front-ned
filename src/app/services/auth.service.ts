import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
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
}
