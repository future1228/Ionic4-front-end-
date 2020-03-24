import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './services/authentication/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule) },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./public/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
