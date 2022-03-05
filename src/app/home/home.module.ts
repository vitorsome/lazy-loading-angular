import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', component: HomeDashboardComponent },
  { path:'details', pathMatch:'full', component: DetailsComponent}
];

@NgModule({
  declarations: [
    HomeDashboardComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {
  constructor() {
    console.log('Yo Home Module is loaded!');
  }
}
