import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { EditProfileModule } from './edit-profile/edit-profile.module';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SelectIdTypeComponent } from "./complete-profile/select-id-type/select-id-type.component";
import { SelectNameComponent } from "./complete-profile/select-name/select-name.component";
import { SelectIdNumberComponent } from "./complete-profile/select-id-number/select-id-number.component";
import { SelectProfilePictureComponent } from "./complete-profile/select-profile-picture/select-profile-picture.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { InterceptorModule } from "./modules/interceptor.module";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { DragDropDirective } from "./directives/drag-drop.directive";
import { ToastNotificationsModule } from "ngx-toast-notifications";
import { StepperComponent } from "./new-certificate/stepper/stepper.component";
import { ViewCertificateComponent } from "./dashboard/view-certificate/view-certificate.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoaderService } from "./services/loader.service";
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { BoxForgtPasswordComponent } from './box-forgt-password/box-forgt-password.component';
import { SuccessComponent } from './shared/success/success.component';
import { RestPasswordComponent } from './rest-password/rest-password.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { OrderHighCopyComponent } from './order-high-copy/order-high-copy.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SelectIdTypeComponent,
    SelectNameComponent,
    SelectIdNumberComponent,
    SelectProfilePictureComponent,
    DragDropDirective,
    StepperComponent,
    ViewCertificateComponent,
    RestPasswordComponent,
    ProfileComponent,
    BoxForgtPasswordComponent,
    RestPasswordComponent,
    HeaderComponent,
    OrderHighCopyComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InterceptorModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgbModule,
    ToastNotificationsModule,
    NgxUiLoaderModule,
    SharedModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LoaderService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
