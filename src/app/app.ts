import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';

import { IpcService } from "./services";

import { FilesInDirectoryComponent, HomeComponent } from './components';

const routes = [
	{ path: 'home', component: HomeComponent, index: true },
	{ path: 'files-in-directory', component: FilesInDirectoryComponent }
];

@Component({
	selector: 'app',
	directives: [
		ROUTER_DIRECTIVES,
		FilesInDirectoryComponent,
		HomeComponent
	],
	providers: [
		IpcService,
		provideRouter(routes)
	],
	template: `
		<nav>
			<a [routerLink]="['/home']">Home</a>
			<a [routerLink]="['/files-in-directory']">Files in directory</a>
		</nav>
		<router-outlet></router-outlet>
	`
})
export class App {
}

bootstrap(App);
