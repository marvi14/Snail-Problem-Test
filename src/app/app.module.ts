import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { StoreModule } from "@ngrx/store";
//import the reducer
import { reducer } from "./reducers.index";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import { CommonCustomModule } from './common/common.module';
import { SweetAlertService } from './common/sweetAlert';
import { PushNotificationsService } from 'angular2-notifications';
import { PushNotifications } from './common/pushNotifications';
import { CanActivateViaAuthGuard } from "app/app.guards";
import { FacebookService, FacebookModule } from "ngx-facebook";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    //provideStore accepts an object with reducers.
    StoreModule.provideStore(reducer),
    routing,
    CommonCustomModule,
    FacebookModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [
    SweetAlertService,
    PushNotificationsService,
    PushNotifications,
    CanActivateViaAuthGuard,
    FacebookService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() { }
}