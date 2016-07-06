import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { provideRouter, ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import './rxjs-operators';

import { SHARED_PROVIDERS } from "./shared";

import { FilesInDirectoryComponent } from './files-in-directory';
import { HomeComponent } from './home';

import { BOOKS_PROVIDERS, BookSearchPage } from './books';

const routes = [
	{ path: 'home', component: HomeComponent, index: true },
	{ path: 'files-in-directory', component: FilesInDirectoryComponent },
	{ path: 'books-search', component: BookSearchPage }
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
		provideRouter(routes),
		HTTP_PROVIDERS,
		SHARED_PROVIDERS,
		BOOKS_PROVIDERS,
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

bootstrap(App, [
	disableDeprecatedForms(),
	provideForms()
]);
