import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CanActivateViaAuthGuard } from "app/app.guards";

const routes: Routes = [
	{
		path: '', children: [
			{ path: 'main', loadChildren: './modules/main/main.module', canActivate: [CanActivateViaAuthGuard] }
		]
	},
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', loadChildren: './modules/login/login.module' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);