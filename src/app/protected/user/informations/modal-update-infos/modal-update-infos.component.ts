import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IUser, User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressService } from 'src/app/shared/services/api/address/address.service';
import { IAddress } from 'src/app/shared/models/address.model';
import { addConsoleHandler } from 'selenium-webdriver/lib/logging';


@Component({
  selector: 'app-modal-update-infos',
  templateUrl: './modal-update-infos.component.html',
  styleUrls: ['./modal-update-infos.component.scss']
})

export class ModalUpdateInfosComponent implements OnInit {
  user: IUser | any;
  newUser: IUser | any;
  adresses: IAddress[] | any = null;
  adress = {};
  idCard: string | any;
  Form: FormGroup | any;
  matchingErrorNewPassword = false;
  addAdressFormVisible = false;
  submitted = false;
  closeResult = '';
  updateOk = false;
  deleteOk = false;
  addOk = false;

  constructor(
    public activeModal: NgbActiveModal,
    private usersService: UsersService,
    private addressService: AddressService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (this.idCard === 'idInfo') {
      this.Form = new FormGroup({
        id: new FormControl(this.user.id),
        firstname: new FormControl(this.user.firstname, [Validators.required]),
        lastname: new FormControl(this.user.lastname, [Validators.required]),
        mail: new FormControl(this.user.mail, [Validators.required, Validators.pattern('^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[A-Z-a-z]{2,4}$')]),
        phone: new FormControl(this.user.phone, [Validators.required, Validators.pattern('[- +()0-9]+')])
      });
    } else if (this.idCard === 'idAdress') {
      this.usersService.getUserState().subscribe(user => {
        this.adresses = user?.addresses;
      });
      this.Form = new FormGroup({
        addresses: new FormArray([])
      });
      if (this.adresses.length > 0) {
        this.existingAdress();
      }
     } else if (this.idCard === 'idSecu') {
      this.Form = new FormGroup({
        id: new FormControl(null),
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      });
    }
  }

  addresses(): FormArray {
    return this.Form.get('addresses') as FormArray;
  }

  newAdress(): FormGroup {
    return new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', [Validators.required]),
      recipient: new FormControl('', [Validators.required]),
      first_line: new FormControl('', [Validators.required]),
      second_line: new FormControl('', [Validators.required]),
      post_code: new FormControl('', [Validators.required]),
      town: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
  }

  addAdress(): void {
    this.addresses().push(this.newAdress());
    this.addAdressFormVisible = true;
  }

  removeAdress(adressIndex: number): void {
    this.addresses().removeAt(adressIndex);
  }

  saveAdress(adress: any): void {
    const adressForm = Object.assign(this.adress, {
      name: adress.value.name,
      recipient: adress.value.recipient,
      first_line: adress.value.first_line,
      second_line: adress.value.second_line,
      post_code: adress.value.post_code,
      town: adress.value.town,
      country: adress.value.country,
    });
    if (adress.value.id) {
      // tslint:disable-next-line: deprecation
      this.addressService.putAdress(this.user.id, adress.value.id, adressForm).subscribe(
        (data) => {
        if (data) {
          this.updateOk = true;
          setTimeout(() => { this.updateOk = false; }, 3000);
        }
      });
    } else {
      // tslint:disable-next-line: deprecation
      this.addressService.postAdress(this.user.id, adressForm).subscribe((data) => {
        if (data) {
          this.addOk = true;
          setTimeout(() => {  window.location.reload(); }, 500);
        }
      });
    }
  }

  deleteAdress(adress: any, content: any, adressIndex: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        if (result) {
          // tslint:disable-next-line: deprecation
          this.addressService.deleteAdress(adress.value.id).subscribe(() => {
            this.deleteOk = true;
            this.addresses().removeAt(adressIndex);
            setTimeout(() => { this.deleteOk = false; }, 3000);
          });
        }
      },
      () => {});
  }

  existingAdress(): void {
    this.adresses.forEach((adress: any) => {
      const group = new FormGroup({
        id: new FormControl(adress.id),
        name: new FormControl(adress.name, [Validators.required]),
        recipient: new FormControl(adress.recipient, [Validators.required]),
        first_line: new FormControl(adress.first_line, [Validators.required]),
        second_line: new FormControl(adress.second_line, [Validators.required]),
        post_code: new FormControl(adress.post_code, [Validators.required]),
        town: new FormControl(adress.town, [Validators.required]),
        country: new FormControl(adress.country, [Validators.required])
      });
      this.addresses().push(group);
    });
  }

  save(): void {
    this.submitted = true;
    if (this.idCard === 'idInfo' && this.user !== undefined) { // MODIFIER INFOS
      const user = Object.assign(this.user, {
        firstname: this.Form.controls.firstname.value,
        lastname: this.Form.controls.lastname.value,
        mail: this.Form.controls.mail.value,
        phone: this.Form.controls.phone.value
      });
      this.usersService.putUser(this.user.id, user).subscribe(
      (data: User | null) => {
        this.user = data;
      });
      this.activeModal.close(this.user);
    } else if (this.idCard === 'idSecu') {   // MODIFIER PASSWORD
      if (this.Form.value.newPassword !== this.Form.value.confirmPassword) {
        this.matchingErrorNewPassword = true;
        return;
      }
      const user = Object.assign(this.user, {
        password: this.Form.controls.confirmPassword.value
      });
      this.usersService.putUser(this.user.id, user).subscribe(
        (data: User | null) => {
          this.user = data;
      });
      this.activeModal.close();
    }
  }

  cancel(): void {
    this.activeModal.close();
  }

}
