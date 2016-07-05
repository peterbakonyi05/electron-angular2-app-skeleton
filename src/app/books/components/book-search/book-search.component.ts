import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'ea-book-search',
	directives: [
		REACTIVE_FORM_DIRECTIVES
	],
	template: `
		<input placeholder="Book title, author" [formControl]="searchControl" type="text">
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchComponent {
	searchControl = new FormControl('');

	keyup$ = new Subject<KeyboardEvent>();

	@Output() search = this.searchControl
		.valueChanges
		.debounceTime(300)
        .map((value) => value.search);
}
