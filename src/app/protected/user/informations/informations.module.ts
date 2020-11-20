import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsComponent } from './informations.component';
import { GeneralComponent } from './general/general.component';
import { AdressesComponent } from './adresses/adresses.component';
import { PaiementComponent } from './paiement/paiement.component';
import { SecuriteComponent } from './securite/securite.component';



@NgModule({
  declarations: [InformationsComponent, GeneralComponent, AdressesComponent, PaiementComponent, SecuriteComponent],
  imports: [
    CommonModule
  ]
})
export class InformationsModule { }
