import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Component({
	selector: 'app',
	directives: [
		MD_BUTTON_DIRECTIVES,
		MD_SIDENAV_DIRECTIVES,
		MD_TOOLBAR_DIRECTIVES,
		ROUTER_DIRECTIVES
	],
	styles: [
		require('./app.scss')
	],
	template: require('./app.html')
})
export class App {
	constructor(
		translate: TranslateService,
		router: Router
	) {
		translate.setTranslation('en', require('../translations/locale-en.json'));
		translate.setDefaultLang('en');
		translate.use('en');

		router.navigate(['/home']);
	}
}
