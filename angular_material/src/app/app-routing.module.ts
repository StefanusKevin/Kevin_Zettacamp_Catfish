import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'stock_management', loadChildren: () => import('./stock-management/stock-management.module').then(m => m.StockManagementModule) },
  { path: 'menu_management', loadChildren: () => import('./menu-management/menu-management.module').then(m => m.MenuManagementModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
