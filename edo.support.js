"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "edo",
              			"path": "edo/edo.js",
              			"file": "edo.js",
              			"module": "edo",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/edo.git",
              			"test": "edo-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		EventEmitter extension.
              	@end-module-documentation
              
              	@include:
              		{
              			"arid": "arid",
              			"asea": "asea",
              			"budge": "budge",
              			"clazof": "clazof",
              			"diatom": "diatom",
              			"EventEmitter": "events"
              			"falzy": "falzy",
              			"heredito": "heredito",
              			"inface": "inface",
              			"leveld": "leveld",
              			"protype": "protype",
              			"pyck": "pyck",
              			"raze": "raze",
              			"statis": "statis",
              			"symbiote": "symbiote",
              			"zelf": "zelf"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var arid = require("arid");
var asea = require("asea");
var budge = require("budge");
var clazof = require("clazof");
var diatom = require("diatom");
var falzy = require("falzy");
var heredito = require("heredito");
var inface = require("inface");
var leveld = require("leveld");
var protype = require("protype");
var pyck = require("pyck");
var raze = require("raze");
var statis = require("statis");
var symbiote = require("symbiote");
var zelf = require("zelf");



var CONTEXT = (0, _symbol2.default)("context");
var EVENT = (0, _symbol2.default)("event");
var HANDLER = (0, _symbol2.default)("handler");
var LIMIT = (0, _symbol2.default)("limit");
var TIMEOUT = (0, _symbol2.default)("timeout");

var DEFAULT_TIMEOUT = 1000;
var DEFAULT_LIMIT = 1000;

var edo = function edo(parameter) {
	/*;
                                   	@meta-configuration:
                                   		{
                                   			"parameter": "..."
                                   		}
                                   	@end-meta-configuration
                                   */

	parameter = raze(arguments);

	var self = zelf(this);

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

		this[HANDLER].push(handler);

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

	Handler.prototype.execute = function execute(parameter) {var _this = this;
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
				handler.apply(_this.context, parameter);

			} catch (error) {
				_this.event.emit("error", error);
			}
		});

		return this;
	};

	var Event = diatom("Event");

	Event.prototype.initialize = function initialize() {
		this.delay(DEFAULT_TIMEOUT);
		this.restrict(DEFAULT_LIMIT);

		return this;
	};

	Event.prototype.on = function on(event, handler) {var _this2 = this;
		/*;
                                                                      	@meta-configuration:
                                                                      		{
                                                                      			"event:required": [
                                                                      				"string",
                                                                      				"..."
                                                                      			],
                                                                      			"handler:required": "function"
                                                                      		}
                                                                      	@end-meta-configuration
                                                                      */

		var parameter = leveld(arguments);

		event = pyck(parameter, STRING);

		this[EVENT] = event;

		handler = pyck(parameter, FUNCTION).
		reduce(function (delegate, handler) {return delegate.push(handler);}, Handler).
		context(self).
		register(this);

		if (asea.server) {
			var emitter = inface(this, EventEmitter);

			event.forEach(function (event) {return emitter.on(event, handler);});

		} else if (asea.client) {
			event.forEach(function (event) {return _this2.record(event, handler);});
		}

		return this;
	};

	Event.prototype.emit = function emit(event, parameter) {var _this3 = this;
		/*;
                                                                            	@meta-configuration:
                                                                            		{
                                                                            			"event:required": "string",
                                                                            			"parameter": "..."
                                                                            		}
                                                                            	@end-meta-configuration
                                                                            */

		parameter = budge(arguments);

		if (this[LIMIT] <= 0) {
			this.restrict(DEFAULT_LIMIT);

			return this;
		}

		if (this.listenerCount(event) <= 0) {
			var timeout = setTimeout(function () {
				_this3.emit.apply(_this3, [event].concat(parameter));

				clearTimeout(timeout);
			}, this[TIMEOUT]);

			this[LIMIT]--;

		} else {
			this.restrict(DEFAULT_LIMIT);

			if (asea.server) {
				var emitter = inface(this, EventEmitter);

				emitter.emit.apply(this, [event].concat(parameter));

			} else if (asea.client) {
				this.notify.apply(this, [event].concat(parameter));
			}
		}

		return this;
	};

	Event.prototype.delay = function delay(timeout) {
		/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"timeout:required": "number"
                                                  		}
                                                  	@end-meta-configuration
                                                  */

		if (falzy(timeout) || !protype(timeout, NUMBER)) {
			throw new Error("invalid timeout");
		}

		this[TIMEOUT] = timeout;

		return this;
	};

	Event.prototype.restrict = function restrict(limit) {
		/*;
                                                      	@meta-configuration:
                                                      		{
                                                      			"limit:required": "number"
                                                      		}
                                                      	@end-meta-configuration
                                                      */

		if (falzy(limit) || !protype(limit, NUMBER)) {
			throw new Error("invalid limit");
		}

		this[LIMIT] = limit;

		return this;
	};

	Event.prototype.broadcast = function broadcast(event, parameter) {var _this4 = this;
		/*;
                                                                                      	@meta-configuration:
                                                                                      		{
                                                                                      			"event:required": "[string]",
                                                                                      			"parameter": "..."
                                                                                      		}
                                                                                      	@end-meta-configuration
                                                                                      */

		event = plough([event]);

		parameter = budge(arguments);

		event.forEach(function (event) {return _this4.emit.apply(_this4, [event].concat(parameter));});

		return this;
	};

	//: @client:
	if (asea.client) {
		Event.prototype.notify = function notify() {

		};

		Event.prototype.record = function record() {

		};
	}
	//: @end-client



	if (arid(parameter)) {
		return Event;

	} else {
		return Event.apply(null, parameter);
	}
};

