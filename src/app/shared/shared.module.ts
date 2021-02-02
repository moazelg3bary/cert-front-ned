import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { InputFiledComponent } from './input-filed/input-filed.component';



@NgModule({
  declarations: [NavbarComponent, InputFiledComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, InputFiledComponent],
})
export class SharedModule {}
