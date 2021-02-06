import { EditProfileService } from 'src/app/services/edit-profile.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveEditAddressBookGuard implements Resolve<any> {

  constructor(private EditProfile: EditProfileService) {}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> | boolean{

    return this.EditProfile.editAddress({address_id: next.params.address_id})

  }
  
}
