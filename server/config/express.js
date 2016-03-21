'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _stylus = require('stylus');

var _stylus2 = _interopRequireDefault(_stylus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app, config) {

    var ROOT_PATH = config.rootPath;
    var compile = function compile(str, path) {
        return (0, _stylus2.default)(str).set('filename', path);
    };

    app.set('views', ROOT_PATH + '/server/views');
    app.set('view engine', 'jade');

    app.use(_stylus2.default.middleware({
        src: ROOT_PATH + '/public',
        compile: compile
    }));
    app.use(_express2.default.static(ROOT_PATH + '/public'));
};