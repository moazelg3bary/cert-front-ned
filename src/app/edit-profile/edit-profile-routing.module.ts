import { ResolvePaymentGuard } from './components/payment/resolve-payment.guard';
import { EditPaymentComponent } from './components/payment/edit-payment/edit-payment.component';
import { ResolveEditAddressBookGuard } from './components/address-book/edit-address/resolve-edit-address.guard';
import { EditAddressComponent } from './components/address-book/edit-address/edit-address.component';
import { ResolveAddressBookGuard } from './components/address-book/resolve-address-book.guard';
import { AddPaymentComponent } from './components/payment/add-payment/add-payment.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { EditProfileComponent } from './edit-profile.component';
import { AddAddressComponent } from './components/address-book/add-address/add-address.component';
import { ResolveEditPaymentGuard } from './components/payment/edit-payment/resolve-edit-payment.guard';


const routes: Routes = [
  {
    path: "",
    component: EditProfileComponent,
    children: [
      { path: "personal-details", component: PersonalDetailsComponent },
      { path: "profile-settings", component: ProfileSettingsComponent },
      {
        path: "address-book",
        component: AddressBookComponent,
        resolve: { address: ResolveAddressBookGuard },
        children: [
          { path: "add", component: AddAddressComponent },
          {
            path: "edit/:address_id",
            component: EditAddressComponent,
            resolve: { singleAddress: ResolveEditAddressBookGuard },
          },
        ],
      },
      {
        path: "payment",
        component: PaymentComponent,
        resolve: { cards: ResolvePaymentGuard },
        children: [
          { path: "add", component: AddPaymentComponent },
          {
            path: "edit/:card_id",
            component: EditPaymentComponent,
            resolve: { singelCard: ResolveEditPaymentGuard },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProfileRoutingModule { }
