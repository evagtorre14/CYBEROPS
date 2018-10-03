import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsSinglePage } from './news-single.page';
import { ChartModule } from 'angular-highcharts';

const routes: Routes = [
  {
    path: '',
    component: NewsSinglePage
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
  declarations: [NewsSinglePage]
})
export class NewsSinglePageModule {}
