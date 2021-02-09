import { Component, OnInit } from '@angular/core';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-gestion-reductions',
  templateUrl: './gestion-reductions.component.html',
  styleUrls: ['./gestion-reductions.component.scss']
})
export class GestionReductionsComponent implements OnInit {

  constructor(private cookieService: SecuService) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('admin');
  }

}
