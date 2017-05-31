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

		this.handler.forEach(function (handler) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RlbmVyLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXJrb3VudCIsInJlcXVpcmUiLCJjYWxsZWQiLCJjbGF6b2YiLCJkaWF0b20iLCJleGVjZCIsImZhbHp5IiwiZmlsbGVkIiwia3Vyc2UiLCJwb3NwIiwicHJvdHlwZSIsInJhemUiLCJzdGF0aXMiLCJ6ZWxmIiwiQ09OVEVYVCIsIkVWRU5UIiwiSEFORExFUiIsImxpc3RlbmVyIiwiSGFuZGxlciIsImF0dGFjaCIsImltcGxlbWVudCIsInB1c2giLCJoYW5kbGVyIiwiRlVOQ1RJT04iLCJFcnJvciIsIm1lcmdlIiwibGlzdCIsImZvckVhY2giLCJjb250ZXh0Iiwic2VsZiIsInJlZ2lzdGVyIiwiZXZlbnQiLCJjb3VudCIsImZsdXNoIiwicG9wIiwibG9jayIsImluZGV4IiwiYmluZCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJleGVjdXRlIiwiYXBwbHkiLCJlcnJvciIsImVtaXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiZ05BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtFQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1LLFFBQVFMLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTU0sU0FBU04sUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTyxRQUFRUCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1RLE9BQU9SLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTVMsVUFBVVQsUUFBUyxTQUFULENBQWhCO0FBQ0Es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Iiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWRvL2xpc3RlbmVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibGlzdGVuZXIubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWRvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWRvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEhhbmRsZXIgY2xhc3MgZmFjdG9yeS5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJrb3VudFwiOiBcImFya291bnRcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZXhlY2RcIjogXCJleGVjZFwiLFxuXHRcdFx0XCJleG9yY2lzZVwiOiBcImV4b3JjaXNlXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXG5cdFx0XHRcImt1cnNlXCI6IFwia3Vyc2VcIixcblx0XHRcdFwicG9zcFwiOiBcInBvc3BcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic3RhdGlzXCI6IFwic3RhdGlzXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJrb3VudCA9IHJlcXVpcmUoIFwiYXJrb3VudFwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBleGVjZCA9IHJlcXVpcmUoIFwiZXhlY2RcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGt1cnNlID0gcmVxdWlyZSggXCJrdXJzZVwiICk7XG5jb25zdCBwb3NwID0gcmVxdWlyZSggXCJwb3NwXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzdGF0aXMgPSByZXF1aXJlKCBcInN0YXRpc1wiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuXG5cbmNvbnN0IENPTlRFWFQgPSBTeW1ib2woIFwiY29udGV4dFwiICk7XG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBIQU5ETEVSID0gU3ltYm9sKCBcImhhbmRsZXJcIiApO1xuXG5jb25zdCBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCApe1xuXHRsZXQgSGFuZGxlciA9IGRpYXRvbSggXCJIYW5kbGVyXCIgKTtcblxuXHRzdGF0aXMoIEhhbmRsZXIgKVxuXHRcdC5hdHRhY2goIEhBTkRMRVIsIFsgXSApXG5cdFx0LmltcGxlbWVudCggXCJwdXNoXCIsIGZ1bmN0aW9uIHB1c2goIGhhbmRsZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgaGFuZGxlciBmdW5jdGlvblwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIEhBTkRMRVIgXS5wdXNoKCBrdXJzZSggaGFuZGxlciApICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwibWVyZ2VcIiwgZnVuY3Rpb24gbWVyZ2UoIGhhbmRsZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgaGFuZGxlciBmdW5jdGlvblwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBjbGF6b2YoIGhhbmRsZXIsIFwiSGFuZGxlclwiICkgKXtcblx0XHRcdFx0aGFuZGxlci5saXN0KCApLmZvckVhY2goICggaGFuZGxlciApID0+IHRoaXMucHVzaCggaGFuZGxlciApICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiY29udGV4dFwiLCBmdW5jdGlvbiBjb250ZXh0KCBzZWxmICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInNlbGY6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHR0aGlzWyBDT05URVhUIF0gPSB6ZWxmKCBzZWxmICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVnaXN0ZXJcIiwgZnVuY3Rpb24gcmVnaXN0ZXIoIGV2ZW50ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBFVkVOVCBdID0gZXZlbnQ7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiY291bnRcIiwgZnVuY3Rpb24gY291bnQoICl7XG5cdFx0XHRyZXR1cm4gYXJrb3VudCggdGhpc1sgSEFORExFUiBdICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJmbHVzaFwiLCBmdW5jdGlvbiBmbHVzaCggKXtcblx0XHRcdHdoaWxlKCBmaWxsZWQoIHRoaXNbIEhBTkRMRVIgXSApICkgdGhpc1sgSEFORExFUiBdLnBvcCggKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJsaXN0XCIsIGZ1bmN0aW9uIGxpc3QoICl7XG5cdFx0XHRyZXR1cm4gcmF6ZSggdGhpc1sgSEFORExFUiBdICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJsb2NrXCIsIGZ1bmN0aW9uIGxvY2soICl7XG5cdFx0XHR0aGlzWyBIQU5ETEVSIF0uZm9yRWFjaCggKCBoYW5kbGVyLCBpbmRleCApID0+IHtcblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBpbmRleCBdID0gY2FsbGVkLmJpbmQoIHRoaXNbIENPTlRFWFQgXSApKCBoYW5kbGVyICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKTtcblxuXHRIYW5kbGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuY29udGV4dCA9IEhhbmRsZXJbIENPTlRFWFQgXTtcblx0XHR0aGlzLmV2ZW50ID0gSGFuZGxlclsgRVZFTlQgXTtcblx0XHR0aGlzLmhhbmRsZXIgPSBIYW5kbGVyWyBIQU5ETEVSIF07XG5cblx0XHR0aGlzLmV4ZWN1dGUuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0SGFuZGxlci5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIGV4ZWN1dGUoIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLmhhbmRsZXIuZm9yRWFjaCggKCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRoYW5kbGVyLmFwcGx5KCB0aGlzLmNvbnRleHQsIHBhcmFtZXRlciApO1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHRoaXMuZXZlbnQuZW1pdCggXCJlcnJvclwiLCBlcnJvciApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZXhlY2QoIGhhbmRsZXIgKSApe1xuXHRcdFx0XHRwb3NwKCB0aGlzLmhhbmRsZXIsIGhhbmRsZXIgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRcblxuXHRyZXR1cm4gSGFuZGxlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuZXI7XG4iXX0=
//# sourceMappingURL=listener.support.js.map
