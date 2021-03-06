import './rxjs-operators';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { compose } from "@ngrx/core/compose";
import { storeLogger } from "ngrx-store-logger";
import { provideStore, combineReducers } from "@ngrx/store";
import { runEffects } from "@ngrx/effects";
import { TRANSLATE_PROVIDERS } from 'ng2-translate/ng2-translate';

import { SHARED_PROVIDERS } from "./shared";
import { BOOKS_EFFECTS, BOOKS_REDUCERS, BOOKS_PROVIDERS } from './books';
import { App } from './app';
import { routes } from './routes';

const appReducer = Object.assign({},
  BOOKS_REDUCERS
);

bootstrap(App, [
  HTTP_PROVIDERS,
  TRANSLATE_PROVIDERS,
  provideRouter(routes),
  SHARED_PROVIDERS,
  BOOKS_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provideStore(
    compose(
      storeLogger(),
      combineReducers
    )(appReducer)
  ),
  runEffects(BOOKS_EFFECTS)
]);