import { Component } from '@angular/core';
import { AppConstants } from './shared/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  yearNow = new Date().getFullYear().toString();
  appTitle = AppConstants.appTitle;
  urlLogoSimple = AppConstants.urlLogoSimple;
}
