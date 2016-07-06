import { Component } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { FilesInDirectoryComponent } from './files-in-directory';
import { HomeComponent } from './home';
import { BookSearchPage } from './books';

const routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'files-in-directory', component: FilesInDirectoryComponent },
	{ path: 'books-search', component: BookSearchPage }
];

@Component({
	selector: 'app',
	directives: [
		MD_BUTTON_DIRECTIVES,
		MD_SIDENAV_DIRECTIVES,
		MD_TOOLBAR_DIRECTIVES,
		ROUTER_DIRECTIVES
	],
	providers: [
		provideRouter(routes),
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
