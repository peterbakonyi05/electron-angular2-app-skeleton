import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
	selector: 'ea-home',
	directives: [
		MD_CARD_DIRECTIVES
	],
	template: require('./home.component.html')
})
export class HomeComponent {
}