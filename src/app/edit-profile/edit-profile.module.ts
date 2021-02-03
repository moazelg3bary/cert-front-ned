import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SharedModule } from '../shared/shared.module';
import { AddAddressComponent } from './components/address-book/add-address/add-address.component';


@NgModule({
  declarations: [
    EditProfileComponent,
    PersonalDetailsComponent,
    ProfileSettingsComponent,
    AddressBookComponent,
    PaymentComponent,
    AddAddressComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule ,EditProfileRoutingModule, SharedModule],
  exports: [EditProfileComponent],
})
export class EditProfileModule {}
