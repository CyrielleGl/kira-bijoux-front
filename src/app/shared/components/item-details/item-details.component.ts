import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BOUTIQUE_BO_KEYWORD, BOUTIQUE_BRACELETS_KEYWORD, BOUTIQUE_COLLIERS_KEYWORD, BOUTIQUE_NOUVEAUTES_KEYWORD } from '../../app-constants';
import { ItemsService } from './../../services/api/items/items.service';
import { AlertStockModalComponent } from './alert-stock-modal/alert-stock-modal.component';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  currentItem: any;
  stockVisibility = false;
  noMoreStock = false;
  category = '';
  keyWord = '';
  BOUTIQUE_BO_KEYWORD = BOUTIQUE_BO_KEYWORD;
  BOUTIQUE_COLLIERS_KEYWORD = BOUTIQUE_COLLIERS_KEYWORD;
  BOUTIQUE_BRACELETS_KEYWORD = BOUTIQUE_BRACELETS_KEYWORD;
  BOUTIQUE_NOUVEAUTES_KEYWORD = BOUTIQUE_NOUVEAUTES_KEYWORD;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsService: ItemsService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ nameItem }) => {
      if (nameItem !== null) {
        this.getItemByName(nameItem);
      }
    });
    this.activatedRoute.data.subscribe(({ keyWord }) => {
      this.keyWord = keyWord;
      if (keyWord === BOUTIQUE_COLLIERS_KEYWORD) {
        this.category = 'Collier';
      }
      else if (keyWord === BOUTIQUE_BRACELETS_KEYWORD) {
        this.category = 'Bracelet';
      }
      else if (keyWord === BOUTIQUE_BO_KEYWORD) {
        this.category = 'Boucles d\'oreilles';
      }
    });
  }

  getItemByName(nameItem: string): any {
    this.itemsService.getByName(nameItem).subscribe(
      (data: string[]) => {
        this.currentItem = data[0];
        if (this.currentItem.stock <= 3 && this.currentItem.stock !== 0) {
          this.stockVisibility = true;
        }
        else if (this.currentItem.stock === 0) {
          this.noMoreStock = true;
          this.stockVisibility = false;
        }
      }
    );
  }

  openAlertStockDialog(): void {
    const modalRef = this.modalService.open(AlertStockModalComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.item = this.currentItem;
    modalRef.result.then(
      () => {
        // Left blank intentionally, nothing to do here
      },
      () => {
        // Left blank intentionally, nothing to do here
      }
    );
  }

}