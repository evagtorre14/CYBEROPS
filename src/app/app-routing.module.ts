import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './news/news.module#NewsPageModule'},
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-single', loadChildren: './news-single/news-single.module#NewsSinglePageModule' },
  { path: 'news-single-chart', loadChildren: './news-single-chart/news-single-chart.module#NewsSingleChartPageModule' },
  { path: 'alertaA', loadChildren: './alerta-a/alerta-a.module#AlertaAPageModule' },
  { path: 'news2', loadChildren: './news2/news2.module#News2PageModule' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
