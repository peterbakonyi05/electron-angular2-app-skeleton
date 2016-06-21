import { Component, OnDestroy, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { IpcService } from '../../services/ipc.service';

@Component({
	selector: 'ea-files-in-directory',
	directives: [
		MD_BUTTON_DIRECTIVES,
		MD_CARD_DIRECTIVES,
		MD_LIST_DIRECTIVES
	],
	template: require('./files-in-directory.component.html')
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
