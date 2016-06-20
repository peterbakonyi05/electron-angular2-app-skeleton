import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

declare var require: any;
const ipcRenderer = require('electron').ipcRenderer;

ipcRenderer.on('asynchronous-reply', (event, data) => {
	console.log(data);
});

@Component({
	selector: 'app',
	template: `
    <button (click)="sendMessage()">Send message</button>
  `
})

export class App {

	sendMessage() {
		ipcRenderer.send('asynchronous-message', 'ping');
	}
}

bootstrap(App);
