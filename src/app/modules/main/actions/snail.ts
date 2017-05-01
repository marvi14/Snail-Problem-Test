import { Action } from '@ngrx/store';
import { Snail } from '../models/snail.model';

export const ActionTypes = {
	LOAD_SNAIL: 'Load snail response url',
	LOAD_SNAIL_COMPLETE: 'Set snail response to store'
};

export class LoadSnailAction implements Action {
	type = ActionTypes.LOAD_SNAIL;

	constructor(public payload: any) { }
}

export class LoadSnailCompleteAction implements Action {
	type = ActionTypes.LOAD_SNAIL_COMPLETE;

	constructor(public payload: Snail) { }
}

export type Actions = LoadSnailAction | LoadSnailCompleteAction