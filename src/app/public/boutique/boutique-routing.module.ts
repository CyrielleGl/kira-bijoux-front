import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Route, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { Observable, of } from 'rxjs';
import { PanierComponent } from './panier/panier.component';

@Injectable({ providedIn: 'root' })
export class KiraBoRouteResolve implements Resolve<string> {
  constructor() {}
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const keyWord: any = route.url[1].path;
    console.warn(route);
    if (keyWord) {
      return keyWord;
    }
    return of('');
  }
}

@Injectable({ providedIn: 'root' })
export class KiraColliersRouteResolve implements Resolve<string> {
  constructor() {}
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const keyWord: any = route.url[1].path;
    if (keyWord) {
      return keyWord;
    }
    return of('');
  }
}

@Injectable({ providedIn: 'root' })
export class KiraBraceletsRouteResolve implements Resolve<string> {
  constructor() {}
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const keyWord: any = route.url[1].path;
    if (keyWord) {
      return keyWord;
    }
    return of('');
  }
}

@Injectable({ providedIn: 'root' })
export class KiraNouveautesRouteResolve implements Resolve<string> {
  constructor() {}
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const keyWord: any = route.url[1].path;
    if (keyWord) {
      return keyWord;
    }
    return of('');
  }
}

export const KiraBoRoute: Route = {
  path: 'boutique/boucles-oreilles',
  component: ItemsComponent,
  resolve: {
    keyWord: KiraBoRouteResolve
  }
};

export const KiraColliersRoute: Route = {
  path: 'boutique/colliers',
  component: ItemsComponent,
  resolve: {
    keyWord: KiraColliersRouteResolve
  }
};

export const KiraBraceletsRoute: Route = {
  path: 'boutique/bracelets',
  component: ItemsComponent,
  resolve: {
    keyWord: KiraBraceletsRouteResolve
  }
};

export const KiraNouveautesRoute: Route = {
  path: 'boutique/nouveautes',
  component: ItemsComponent,
  resolve: {
    keyWord: KiraNouveautesRouteResolve
  }
};

export const KiraPanierRoute: Route = {
  path: 'boutique/panier',
  component: PanierComponent,
};

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class BoutiqueRoutingModule { }
