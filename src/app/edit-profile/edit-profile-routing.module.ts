import { PaymentComponent } from './components/payment/payment.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { EditProfileComponent } from './edit-profile.component';
import { AddAddressComponent } from './components/address-book/add-address/add-address.component';


const routes: Routes = [
  {
    path: "",
    component: EditProfileComponent,
    children: [
      { path: "personal-details", component: PersonalDetailsComponent },
      { path: "profile-settings", component: ProfileSettingsComponent },
      { path: "address-book", component: AddressBookComponent, children: [
        {path: 'add', component: AddAddressComponent}
      ] },
      { path: "payment", component: PaymentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProfileRoutingModule { }
