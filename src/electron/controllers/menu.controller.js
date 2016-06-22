'use strict';

const { Menu } = require('electron');

module.exports = {
    init(mainWindow) {
        if (process.platform === 'darwin') {
            const template = [{
                label: 'Electron',
                submenu: [{
                    label: 'Quit',
                    accelerator: 'Command+Q',
                    click() {
                        app.quit();
                    }
                }]
            }, {
                label: 'View',
                submenu: [{
                    label: 'Toggle Full Screen',
                    accelerator: 'Ctrl+Command+F',
                    click() {
                        mainWindow.setFullScreen(!mainWindow.isFullScreen());
                    }
                }]
            }];

            const menu = Menu.buildFromTemplate(template);
            Menu.setApplicationMenu(menu);
        } else {
            const template = [{
                label: '&File',
                submenu: [{
                    label: '&Close',
                    accelerator: 'Ctrl+W',
                    click() {
                        mainWindow.close();
                    }
                }]
            }, {
                label: '&View',
                submenu: [{
                    label: 'Toggle &Full Screen',
                    accelerator: 'F11',
                    click() {
                        mainWindow.setFullScreen(!mainWindow.isFullScreen());
                    }
                }]
            }];
            const menu = Menu.buildFromTemplate(template);
            mainWindow.setMenu(menu);
        }
    }
};
