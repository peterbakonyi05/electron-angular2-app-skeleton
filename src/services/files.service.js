'use strict';

const fs = require('fs');

module.exports = {
    getFiles(directory) {
        return new Promise((resolve, reject) => {
            fs.readdir(directory, function (err, items) {
                if (err) {
                    reject(err);
                }

                resolve(items);
            });
        });
    }
};