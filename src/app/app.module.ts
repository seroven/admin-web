import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutModule } from './layout/auth-layout/auth-layout.module';
import { PanelLayoutModule } from './layout/panel-layout/panel-layout.module';
import { ToastModule } from 'primeng/toast';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthLayoutModule,
    PanelLayoutModule,
    ToastModule,
    IconModule
  ],
  providers: [
    IconSetService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