module.exports = edo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImJ1ZGdlIiwiY2xhem9mIiwiZGlhdG9tIiwiZmFsenkiLCJoZXJlZGl0byIsImluZmFjZSIsImxldmVsZCIsInByb3R5cGUiLCJweWNrIiwicmF6ZSIsInN0YXRpcyIsInN5bWJpb3RlIiwiemVsZiIsIkNPTlRFWFQiLCJFVkVOVCIsIkhBTkRMRVIiLCJMSU1JVCIsIlRJTUVPVVQiLCJERUZBVUxUX1RJTUVPVVQiLCJERUZBVUxUX0xJTUlUIiwiZWRvIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwic2VsZiIsIkhhbmRsZXIiLCJhdHRhY2giLCJpbXBsZW1lbnQiLCJwdXNoIiwiaGFuZGxlciIsIkZVTkNUSU9OIiwiRXJyb3IiLCJjb250ZXh0IiwicmVnaXN0ZXIiLCJldmVudCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJleGVjdXRlIiwiYXBwbHkiLCJmb3JFYWNoIiwiZXJyb3IiLCJlbWl0IiwiRXZlbnQiLCJkZWxheSIsInJlc3RyaWN0Iiwib24iLCJTVFJJTkciLCJyZWR1Y2UiLCJkZWxlZ2F0ZSIsInNlcnZlciIsImVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJjbGllbnQiLCJyZWNvcmQiLCJsaXN0ZW5lckNvdW50IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjb25jYXQiLCJjbGVhclRpbWVvdXQiLCJub3RpZnkiLCJOVU1CRVIiLCJsaW1pdCIsImJyb2FkY2FzdCIsInBsb3VnaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtB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LFVBQUVMLEtBQUYsVUFBYSxPQUFLTyxJQUFMLENBQVVILEtBQVYsU0FBdUIsQ0FBRUosS0FBRixFQUFVdUIsTUFBVixDQUFrQm5DLFNBQWxCLENBQXZCLENBQWIsRUFBZjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQWpCRDs7QUFtQkE7QUFDQSxLQUFJdEIsS0FBS29ELE1BQVQsRUFBaUI7QUFDaEJWLFFBQU1QLFNBQU4sQ0FBZ0J3QixNQUFoQixHQUF5QixTQUFTQSxNQUFULEdBQWtCOztBQUUxQyxHQUZEOztBQUlBakIsUUFBTVAsU0FBTixDQUFnQmtCLE1BQWhCLEdBQXlCLFNBQVNBLE1BQVQsR0FBa0I7O0FBRTFDLEdBRkQ7QUFHQTtBQUNEOzs7O0FBSUEsS0FBSXZELEtBQU13QixTQUFOLENBQUosRUFBdUI7QUFDdEIsU0FBT29CLEtBQVA7O0FBRUEsRUFIRCxNQUdLO0FBQ0osU0FBT0EsTUFBTUosS0FBTixDQUFhLElBQWIsRUFBbUJoQixTQUFuQixDQUFQO0FBQ0E7QUFDRCxDQTlRRDs7QUFnUkEwQyxPQUFPQyxPQUFQLEdBQWlCNUMsR0FBakIiLCJmaWxlIjoiZWRvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWRvL2Vkby5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZWRvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWRvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWRvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXZlbnRFbWl0dGVyIGV4dGVuc2lvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcIkV2ZW50RW1pdHRlclwiOiBcImV2ZW50c1wiXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJpbmZhY2VcIjogXCJpbmZhY2VcIixcblx0XHRcdFwibGV2ZWxkXCI6IFwibGV2ZWxkXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInB5Y2tcIjogXCJweWNrXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInN0YXRpc1wiOiBcInN0YXRpc1wiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGJ1ZGdlID0gcmVxdWlyZSggXCJidWRnZVwiICk7XG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGluZmFjZSA9IHJlcXVpcmUoIFwiaW5mYWNlXCIgKTtcbmNvbnN0IGxldmVsZCA9IHJlcXVpcmUoIFwibGV2ZWxkXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHN0YXRpcyA9IHJlcXVpcmUoIFwic3RhdGlzXCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuXG5cbmNvbnN0IENPTlRFWFQgPSBTeW1ib2woIFwiY29udGV4dFwiICk7XG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBIQU5ETEVSID0gU3ltYm9sKCBcImhhbmRsZXJcIiApO1xuY29uc3QgTElNSVQgPSBTeW1ib2woIFwibGltaXRcIiApO1xuY29uc3QgVElNRU9VVCA9IFN5bWJvbCggXCJ0aW1lb3V0XCIgKTtcblxuY29uc3QgREVGQVVMVF9USU1FT1VUID0gMTAwMDtcbmNvbnN0IERFRkFVTFRfTElNSVQgPSAxMDAwO1xuXG5jb25zdCBlZG8gPSBmdW5jdGlvbiBlZG8oIHBhcmFtZXRlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgSGFuZGxlciA9IGRpYXRvbSggXCJIYW5kbGVyXCIgKTtcblx0c3RhdGlzKCBIYW5kbGVyIClcblx0XHQuYXR0YWNoKCBIQU5ETEVSLCBbIF0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicHVzaFwiLCBmdW5jdGlvbiBwdXNoKCBoYW5kbGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXIgZnVuY3Rpb25cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBIQU5ETEVSIF0ucHVzaCggaGFuZGxlciApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImNvbnRleHRcIiwgZnVuY3Rpb24gY29udGV4dCggc2VsZiApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJzZWxmOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0dGhpc1sgQ09OVEVYVCBdID0gemVsZiggc2VsZiApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlZ2lzdGVyXCIsIGZ1bmN0aW9uIHJlZ2lzdGVyKCBldmVudCApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV2ZW50XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgRVZFTlQgXSA9IGV2ZW50O1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9ICk7XG5cblx0SGFuZGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLmNvbnRleHQgPSBIYW5kbGVyWyBDT05URVhUIF07XG5cdFx0dGhpcy5ldmVudCA9IEhhbmRsZXJbIEVWRU5UIF07XG5cdFx0dGhpcy5oYW5kbGVyID0gSGFuZGxlclsgSEFORExFUiBdO1xuXG5cdFx0dGhpcy5leGVjdXRlLmFwcGx5KCB0aGlzLCBwYXJhbWV0ZXIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEhhbmRsZXIucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiBleGVjdXRlKCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0dGhpcy5oYW5kbGVyLmZvckVhY2goICggaGFuZGxlciApID0+IHtcblx0XHRcdHRyeXtcblx0XHRcdFx0aGFuZGxlci5hcHBseSggdGhpcy5jb250ZXh0LCBwYXJhbWV0ZXIgKTtcblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHR0aGlzLmV2ZW50LmVtaXQoIFwiZXJyb3JcIiwgZXJyb3IgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRsZXQgRXZlbnQgPSBkaWF0b20oIFwiRXZlbnRcIiApO1xuXG5cdEV2ZW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggKXtcblx0XHR0aGlzLmRlbGF5KCBERUZBVUxUX1RJTUVPVVQgKTtcblx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbiggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0dGhpc1sgRVZFTlQgXSA9IGV2ZW50O1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKVxuXHRcdFx0LnJlZHVjZSggKCBkZWxlZ2F0ZSwgaGFuZGxlciApID0+IGRlbGVnYXRlLnB1c2goIGhhbmRsZXIgKSwgSGFuZGxlciApXG5cdFx0XHQuY29udGV4dCggc2VsZiApXG5cdFx0XHQucmVnaXN0ZXIoIHRoaXMgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0bGV0IGVtaXR0ZXIgPSBpbmZhY2UoIHRoaXMsIEV2ZW50RW1pdHRlciApO1xuXG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gZW1pdHRlci5vbiggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5yZWNvcmQoIGV2ZW50LCBoYW5kbGVyICkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSBidWRnZSggYXJndW1lbnRzICk7XG5cblx0XHRpZiggdGhpc1sgTElNSVQgXSA8PSAwICl7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmxpc3RlbmVyQ291bnQoIGV2ZW50ICkgPD0gMCApe1xuXHRcdFx0bGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoICkgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0XHR9LCB0aGlzWyBUSU1FT1VUIF0gKTtcblxuXHRcdFx0dGhpc1sgTElNSVQgXS0tO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRsZXQgZW1pdHRlciA9IGluZmFjZSggdGhpcywgRXZlbnRFbWl0dGVyICk7XG5cblx0XHRcdFx0ZW1pdHRlci5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0dGhpcy5ub3RpZnkuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoIHRpbWVvdXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpbWVvdXQ6cmVxdWlyZWRcIjogXCJudW1iZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIHRpbWVvdXQgKSB8fCAhcHJvdHlwZSggdGltZW91dCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHRpbWVvdXRcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRJTUVPVVQgXSA9IHRpbWVvdXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUucmVzdHJpY3QgPSBmdW5jdGlvbiByZXN0cmljdCggbGltaXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImxpbWl0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBsaW1pdCApIHx8ICFwcm90eXBlKCBsaW1pdCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpbWl0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBMSU1JVCBdID0gbGltaXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuYnJvYWRjYXN0ID0gZnVuY3Rpb24gYnJvYWRjYXN0KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRldmVudCA9IHBsb3VnaCggWyBldmVudCBdICk7XG5cblx0XHRwYXJhbWV0ZXIgPSBidWRnZSggYXJndW1lbnRzICk7XG5cblx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvLzogQGNsaWVudDpcblx0aWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0RXZlbnQucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSggKXtcblxuXHRcdH07XG5cblx0XHRFdmVudC5wcm90b3R5cGUucmVjb3JkID0gZnVuY3Rpb24gcmVjb3JkKCApe1xuXG5cdFx0fTtcblx0fVxuXHQvLzogQGVuZC1jbGllbnRcblxuXHRcblxuXHRpZiggYXJpZCggcGFyYW1ldGVyICkgKXtcblx0XHRyZXR1cm4gRXZlbnQ7XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIEV2ZW50LmFwcGx5KCBudWxsLCBwYXJhbWV0ZXIgKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlZG87XG4iXX0=
//# sourceMappingURL=edo.support.js.map
