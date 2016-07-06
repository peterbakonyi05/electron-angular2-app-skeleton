'use strict';

const path = require('path');
const webpack = require('webpack');

const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
    devtool: 'source-map',
    debug: true,

    entry: {
        'angular2': [
            'rxjs',
            'reflect-metadata',
            '@angular/core'
        ],
        'app': './src/app/main.desktop.ts'
    },

    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.html'],
        alias: {
            '@angular/common': path.resolve('./node_modules/@angular/common'),
            '@angular/compiler': path.resolve('./node_modules/@angular/compiler'),
            '@angular/core': path.resolve('./node_modules/@angular/core'),
            '@angular/http': path.resolve('./node_modules/@angular/http'),
            '@angular/platform-browser': path.resolve('./node_modules/@angular/platform-browser'),
            '@angular/platform-browser-dynamic': path.resolve('./node_modules/@angular/platform-browser-dynamic'),
            '@ngrx/core': path.resolve('./node_modules/@ngrx/core'),
            '@ngrx/effects': path.resolve('./node_modules/@ngrx/effects'),
            '@ngrx/store': path.resolve('./node_modules/@ngrx/store'),
            'rxjs': path.resolve('./node_modules/rxjs'),
        }
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [/node_modules/]
            },
            {
                test: /\.scss$/,
                loader: 'raw-loader!sass-loader',
                exclude: [/node_modules/]
            }
        ]
    },
    externals: [
        (function () {
            var IGNORES = [
                'electron'
            ];
            return function (context, request, callback) {
                if (IGNORES.indexOf(request) >= 0) {
                    return callback(null, "require('" + request + "')");
                }
                return callback();
            };
        })()
    ],
    plugins: [
        new CommonsChunkPlugin({ name: 'angular2', filename: 'angular2.js', minChunks: Infinity }),
        new CommonsChunkPlugin({ name: 'common', filename: 'common.js' })
    ],
    target: 'node-webkit'
};
