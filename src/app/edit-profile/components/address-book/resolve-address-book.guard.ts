import { ProfileService } from 'src/app/services/profile.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveAddressBookGuard implements Resolve<any> {

  constructor(private Profile: ProfileService) {}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | Promise<any> {

    return this.Profile.getAddressUser();

  }
  
}
