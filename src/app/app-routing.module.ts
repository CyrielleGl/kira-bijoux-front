import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AProposComponent } from './public/a-propos/a-propos.component';
import { BijouxComponent } from './public/bijoux/bijoux.component';
import { ConnexionComponent } from './public/connexion/connexion.component';
import { HomeComponent } from './public/home/home.component';
import { MentionsLegalesComponent } from './public/mentions-legales/mentions-legales.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bijoux', component: BijouxComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
