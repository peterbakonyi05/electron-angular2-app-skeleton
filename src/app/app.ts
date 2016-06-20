import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES } from '@angular/router';
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
	styles: [`
		md-sidenav-layout {
			bottom: 0;
			left: 0;
			position: absolute;
			right: 0;
			top: 0;
		}
		
		nav a {
			display: block;
		}
	`],
	template: `
		<md-sidenav-layout [start]="startMenu">
			<md-sidenav #startMenu mode="over">
			    <button md-button (click)="startMenu.close()">
					<i class="material-icons close">close</i>
				</button>
				<nav>
					<a md-button [routerLink]="['/home']">Home</a>
					<a md-button [routerLink]="['/files-in-directory']">Files in directory</a>
				</nav>
			</md-sidenav>
			<md-toolbar color="primary">
				<button md-button (click)="startMenu.open()">
					<i class="material-icons app-toolbar-menu">menu</i>
				</button>
				Electron, Angular2 app skeleton
			</md-toolbar>
			<router-outlet></router-outlet>
		</md-sidenav-layout>
	`
})
export class App {
}

bootstrap(App);
