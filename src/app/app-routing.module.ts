import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectIdTypeComponent } from './complete-profile/select-id-type/select-id-type.component';
import { SelectNameComponent } from './complete-profile/select-name/select-name.component';
import { SelectIdNumberComponent } from './complete-profile/select-id-number/select-id-number.component';
import { SelectProfilePictureComponent } from './complete-profile/select-profile-picture/select-profile-picture.component';
import { StepperComponent } from './new-certificate/stepper/stepper.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'complete-profile',
    children: [
      {
        path: '',
        redirectTo: 'select-id-type',
        pathMatch: 'full'
      },
      {
        path: 'select-id-type',
        component: SelectIdTypeComponent,
      },
      {
        path: 'select-name',
        component: SelectNameComponent,
      },
      {
        path: 'select-id-number',
        component: SelectIdNumberComponent,
      },
      {
        path: 'select-profile-picture',
        component: SelectProfilePictureComponent,
      },
    ]
  },
  {
    path: 'new-certificate',
    children: [
      {
        path: '',
        redirectTo: 'stepper',
        pathMatch: 'full'
      },
      {
        path: 'stepper',
        component: StepperComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor(private router: Router) {
    this.loginOrHome();
  }

  protected loginOrHome() {
    const accessToken = localStorage.getItem('iprotect__token');
    const userData = JSON.parse(localStorage.getItem('iprotect__user') || '{}');

    let page = accessToken ? (userData['profile_completed'] == 0 ? 'complete-profile' : 'dashboard') : 'login';
    // page = 'new-certificate';

    // this.router.navigate([page]);
  }

}
