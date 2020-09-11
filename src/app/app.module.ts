import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { SelectIdTypeComponent } from './complete-profile/select-id-type/select-id-type.component';
import { SelectNameComponent } from './complete-profile/select-name/select-name.component';
import { SelectIdNumberComponent } from './complete-profile/select-id-number/select-id-number.component';
import { SelectProfilePictureComponent } from './complete-profile/select-profile-picture/select-profile-picture.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { StepOneComponent } from './new-certificate/step-one/step-one.component';
import { StepTwoComponent } from './new-certificate/step-two/step-two.component';
import { StepThreeComponent } from './new-certificate/step-three/step-three.component';
import { StepFourComponent } from './new-certificate/step-four/step-four.component';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './modules/interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    CompleteProfileComponent,
    SelectIdTypeComponent,
    SelectNameComponent,
    SelectIdNumberComponent,
    SelectProfilePictureComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
