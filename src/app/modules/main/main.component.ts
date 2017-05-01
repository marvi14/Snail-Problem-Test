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
		//_store.let executes getEntities and returns its value.
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

	resolveSnailProblem() {
		this._store.dispatch(new snailActions.LoadSnailAction(this.snailParameters));
		this.snailParameters = {};
	}

	openModal(request) {

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
