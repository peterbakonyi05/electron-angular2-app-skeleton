import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';

import { Book } from '../../book.model';
import { BookAction } from '../../book.action';
import { BookListComponent } from '../book-list';
import { BookSearchComponent } from '../book-search';

import {AppState} from '../../../app.state';

@Component({
	template: require('./book-search-page.component.html'),
	selector: 'ea-book-search-page',
	directives: [
		MD_CARD_DIRECTIVES,
		MD_PROGRESS_CIRCLE_DIRECTIVES,
		BookListComponent,
		BookSearchComponent
	]
})
export class BookSearchPage implements OnInit {
	books$: Observable<Book[]>;
	query$: Observable<string>;
	isBusy$: Observable<boolean>;

	constructor(
		private bookAction: BookAction,
		private store: Store<AppState>
	) {
	}

	ngOnInit() {
		this.query$ = this.store
			.select((s: AppState) => s.bookSearch.query)
			.take(1);
		this.books$ = this.store.select((s: AppState) => s.bookSearch.books);
		this.isBusy$ = this.store.select((s: AppState) => s.bookSearch.isBusy);
	}

	search(query: string) {
		this.store.dispatch(this.bookAction.search(query));
	}
}