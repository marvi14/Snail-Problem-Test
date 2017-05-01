import { HttpService } from '../../../common/HttpService';
import * as fromRoot from '../../../reducers.index';
import { Injectable } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { State, Store } from "@ngrx/store";
import { User } from '../models/user';
import * as loginActions from '../actions/login';
import { PushNotifications } from '../../../common/pushNotifications';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

	constructor(private http: HttpService, private fb: FacebookService, private _store: Store<fromRoot.State>, private _push: PushNotifications, private translate: TranslateService, private router: Router) {
		let fbParams : InitParams= {
			appId: '1137637229620760',
			xfbml: true,
			version: 'v2.6'
		};
		this.fb.init(fbParams);
	}

	facebookLogin() {
		this.fb.login({
			enable_profile_selector: true, // allow user to pick what profile to login with
			return_scopes: true, // returns the scopes that the user authorized
			scope: 'public_profile,user_friends,email' // the scopes we want the user to authorize
		}).then(
			(response: any) => this.getUserFacebookData(response),
			(error: any) => console.error(error));
	}

	getUserFacebookData(facebookData) {
		var accessToken = facebookData.authResponse.accessToken;
		this.fb.api('/me?access_token=' + accessToken, 'get', { fields: "id,name,picture,email,gender,last_name,first_name,birthday" }).then(
			(user: any) => this.logUser(user)
		);
	}

	logUser(user) {
		var loggedUser = new User(user.id, user.email, user.picture.data.url);
		localStorage.setItem('user', JSON.stringify(loggedUser));
		this._store.dispatch(new loginActions.LogUserAction(loggedUser));
		this._push.show(this.translate.instant('TITLE'), this.translate.instant('SELECT'), (() => alert(loggedUser.email)));
		this.router.navigate(['/main']);
	}

}