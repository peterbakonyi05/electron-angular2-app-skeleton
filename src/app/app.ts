import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { IpcService } from "./services";

import { FilesInDirectoryComponent, HomeComponent } from './components';

const routes = [
	{ path: 'home', component: HomeComponent, index: true },
	{ path: 'files-in-directory', component: FilesInDirectoryComponent }
];


@Component({
	selector: 'app',
	directives: [
		MD_BUTTON_DIRECTIVES,
		MD_SIDENAV_DIRECTIVES,
		MD_TOOLBAR_DIRECTIVES,
		ROUTER_DIRECTIVES,
		FilesInDirectoryComponent,
		HomeComponent
	],
	providers: [
		IpcService,
		provideRouter(routes)
	],
	styles: [
		require('./app.scss')
	],
	template: require('./app.html')
})
export class App {
	constructor(router: Router) {
		router.navigate(['/home']);
	}
}

bootstrap(App);
