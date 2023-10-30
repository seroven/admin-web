import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [AuthLayoutComponent],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule
  ]
})
export class AuthLayoutModule { }
