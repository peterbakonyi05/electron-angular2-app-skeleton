import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
	selector: 'ea-book-search',
	directives: [
		REACTIVE_FORM_DIRECTIVES
	],
	template: `
		<input placeholder="Book title, author" [formControl]="searchControl" type="search">
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
