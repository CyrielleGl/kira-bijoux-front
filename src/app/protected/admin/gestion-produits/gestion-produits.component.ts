import { Component, OnInit } from '@angular/core';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.scss']
})
export class GestionProduitsComponent implements OnInit {

  constructor(private cookieService: SecuService) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('admin');
  }

}
