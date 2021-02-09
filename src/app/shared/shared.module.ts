import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { CookieService } from 'ngx-cookie-service';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

@NgModule({
  declarations: [ItemDetailsComponent],
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