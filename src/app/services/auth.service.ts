import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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
}
