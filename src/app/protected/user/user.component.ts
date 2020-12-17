import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/api/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public data: string = '';

  constructor(private readonly usersService: UsersService) { }

  public ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.usersService.getAllUsers().subscribe((data: string) => {
      this.data = data;
    });
  }

}
