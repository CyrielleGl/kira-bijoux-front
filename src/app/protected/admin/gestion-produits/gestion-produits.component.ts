import { Component, OnInit } from '@angular/core';
import { faEye, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ButtonUpdateComponent } from 'src/app/shared/components/button-view/button-update.component';
import { ButtonViewComponent } from 'src/app/shared/components/button-view/button-view.component';
import { IItems, Items } from 'src/app/shared/models/item.model';
import { ItemsService } from 'src/app/shared/services/api/items/items.service';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.scss']
})
export class GestionProduitsComponent implements OnInit {

  settings: any;
  source: any[] = [];

  items: string[] | any = null;

  constructor(
    private cookieService: SecuService,
    private itemsService: ItemsService
    ) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('admin');
    this.initTableSettings();
    this.initDataSource();
  }

  initTableSettings(): void {
    this.settings = {
      actions: {
        add: false,
        edit: false,
        delete: false,
        position: 'right'
      },
      pager: {
        perPage: 10
      },
      columns: {
        name: {
          title: 'Nom',
          filter: true,
          sort: true
        },
        type: {
          title: 'Type',
          filter: true,
          sort: true
        },
        materials: {
          title: 'Matériaux',
          filter: true,
          sort: true
        },
        price: {
          title: 'Prix TTC',
          filter: true,
          sort: true
        },
        stock: {
          title: 'Stock',
          filter: true,
          sort: true
        },
        buttonView: {
          title: '',
          type: 'custom',
          filter: false,
          width: '20px',
          valuePrepareFonction: (value: any, row: any, cell: any) => {
            return {
              icon: faEye,
              animation: 'pulse',
              tooltip: 'Voir le produit',
              placement: 'top'
            };
          },
          renderComponent: ButtonViewComponent,
          onComponentInitFunction: (instance: any) => {
            instance.view.subscribe((row: any) => {
              // this.openOrderCardDialog(row);
            });
          }
        },
        buttonUpdate: {
          title: '',
          type: 'custom',
          filter: false,
          width: '20px',
          valuePrepareFonction: (value: any, row: any, cell: any) => {
            return {
              icon: faPencilAlt,
              animation: 'pulse',
              tooltip: 'Modifier le produit',
              placement: 'top'
            };
          },
          renderComponent: ButtonUpdateComponent,
          onComponentInitFunction: (instance: any) => {
            instance.view.subscribe((row: any) => {
              // this.openOrderCardDialog(row);
            });
          }
        }
      }
    };
  }

  initDataSource(): void {
    this.itemsService.getAllItems().subscribe((data: any) => {
      this.items = data;
      console.warn(this.items);
      if (this.items.length > 0) {
        this.items.map((item: any) => {
          const materials = item.materials.map((material: any) => {
            return  ' ' + material.name;
          });
          console.warn(materials);
          const obj = {
            item,
            name: item.name,
            type: item?.item_type?.name,
            materials: materials.toString(),
            price: item.price + ' €',
            stock: item.stock
          };
          this.source.push(obj);
        });
      }
    });
  }

}
