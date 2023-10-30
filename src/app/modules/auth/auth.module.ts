import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginPageComponent, ErrorPageComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
