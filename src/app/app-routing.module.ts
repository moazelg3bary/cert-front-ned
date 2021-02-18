import { ReviewMyIdeaComponent } from './review-my-idea/review-my-idea.component';
import { DeliveryPaymentComponent } from './order-high-copy/components/delivery-payment/delivery-payment.component';
import { DeliveryDetailsComponent } from './order-high-copy/components/delivery-details/delivery-details.component';
import { SharingComponent } from './sharing/sharing.component';
import { OrderHighCopyComponent } from './order-high-copy/order-high-copy.component';
import { RestPasswordComponent } from "./rest-password/rest-password.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SelectIdTypeComponent } from "./complete-profile/select-id-type/select-id-type.component";
import { SelectNameComponent } from "./complete-profile/select-name/select-name.component";
import { SelectIdNumberComponent } from "./complete-profile/select-id-number/select-id-number.component";
import { SelectProfilePictureComponent } from "./complete-profile/select-profile-picture/select-profile-picture.component";
import { StepperComponent } from "./new-certificate/stepper/stepper.component";
import { ViewCertificateComponent } from "./dashboard/view-certificate/view-certificate.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthService } from "./services/auth.service";
import { DeliveryAddAddressComponent } from './order-high-copy/components/delivery-add-address/delivery-add-address.component';
import { DeliveryAddPaymentComponent } from './order-high-copy/components/delivery-add-payment/delivery-add-payment.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "password/reset/:token",
    component: RestPasswordComponent,
  },
  {
    path: "dashboard",
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: ":new",
        component: DashboardComponent,
      },
    ],
  },
  {
    path: "view-certificate/:id",
    component: ViewCertificateComponent,
    children: [
      {
        path: "order/:id",
        component: OrderHighCopyComponent,
        children: [
          { path: "", component: DeliveryDetailsComponent },
          { path: "add-address", component: DeliveryAddAddressComponent },
          { path: "payment", component: DeliveryPaymentComponent },
          { path: "add-payment", component: DeliveryAddPaymentComponent },
        ],
      },
      { path: "sharing/:id", component: SharingComponent },
      { path: "review", component: ReviewMyIdeaComponent },
    ],
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "complete-profile",
    children: [
      {
        path: "",
        redirectTo: "select-id-type",
        pathMatch: "full",
      },
      {
        path: "select-id-type",
        component: SelectIdTypeComponent,
      },
      {
        path: "select-name",
        component: SelectNameComponent,
      },
      {
        path: "select-id-number",
        component: SelectIdNumberComponent,
      },
      {
        path: "select-profile-picture",
        component: SelectProfilePictureComponent,
      },
    ],
  },
  {
    path: "new-certificate",
    children: [
      {
        path: "",
        redirectTo: "stepper",
        pathMatch: "full",
      },
      {
        path: "stepper/:draftId",
        component: StepperComponent,
      },
      {
        path: "stepper",
        component: StepperComponent,
      },
    ],
  },
  {
    path: "edit-profile",
    loadChildren: () =>
      import("./edit-profile/edit-profile.module").then(
        (m) => m.EditProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public constructor(private router: Router, private authService: AuthService) {
    this.loginOrHome();
  }

  protected loginOrHome() {
    return;
    const accessToken = localStorage.getItem("iprotect__token");
    const userData = JSON.parse(localStorage.getItem("iprotect__user") || "{}");

    let page = accessToken
      ? userData["profile_completed"] == 0
        ? "complete-profile"
        : "dashboard"
      : this.checkCurrentRouteIsLogin()
      ? null
      : "login";
    // page = 'profile';
    if (page) this.router.navigate([page]);
    this.checkToken();
  }

  checkCurrentRouteIsLogin() {
    let currentRoute = window.location.hash;
    return currentRoute == "#/login" || currentRoute == "#/register";
  }

  checkToken() {
    if (this.checkCurrentRouteIsLogin()) return;
    this.authService.me().subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        if (error.status == 401) {
          this.authService.logout();
        }
      }
    );
  }
}
