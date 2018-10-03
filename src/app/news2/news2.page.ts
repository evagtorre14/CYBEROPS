import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news2',
  templateUrl: './news2.page.html',
  styleUrls: ['./news2.page.scss'],
})
export class News2Page implements OnInit {
  
  datos;
  data1= this.newsService.data1;
  data2=this.newsService.data2;
  data3=this.newsService.data3;

  medioAmbiente;
  energia;
  finanzas;

  tipoNoticias;

  constructor(private newsService: NewsService,  private router: Router) { 
    this.datos=newsService.datos;
    this.tipoNoticias=newsService.tipoNoticias;
  }

  ngOnInit() {
   
  }
  goToHome(){
    //this.newsService.resetData();
    this.router.navigate(['/news']);

  }
  changeToMedioambiente(){
    this.tipoNoticias="Medio Ambiente";
    this.newsService.tipoNoticias=this.tipoNoticias;
    this.datos=this.data1;
    this.medioAmbiente=true;
    this.energia=false;
    this.finanzas=false;
    this.newsService.datos=this.data1;
    
  }
  changeToEnergia(){
    this.tipoNoticias="Energía";
    this.newsService.tipoNoticias=this.tipoNoticias;
    this.datos=this.data2;
    this.medioAmbiente=false;
    this.energia=true;
    this.finanzas=false;
    this.newsService.datos=this.data2;
    
  }
  changeToFinanciero(){
    this.tipoNoticias="Finanzas";
    this.newsService.tipoNoticias=this.tipoNoticias;
    this.datos=this.data3;
    this.medioAmbiente=false;
    this.energia=false;
    this.finanzas=true;
    this.newsService.datos=this.data3;
    
  }
  

}
