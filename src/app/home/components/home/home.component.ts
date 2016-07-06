import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { TranslatePipe } from 'ng2-translate/ng2-translate';

@Component({
	selector: 'ea-home',
	directives: [
		MD_CARD_DIRECTIVES
	],
	pipes: [
		TranslatePipe
	],
	template: require('./home.component.html')
})
export class HomeComponent {
}