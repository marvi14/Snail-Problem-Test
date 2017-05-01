import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface GraphicModel {
  title: string;
  data: {};
}

@Component({
  selector: 'modal',
  template: `<div class="modal-dialog modal-lg">
                <div class="modal-content">
                   <div class="modal-header">
                     <h4 class="modal-title">{{title || 'Confirm'}}</h4>
                     <button type="button" class="close" (click)="close()" >&times;</button>
                   </div>
                   <div class="modal-body">
                     <chart [type]="'line'" [data]="data" [options]="options"></chart>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="close()">Close</button>
                   </div>
                 </div>
              </div>`
})

export class GraphicModal extends DialogComponent<GraphicModel, boolean> implements GraphicModel {

  title: string;
  data: {};

  public options = {
    responsive: true,
    maintainAspectRatio: true
  };

  constructor(dialogService: DialogService) {
    super(dialogService);

    this.data;
  }

  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }

}