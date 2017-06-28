"use strict";var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
                                                                                                                                                                                                                	@submodule-license:
                                                                                                                                                                                                                		The MIT License (MIT)
                                                                                                                                                                                                                		@mit-license
                                                                                                                                                                                                                
                                                                                                                                                                                                                		Copyright (@c) 2017 Richeve Siodina Bebedor
                                                                                                                                                                                                                		@email: richeve.bebedor@gmail.com
                                                                                                                                                                                                                
                                                                                                                                                                                                                		Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                		of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                		in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                		copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                		furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                
                                                                                                                                                                                                                		The above copyright notice and this permission notice shall be included in all
                                                                                                                                                                                                                		copies or substantial portions of the Software.
                                                                                                                                                                                                                
                                                                                                                                                                                                                		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                                                                                                                                                		SOFTWARE.
                                                                                                                                                                                                                	@end-submodule-license
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@submodule-configuration:
                                                                                                                                                                                                                		{
                                                                                                                                                                                                                			"package": "edo",
                                                                                                                                                                                                                			"path": "edo/listener.module.js",
                                                                                                                                                                                                                			"file": "listener.module.js",
                                                                                                                                                                                                                			"module": "edo",
                                                                                                                                                                                                                			"author": "Richeve S. Bebedor",
                                                                                                                                                                                                                			"eMail": "richeve.bebedor@gmail.com",
                                                                                                                                                                                                                			"contributors": [
                                                                                                                                                                                                                				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                			],
                                                                                                                                                                                                                			"repository": "https://github.com/volkovasystems/edo.git",
                                                                                                                                                                                                                			"test": "edo-test.js",
                                                                                                                                                                                                                			"global": false,
                                                                                                                                                                                                                			"internal": true
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-submodule-configuration
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@submodule-documentation:
                                                                                                                                                                                                                		Handler class factory.
                                                                                                                                                                                                                	@end-submodule-documentation
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@include:
                                                                                                                                                                                                                		{
                                                                                                                                                                                                                			"arkount": "arkount",
                                                                                                                                                                                                                			"called": "called",
                                                                                                                                                                                                                			"clazof": "clazof",
                                                                                                                                                                                                                			"diatom": "diatom",
                                                                                                                                                                                                                			"doubt": "doubt",
                                                                                                                                                                                                                			"execd": "execd",
                                                                                                                                                                                                                			"exorcise": "exorcise",
                                                                                                                                                                                                                			"falzy": "falzy",
                                                                                                                                                                                                                			"filled": "filled",
                                                                                                                                                                                                                			"harden": "harden",
                                                                                                                                                                                                                			"idntty": "idntty",
                                                                                                                                                                                                                			"kurse": "kurse",
                                                                                                                                                                                                                			"mrkd": "mrkd",
                                                                                                                                                                                                                			"ntrprt": "ntrprt",
                                                                                                                                                                                                                			"posp": "posp",
                                                                                                                                                                                                                			"protype": "protype",
                                                                                                                                                                                                                			"raze": "raze",
                                                                                                                                                                                                                			"statis": "statis",
                                                                                                                                                                                                                			"zelf": "zelf"
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-include
                                                                                                                                                                                                                */

var arkount = require("arkount");
var called = require("called");
var clazof = require("clazof");
var diatom = require("diatom");
var doubt = require("doubt");
var execd = require("execd");
var falzy = require("falzy");
var filled = require("filled");
var harden = require("harden");
var idntty = require("idntty");
var kurse = require("kurse");
var mrkd = require("mrkd");
var ntrprt = require("ntrprt");
var posp = require("posp");
var protype = require("protype");
var raze = require("raze");
var statis = require("statis");
var zelf = require("zelf");



var CONTEXT = (0, _symbol2.default)("context");
var EVENT = (0, _symbol2.default)("event");
var ID = (0, _symbol2.default)("id");
var LINK = (0, _symbol2.default)("link");
var HANDLER = (0, _symbol2.default)("handler");
var OWNER = (0, _symbol2.default)("owner");

var listener = function listener() {
	var Handler = diatom("Handler");



	statis(Handler).
	attach(HANDLER, []).
	implement("push", function push(handler) {var _this = this;
		/*;
                                                             	@meta-configuration:
                                                             		{
                                                             			"handler:required": [
                                                             				"function",
                                                             				"[function]"
                                                             			]
                                                             		}
                                                             	@end-meta-configuration
                                                             */

		if (doubt(handler, AS_ARRAY)) {
			raze(handler).forEach(function (handler) {return _this.push(handler);});

			return this;
		}

		if (!protype(handler, FUNCTION)) {
			throw new Error("invalid handler function");
		}

		this[HANDLER].push(kurse(handler));

		statis(handler).
		implement("ownedBy", function ownedBy(owner) {
			/*;
                                                	@meta-configuration:
                                                		{
                                                			"owner:required": "Event"
                                                		}
                                                	@end-meta-configuration
                                                */

			if (falzy(owner) || !clazof(owner, "Event")) {
				throw new Error("invalid owner");
			}

			if (mrkd(OWNER, this)) {
				return this;
			}

			harden(OWNER, idntty(owner), this);

			return this;
		}).
		implement("linkedTo", function linkedTo(link) {
			/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"link:required": "Event"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

			if (falzy(link) || !clazof(link, "Event")) {
				throw new Error("invalid link");
			}

			if (mrkd(LINK, this)) {
				return this;
			}

			harden(LINK, idntty(link), this);

			return this;
		}).
		implement("getOwner", function getOwner() {
			return this[OWNER];
		}).
		implement("getLink", function getLink() {
			return this[LINK];
		});

		handler.ownedBy(this[EVENT]);

		return this;
	}).
	implement("merge", function merge(handler) {var _this2 = this;
		/*;
                                                                	@meta-configuration:
                                                                		{
                                                                			"handler:required": "function"
                                                                		}
                                                                	@end-meta-configuration
                                                                */

		if (!protype(handler, FUNCTION)) {
			throw new Error("invalid handler function");
		}

		if (clazof(handler, "Handler")) {
			handler.list().forEach(function (handler) {return _this2.push(handler);});
		}

		return this;
	}).
	implement("context", function context(self) {
		/*;
                                              	@meta-configuration:
                                              		{
                                              			"self:required": "*"
                                              		}
                                              	@end-meta-configuration
                                              */

		this[CONTEXT] = zelf(self);

		return this;
	}).
	implement("register", function register(event) {
		/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"event:required": "Event"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

		if (falzy(event) || !clazof(event, "Event")) {
			throw new Error("invalid event");
		}

		this[EVENT] = event;

		return this;
	}).
	implement("count", function count() {
		return arkount(this[HANDLER]);
	}).
	implement("flush", function flush() {
		while (filled(this[HANDLER])) {this[HANDLER].pop();}



		return this;
	}).
	implement("list", function list() {
		return raze(this[HANDLER]);
	}).
	implement("lock", function lock() {var _this3 = this;
		this[HANDLER].forEach(function (handler, index) {
			_this3[HANDLER][index] = called.bind(_this3[CONTEXT])(handler);
		});

		return this;
	});

	Handler.prototype.initialize = function initialize(parameter) {
		/*;
                                                                	@meta-configuration:
                                                                		{
                                                                			"parameter": "..."
                                                                		}
                                                                	@end-meta-configuration
                                                                */

		parameter = raze(arguments);

		this.context = Handler[CONTEXT];
		this.event = Handler[EVENT];
		this.handler = Handler[HANDLER];

		this.execute.apply(this, parameter);

		return this;
	};

	Handler.prototype.execute = function execute(parameter) {var _this4 = this;
		/*;
                                                                             	@meta-configuration:
                                                                             		{
                                                                             			"parameter": "..."
                                                                             		}
                                                                             	@end-meta-configuration
                                                                             */

		parameter = raze(arguments);

		this.handler.reverse().forEach(function (handler) {
			try {
				handler.apply(_this4.context, parameter);

			} catch (error) {
				_this4.event.emit("error", error);
			}

			if (execd(handler)) {
				posp(_this4.handler, handler);
			}
		});

		return this;
	};

	return Handler;
};

module.exports = listener;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RlbmVyLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXJrb3VudCIsInJlcXVpcmUiLCJjYWxsZWQiLCJjbGF6b2YiLCJkaWF0b20iLCJkb3VidCIsImV4ZWNkIiwiZmFsenkiLCJmaWxsZWQiLCJoYXJkZW4iLCJpZG50dHkiLCJrdXJzZSIsIm1ya2QiLCJudHJwcnQiLCJwb3NwIiwicHJvdHlwZSIsInJhemUiLCJzdGF0aXMiLCJ6ZWxmIiwiQ09OVEVYVCIsIkVWRU5UIiwiSUQiLCJMSU5LIiwiSEFORExFUiIsIk9XTkVSIiwibGlzdGVuZXIiLCJIYW5kbGVyIiwiYXR0YWNoIiwiaW1wbGVtZW50IiwicHVzaCIsImhhbmRsZXIiLCJBU19BUlJBWSIsImZvckVhY2giLCJGVU5DVElPTiIsIkVycm9yIiwib3duZWRCeSIsIm93bmVyIiwibGlua2VkVG8iLCJsaW5rIiwiZ2V0T3duZXIiLCJnZXRMaW5rIiwibWVyZ2UiLCJsaXN0IiwiY29udGV4dCIsInNlbGYiLCJyZWdpc3RlciIsImV2ZW50IiwiY291bnQiLCJmbHVzaCIsInBvcCIsImxvY2siLCJpbmRleCIsImJpbmQiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwiZXhlY3V0ZSIsImFwcGx5IiwicmV2ZXJzZSIsImVycm9yIiwiZW1pdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJnTkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkVBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFFBQVFKLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUssUUFBUUws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QUFMLENBQWFDLEtBQWIsQ0FBb0IsSUFBcEIsRUFBMEJILFNBQTFCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBbEJEOztBQW9CQTdCLFNBQVEyQixTQUFSLENBQWtCSSxPQUFsQixHQUE0QixTQUFTQSxPQUFULENBQWtCRixTQUFsQixFQUE2QjtBQUN4RDs7Ozs7Ozs7QUFRQUEsY0FBWXZDLEtBQU13QyxTQUFOLENBQVo7O0FBRUEsT0FBSzFCLE9BQUwsQ0FBYTZCLE9BQWIsR0FBd0IzQixPQUF4QixDQUFpQyxVQUFFRixPQUFGLEVBQWU7QUFDL0MsT0FBRztBQUNGQSxZQUFRNEIsS0FBUixDQUFlLE9BQUtmLE9BQXBCLEVBQTZCWSxTQUE3Qjs7QUFFQSxJQUhELENBR0MsT0FBT0ssS0FBUCxFQUFjO0FBQ2QsV0FBS2QsS0FBTCxDQUFXZSxJQUFYLENBQWlCLE9BQWpCLEVBQTBCRCxLQUExQjtBQUNBOztBQUVELE9BQUl0RCxNQUFPd0IsT0FBUCxDQUFKLEVBQXNCO0FBQ3JCaEIsU0FBTSxPQUFLZ0IsT0FBWCxFQUFvQkEsT0FBcEI7QUFDQTtBQUNELEdBWEQ7O0FBYUEsU0FBTyxJQUFQO0FBQ0EsRUF6QkQ7O0FBMkJBLFFBQU9KLE9BQVA7QUFDQSxDQTNNRDs7QUE2TUFvQyxPQUFPQyxPQUFQLEdBQWlCdEMsUUFBakIiLCJmaWxlIjoibGlzdGVuZXIuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlZG9cIixcblx0XHRcdFwicGF0aFwiOiBcImVkby9saXN0ZW5lci5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImxpc3RlbmVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlZG9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vkby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVkby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRIYW5kbGVyIGNsYXNzIGZhY3RvcnkuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFya291bnRcIjogXCJhcmtvdW50XCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZXhlY2RcIjogXCJleGVjZFwiLFxuXHRcdFx0XCJleG9yY2lzZVwiOiBcImV4b3JjaXNlXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJpZG50dHlcIjogXCJpZG50dHlcIixcblx0XHRcdFwia3Vyc2VcIjogXCJrdXJzZVwiLFxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiLFxuXHRcdFx0XCJudHJwcnRcIjogXCJudHJwcnRcIixcblx0XHRcdFwicG9zcFwiOiBcInBvc3BcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic3RhdGlzXCI6IFwic3RhdGlzXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJrb3VudCA9IHJlcXVpcmUoIFwiYXJrb3VudFwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgZXhlY2QgPSByZXF1aXJlKCBcImV4ZWNkXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBpZG50dHkgPSByZXF1aXJlKCBcImlkbnR0eVwiICk7XG5jb25zdCBrdXJzZSA9IHJlcXVpcmUoIFwia3Vyc2VcIiApO1xuY29uc3QgbXJrZCA9IHJlcXVpcmUoIFwibXJrZFwiICk7XG5jb25zdCBudHJwcnQgPSByZXF1aXJlKCBcIm50cnBydFwiICk7XG5jb25zdCBwb3NwID0gcmVxdWlyZSggXCJwb3NwXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzdGF0aXMgPSByZXF1aXJlKCBcInN0YXRpc1wiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuXG5cbmNvbnN0IENPTlRFWFQgPSBTeW1ib2woIFwiY29udGV4dFwiICk7XG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBJRCA9IFN5bWJvbCggXCJpZFwiICk7XG5jb25zdCBMSU5LID0gU3ltYm9sKCBcImxpbmtcIiApO1xuY29uc3QgSEFORExFUiA9IFN5bWJvbCggXCJoYW5kbGVyXCIgKTtcbmNvbnN0IE9XTkVSID0gU3ltYm9sKCBcIm93bmVyXCIgKTtcblxuY29uc3QgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lciggKXtcblx0bGV0IEhhbmRsZXIgPSBkaWF0b20oIFwiSGFuZGxlclwiICk7XG5cblx0XG5cblx0c3RhdGlzKCBIYW5kbGVyIClcblx0XHQuYXR0YWNoKCBIQU5ETEVSLCBbIF0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicHVzaFwiLCBmdW5jdGlvbiBwdXNoKCBoYW5kbGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcdFwiW2Z1bmN0aW9uXVwiXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGRvdWJ0KCBoYW5kbGVyLCBBU19BUlJBWSApICl7XG5cdFx0XHRcdHJhemUoIGhhbmRsZXIgKS5mb3JFYWNoKCAoIGhhbmRsZXIgKSA9PiB0aGlzLnB1c2goIGhhbmRsZXIgKSApO1xuXG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgaGFuZGxlciBmdW5jdGlvblwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIEhBTkRMRVIgXS5wdXNoKCBrdXJzZSggaGFuZGxlciApICk7XG5cblx0XHRcdHN0YXRpcyggaGFuZGxlciApXG5cdFx0XHRcdC5pbXBsZW1lbnQoIFwib3duZWRCeVwiLCBmdW5jdGlvbiBvd25lZEJ5KCBvd25lciApe1xuXHRcdFx0XHRcdC8qO1xuXHRcdFx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFwib3duZXI6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHRcdFx0Ki9cblxuXHRcdFx0XHRcdGlmKCBmYWx6eSggb3duZXIgKSB8fCAhY2xhem9mKCBvd25lciwgXCJFdmVudFwiICkgKXtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG93bmVyXCIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggbXJrZCggT1dORVIsIHRoaXMgKSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aGFyZGVuKCBPV05FUiwgaWRudHR5KCBvd25lciApLCB0aGlzICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5pbXBsZW1lbnQoIFwibGlua2VkVG9cIiwgZnVuY3Rpb24gbGlua2VkVG8oIGxpbmsgKXtcblx0XHRcdFx0XHQvKjtcblx0XHRcdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcImxpbms6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHRcdFx0Ki9cblxuXHRcdFx0XHRcdGlmKCBmYWx6eSggbGluayApIHx8ICFjbGF6b2YoIGxpbmssIFwiRXZlbnRcIiApICl7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaW5rXCIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiggbXJrZCggTElOSywgdGhpcyApICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoYXJkZW4oIExJTkssIGlkbnR0eSggbGluayApLCB0aGlzICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5pbXBsZW1lbnQoIFwiZ2V0T3duZXJcIiwgZnVuY3Rpb24gZ2V0T3duZXIoICl7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXNbIE9XTkVSIF07XG5cdFx0XHRcdH0gKVxuXHRcdFx0XHQuaW1wbGVtZW50KCBcImdldExpbmtcIiwgZnVuY3Rpb24gZ2V0TGluayggKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpc1sgTElOSyBdO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdGhhbmRsZXIub3duZWRCeSggdGhpc1sgRVZFTlQgXSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcIm1lcmdlXCIsIGZ1bmN0aW9uIG1lcmdlKCBoYW5kbGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXIgZnVuY3Rpb25cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdGhhbmRsZXIubGlzdCggKS5mb3JFYWNoKCAoIGhhbmRsZXIgKSA9PiB0aGlzLnB1c2goIGhhbmRsZXIgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImNvbnRleHRcIiwgZnVuY3Rpb24gY29udGV4dCggc2VsZiApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJzZWxmOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0dGhpc1sgQ09OVEVYVCBdID0gemVsZiggc2VsZiApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlZ2lzdGVyXCIsIGZ1bmN0aW9uIHJlZ2lzdGVyKCBldmVudCApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV2ZW50XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgRVZFTlQgXSA9IGV2ZW50O1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImNvdW50XCIsIGZ1bmN0aW9uIGNvdW50KCApe1xuXHRcdFx0cmV0dXJuIGFya291bnQoIHRoaXNbIEhBTkRMRVIgXSApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZmx1c2hcIiwgZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0XHR3aGlsZSggZmlsbGVkKCB0aGlzWyBIQU5ETEVSIF0gKSApIHRoaXNbIEhBTkRMRVIgXS5wb3AoICk7XG5cblx0XHRcdFxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImxpc3RcIiwgZnVuY3Rpb24gbGlzdCggKXtcblx0XHRcdHJldHVybiByYXplKCB0aGlzWyBIQU5ETEVSIF0gKTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImxvY2tcIiwgZnVuY3Rpb24gbG9jayggKXtcblx0XHRcdHRoaXNbIEhBTkRMRVIgXS5mb3JFYWNoKCAoIGhhbmRsZXIsIGluZGV4ICkgPT4ge1xuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGluZGV4IF0gPSBjYWxsZWQuYmluZCggdGhpc1sgQ09OVEVYVCBdICkoIGhhbmRsZXIgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApO1xuXG5cdEhhbmRsZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0dGhpcy5jb250ZXh0ID0gSGFuZGxlclsgQ09OVEVYVCBdO1xuXHRcdHRoaXMuZXZlbnQgPSBIYW5kbGVyWyBFVkVOVCBdO1xuXHRcdHRoaXMuaGFuZGxlciA9IEhhbmRsZXJbIEhBTkRMRVIgXTtcblxuXHRcdHRoaXMuZXhlY3V0ZS5hcHBseSggdGhpcywgcGFyYW1ldGVyICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRIYW5kbGVyLnByb3RvdHlwZS5leGVjdXRlID0gZnVuY3Rpb24gZXhlY3V0ZSggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuaGFuZGxlci5yZXZlcnNlKCApLmZvckVhY2goICggaGFuZGxlciApID0+IHtcblx0XHRcdHRyeXtcblx0XHRcdFx0aGFuZGxlci5hcHBseSggdGhpcy5jb250ZXh0LCBwYXJhbWV0ZXIgKTtcblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHR0aGlzLmV2ZW50LmVtaXQoIFwiZXJyb3JcIiwgZXJyb3IgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGV4ZWNkKCBoYW5kbGVyICkgKXtcblx0XHRcdFx0cG9zcCggdGhpcy5oYW5kbGVyLCBoYW5kbGVyICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0cmV0dXJuIEhhbmRsZXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbmVyO1xuIl19
//# sourceMappingURL=listener.support.js.map
