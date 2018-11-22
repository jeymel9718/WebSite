import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegSiteComponent } from "./reg-site/reg-site.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'reg-site',
    component: RegSiteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
