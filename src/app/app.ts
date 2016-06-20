import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from "@angular2-material/button"
import { MD_LIST_DIRECTIVES } from "@angular2-material/list"

import { IpcService } from "./services/ipc.service";

@Component({
	selector: 'app',
	directives: [
		MD_BUTTON_DIRECTIVES,
		MD_LIST_DIRECTIVES
	],
	providers: [
		IpcService
	],
	template: `
		<div *ngIf="files.length">
			<label>The directory contains the following items:</label>
			<md-list >
			   <md-list-item *ngFor="let fileName of files">{{fileName}}</md-list-item>
			</md-list>
		</div>
    	<button 
    		md-raised-button 
    		(click)="pickDirectory()"
		>Pick Directory</button>
    `
})
export class App {
	files: string[] = [];

	constructor(private ipcService: IpcService) {
		this.ipcService.subscribe('get-picked-directory', (e, files) => {
			this.files = files;
		});
	}

	pickDirectory() {
		this.ipcService.send('pick-directory');
	}
}

bootstrap(App);
