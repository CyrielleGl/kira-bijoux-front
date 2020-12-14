import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommandesComponent } from './commandes/commandes.component';
import { FavorisComponent } from './favoris/favoris.component';
import { InformationsComponent } from './informations/informations.component';


const routes: Routes = [
  { path: 'mon-compte/commandes', component: CommandesComponent },
  { path: 'mon-compte/favoris', component: FavorisComponent },
  { path: 'mon-compte/informations', component: InformationsComponent },
  { path: 'mon-compte',
  loadChildren: () => import('../user/user.module').then(m => m.UserModule)
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
