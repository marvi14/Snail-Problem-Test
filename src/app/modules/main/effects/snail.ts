import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { SnailService } from "../services/snail";
import * as snailActions from "../actions/snail";
import { Snail } from '../models/snail.model';

@Injectable()
export class SnailEffects {
	constructor(private _actions: Actions, private _snailService: SnailService) { }

	//The effects for different states are singletons that 'intercept' dispatched actions that are being sent to the reducer, in order to perform an intermediate action,
	//we call this a Middleware
	@Effect() loadPosts = this._actions.ofType(snailActions.ActionTypes.LOAD_SNAIL).switchMap(
		(action) => this._snailService.loadSnailResult(action.payload)
		.map((solution) => new snailActions.LoadSnailCompleteAction(solution))
		.catch(() => Observable.of(new snailActions.LoadSnailCompleteAction(null)))
	);

}