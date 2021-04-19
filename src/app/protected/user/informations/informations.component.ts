import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { IAddress } from 'src/app/shared/models/address.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';
import { SecuService } from 'src/app/shared/services/secu/secu.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUpdateInfosComponent } from './modal-update-infos/modal-update-infos.component';
import { AddressService } from 'src/app/shared/services/api/address/address.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  user: User | null = null;
  adresses: IAddress[] | any = null;
  idInfo = 'idInfo';
  idAdress = 'idAdress';
  idAddAdress = 'idAddAdress';
  idSecu = 'idSecu';

  constructor(
    private cookieService: SecuService,
    private usersService: UsersService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('user');
    if (this.isAuthenticated()) {
      // tslint:disable-next-line: deprecation
      this.usersService.getUserState().subscribe(user => {
        this.user = user;
        this.adresses = user?.addresses;
      });
    }
  }

  isAuthenticated(): boolean {
    return this.usersService.isAuthenticated();
  }

  openUpdateInfosModal(idCard: string, adress: any): void {
    const modalRef = this.modalService.open(ModalUpdateInfosComponent, {
      size: 'lg',
      backdrop: 'static'
    });
    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.adress = adress;
    modalRef.componentInstance.idCard = idCard;
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
