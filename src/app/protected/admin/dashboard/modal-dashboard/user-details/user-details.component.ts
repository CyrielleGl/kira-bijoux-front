import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: []
})
export class UserDetailsComponent implements OnInit {

  u: any;
  user: IUser | any;

  constructor(
    public activeModal: NgbActiveModal,
    private usersService: UsersService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.user = this.u.user;
    console.warn(this.user);
  }

  deleteUser(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result) => {
        if (result) {
          const name = this.user.firstname;
          this.usersService.deleteUser(this.user.id).subscribe(() => {
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
