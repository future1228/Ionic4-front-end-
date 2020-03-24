import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'page',
    component: MenuPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../../pages/settings/settings.module').then( m => m.SettingsPageModule)
      }
    ]
  },{
    path: '',
    redirectTo: 'page/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
