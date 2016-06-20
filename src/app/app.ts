import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

import { IpcService } from "./services/ipc.service";


@Component({
	selector: 'app',
	providers: [
		IpcService
	],
	template: `
    	<button (click)="sendMessage()">Send message</button>
    `
})

export class App {

	constructor(private ipcService: IpcService) {
		this.ipcService.subscribe("get-picked-directory", (e, directory) => {
			console.log(directory);
		});
	}

	sendMessage() {
		this.ipcService.send('pick-directory');
	}
}

bootstrap(App);
