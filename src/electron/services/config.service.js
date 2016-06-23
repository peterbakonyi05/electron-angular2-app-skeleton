'use strict';

const _ = require('lodash');

const config = require('../../../config');

module.exports = {
    get(path) {
        if (!_.isString(path)) {
            throw new TypeError('Invalid parameter');
        }
        
        return _.get(config, path);
    }
};
