import { Injectable } from '@angular/core';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BookService } from './book.service';
import { BookAction, bookActionType } from './book.action';
import { BookSearchState } from './book.model';


@Injectable()
export class BookEffect {
    constructor(
        private updates$: StateUpdates<BookSearchState>,
        private bookService: BookService,
        private bookAction: BookAction
    ) { }


    @Effect() search$ = this.updates$
        .whenAction(bookActionType.SEARCH)
        .map<string>(toPayload)
        .filter((query: string) => query !== '')
        .switchMap((query: string) => this.bookService.searchBooks(query)
            .map(books => this.bookAction.searchComplete(books))
            .catch(() => Observable.of(this.bookAction.searchComplete([])))
        );


    @Effect() clearSearch$ = this.updates$
        .whenAction(bookActionType.SEARCH)
        .map<string>(toPayload)
        .filter((query: string) => query === '')
        .mapTo(this.bookAction.searchComplete([]));

}