import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IItems } from 'src/app/shared/models/item.model';
import { ItemsService } from 'src/app/shared/services/api/items/items.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: []
})
export class ProductUpdateComponent implements OnInit {

  product: any;
  productPictures: any[] = [];
  productMaterials: any[] = [];
  Form: FormGroup | any;
  MatForm: FormGroup | any;
  allTypes: any = [];
  allMaterials: any = [];
  material: any = {};
  createMaterialSuccess = false;
  item?: IItems;

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    this.item = this.product.item;
    this.productPictures = this.product.item.item_pictures;
    this.productMaterials = this.product.item.materials;
    this.getAllTypes();
    this.Form = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.item.name, [Validators.required]),
      type: new FormControl(this.product.type, [Validators.required]),
      length: new FormControl(this.item?.length, [Validators.required]),
      materials: new FormArray([]),
      subtitle: new FormControl(this.item?.subtitle, [Validators.required]),
      description: new FormControl(this.item?.description, [Validators.required]),
      price: new FormControl(this.item?.price, [Validators.required]),
      stock: new FormControl(this.item?.stock, [Validators.required]),
      tva: new FormControl(this.item?.tva, [Validators.required]),
      visibility: new FormControl(this.item?.visibility)
    });
    console.warn(this.Form);
    this.getAllMaterials();
  }

  getAllTypes(): void {
    this.itemsService.getAllTypes().subscribe((data: string[]) => {
      this.allTypes = data;
    });
  }

  getAllMaterials(): void {
    this.itemsService.getAllMaterials().subscribe((data: string[]) => {
      this.allMaterials = data;
      this.addMaterialsToMaterialsArray();
      console.warn('this.Form', this.Form);
    });
  }

  addMaterialsToMaterialsArray(): any {
    for (const material of this.allMaterials) {
      const m = new FormGroup({
        checked: new FormControl(false),
        material: new FormControl(material)
      });
      this.productMaterials.map((mat: any) => {
        if (material.name === mat.name) {
          m.controls.checked = new FormControl(true);
        }
      });
      this.materialsFormArray().push(m);
    }
  }

  materialsFormArray(): any {
    return this.Form.controls.materials as FormArray;
  }

  changeType(event: any): void {
    console.warn('changeType', event.target.id);
    console.warn('form', this.Form.controls.visibility.value);

  }

  changeMaterials(event: any): void {
    console.warn(this.Form);
  }

  addMaterial(content: any): void {
    this.MatForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    });
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      () => {},
      () => {
        this.ngOnInit();
        setTimeout(() => {
          this.createMaterialSuccess = false;
        }, 4000);
      });
  }

  saveMaterial(): void {
    const matType = this.MatForm.controls.type.value;
    let materialTypeId = 0;
    if (matType === 'Métaux') {
      materialTypeId = 1;
    } else if (matType === 'Pierres fines') {
      materialTypeId = 2;
    }
    const obj = {
      material_type_id: materialTypeId,
      name: this.MatForm.controls.name.value
    };
    this.itemsService.postMaterial(obj).subscribe((material) => {
       if (material) {
         this.createMaterialSuccess = true;
         document.getElementById('closeAddMat')?.click();
       }
    });
  }

  closAlert(): void {
    this.createMaterialSuccess = false;
  }

  save(): void {
    const materials = this.Form.value.materials;
    const checkedMaterials: any[] = [];
    materials.forEach((material: any) => {
      if (material.checked) {
        checkedMaterials.push(material.material.id);
      }
    });
    const type = this.Form.value.type;
    let typeId = 0;
    if (type === 'Collier') {
      typeId = 1;
    } else if (type === 'Bracelet') {
      typeId = 2;
    } else if (type === 'BO') {
      typeId = 3;
    }

    if (this.item) {
      const obj = {
        collection_id: 1,
        description: this.Form.controls.description.value,
        item_type_id: typeId,
        length: this.Form.value.length,
        materials: checkedMaterials,
        name: this.Form.value.name,
        price: this.Form.value.price,
        stock: this.Form.value.stock,
        subtitle: this.Form.value.subtitle,
        tva: this.Form.value.tva,
        visibility: this.Form.controls.visibility.value
      };
      console.warn('obj', obj);
      this.itemsService.saveItem(this.item?.id, obj).subscribe((updatedItem: any) => {
        console.warn('updatedItem', updatedItem);
        // this.activeModal.close(updatedItem);
      });
    }
  }

  deleteItem(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        if (result) {
          const name = this.product.item.name;
          this.itemsService.deleteItem(this.product.item.id).subscribe(() => {
            this.activeModal.close(name);
          });
        }
      },
      () => {});
  }

  cancel(): void {
    this.activeModal.close();
  }

}
