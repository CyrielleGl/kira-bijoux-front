import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/api/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data: any;

  constructor(private readonly usersService: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): any {
    this.usersService.getAllUsers().subscribe((data: any[]) => {
      this.data = data;
    });
  }

}
