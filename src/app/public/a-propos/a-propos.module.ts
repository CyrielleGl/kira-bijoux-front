import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AProposComponent } from './a-propos.component';
import { EntretienBijouxComponent } from './entretien-bijoux/entretien-bijoux.component';
import { LaMarqueComponent } from './la-marque/la-marque.component';



@NgModule({
  declarations: [AProposComponent, EntretienBijouxComponent, LaMarqueComponent],
  imports: [
    CommonModule
  ]
})
export class AProposModule { }
