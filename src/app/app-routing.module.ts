import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLayoutComponent } from './layout/panel-layout/panel-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

const routes: Routes =  [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: '/panel/product'
  },
  {
    path: 'panel',
    component: PanelLayoutComponent,
    children: [
      {
        path: 'product',
        loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'category',
        loadChildren: () => import('./modules/category/category.module').then(m => m.CategoryModule)
      }
    ],
    
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: '**',
    redirectTo: '/auth/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
