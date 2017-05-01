import { Component } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent {
	constructor(private translate: TranslateService, private _push: PushNotificationsService, private router: Router) {
		//english language set as default, however, it will try to take the browser laguage
		translate.setDefaultLang('en');
		let browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|es/) ? browserLang : 'en');

		//we set up our push notifications, so we must ask the user for permission
		if (this._push.isSupported() && this._push.permission !== 'granted')
			this._push.requestPermission();

		if (this.router.url === '/')
			this.router.navigate(['/login']);
	}
}
