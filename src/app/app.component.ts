import { Component, OnInit } from '@angular/core';
import { AppConstants } from './shared/app-constants';
import { UsersService } from './shared/services/api/users/users.service';
import { UtilsService } from './shared/services/utils/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  yearNow = new Date().getFullYear().toString();
  appTitle = AppConstants.appTitle;
  urlLogoHeader = AppConstants.urlLogoHeader;

  constructor(
    private utilsService: UtilsService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.utilsService.initFaIcons();
    this.usersService.identity().subscribe();
  }
}
