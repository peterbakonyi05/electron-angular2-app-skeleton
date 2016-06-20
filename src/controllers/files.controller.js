const _ = require('lodash');
const electron = require('electron');
const { ipcMain } = electron;

const filesService = require('../services/files.service');

module.exports = {
    init(win) {
        ipcMain.on('pick-directory', (event) => {
            electron.dialog.showOpenDialog(win, {
                properties: ['openDirectory']
            }, (directories) => {
                const send = items => event.sender.send('get-picked-directory', items);
                const d = _.get(directories, '0');

                if (!d) {
                    send(undefined);
                    return;
                }

                filesService
                    .getFiles(d)
                    .then(items => send(items))
                    .catch(() => send(undefined));
            });
        });
    }
};
