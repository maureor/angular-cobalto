import { CobaltoAboutComponent } from './cobalto-about/cobalto-about.component';
import { CobaltoProductsComponent } from './cobalto-products/cobalto-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: CobaltoProductsComponent
  },
  {
    path: 'about',
    component: CobaltoAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
