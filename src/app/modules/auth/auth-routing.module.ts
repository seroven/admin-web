
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { isNotLoggedGuard } from './guards/is-not-logged.guard';

const routes: Routes = [
  {
    path: 'login',
    // canMatch: [isNotLoggedGuard],
    component: LoginPageComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
