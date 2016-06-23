/**
 * Add environment specific config here.
 */

'use strict';

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
    nodeEnv,
    googleBooksApi: 'https://www.googleapis.com/books/v1/volumes'
};