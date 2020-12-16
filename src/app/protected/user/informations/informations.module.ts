import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { InformationsRoutingModule } from './informations-routing.module';
import { GeneralComponent } from './general/general.component';
import { AdressesComponent } from './adresses/adresses.component';
import { SecuriteComponent } from './securite/securite.component';



@NgModule({
  declarations: [
    GeneralComponent,
    AdressesComponent,
    SecuriteComponent],
  imports: [
    SharedModule,
    InformationsRoutingModule
  ]
})
export class InformationsModule { }
