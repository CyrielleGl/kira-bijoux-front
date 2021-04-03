import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IAddress, IUser, User, Address } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modal-update-infos',
  templateUrl: './modal-update-infos.component.html',
  styleUrls: ['./modal-update-infos.component.scss']
})

export class ModalUpdateInfosComponent implements OnInit {
  user: IUser | any;
  newUser: IUser | any;
  adresses: IAddress[] | any = null;
  idCard: string | any;
  Form: FormGroup | any;
  matchingErrorNewPassword = false;
  matchingErrorOldPassword = false;
  addAdressFormVisible = false;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {
    if (this.idCard === 'idInfo') {
      console.warn(this.user);
      this.Form = new FormGroup({
        id: new FormControl(this.user.id),
        firstname: new FormControl(this.user.firstname, [Validators.required]),
        lastname: new FormControl(this.user.lastname, [Validators.required]),
        mail: new FormControl(this.user.mail, [Validators.required, Validators.pattern('^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[A-Z-a-z]{2,4}$')]),
        phone: new FormControl(this.user.phone, [Validators.required, Validators.pattern('[- +()0-9]+')])
      });
    } else if (this.idCard === 'idAdress') {
      this.Form = new FormGroup({
        addresses: new FormArray([])
      });
      if (this.adresses.length > 0) {
        this.existingAdress();
      }
     } else if (this.idCard === 'idSecu') {
      // this.matchingErrorNewPassword = false;
      this.Form = new FormGroup({
        id: new FormControl(null),
        oldPassword: new FormControl('', [Validators.required]),
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
      adressName: new FormControl('', [Validators.required]),
      recipient: new FormControl('', [Validators.required]),
      firstLine: new FormControl('', [Validators.required]),
      secondLine: new FormControl('', [Validators.required]),
      postCode: new FormControl('', [Validators.required]),
      town: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required])
    });
  }

  addAdress(): void {
    console.warn('before', this.addresses());
    this.addresses().push(this.newAdress());
    console.warn('add', this.addresses());
    this.addAdressFormVisible = true;
  }

  removeAdress(adressIndex: number): void {
    this.addresses().removeAt(adressIndex);
  }

  existingAdress(): void {
    this.adresses.forEach((adress: any) => {
      const group = new FormGroup({
        id: new FormControl(null),
        adressName: new FormControl(adress.name, [Validators.required]),
        recipient: new FormControl(adress.recipient, [Validators.required]),
        firstLine: new FormControl(adress.first_line, [Validators.required]),
        secondLine: new FormControl(adress.second_line, [Validators.required]),
        postCode: new FormControl(adress.post_code, [Validators.required]),
        town: new FormControl(adress.town, [Validators.required]),
        country: new FormControl(adress.country, [Validators.required])
      });
      this.addresses().push(group);
    });
  }

  save(form: FormGroup): void {
    console.warn(form);
    this.submitted = true;
    if (this.idCard === 'idInfo' && this.user !== undefined) {
      const user = Object.assign(this.user, {
        firstname: this.Form.controls.firstname.value,
        lastname: this.Form.controls.lastname.value,
        mail: this.Form.controls.mail.value,
        phone: this.Form.controls.phone.value
      });
      console.warn(user);
    // tslint:disable-next-line: deprecation
      this.usersService.putUser(this.user.id, user).subscribe(
      (data: User | null) => {
        this.user = data;
    });
      this.activeModal.close(this.user);
  } else if (this.idCard === 'idAdress' && this.addresses().length > 0) {
    console.warn(this.adresses().value);
    // tslint:disable-next-line: deprecation
    this.usersService.putAdress(this.user.id, this.addresses().value).subscribe(
    (data: Address | null) => {
      this.adresses = data;
    });
    this.activeModal.close(this.adresses);
  } else if (this.idCard === 'idSecu') {   // MODIFIER PASSWORD
    if (this.Form.value.oldPassword !== '') {
      console.warn('old', this.Form.value.oldPassword);
      console.warn('pass', this.user.password);
      if (this.Form.value.oldPassword !== this.user.password) {
        this.matchingErrorOldPassword = true;
        return;
      }
    } else if (this.Form.value.newPassword !== this.Form.value.confirmPassword) {
      this.matchingErrorNewPassword = true;
      return;
    }
    const user = Object.assign(this.user, {
      password: this.Form.controls.confirmPassword.value
    });
    }
  }

  cancel(): void {
    this.activeModal.close();
  }

}
