import { Injectable, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Route, RouterModule } from '@angular/router';

import { ItemsComponent } from 'src/app/shared/components/items/items.component';
import { Observable, of } from 'rxjs';
import { PanierComponent } from './panier/panier.component';
import { ItemDetailsComponent } from 'src/app/shared/components/item-details/item-details.component';

@Injectable({ providedIn: 'root' })
export class KiraKeyWordRouteResolve implements Resolve<string> {
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
export class ItemDetailsRouteResolve implements Resolve<string> {
  constructor() {}
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    const nameItem = route.params.nameItem ? route.params.nameItem : null;
    if (nameItem) {
      return nameItem;
    }
    return of('');
  }
}

export const KiraBoRoute: Route = {
  path: 'boutique/boucles-oreilles',
  component: ItemsComponent,
  resolve: {
    keyWord: KiraKeyWordRouteResolve
  }
};

export const KiraColliersRoute: Route = {
  path: 'boutique/colliers',
  component: ItemsComponent,
  resolve: {
    keyWord: KiraKeyWordRouteResolve
  }
};

export const KiraBraceletsRoute: Route = {
  path: 'boutique/bracelets',
  component: ItemsComponent,
  resolve: {
    keyWord: KiraKeyWordRouteResolve
  }
};

export const KiraNouveautesRoute: Route = {
  path: 'boutique/nouveautes',
  component: ItemsComponent,
  resolve: {
    keyWord: KiraKeyWordRouteResolve
  }
};

export const ItemDetailsRoute: Route = {
  path: 'boutique/:keyWord/:nameItem',
  component: ItemDetailsComponent,
  resolve: {
    keyWord: KiraKeyWordRouteResolve,
    nameItem: ItemDetailsRouteResolve
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
