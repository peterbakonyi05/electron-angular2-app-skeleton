import './rxjs-operators';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { compose } from "@ngrx/core/compose";
import { storeLogger } from "ngrx-store-logger";
import { provideStore, combineReducers } from "@ngrx/store";
import { runEffects } from "@ngrx/effects";

import { SHARED_PROVIDERS } from "./shared";
import { BOOKS_EFFECTS, BOOKS_REDUCERS, BOOKS_PROVIDERS } from './books';

import { App } from './app';

const appReducer = Object.assign({},
	BOOKS_REDUCERS
);

bootstrap(App, [
    HTTP_PROVIDERS,
    SHARED_PROVIDERS,
    BOOKS_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    runEffects(BOOKS_EFFECTS),
    provideStore(
		compose(
			storeLogger(),
			combineReducers
		)(appReducer)
	),
]);