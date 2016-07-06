import { RouterConfig } from '@angular/router';
import { FilesInDirectoryComponent } from './files-in-directory';
import { HomeComponent } from './home';
import { BookSearchPage } from './books';

export const routes: RouterConfig = [
	{ path: 'home', component: HomeComponent },
	{ path: 'files-in-directory', component: FilesInDirectoryComponent },
	{ path: 'books-search', component: BookSearchPage }
];