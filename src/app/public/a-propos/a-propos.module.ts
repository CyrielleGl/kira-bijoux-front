import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AProposComponent } from './a-propos.component';
import { EntretienBijouxComponent } from './entretien-bijoux/entretien-bijoux.component';
import { LaMarqueComponent } from './la-marque/la-marque.component';
import { LithotherapieComponent } from './lithotherapie/lithotherapie.component';
import { AProposRouterModule } from './a-propos-routing.module';


@NgModule({
  declarations: [AProposComponent, EntretienBijouxComponent, LaMarqueComponent, LithotherapieComponent],
  imports: [
    SharedModule,
    AProposRouterModule
  ]
})
export class AProposModule { }
