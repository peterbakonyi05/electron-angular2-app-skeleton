import {
	ChangeDetectionStrategy,
	Component,
	Input
} from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { BookModel } from '../../book.model';

@Component({
	selector: 'ea-book-preview',
	template: require('./book-preview.component.html'),
	directives: [
		MD_LIST_DIRECTIVES
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent {
	@Input() book: BookModel;

	get id() {
		return this.book.id;
	}

	get title() {
		return this.book.volumeInfo.title;
	}

	get subtitle() {
		return this.book.volumeInfo.subtitle;
	}

	get authors() {
		return this.book.volumeInfo.authors;
	}

	get thumbnail(): string | boolean {
		if (this.book.volumeInfo.imageLinks) {
			return this.book.volumeInfo.imageLinks.smallThumbnail;
		}

		return false;
	}
}
