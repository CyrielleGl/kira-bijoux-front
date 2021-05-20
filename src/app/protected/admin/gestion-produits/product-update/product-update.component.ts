import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    console.warn(this.product);
    this.productPictures = this.product.item.item_pictures;
    this.productMaterials = this.product.item.materials;
    this.getAllTypes();
    this.Form = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name, [Validators.required]),
      type: new FormControl(this.product.type, [Validators.required]),
      materials: new FormArray([]),
      subtitle: new FormControl(this.product.item.subtitle, [Validators.required]),
      description: new FormControl(this.product.item.description, [Validators.required]),
      price: new FormControl(this.product.item.price, [Validators.required])
    });
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
