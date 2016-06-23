import { Injectable } from '@angular/core';

import { get } from 'lodash';

const config: any = require('../../../config');

@Injectable()
export class ConfigService {
	constructor() {
	}

	get<T>(path: string): T {
		return get(config, path) as T;
	}
}
