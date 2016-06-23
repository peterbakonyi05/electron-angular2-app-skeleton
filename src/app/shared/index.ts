export * from './config.service';
export * from './ipc.service';

import { ConfigService } from './config.service';
import { IpcService } from './ipc.service';

export const SHARED_PROVIDERS: any[] = [
	ConfigService,
	IpcService
];