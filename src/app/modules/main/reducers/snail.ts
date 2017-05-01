import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as snail from '../actions/snail';
import { Snail } from '../models/snail.model';



export interface State {
	snailRequests: Array<Snail>
};

const initialState: State = {
	snailRequests: JSON.parse(localStorage.getItem('snailRequests')) || new Array<Snail>()
};


export function reducer(state = initialState, action: snail.Actions): State {
	switch (action.type) {

		case snail.ActionTypes.LOAD_SNAIL: {
			return {
				snailRequests: state.snailRequests
			};
		}
		case snail.ActionTypes.LOAD_SNAIL_COMPLETE: {
			let newRequests = [...state.snailRequests, action.payload];
			localStorage.setItem('snailRequests', JSON.stringify(newRequests));
			return {
				snailRequests: newRequests
			};
		}
		default:
			return state;
	}

}


export function getSnailRequests(state$: Observable<State>) {
	return state$.select(s => s.snailRequests);
}
