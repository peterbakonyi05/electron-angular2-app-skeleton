import { Injectable } from "@angular/core";

declare var require: any;
const ipcRenderer = require('electron').ipcRenderer;

@Injectable()
export class IpcService {

	subscribe(channel: string, listener: (event: any, args: any) => void) {
		ipcRenderer.on(channel, listener);
		return () => {
			ipcRenderer.removeListener(channel, listener);
		};
	}

	send(channel: string, data?: any) {
		ipcRenderer.send(channel, data);
		return this;
	}
}
