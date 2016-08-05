(function (factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports); if (v !== undefined) module.exports = v;
	}
	else if (typeof define === 'function' && define.amd) {
		define(['require', 'exports', './foo', 'external/foo'], factory);
	}
})(function (require, exports) {
	"use strict";
	var foo_1 = require('./foo');

	var ext_1 = require('external/foo');

	var dynamic = ['a', 'b'];

	require(dynamic, function () {
		console.log('hello world');
	});
});
