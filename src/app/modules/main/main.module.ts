import { NgModule } from '@angular/core';
//import the reducer
import { SnailEffects } from "./effects/snail";
import { EffectsModule } from "@ngrx/effects";
import { SnailService } from "./services/snail";
import { routing } from './main.routing';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { QueryPipe } from './pipes/query';
import { InvalidMessageDirective } from "app/modules/main/directives/invalidMessage";
import { OnlyNumbersDirective } from "app/modules/main/directives/onlyNumbers";
import { GraphicModal } from "app/modules/main/modals/graphModal";
import { ChartModule } from 'angular2-chartjs';

@NgModule({
  declarations: [
    MainComponent,
    QueryPipe,
    InvalidMessageDirective,
    OnlyNumbersDirective,
    GraphicModal
  ],
  imports: [
    routing,
    FormsModule,
    EffectsModule.run(SnailEffects),
    CommonModule,
    TranslateModule,
    BootstrapModalModule,
    ChartModule
  ],
  entryComponents: [
    GraphicModal
  ],
  providers: [SnailService]
})
export default class MainModule {
  constructor() { }
}