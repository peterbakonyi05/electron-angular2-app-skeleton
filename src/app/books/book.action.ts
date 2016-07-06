import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from './book.model';


export const bookActionType = {
    SEARCH: '[Book] Search',
    SEARCH_COMPLETE: '[Book] Search Complete'
};

@Injectable()
export class BookAction {
    search(query: string): Action {
        return {
            type: bookActionType.SEARCH,
            payload: query
        };
    }

    searchComplete(results: Book[]): Action {
        return {
            type: bookActionType.SEARCH_COMPLETE,
            payload: results
        };
    }
}