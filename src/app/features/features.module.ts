import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesDashboardComponent } from './features-dashboard/features-dashboard.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: FeaturesDashboardComponent}
];

@NgModule({
  declarations: [
    FeaturesDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeaturesModule {

  constructor() {
    console.log('Features Module is loaded');
  }

}
