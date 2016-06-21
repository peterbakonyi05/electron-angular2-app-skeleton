import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { BookModel } from '../../book.model';

import { BookPreviewComponent } from "../book-preview";

@Component({
	directives: [
		MD_LIST_DIRECTIVES,
		BookPreviewComponent
	],
	selector: 'ea-book-list',
	template: require('./book-list.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
	@Input() books: BookModel[];
}