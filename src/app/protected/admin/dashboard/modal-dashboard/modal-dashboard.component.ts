import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { User } from 'src/app/shared/models/user.model';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faEye, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ButtonViewComponent } from 'src/app/shared/components/button-view/button-view.component';
import { OrderDetailsComponent } from '../../gestion-commandes/order-details/order-details.component';
import { formatDateToWeb } from 'src/app/shared/services/utils/utils.service';
import { ButtonUpdateComponent } from 'src/app/shared/components/button-view/button-update.component';
import { ProductUpdateComponent } from '../../gestion-produits/product-update/product-update.component';
import { ProductDetailsComponent } from '../../gestion-produits/product-details/product-details.component';

@Component({
  selector: 'app-modal-dashboard',
  templateUrl: './modal-dashboard.component.html'
})
export class ModalDashboardComponent implements OnInit {

  settings: any;
  source: any[] = [];

  keyWord: any;
  users: User[] | any = [];
  orders: [] | any = [];
  chiffreAffaires: string | any = null;
  items: string[] | any = null;
  validateOrders: [] | any = [];
  cancelledOrders: [] | any = [];
  unstockedItems: [] | any = [];
  stockedItems: [] | any = [];

  indicatorUsers = 'Utilisateurs inscrits';
  indicatorValidateOrder = 'Commmandes payées';
  indicatorCa = 'Chiffre d\'affaires';
  indicatorStockedProducts = 'Produits disponibles';
  indicatorCancelledOrders = 'Commandes annulées';
  indicatorUnstockedProducts = 'Produits à fabriquer';

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
      console.warn(this.keyWord);
      if (this.keyWord === this.indicatorUsers || this.indicatorValidateOrder) {
          this.initTableSettings();
          console.warn(this.users);
          console.warn(this.validateOrders);
      }
  }

  initTableSettings(): void {
    if (this.keyWord === this.indicatorUsers) {
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
                id: {
                title: 'ID',
                filter: false,
                sort: true
                },
                lastName: {
                title: 'Nom',
                filter: false,
                sort: true
                },
                firstName: {
                title: 'Prénom',
                filter: false,
                sort: true
                },
                mail: {
                title: 'Mail',
                filter: false,
                sort: true
                },
                button: {
                title: '',
                type: 'custom',
                filter: false,
                width: '20px',
                valuePrepareFonction: (value: any, row: any, cell: any) => {
                    return {
                    icon: faEye,
                    animation: 'pulse',
                    tooltip: 'Voir le détail',
                    placement: 'top'
                    };
                },
                renderComponent: ButtonViewComponent,
                onComponentInitFunction: (instance: any) => {
                    instance.view.subscribe((row: any) => {
                    // this.openOrderCardDialog(row);
                    });
                }
                }
            }
        };
    } else if (this.keyWord === this.indicatorValidateOrder) {
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
              commande: {
                title: 'N° de commande',
                filter: false,
                sort: true
              },
              date: {
                title: 'Date',
                filter: false,
                sort: true
              },
              statut: {
                title: 'Statut',
                filter: false,
                sort: true
              },
              prix: {
                title: 'Total TTC',
                filter: false,
                sort: true
              },
              button: {
                title: '',
                type: 'custom',
                filter: false,
                width: '20px',
                valuePrepareFonction: (value: any, row: any, cell: any) => {
                  return {
                    icon: faEye,
                    animation: 'pulse',
                    tooltip: 'Voir le détail',
                    placement: 'top'
                  };
                },
                renderComponent: ButtonViewComponent,
                onComponentInitFunction: (instance: any) => {
                  instance.view.subscribe((row: any) => {
                    this.openOrderCardDialog(row);
                  });
                }
              }
            }
          };
    } else if (this.keyWord === this.indicatorStockedProducts) {
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
                    this.openProductViewDialog(row);
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
                    this.openProductUpdateDialog(row);
                  });
                }
              }
            }
          };
    }
    this.initDataSource();
  }

  initDataSource(): void {
    if (this.keyWord === this.indicatorUsers) {
        this.users.map((user: any) => {
            const obj = {
                user,
                id: user.id,
                lastName: user.lastname,
                firstName: user.firstname,
                mail: user.mail
            };
            this.source.push(obj);
        });
    } else if (this.keyWord === this.indicatorValidateOrder) {
        this.validateOrders.map((vo: any) => {
            const obj = {
                vo,
                commande: vo.order.id,
                date: formatDateToWeb(vo.order.inserted_at, 'dd/MM/yyyy'),
                statut: vo.order.status?.name,
                prix: vo.order.price + ' €'
            };
            this.source.push(obj);
        });
    } else if (this.keyWord === this.indicatorStockedProducts) {
        this.stockedItems.map((item: any) => {
            const materials = item.materials.map((material: any) => {
                return  ' ' + material.name;
              });
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
    console.warn(this.source);
  }

  openOrderCardDialog(row: any): void {
    const modalRef = this.modalService.open(OrderDetailsComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.commande = row;
    modalRef.result.then(
      () => {
        // Left blank intentionally, nothing to do here
      },
      () => {
        // Left blank intentionally, nothing to do here
      }
    );
  }

  openProductViewDialog(row: any): void {
    const modalRef = this.modalService.open(ProductDetailsComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.product = row;
    modalRef.result.then(
      () => {
        // Left blank intentionally, nothing to do here
      },
      () => {
        // Left blank intentionally, nothing to do here
      }
    );
  }

  openProductUpdateDialog(row: any): void {
    const modalRef = this.modalService.open(ProductUpdateComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.product = row;
    modalRef.result.then(
      () => {
        // Left blank intentionally, nothing to do here
      },
      () => {
        // Left blank intentionally, nothing to do here
      }
    );
  }

  cancel(): void {
    this.activeModal.close();
  }

}
