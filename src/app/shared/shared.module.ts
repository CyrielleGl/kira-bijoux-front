import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
  ],
  exports : [
    CommonModule,
    NgbModule,
    NgbDropdown,
    FontAwesomeModule
  ],
  providers: [
    CookieService
  ]
})
export class SharedModule { }