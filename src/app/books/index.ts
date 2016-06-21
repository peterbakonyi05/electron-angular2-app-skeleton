import { BookService } from './book.service';

import { BookListComponent, BookPreviewComponent, BookSearchComponent, BookSearchPage } from './components';

export * from './book.model';
export * from './book.service';
export * from './components';

export const BOOKS_PROVIDERS: any[] = [
	BookService
];

export const BOOKS_COMPONENTS: any[] = [
	BookListComponent,
	BookPreviewComponent,
	BookSearchComponent,
	BookSearchPage
];
