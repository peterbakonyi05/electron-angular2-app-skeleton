import { Injectable, ApplicationRef } from "@angular/core";

const ipcRenderer = require('electron').ipcRenderer;

@Injectable()
export class IpcService {
	constructor(private appRef: ApplicationRef) {
	}

	subscribe(channel: string, listener: (event: any, args: any) => void) {
		const wrappedListener = (event, args) => {
			listener(event, args);
			this.appRef.tick();
		};
		
		ipcRenderer.on(channel, wrappedListener);

		return () => {
			ipcRenderer.removeListener(channel, wrappedListener);
		};
	}

	send(channel: string, data?: any) {
		ipcRenderer.send(channel, data);
		return this;
	}
}
