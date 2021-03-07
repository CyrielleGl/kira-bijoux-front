import { Component, OnInit } from '@angular/core';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-gestion-commandes',
  templateUrl: './gestion-commandes.component.html',
  styleUrls: ['./gestion-commandes.component.scss']
})
export class GestionCommandesComponent implements OnInit {

  constructor(private cookieService: SecuService) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('admin');
  }

}
