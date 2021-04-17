import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    _router: Router,
    _googleAnalyticsService: GoogleAnalyticsService
  ) {
    _googleAnalyticsService.createScriptTag();
    _googleAnalyticsService.navEndEvent(_router);
  }

  title = 'angular-google-analytics';
}
