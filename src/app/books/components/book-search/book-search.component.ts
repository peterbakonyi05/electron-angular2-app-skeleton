import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
	selector: 'ea-book-search',
	directives: [
		MD_INPUT_DIRECTIVES,
		REACTIVE_FORM_DIRECTIVES
	],
	template: `
		<md-input placeholder="Book title, author" [formControl]="searchControl" type="search"></md-input>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchComponent {
	searchControl = new FormControl();

	@Output() search = this.searchControl
		.valueChanges
		.debounceTime(300)
		.distinctUntilChanged()
        .map((value) => value.search);
}
