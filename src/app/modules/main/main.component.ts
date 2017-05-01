import { Component, ViewEncapsulation } from '@angular/core';
import { State, Store } from "@ngrx/store";
import { Observable } from "rxjs";
/* In order to access the application state, reference the reducers folder again, accessing all the exported members from it though index.ts */
import * as fromRoot from '../../reducers.index';
import * as snailActions from './actions/snail';
import { Snail } from './models/snail.model';
import { GraphicModal } from "app/modules/main/modals/graphModal";
import { DialogService } from "ng2-bootstrap-modal";

@Component({
	selector: 'marvi-main-component',
	templateUrl: './main.template.html'
})

export class MainComponent {

	public snailRequests: Observable<Snail[]>;
	public filterOption: number = 0;
	public filters: any[];
	public snailParameters: any = {};
	public distanceClimbed: number;

	constructor(private _store: Store<fromRoot.State>, private dialogService: DialogService) {
		
		//Observable piece of Redux State, so when the Reducer returns a new piece of state, this will be reflected in the UI
		this.snailRequests = _store.let(fromRoot.getSnailRequests);
		this.filters = [{
			id: 0,
			description: 'Show all attempts'
		}, {
			id: 1,
			description: 'Successfull attempts'
		}, {
			id: 2,
			description: 'Failed attempts'
		}, {
			id: 3,
			description: 'Minimum Distance climbed'
		}];
	}

	//we dispatch a Redux action, with the parametrs sent by the user, as we already control and validate the input rules in the template, we just pass it to the dispatcher
	resolveSnailProblem() {
		this._store.dispatch(new snailActions.LoadSnailAction(this.snailParameters));
		this.snailParameters = {};
	}

	openModal(request) {

		//each SnaipRequest has the data needed to be graphicated, we just need to pass it in the format that Chart.js needs it
		let graphData = {
			labels: request.graphData.days,
			datasets: [
				{
					label: "Distance climbed vs. days",
					data: request.graphData.heights
				}
			]
		};

		let disposable = this.dialogService.addDialog(GraphicModal, {
			title: 'Graphic representation of problem',
			data: graphData
		}).subscribe((isConfirmed) => {
			//We get dialog result
			console.log(isConfirmed);
		});

	}
}
