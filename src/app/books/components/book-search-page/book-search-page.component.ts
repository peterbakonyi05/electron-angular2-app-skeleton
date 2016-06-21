import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { BookModel } from '../../book.model';
import { BookService } from '../../book.service';

import { BookListComponent } from '../book-list';
import { BookSearchComponent } from '../book-search';

@Component({
	template: require('./book-search-page.component.html'),
	selector: 'ea-book-search-page',
	directives: [
		MD_CARD_DIRECTIVES,
		BookListComponent,
		BookSearchComponent
	]
})
export class BookSearchPage {
	books: BookModel[] = [];

	constructor(private bookService: BookService) {
	}

	search(query: string) {
		this.bookService.searchBooks(query)
			.subscribe((books: BookModel[]) => {
				this.books = books;
			});
	}
}