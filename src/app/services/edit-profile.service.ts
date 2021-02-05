import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private http: HttpClient) { }

  editPersonalDetails(data: {}) {
    console.log(data);
    return this.http.post("auth/edit-profile", data);
  }
}
