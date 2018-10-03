import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alerta-a',
  templateUrl: './alerta-a.page.html',
  styleUrls: ['./alerta-a.page.scss'],
})
export class AlertaAPage implements OnInit {

  constructor(private newsService: NewsService,  private router: Router) { }

  ngOnInit() {
  }

}
