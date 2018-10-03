import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { AlertController, Refresher } from '@ionic/angular';
import { AlertOptions } from '@ionic/core';
import { Chart } from 'angular-highcharts';




//import { FORMERR } from 'dns';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data1: any;
  data2: any;
  data3: any;
  datos;
  tipoNoticias: String;
  energia;
  medioAmbiente;
  finanzas;

  constructor( private newsService: NewsService, private router: Router, private alertCtrl: AlertController) { 
     
  }

  ngOnInit() {
    this.tipoNoticias="Energía";
    this.newsService.tipoNoticias=this.tipoNoticias;
    this.energia=true;
    
    //this.numeros=[];
    this.newsService
     .getData('everything?q=contaminacion&pageSize=1') 
      .subscribe(data=> {
        //console.log(data);
       this.data1 = data;
       this.newsService.data1=data;
       
      
      }),
        
    this.newsService
      .getData('everything?q=potencia&pageSize=1')
      .subscribe(data=> {
          //console.log(data);
        this.data2 = data;
        this.datos=this.data2;
        this.newsService.datos=data;
        this.newsService.data2=data;
       
          }),

    this.newsService
      .getData('everything?q=financiero&pageSize=1')
      .subscribe(data=> {
          //console.log(data);
        this.data3 = data;
        this.newsService.data3=data;
       
          })
  }

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
 

  onGoToSinglePage(article){
    this.newsService.currentArticle=article;
    Refresher;
    console.log("Al darle al articulo el currentArticle es:"+ this.newsService.currentArticle);
    this.router.navigate(['/news-single']);
  }
  
  onGoToAlertA(){
    this.router.navigate(['/alerta-a']);
  }
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
  showAlert(){
    this.alertCtrl.create({
      message: "Un fallo importante requiere su atención inmediata!",
      subHeader: "Peligro",
      buttons: [
        {
          text: 'No atender',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Atender',
          handler: () => {
            console.log('Agree clicked');
            this.router.navigate(['/alerta-a']);
          }
        }
      ]
    }).then(alert => alert.present())
  }
  changeToMedioambiente(){
    this.tipoNoticias="Medio \n Ambiente";
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
  changeLayout(){
    this.router.navigate(['/news2']);
  }
 

  chart1 = new Chart({
    title: {
       text: 'Solar Employment Growth by Sector, 2010-2016'
   },

   subtitle: {
       text: 'Source: thesolarfoundation.com'
   },

   yAxis: {
       title: {
           text: 'Number of Employees'
       }
   },

   plotOptions: {
       series: {
           label: {
               connectorAllowed: false
           },
           pointStart: 2010
       }
   },

   series: [{
       name: 'Installation',
       data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
   }, {
       name: 'Manufacturing',
       data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
   }, {
       name: 'Sales & Distribution',
       data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
   }, {
       name: 'Project Development',
       data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
   }, {
       name: 'Other',
       data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
   }],

   responsive: {
       rules: [{
           condition: {
               maxWidth: 500
           },
           
       }]}
 });

 chart2= new Chart({
  chart: {
    type: 'tilemap',
    inverted: true,
    height: '80%'
},

title: {
    text: 'U.S. states by population in 2016'
},


xAxis: {
    visible: false
},

yAxis: {
    visible: false
},

colorAxis: {
    dataClasses: [{
        from: 0,
        to: 1000000,
        color: '#F9EDB3',
        name: '< 1M'
    }, {
        from: 1000000,
        to: 5000000,
        color: '#FFC428',
        name: '1M - 5M'
    }, {
        from: 5000000,
        to: 20000000,
        color: '#FF7987',
        name: '5M - 20M'
    }, {
        from: 20000000,
        color: '#FF2371',
        name: '> 20M'
    }]
},

tooltip: {
    headerFormat: ''
},

plotOptions: {
    series: {
        dataLabels: {
            enabled: true,
            
            color: '#000000',
            style: {
                textOutline: false
            }
        }
    }
},

series: [{
    name: '',
    data: [{
        'hc-a2': 'AL',
        name: 'Alabama',
        region: 'South',
        x: 6,
        y: 7,
        value: 4849377
    }, {
        'hc-a2': 'AK',
        name: 'Alaska',
        region: 'West',
        x: 0,
        y: 0,
        value: 737732
    }, {
        'hc-a2': 'AZ',
        name: 'Arizona',
        region: 'West',
        x: 5,
        y: 3,
        value: 6745408
    }, {
        'hc-a2': 'AR',
        name: 'Arkansas',
        region: 'South',
        x: 5,
        y: 6,
        value: 2994079
    }, {
        'hc-a2': 'CA',
        name: 'California',
        region: 'West',
        x: 5,
        y: 2,
        value: 39250017
    }, {
        'hc-a2': 'CO',
        name: 'Colorado',
        region: 'West',
        x: 4,
        y: 3,
        value: 5540545
    }, {
        'hc-a2': 'CT',
        name: 'Connecticut',
        region: 'Northeast',
        x: 3,
        y: 11,
        value: 3596677
    }, {
        'hc-a2': 'DE',
        name: 'Delaware',
        region: 'South',
        x: 4,
        y: 9,
        value: 935614
    }, {
        'hc-a2': 'DC',
        name: 'District of Columbia',
        region: 'South',
        x: 4,
        y: 10,
        value: 7288000
    }, {
        'hc-a2': 'FL',
        name: 'Florida',
        region: 'South',
        x: 8,
        y: 8,
        value: 20612439
    }, {
        'hc-a2': 'GA',
        name: 'Georgia',
        region: 'South',
        x: 7,
        y: 8,
        value: 10310371
    }, {
        'hc-a2': 'HI',
        name: 'Hawaii',
        region: 'West',
        x: 8,
        y: 0,
        value: 1419561
    }, {
        'hc-a2': 'ID',
        name: 'Idaho',
        region: 'West',
        x: 3,
        y: 2,
        value: 1634464
    }, {
        'hc-a2': 'IL',
        name: 'Illinois',
        region: 'Midwest',
        x: 3,
        y: 6,
        value: 12801539
    }, {
        'hc-a2': 'IN',
        name: 'Indiana',
        region: 'Midwest',
        x: 3,
        y: 7,
        value: 6596855
    }, {
        'hc-a2': 'IA',
        name: 'Iowa',
        region: 'Midwest',
        x: 3,
        y: 5,
        value: 3107126
    }, {
        'hc-a2': 'KS',
        name: 'Kansas',
        region: 'Midwest',
        x: 5,
        y: 5,
        value: 2904021
    }, {
        'hc-a2': 'KY',
        name: 'Kentucky',
        region: 'South',
        x: 4,
        y: 6,
        value: 4413457
    }, {
        'hc-a2': 'LA',
        name: 'Louisiana',
        region: 'South',
        x: 6,
        y: 5,
        value: 4649676
    }, {
        'hc-a2': 'ME',
        name: 'Maine',
        region: 'Northeast',
        x: 0,
        y: 11,
        value: 1330089
    }, {
        'hc-a2': 'MD',
        name: 'Maryland',
        region: 'South',
        x: 4,
        y: 8,
        value: 6016447
    }, {
        'hc-a2': 'MA',
        name: 'Massachusetts',
        region: 'Northeast',
        x: 2,
        y: 10,
        value: 6811779
    }, {
        'hc-a2': 'MI',
        name: 'Michigan',
        region: 'Midwest',
        x: 2,
        y: 7,
        value: 9928301
    }, {
        'hc-a2': 'MN',
        name: 'Minnesota',
        region: 'Midwest',
        x: 2,
        y: 4,
        value: 5519952
    }, {
        'hc-a2': 'MS',
        name: 'Mississippi',
        region: 'South',
        x: 6,
        y: 6,
        value: 2984926
    }, {
        'hc-a2': 'MO',
        name: 'Missouri',
        region: 'Midwest',
        x: 4,
        y: 5,
        value: 6093000
    }, {
        'hc-a2': 'MT',
        name: 'Montana',
        region: 'West',
        x: 2,
        y: 2,
        value: 1023579
    }, {
        'hc-a2': 'NE',
        name: 'Nebraska',
        region: 'Midwest',
        x: 4,
        y: 4,
        value: 1881503
    }, {
        'hc-a2': 'NV',
        name: 'Nevada',
        region: 'West',
        x: 4,
        y: 2,
        value: 2839099
    }, {
        'hc-a2': 'NH',
        name: 'New Hampshire',
        region: 'Northeast',
        x: 1,
        y: 11,
        value: 1326813
    }, {
        'hc-a2': 'NJ',
        name: 'New Jersey',
        region: 'Northeast',
        x: 3,
        y: 10,
        value: 8944469
    }, {
        'hc-a2': 'NM',
        name: 'New Mexico',
        region: 'West',
        x: 6,
        y: 3,
        value: 2085572
    }, {
        'hc-a2': 'NY',
        name: 'New York',
        region: 'Northeast',
        x: 2,
        y: 9,
        value: 19745289
    }, {
        'hc-a2': 'NC',
        name: 'North Carolina',
        region: 'South',
        x: 5,
        y: 9,
        value: 10146788
    }, {
        'hc-a2': 'ND',
        name: 'North Dakota',
        region: 'Midwest',
        x: 2,
        y: 3,
        value: 739482
    }, {
        'hc-a2': 'OH',
        name: 'Ohio',
        region: 'Midwest',
        x: 3,
        y: 8,
        value: 11614373
    }, {
        'hc-a2': 'OK',
        name: 'Oklahoma',
        region: 'South',
        x: 6,
        y: 4,
        value: 3878051
    }, {
        'hc-a2': 'OR',
        name: 'Oregon',
        region: 'West',
        x: 4,
        y: 1,
        value: 3970239
    }, {
        'hc-a2': 'PA',
        name: 'Pennsylvania',
        region: 'Northeast',
        x: 3,
        y: 9,
        value: 12784227
    }, {
        'hc-a2': 'RI',
        name: 'Rhode Island',
        region: 'Northeast',
        x: 2,
        y: 11,
        value: 1055173
    }, {
        'hc-a2': 'SC',
        name: 'South Carolina',
        region: 'South',
        x: 6,
        y: 8,
        value: 4832482
    }, {
        'hc-a2': 'SD',
        name: 'South Dakota',
        region: 'Midwest',
        x: 3,
        y: 4,
        value: 853175
    }, {
        'hc-a2': 'TN',
        name: 'Tennessee',
        region: 'South',
        x: 5,
        y: 7,
        value: 6651194
    }, {
        'hc-a2': 'TX',
        name: 'Texas',
        region: 'South',
        x: 7,
        y: 4,
        value: 27862596
    }, {
        'hc-a2': 'UT',
        name: 'Utah',
        region: 'West',
        x: 5,
        y: 4,
        value: 2942902
    }, {
        'hc-a2': 'VT',
        name: 'Vermont',
        region: 'Northeast',
        x: 1,
        y: 10,
        value: 626011
    }, {
        'hc-a2': 'VA',
        name: 'Virginia',
        region: 'South',
        x: 5,
        y: 8,
        value: 8411808
    }, {
        'hc-a2': 'WA',
        name: 'Washington',
        region: 'West',
        x: 2,
        y: 1,
        value: 7288000
    }, {
        'hc-a2': 'WV',
        name: 'West Virginia',
        region: 'South',
        x: 4,
        y: 7,
        value: 1850326
    }, {
        'hc-a2': 'WI',
        name: 'Wisconsin',
        region: 'Midwest',
        x: 2,
        y: 5,
        value: 5778708
    }, {
        'hc-a2': 'WY',
        name: 'Wyoming',
        region: 'West',
        x: 3,
        y: 3,
        value: 584153
    }]
}]
});

}
