import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL= environment.apiUrl;
const API_KEY= environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  datos;
  tipoNoticias;
  data1;
  data2;
  data3;

  currentArticle: any;
  constructor(  private http: HttpClient) { 
    this.currentArticle=null; 
  }

  getData(url){
    return this.http.get(`${API_URL}/${url}&apikey=${API_KEY}`)
  }
  resetData(){
    this.currentArticle=null;
    console.log("al darle atrás, el currenArticle es" + this.currentArticle);
  }
}
