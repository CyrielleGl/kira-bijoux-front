import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { AlertStockModalComponent } from './components/item-details/alert-stock-modal/alert-stock-modal.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [AlertStockModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    FontAwesomeModule,
    Ng2SmartTableModule
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
