import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private http: HttpClient) { }

  editPersonalDetails(data: {}) {
    return this.http.post("auth/edit-profile", data);
  }

  editPofileSetting(data: {}) {
    return this.http.post("auth/setting", data);
  }
}
