import { Component, OnInit } from '@angular/core';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  constructor(private cookieService: SecuService) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('user');
  }

}
