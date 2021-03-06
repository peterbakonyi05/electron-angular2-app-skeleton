'use strict';

const electron = require('electron');
const { BrowserWindow, app } = electron;
const controllers = require('./electron/controllers');
const { configService } = require('./electron/services');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        height: 1000,
        width: 1880
    });

    // init controllers to expose "server-side" functionality
    controllers.init(win);

    if (configService.get('nodeEnv') === 'development') {
        win.openDevTools();
    }

    // and load the index.html of the app.
    win.loadURL(`file://${__dirname}/index.html`);


    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
