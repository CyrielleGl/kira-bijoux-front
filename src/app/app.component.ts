import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AppConstants } from './shared/app-constants';
import { UsersService } from './shared/services/api/users/users.service';
import { LoaderService } from './shared/services/loader/loader.service';
import { UtilsService } from './shared/services/utils/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoadingSpinnerActive: boolean = false;
  yearNow = new Date().getFullYear().toString();
  appTitle = AppConstants.appTitle;
  urlLogoHeader = AppConstants.urlLogoHeader;

  constructor(
    private utilsService: UtilsService,
    private usersService: UsersService,
    private loaderService: LoaderService,
    private router: Router
  ) {
    this.loaderService.loading.subscribe((isVisible) => (this.isLoadingSpinnerActive = isVisible));

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoadingSpinnerActive = true;
      } else if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.isLoadingSpinnerActive = false;
      }
    });
  }

  ngOnInit(): void {
    this.utilsService.initFaIcons();
    this.usersService.identity().subscribe();
  }
}
