import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class EditProfileService {
  constructor(private http: HttpClient) {}

  //post PersonalDetails
  editPersonalDetails(data: {}) {
    return this.http.post("auth/edit-profile", data);
  }

  //post PofileSetting
  editPofileSetting(data: {}) {
    return this.http.post("auth/setting", data);
  }

  // start post api Address
  addAddress(data: {}) {
    return this.http.post("auth/address-book/add", data);
  }

  editAddress(addressID: {}) {
    return this.http.post("auth/address-book/edit", addressID);
  }

  updateAddress(data: {}) {
    return this.http.post("auth/address-book/update", data);
  }

  deleteAddress(addressID: {}) {
    return this.http.post("auth/address-book/delete", addressID);
  }
  // end post api Address

  //start post api cards
  addCard(data: {}) {
    return this.http.post("auth/cards/add", data);
  }

  deleteCard(cardID: {}) {
    return this.http.post("auth/cards/delete", cardID);
  }
  //end post api cards
}
