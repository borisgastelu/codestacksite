'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootPath = _path2.default.normalize(__dirname + '/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		port: process.env.PORT || 5000
	},
	production: {
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
};