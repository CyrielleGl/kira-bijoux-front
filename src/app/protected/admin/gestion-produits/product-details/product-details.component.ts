import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemsService } from 'src/app/shared/services/api/items/items.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: []
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  pictureId: any;
  productPictures: any = [];
  pictures: any = [];

  constructor(
    public activeModal: NgbActiveModal,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    console.warn(this.product);
    this.productPictures = this.product.item.item_pictures;
    console.warn(this.productPictures);
    this.productPictures.map((picture: any) => {
      this.getPictures(picture.id);
    });
  }

  getPictures(id: number): void {
    this.itemsService.getPictureById(id).subscribe((data: any) => {
      console.warn(data);
      const pic = data.name;
      this.pictures.push(pic);
    });
  }

  cancel(): void {
    this.activeModal.close();
  }

}
