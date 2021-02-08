import { Component, OnInit } from '@angular/core';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-gestion-articles',
  templateUrl: './gestion-articles.component.html',
  styleUrls: ['./gestion-articles.component.scss']
})
export class GestionArticlesComponent implements OnInit {

  constructor(private cookieService: SecuService) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('admin');
  }

}
