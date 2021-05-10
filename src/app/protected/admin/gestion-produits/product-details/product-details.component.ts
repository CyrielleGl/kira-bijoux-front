import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: []
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  productPictures: any = [];

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.warn(this.product);
    this.productPictures = this.product.item.item_pictures;
    console.warn(this.productPictures);
  }

  cancel(): void {
    this.activeModal.close();
  }

}
