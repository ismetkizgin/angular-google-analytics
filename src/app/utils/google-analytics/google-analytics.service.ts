import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

declare var gtag: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleAnalyticsService {
  createScriptTag() {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsId}`;
    document.head.prepend(script);
  }

  navEndEvent(router: Router) {
    const navEndEvent = router.events.pipe(
      filter((e) => e instanceof NavigationEnd)
    );
    navEndEvent.subscribe((e: any) => {
      gtag('config', environment.googleAnalyticsId, {
        page_path: e.urlAfterRedirects,
      });
    });
  }
}
