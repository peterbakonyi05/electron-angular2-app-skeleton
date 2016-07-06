import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { ConfigService } from '../shared/config.service';

import { Book } from "./book.model";


@Injectable()
export class BookService {
	private API_PATH: string;

	constructor(private http: Http, configService: ConfigService) {
		this.API_PATH = configService.get<string>('googleBooksApi');
	}

	searchBooks(queryTitle: string): Observable<Book[]> {
		return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
			.map(res => res.json().items);
	}

	retrieveBook(volumeId: string): Observable<Book> {
		return this.http.get(`${this.API_PATH}/${volumeId}`)
			.map(res => res.json());
	}
}
