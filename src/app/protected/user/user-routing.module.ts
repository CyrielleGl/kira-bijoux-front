import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommandesComponent } from './commandes/commandes.component';
import { FavorisComponent } from './favoris/favoris.component';
import { InformationsComponent } from './informations/informations.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'commandes',
        component: CommandesComponent
      },
      {
        path: 'favoris',
        component: FavorisComponent
      },
      {
        path: 'informations',
        component: InformationsComponent
      },
      {
        path: '',
        redirectTo: 'commandes',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
