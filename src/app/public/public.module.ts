import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { ContactComponent } from './contact/contact.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { ConditionsRetourComponent } from './conditions-retour/conditions-retour.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    CoreModule,
    MentionsLegalesComponent, 
    ContactComponent, 
    LivraisonComponent, 
    ConditionsRetourComponent],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
