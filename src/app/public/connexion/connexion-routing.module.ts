import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Route, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConnexionComponent } from './connexion.component';

@Injectable({ providedIn: 'root' })
export class KiraConnectKeyWordRouteResolve implements Resolve<string> {
  constructor() {}
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const keyWord: any = route.url[0].path;
    if (keyWord) {
      return keyWord;
    }
    return of('');
  }
}

export const ConnexionInscriptionroute: Route = {
  path: 'connexion-inscription',
  loadChildren: () => import('../connexion/connexion.module').then(m => m.ConnexionModule)
};

export const InscriptionRoute: Route = {
  path: 'inscription',
  component: ConnexionComponent,
  resolve: {
    keyWord: KiraConnectKeyWordRouteResolve
  }
};

export const ConnexionRoute: Route = {
  path: 'connexion',
  component: ConnexionComponent,
  resolve: {
    keyWord: KiraConnectKeyWordRouteResolve
  }
};

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class ConnexionRoutingModule { }
