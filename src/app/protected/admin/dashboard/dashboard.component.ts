import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/api/users/users.service';
import { SecuService } from 'src/app/shared/services/secu/secu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[] | any = [];

  constructor(
    private cookieService: SecuService,
    private usersService: UsersService
    ) { }

  ngOnInit(): void {
    this.cookieService.verifyAccess('admin');
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.usersService.getAllUsers().subscribe((data: string[]): void => {
      this.users = data;
      console.warn(this.users);
    });
  }

}
