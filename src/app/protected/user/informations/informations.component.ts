import { Component, OnInit } from '@angular/core';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  constructor(private cookieService: SecuService) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('user');
  }

}
