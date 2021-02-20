import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InputFiledComponent } from './input-filed/input-filed.component';
import { BtnComponent } from './btn/btn.component';
import { SuccessComponent } from './success/success.component';
import { BoxPaymentComponent } from './box-payment/box-payment.component';



@NgModule({
  declarations: [
    NavbarComponent,
    InputFiledComponent,
    BtnComponent,
    SuccessComponent,
    BoxPaymentComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    NavbarComponent,
    InputFiledComponent,
    BtnComponent,
    SuccessComponent,
    BoxPaymentComponent
  ],
})
export class SharedModule {}
