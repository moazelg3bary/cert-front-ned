import { EditProfileService } from 'src/app/services/edit-profile.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ResolveEditPaymentGuard implements Resolve<any> {
  constructor(private EditProfile: EditProfileService) {}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> {
    return this.EditProfile.editCard({card_id: next.params.card_id})
  }
}
