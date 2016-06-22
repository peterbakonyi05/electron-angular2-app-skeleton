'use strict';

const menu = require('./menu.controller');
const filesController = require('./files.controller');

module.exports = {
    init(mainWindow) {
        filesController.init(mainWindow);
        menu.init(mainWindow);
    }
};