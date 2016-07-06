/* tslint:disable:no-unused-variable */
import { Action } from '@ngrx/store';
import { BookSearchState} from './book.model';
/* tslint:enable */

import { BookAction } from './book.action';
import { BookEffect } from './book.effect';
import { BookService } from './book.service';
import { bookSearchReducer } from './book-search.reducer';

import { BookListComponent, BookPreviewComponent, BookSearchComponent, BookSearchPage } from './components';

export * from './book.model';
export * from './book.service';
export * from './components';

export const BOOKS_REDUCERS = {
	bookSearch: bookSearchReducer
};

export const BOOKS_EFFECTS: any[] = [
	BookEffect
];

export const BOOKS_PROVIDERS: any[] = [
	BookAction,
	BookService
];

export const BOOKS_COMPONENTS: any[] = [
	BookListComponent,
	BookPreviewComponent,
	BookSearchComponent,
	BookSearchPage
];
