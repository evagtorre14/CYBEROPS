import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NewsPage } from '../news/news.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NewsPage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
