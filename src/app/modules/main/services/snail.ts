import { HttpService } from '../../../common/HttpService';
import { Injectable } from '@angular/core';
import { Snail } from '../models/snail.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SnailService {

	constructor(private http: HttpService) { }

	loadSnailResult(payload) {
		//Inferring that the base is USD
		return this.http.get('url').map((response) => {
			var snatilSolution = this.snail(payload.h, payload.u, payload.d, payload.f);
			return new Snail(payload.h, payload.u, payload.d, payload.f, snatilSolution.success, snatilSolution.day, new Date(), snatilSolution.graphData);
		});
	}

	snail(h, u, d, f) {
		var distanceAfterClimbing = u;
		var distanceAfterSliding = u - d;
		var day = 1;
		var fixedFatigueFactor = ((f * u) / 100);
		var graphData = {
			days: [],
			heights: []
		};

		graphData.days.push(day);
		graphData.heights.push(distanceAfterClimbing);

		if (distanceAfterSliding < 0)
			return { success: false, day: day, graphData: graphData };

		while (distanceAfterClimbing < h || distanceAfterSliding >= 0) {
			day++;
			var initalHeight = distanceAfterSliding;
			var todaysClimbing = u - (fixedFatigueFactor * (day - 1));

			distanceAfterClimbing = initalHeight + todaysClimbing;

			graphData.days.push(day);
			graphData.heights.push(distanceAfterClimbing);

			if (distanceAfterClimbing > h)
				return { success: true, day: day, graphData: graphData };

			distanceAfterSliding = distanceAfterClimbing - d;
			if (distanceAfterSliding < 0)
				return { success: false, day: day, graphData: graphData };
		}
	}

}