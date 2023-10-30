import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';
import { AvatarComponent, BadgeComponent, DropdownModule, FooterModule, GridModule, HeaderModule, NavModule, SidebarModule, UtilitiesModule } from '@coreui/angular';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { PanelLayoutFooterComponent } from './panel-layout-footer/panel-layout-footer.component';
import { PanelLayoutHeaderComponent } from './panel-layout-header/panel-layout-header.component';
import { PanelLayoutComponent } from './panel-layout.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    PanelLayoutComponent,
    PanelLayoutHeaderComponent,
    PanelLayoutFooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SidebarModule,
    NgScrollbarModule,
    SharedModule,
    HeaderModule,
    NavModule,
    DropdownModule,
    AvatarComponent,
    BadgeComponent,
    UtilitiesModule,
    GridModule,
    AvatarComponent,
    FooterModule,
    IconModule
  ],
  providers: [
    IconSetService
  ]
})
export class PanelLayoutModule { }
