"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news_service_1 = require("../news.service");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
//import { FORMERR } from 'dns';
var NewsPage = /** @class */ (function () {
    function NewsPage(newsService, router, alertCtrl) {
        this.newsService = newsService;
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    NewsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.tipoNoticias = "Medio Ambiente";
        //this.numeros=[];
        this.newsService
            .getData('everything?q=contaminacion&pageSize=1')
            .subscribe(function (data) {
            //console.log(data);
            _this.data1 = data;
            _this.datos = _this.data1;
        });
        /*
      this.newsService
        .getData('everything?q=potencia&pageSize=10')
        .subscribe(data=> {
            //console.log(data);
          this.data2 = data;
            }),
  
      this.newsService
        .getData('everything?q=financiero&pageSize=10')
        .subscribe(data=> {
            //console.log(data);
          this.data3 = data;
            })*/
    };
    /*
      chooseArticles(articulos){
        this.data=[articulos[0],
                    articulos[1],
                    articulos[2],
                    articulos[3],
                    articulos[4],
                    articulos[5],
                    articulos[6]
                  ];
        return this.data;
      }
      randomA(){
        var a=Math.floor(Math.random()*(20-0+1)+0);
        for(var i=0; i<this.numeros.length-1; i++){
          if(a==this.numeros[i]){
            this.randomA();
          }
        }
        this.numeros.push(a);
          console.log(this.numeros);
          return a;
    
      }
    */
    NewsPage.prototype.onGoToSinglePage = function (article) {
        this.newsService.currentArticle = article;
        angular_1.Refresher;
        console.log("Al darle al articulo el currentArticle es:" + this.newsService.currentArticle);
        this.router.navigate(['/news-single']);
    };
    /*showAlert(){
      this.alertCtrl.create({
        message: "Detectado comportamiento anómalo",
        subHeader: "Posibles acciones",
        buttons: [
          {
            text: 'Bloquear elemento',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Corregir error',
            handler: () => {
              console.log('Agree clicked');
            }
          }
        ]
      }).then(alert => alert.present())
    }*/
    NewsPage.prototype.showAlert = function () {
        this.alertCtrl.create({
            message: "Un fallo importante requiere su atención inmediata!",
            subHeader: "Peligro"
        }).then(function (alert) { return alert.present(); });
    };
    NewsPage.prototype.changeToMedioambiente = function () {
        this.tipoNoticias = "Medio Ambiente";
        this.datos = this.data1;
    };
    NewsPage.prototype.changeToEnergia = function () {
        this.tipoNoticias = "Energía";
        this.datos = this.data2;
    };
    NewsPage.prototype.changeToFinanciero = function () {
        this.tipoNoticias = "Finanzas";
        this.datos = this.data3;
    };
    NewsPage = __decorate([
        core_1.Component({
            selector: 'app-news',
            templateUrl: './news.page.html',
            styleUrls: ['./news.page.scss'],
        }),
        __metadata("design:paramtypes", [news_service_1.NewsService, router_1.Router, angular_1.AlertController])
    ], NewsPage);
    return NewsPage;
}());
exports.NewsPage = NewsPage;
//# sourceMappingURL=news.page.js.map