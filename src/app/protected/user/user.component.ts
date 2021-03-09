import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User | null = null;

  constructor(
    private cookieService: SecuService,
    private usersService: UsersService
    ) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('user');
    if (this.isAuthenticated()) {
      // tslint:disable-next-line: deprecation
      this.usersService.getUserState().subscribe(user => {
        this.user = user;
      });
    }
  }

  isAuthenticated(): boolean {
    return this.usersService.isAuthenticated();
  }

}
