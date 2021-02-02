import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InputFiledComponent } from './input-filed/input-filed.component';
import { BtnComponent } from './btn/btn.component';



@NgModule({
  declarations: [NavbarComponent, InputFiledComponent, BtnComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, InputFiledComponent, BtnComponent],
})
export class SharedModule {}
