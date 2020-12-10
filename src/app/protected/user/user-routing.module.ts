import { NgModule } from '@angular/core';

import { CommandesComponent } from './commandes/commandes.component';
import { FavorisComponent } from './favoris/favoris.component';
import { InformationsModule } from './informations/informations.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'commandes', component: CommandesComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'informations', component: InformationsModule }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
