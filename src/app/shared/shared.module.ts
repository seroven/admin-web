import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationPlayer } from '@angular/animations';
import { MessageService } from 'primeng/api';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PrimengSharedModule } from './modules/primeng-shared.module';
import { UtilitiesSharedModule } from './modules/utilities-shared.module';

@NgModule({
  declarations: [ModalDeleteComponent],
  imports: [UtilitiesSharedModule, PrimengSharedModule],
  providers: [MessageService],
  exports: [ModalDeleteComponent, UtilitiesSharedModule, PrimengSharedModule],
})
export class SharedModule {}
