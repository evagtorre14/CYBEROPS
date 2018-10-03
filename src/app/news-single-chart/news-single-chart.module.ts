import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsSingleChartPage } from './news-single-chart.page';
import { ChartModule } from 'angular-highcharts';

const routes: Routes = [
  {
    path: '',
    component: NewsSingleChartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsSingleChartPage]
})
export class NewsSingleChartPageModule {}
