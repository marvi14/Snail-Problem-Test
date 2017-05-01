import { Injectable } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';

@Injectable()
export class PushNotifications {

	constructor(private _push: PushNotificationsService) { }

	show(title, message, callback) {
		this._push.create(title, { body: message, icon: 'https://docs.nativescript.org/img/cli-getting-started/angular/chapter0/Angular_logo.png' }).subscribe(
			res => setTimeout(() => res.notification.close(), 5000),
			err => console.log(err)
		);
	}

	//In case we want to do something when the user click the push, we must implement a callback and pass it to the subscrive
	// onNotificationShown(res, callback) {
	// 	setTimeout(() => res.notification.close(), 5000);
	// 	res.notification.onclick(function(){
	// 		console.log('click en la push');
	// 	});
	// }

}