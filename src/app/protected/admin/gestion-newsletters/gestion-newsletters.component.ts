import { Component, OnInit } from '@angular/core';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-gestion-newsletters',
  templateUrl: './gestion-newsletters.component.html',
  styleUrls: ['./gestion-newsletters.component.scss']
})
export class GestionNewslettersComponent implements OnInit {

  constructor(private cookieService: SecuService) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('admin');
  }

}
