import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: []
})
export class ProductUpdateComponent implements OnInit {

  product: any;
  productPictures: any = [];
  Form: FormGroup | any;
  typeCheck: any;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.productPictures = this.product.item.item_pictures;
    this.Form = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name, [Validators.required]),
      type: new FormControl(this.product.type, [Validators.required]),
      materials: new FormControl(this.product.materials, [Validators.required]),
      subtitle: new FormControl(this.product.item.subtitle, [Validators.required]),
      description: new FormControl(this.product.item.description, [Validators.required]),
      price: new FormControl(this.product.item.price, [Validators.required]),
    });
  }

  getAllTypes(): void {
    // WAITING FOR ENDPOINT
  }

  getAllMaterials(): void {
    // WAITING FOR ENDPOINT
  }

  save(): void {
    console.warn('save !');

  }

  deleteItem(item: any, content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        if (result) {
          console.warn('deleteItem : ', result);
        }
      },
      () => {});
  }

  cancel(): void {
    this.activeModal.close();
  }

}
