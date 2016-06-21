import { Component, OnDestroy, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { IpcService } from '../../services/ipc.service';

@Component({
	selector: 'ea-files-in-directory',
	directives: [
		MD_BUTTON_DIRECTIVES,
		MD_LIST_DIRECTIVES
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
export class FilesInDirectoryComponent implements OnDestroy, OnInit {
	files: string[] = [];
	off: any;

	constructor(private ipcService: IpcService) {
	}

	ngOnInit() {
		this.off = this.ipcService.subscribe('get-picked-directory', (e, files) => {
			this.files = files || [];
		});
	}

	ngOnDestroy() {
		this.off();
	}

	pickDirectory() {
		this.ipcService.send('pick-directory');
	}
}
