import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IUser, User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressService } from 'src/app/shared/services/api/address/address.service';
import { IAddress, Address } from 'src/app/shared/models/address.model';

@Component({
  selector: 'app-modal-update-infos',
  templateUrl: './modal-update-infos.component.html',
  styleUrls: ['./modal-update-infos.component.scss']
})

export class ModalUpdateInfosComponent implements OnInit {
  user: IUser | any;
  newUser: IUser | any;
  adress: IAddress | any = {};
  idCard: string | any;
  Form: FormGroup | any;
  matchingErrorNewPassword = false;
  submitted = false;
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
      this.Form = new FormGroup({
        id: new FormControl(this.adress.id),
        name: new FormControl(this.adress.name, [Validators.required]),
        recipient: new FormControl(this.adress.recipient, [Validators.required]),
        first_line: new FormControl(this.adress.first_line, [Validators.required]),
        second_line: new FormControl(this.adress.second_line, [Validators.required]),
        post_code: new FormControl(this.adress.post_code, [Validators.required]),
        town: new FormControl(this.adress.town, [Validators.required]),
        country: new FormControl(this.adress.country, [Validators.required])
      });
     } else if (this.idCard === 'idAddAdress') {
      this.Form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl('', [Validators.required]),
        recipient: new FormControl('', [Validators.required]),
        first_line: new FormControl('', [Validators.required]),
        second_line: new FormControl('', [Validators.required]),
        post_code: new FormControl('', [Validators.required]),
        town: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required])
      });
     } else if (this.idCard === 'idSecu') {
      this.Form = new FormGroup({
        id: new FormControl(null),
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      });
    }
  }

  saveAdress(adress: any): void {
    const adressForm = {
      name: adress.value.name,
      recipient: adress.value.recipient,
      first_line: adress.value.first_line,
      second_line: adress.value.second_line,
      post_code: adress.value.post_code,
      town: adress.value.town,
      country: adress.value.country,
      user_id: this.user.id
    };
    this.addressService.postAdress(adressForm).subscribe((data) => {
      if (data) {
        this.addOk = true;
        setTimeout(() => {  window.location.reload(); }, 500);
      }
    });
  }

  deleteAdress(adress: any, content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        if (result) {
          this.addressService.deleteAdress(adress.value.id).subscribe(() => {
            this.deleteOk = true;
            setTimeout(() => {  window.location.reload(); }, 500);
          });
        }
      },
      () => {});
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
    } else if (this.idCard === 'idAdress') {   // MODIFIER ADRESSE
      const adress = Object.assign(this.adress, {
        name: this.Form.controls.name.value,
        recipient: this.Form.controls.recipient.value,
        first_line: this.Form.controls.first_line.value,
        second_line: this.Form.controls.second_line.value,
        post_code: this.Form.controls.post_code.value,
        town: this.Form.controls.town.value,
        country: this.Form.controls.country.value,
        user_id: this.user.id
      });
      this.addressService.putAdress(this.adress.id, adress).subscribe(
        (data: Address | null) => {
          this.adress = data;
          this.updateOk = true;
          setTimeout(() => {  window.location.reload(); }, 500);
      });
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
