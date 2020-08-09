import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { SelectIdTypeComponent } from './complete-profile/select-id-type/select-id-type.component';
import { SelectNameComponent } from './complete-profile/select-name/select-name.component';
import { SelectIdNumberComponent } from './complete-profile/select-id-number/select-id-number.component';
import { SelectProfilePictureComponent } from './complete-profile/select-profile-picture/select-profile-picture.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
