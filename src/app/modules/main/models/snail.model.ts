export class Snail {
	public height: number;
	public distanceCanClimb: number;
	public distanceSlides: number;
	public fatigueFactor: number;
	public success: boolean;
	public days: number;
	public requestDate: Date;
	public graphData: any;

	constructor(height: number, distanceCanClimb: number, distanceSlides: number, fatigueFactor: number, success: boolean, days: number, requestDate: Date, graphData: any) {
		this.height = height;
		this.distanceCanClimb = distanceCanClimb;
		this.distanceSlides = distanceSlides;
		this.fatigueFactor = fatigueFactor;
		this.success = success;
		this.days = days;
		this.requestDate = requestDate;
		this.graphData = graphData;
	}
}