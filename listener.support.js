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
                                                                                                                                                                                                                			"execd": "execd",
                                                                                                                                                                                                                			"exorcise": "exorcise",
                                                                                                                                                                                                                			"falzy": "falzy",
                                                                                                                                                                                                                			"filled": "filled",
                                                                                                                                                                                                                			"kurse": "kurse",
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
var execd = require("execd");
var falzy = require("falzy");
var filled = require("filled");
var kurse = require("kurse");
var posp = require("posp");
var protype = require("protype");
var raze = require("raze");
var statis = require("statis");
var zelf = require("zelf");



var CONTEXT = (0, _symbol2.default)("context");
var EVENT = (0, _symbol2.default)("event");
var HANDLER = (0, _symbol2.default)("handler");

var listener = function listener() {
	var Handler = diatom("Handler");

	statis(Handler).
	attach(HANDLER, []).
	implement("push", function push(handler) {
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

		this[HANDLER].push(kurse(handler));

		return this;
	}).
	implement("merge", function merge(handler) {var _this = this;
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
			handler.list().forEach(function (handler) {return _this.push(handler);});
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
	implement("lock", function lock() {var _this2 = this;
		this[HANDLER].forEach(function (handler, index) {
			_this2[HANDLER][index] = called.bind(_this2[CONTEXT])(handler);
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

	Handler.prototype.execute = function execute(parameter) {var _this3 = this;
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
				handler.apply(_this3.context, parameter);

			} catch (error) {
				_this3.event.emit("error", error);
			}

			if (execd(handler)) {
				posp(_this3.handler, handler);
			}
		});

		return this;
	};



	return Handler;
};

module.exports = listener;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RlbmVyLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXJrb3VudCIsInJlcXVpcmUiLCJjYWxsZWQiLCJjbGF6b2YiLCJkaWF0b20iLCJleGVjZCIsImZhbHp5IiwiZmlsbGVkIiwia3Vyc2UiLCJwb3NwIiwicHJvdHlwZSIsInJhemUiLCJzdGF0aXMiLCJ6ZWxmIiwiQ09OVEVYVCIsIkVWRU5UIiwiSEFORExFUiIsImxpc3RlbmVyIiwiSGFuZGxlciIsImF0dGFjaCIsImltcGxlbWVudCIsInB1c2giLCJoYW5kbGVyIiwiRlVOQ1RJT04iLCJFcnJvciIsIm1lcmdlIiwibGlzdCIsImZvckVhY2giLCJjb250ZXh0Iiwic2VsZiIsInJlZ2lzdGVyIiwiZXZlbnQiLCJjb3VudCIsImZsdXNoIiwicG9wIiwibG9jayIsImluZGV4IiwiYmluZCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJleGVjdXRlIiwiYXBwbHkiLCJyZXZlcnNlIiwiZXJyb3IiLCJlbWl0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImdOQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRUEsSUFBTUEsVUFBVUMsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRSxTQUFTRixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksUUFBUUosUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSyxRQUFRTCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1NLFNBQVNOLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU8sUUFBUVAsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNUSxPQUFPUixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1TLFVBQVVULFFBQVMsU0FBVCxD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aWxlIjoibGlzdGVuZXIuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlZG9cIixcblx0XHRcdFwicGF0aFwiOiBcImVkby9saXN0ZW5lci5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImxpc3RlbmVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlZG9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vkby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVkby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRIYW5kbGVyIGNsYXNzIGZhY3RvcnkuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFya291bnRcIjogXCJhcmtvdW50XCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcImV4ZWNkXCI6IFwiZXhlY2RcIixcblx0XHRcdFwiZXhvcmNpc2VcIjogXCJleG9yY2lzZVwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImZpbGxlZFwiOiBcImZpbGxlZFwiLFxuXHRcdFx0XCJrdXJzZVwiOiBcImt1cnNlXCIsXG5cdFx0XHRcInBvc3BcIjogXCJwb3NwXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInN0YXRpc1wiOiBcInN0YXRpc1wiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFya291bnQgPSByZXF1aXJlKCBcImFya291bnRcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZXhlY2QgPSByZXF1aXJlKCBcImV4ZWNkXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBrdXJzZSA9IHJlcXVpcmUoIFwia3Vyc2VcIiApO1xuY29uc3QgcG9zcCA9IHJlcXVpcmUoIFwicG9zcFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc3RhdGlzID0gcmVxdWlyZSggXCJzdGF0aXNcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cblxuXG5jb25zdCBDT05URVhUID0gU3ltYm9sKCBcImNvbnRleHRcIiApO1xuY29uc3QgRVZFTlQgPSBTeW1ib2woIFwiZXZlbnRcIiApO1xuY29uc3QgSEFORExFUiA9IFN5bWJvbCggXCJoYW5kbGVyXCIgKTtcblxuY29uc3QgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lciggKXtcblx0bGV0IEhhbmRsZXIgPSBkaWF0b20oIFwiSGFuZGxlclwiICk7XG5cblx0c3RhdGlzKCBIYW5kbGVyIClcblx0XHQuYXR0YWNoKCBIQU5ETEVSLCBbIF0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicHVzaFwiLCBmdW5jdGlvbiBwdXNoKCBoYW5kbGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXIgZnVuY3Rpb25cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBIQU5ETEVSIF0ucHVzaCgga3Vyc2UoIGhhbmRsZXIgKSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcIm1lcmdlXCIsIGZ1bmN0aW9uIG1lcmdlKCBoYW5kbGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXIgZnVuY3Rpb25cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdGhhbmRsZXIubGlzdCggKS5mb3JFYWNoKCAoIGhhbmRsZXIgKSA9PiB0aGlzLnB1c2goIGhhbmRsZXIgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImNvbnRleHRcIiwgZnVuY3Rpb24gY29udGV4dCggc2VsZiApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJzZWxmOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0dGhpc1sgQ09OVEVYVCBdID0gemVsZiggc2VsZiApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlZ2lzdGVyXCIsIGZ1bmN0aW9uIHJlZ2lzdGVyKCBldmVudCApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV2ZW50XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgRVZFTlQgXSA9IGV2ZW50O1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImNvdW50XCIsIGZ1bmN0aW9uIGNvdW50KCApe1xuXHRcdFx0cmV0dXJuIGFya291bnQoIHRoaXNbIEhBTkRMRVIgXSApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZmx1c2hcIiwgZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0XHR3aGlsZSggZmlsbGVkKCB0aGlzWyBIQU5ETEVSIF0gKSApIHRoaXNbIEhBTkRMRVIgXS5wb3AoICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwibGlzdFwiLCBmdW5jdGlvbiBsaXN0KCApe1xuXHRcdFx0cmV0dXJuIHJhemUoIHRoaXNbIEhBTkRMRVIgXSApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwibG9ja1wiLCBmdW5jdGlvbiBsb2NrKCApe1xuXHRcdFx0dGhpc1sgSEFORExFUiBdLmZvckVhY2goICggaGFuZGxlciwgaW5kZXggKSA9PiB7XG5cdFx0XHRcdHRoaXNbIEhBTkRMRVIgXVsgaW5kZXggXSA9IGNhbGxlZC5iaW5kKCB0aGlzWyBDT05URVhUIF0gKSggaGFuZGxlciApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9ICk7XG5cblx0SGFuZGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLmNvbnRleHQgPSBIYW5kbGVyWyBDT05URVhUIF07XG5cdFx0dGhpcy5ldmVudCA9IEhhbmRsZXJbIEVWRU5UIF07XG5cdFx0dGhpcy5oYW5kbGVyID0gSGFuZGxlclsgSEFORExFUiBdO1xuXG5cdFx0dGhpcy5leGVjdXRlLmFwcGx5KCB0aGlzLCBwYXJhbWV0ZXIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEhhbmRsZXIucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiBleGVjdXRlKCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0dGhpcy5oYW5kbGVyLnJldmVyc2UoICkuZm9yRWFjaCggKCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRoYW5kbGVyLmFwcGx5KCB0aGlzLmNvbnRleHQsIHBhcmFtZXRlciApO1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHRoaXMuZXZlbnQuZW1pdCggXCJlcnJvclwiLCBlcnJvciApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZXhlY2QoIGhhbmRsZXIgKSApe1xuXHRcdFx0XHRwb3NwKCB0aGlzLmhhbmRsZXIsIGhhbmRsZXIgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRcblxuXHRyZXR1cm4gSGFuZGxlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuZXI7XG4iXX0=
//# sourceMappingURL=listener.support.js.map
