import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: []
})
export class ProductUpdateComponent implements OnInit {

  product: any;
  productPictures: any = [];

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.warn(this.product);
    this.productPictures = this.product.item.item_pictures;
  }

  cancel(): void {
    this.activeModal.close();
  }

}
