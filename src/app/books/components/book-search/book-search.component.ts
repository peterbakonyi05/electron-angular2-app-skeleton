import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
	selector: 'ea-book-search',
	directives: [
		MD_INPUT_DIRECTIVES
	],
	template: `
	<md-input placeholder="Book title, author" [value]="query" (keyup)="keyup$.next($event)"></md-input>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookSearchComponent {
	keyup$ = new Subject<KeyboardEvent>();

	@Output() search: Observable<string> = this.keyup$
		.debounceTime(300)
		.map(event => (event.target as HTMLInputElement).value);
}
