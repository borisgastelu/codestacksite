var express = require('express'),
    stylus = require('stylus');

module.exports = function (app, config) {

    var rootPath = config.rootPath;
    var compile = function (str, path) {
        return stylus(str).set('filename', path);
    };

    app.set('views', rootPath + '/server/views');
    app.set('view engine', 'jade');

    app.use(stylus.middleware(
        {
            src: rootPath + '/public',
            compile: compile
        }
    ));
    app.use(express.static(rootPath + '/public'))

}
