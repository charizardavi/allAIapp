import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { SwiperModule } from 'swiper/angular';


const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
