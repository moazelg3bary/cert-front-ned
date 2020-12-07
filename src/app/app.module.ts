import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SelectIdTypeComponent } from './complete-profile/select-id-type/select-id-type.component';
import { SelectNameComponent } from './complete-profile/select-name/select-name.component';
import { SelectIdNumberComponent } from './complete-profile/select-id-number/select-id-number.component';
import { SelectProfilePictureComponent } from './complete-profile/select-profile-picture/select-profile-picture.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './modules/interceptor.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DragDropDirective } from './directives/drag-drop.directive';
import { ToastNotificationsModule } from 'ngx-toast-notifications';
import { StepperComponent } from './new-certificate/stepper/stepper.component';
import { ViewCertificateComponent } from './dashboard/view-certificate/view-certificate.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    SelectIdTypeComponent,
    SelectNameComponent,
    SelectIdNumberComponent,
    SelectProfilePictureComponent,
    DragDropDirective,
    StepperComponent,
    ViewCertificateComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    ToastNotificationsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
