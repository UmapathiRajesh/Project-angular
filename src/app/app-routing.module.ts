import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogGuard } from './Guard/log.guard';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const routes: Routes = [
  // {path:"", redirectTo:"Login",pathMatch:"full"},
  {path:"Login", component:LoginComponent},
  {path:"Registration",component:RegistrationComponent},
  {path:"UserDashboard", component:UserDashboardComponent, canActivate:[LogGuard]}
  // {path:"**", component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
