import { Component, OnInit } from '@angular/core';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-securite',
  templateUrl: './securite.component.html',
  styleUrls: ['./securite.component.scss']
})
export class SecuriteComponent implements OnInit {

  constructor(private cookieService: SecuService) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('user');
  }

}
