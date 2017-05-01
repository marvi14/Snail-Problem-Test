import { Pipe, PipeTransform } from '@angular/core';
import * as fromRoot from '../../../reducers.index';
import { State, Store } from "@ngrx/store";
import { Snail } from '../models/snail.model';

@Pipe({
	name: 'query',
})
export class QueryPipe implements PipeTransform {

	/*The currency parameter obtains its value from the selectedCurrency property. 
	An alternative implementation would be to call getSelectedCurrency within the pipe and get the selectedCurrency within the pipe.*/

	transform(snailRequests: Snail[], filterOption: number, distanceClimbed: number): Snail[] {
		switch (filterOption) {
			case 1:
				return snailRequests.filter(request => request.success === true);
			case 2:
				return snailRequests.filter(request => request.success === false);
			case 3:
				return distanceClimbed ? snailRequests.filter(request => request.height >= distanceClimbed) : snailRequests;
			default:
				// code...
				return snailRequests;
		}
	}
}