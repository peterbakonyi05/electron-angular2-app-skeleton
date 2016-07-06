import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';

import { Book, BookSearchState } from './book.model';
import { bookActionType } from './book.action';

const initialState: BookSearchState = {
  books: [],
  isBusy: false,
  query: ''
};

export function bookSearchReducer(state = initialState, action: Action): BookSearchState {
  switch (action.type) {
    case bookActionType.SEARCH: {
      const query = action.payload;

      return Object.assign(state, {
        query,
        isBusy: true
      });
    }

    case bookActionType.SEARCH_COMPLETE: {
      const books: Book[] = action.payload;

      return {
        books,
        isBusy: false,
        query: state.query
      };
    }

    default: {
      return state;
    }
  }
}