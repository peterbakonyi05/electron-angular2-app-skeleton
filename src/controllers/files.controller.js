const electron = require('electron');
const { ipcMain } = electron;

const filesService = require('../services/files.service');

module.exports = {
    init(win) {
        ipcMain.on('pick-directory', (event) => {
            electron.dialog.showOpenDialog(win, {
                properties: ['openDirectory']
            }, (d) => {
                filesService
                    .getFiles(d[0])
                    .then(items => {
                        event.sender.send('get-picked-directory', items);
                    });
            });
        });
    }
};
