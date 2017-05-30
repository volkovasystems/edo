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
              			"called": "called",
              			"clazof": "clazof",
              			"diatom": "diatom",
              			"eqe": "eqe",
              			"EventEmitter": "events",
              			"falzy": "falzy",
              			"harden": "harden",
              			"heredito": "heredito",
              			"idntfy": "idntfy",
              			"inface": "inface",
              			"infray": "infray",
              			"kein": "kein",
              			"leveld": "leveld",
              			"plough": "plough",
              			"protype": "protype",
              			"pyck": "pyck",
              			"raze": "raze",
              			"symbiote": "symbiote",
              			"valu": "valu",
              			"zelf": "zelf"
              		}
              	@end-include
              */var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var arid = require("arid");
var asea = require("asea");
var budge = require("budge");
var called = require("called");
var clazof = require("clazof");
var diatom = require("diatom");
var eqe = require("eqe");
var falzy = require("falzy");
var harden = require("harden");
var heredito = require("heredito");
var idntfy = require("idntfy");
var inface = require("inface");
var infray = require("infray");
var kein = require("kein");
var leveld = require("leveld");
var plough = require("plough");
var protype = require("protype");
var pyck = require("pyck");
var raze = require("raze");
var symbiote = require("symbiote");
var valu = require("valu");
var zelf = require("zelf");



//: @client:
var listener = require("./listener.support.js");
//: @end-client

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

	var Event = diatom("Event");

	Event.prototype.initialize = function initialize() {
		this.delay(DEFAULT_TIMEOUT);
		this.restrict(DEFAULT_LIMIT);

		harden(HANDLER, {}, this);

		return this;
	};

	Event.prototype.on = function on(event, handler) {var _this = this;
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

		handler = pyck(parameter, FUNCTION);

		/*;
                                       	@note:
                                       		Checks if the event-handler is already registered.
                                       	@end-note
                                       */
		if (this.registered(event, handler)) {
			return this;
		}

		handler = handler.reduce(function (listener, handler) {
			return listener.push(handler);
		}, listener()).context(self).register(this);

		if (asea.server) {
			var emitter = inface(this, EventEmitter);

			event.forEach(function (event) {return emitter.on(event, handler);});

		} else if (asea.client) {
			event.forEach(function (event) {return _this.handle(event, handler);});

		} else {
			throw new Error("cannot determine platform, platform not supported");
		}

		return this;
	};

	Event.prototype.once = function once(event, handler) {var _this2 = this;
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

		handler = pyck(parameter, FUNCTION);

		if (this.registered(event, handler)) {
			return this;
		}

		handler = handler.map(function (handler) {return called.bind(self)(handler);}).
		reduce(function (listener, handler) {return listener.push(handler);}, listener()).
		context(self).
		register(this);

		if (asea.server) {
			var emitter = inface(this, EventEmitter);

			event.forEach(function (event) {return emitter.once(event, handler);});

		} else if (asea.client) {
			event.forEach(function (event) {return _this2.handle(event, handler, true);});

		} else {
			throw new Error("cannot determine platform, platform not supported");
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

		if (this.count(event) <= 0) {
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

			} else {
				throw new Error("cannot determine platform, platform not supported");
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

	Event.prototype.count = function count(event) {
		if (asea.server) {
			return this.listenerCount(event);

		} else if (asea.client) {
			if (kein(event, this[HANDLER])) {
				return this[HANDLER][event].count();
			}

			return 0;

		} else {
			throw new Error("cannot determine platform, platform not supported");
		}
	};

	Event.prototype.flush = function flush() {
		if (asea.server) {
			this.removeAllListeners();

		} else if (asea.client) {
			valu(this[HANDLER]).forEach(function (handler) {return handler.flush();});

		} else {
			throw new Error("cannot determine platform, platform not supported");
		}

		return this;
	};

	/*;
    	@method-documentation:
    		Bi-directional merging of event handlers.
    	@end-method-documentation
    */
	Event.prototype.merge = function merge(event) {
		/*;
                                                	@meta-configuration:
                                                		{
                                                			"event:required": "Event"
                                                		}
                                                	@end-meta-configuration
                                                */

		if (falzy(event) || !clazof(event, "Event")) {
			throw new Error("cannot merge event");
		}

		this.transfer(event);
		event.transfer(this);

		return this;
	};

	/*;
    	@method-documentation:
    		Transfer event handlers.
    	@end-method-documentation
    */
	Event.prototype.transfer = function transfer(event) {var _this5 = this;
		/*;
                                                                         	@meta-configuration:
                                                                         		{
                                                                         			"event:required": "Event"
                                                                         		}
                                                                         	@end-meta-configuration
                                                                         */

		if (falzy(event) || !clazof(event, "Event")) {
			throw new Error("cannot transfer from event");
		}

		infray(event.list(), this.list()).
		forEach(function (name) {
			_this5.on(name, function emit() {
				event.emit.apply(event, [name].concat(raze(arguments)));
			});
		});

		return this;
	};

	/*;
    	@method-documentation:
    		List registered event names.
    	@end-method-documentation
    */
	Event.prototype.list = function list() {
		if (asea.server) {
			return this.eventNames();

		} else if (asea.client) {
			return (0, _keys2.default)(this[HANDLER]);

		} else {
			throw new Error("cannot determine platform, platform not supported");
		}
	};

	/*;
    	@method-documentation:
    		List the handlers of the event.
    	@end-method-documentation
    */
	Event.prototype.handler = function handler(event) {
		/*;
                                                    	@meta-configuration:
                                                    		{
                                                    			"event:required": "string"
                                                    		}
                                                    	@end-meta-configuration
                                                    */

		if (falzy(event) || !protype(event, STRING)) {
			return [];
		}

		if (asea.server) {
			return this.listeners(event).reduce(function (list, handler) {
				if (clazof(handler, "Handler")) {
					return list.concat(handler.list());

				} else {
					list.push(handler);

					return list;
				}
			}, []);

		} else if (asea.client) {
			if (!kein(event, this[HANDLER])) {
				return [];
			}

			return this[HANDLER][event].list();

		} else {
			throw new Error("cannot determine platform, platform not supported");
		}
	};

	/*;
    	@method-documentation:
    		Checks if the event-handler is registered.
    	@end-method-documentation
    */
	Event.prototype.registered = function registered(event, handler) {var _this6 = this;
		/*;
                                                                                      	@meta-configuration:
                                                                                      		{
                                                                                      			"event:required": [
                                                                                      				"string",
                                                                                      				"[string]",
                                                                                      				"..."
                                                                                      			],
                                                                                      			"handler:required": [
                                                                                      				"function",
                                                                                      				"[function]",
                                                                                      				"..."
                                                                                      			]
                                                                                      		}
                                                                                      	@end-meta-configuration
                                                                                      */

		handler = pyck(plough(arguments), FUNCTION);

		return pyck(plough(arguments), STRING).some(function (event) {
			return _this6.handler(event).some(function (listener) {
				return handler.some(function (handler) {
					return idntfy(listener, handler) || eqe(listener, handler);
				});
			});
		});
	};

	//: @client:
	if (asea.client) {
		Event.prototype.notify = function notify(event, parameter) {
			/*;
                                                              	@meta-configuration:
                                                              		{
                                                              			"event:required": "string",
                                                              			"parameter": "..."
                                                              		}
                                                              	@end-meta-configuration
                                                              */

			if (kein(event, this[HANDLER])) {
				parameter = budge(arguments);

				this[HANDLER][event].apply(self, parameter);
			}

			return this;
		};

		Event.prototype.handle = function handle(event, handler, once) {
			/*;
                                                                  	@meta-configuration:
                                                                  		{
                                                                  			"event:required": "string",
                                                                  			"handler:required": "function",
                                                                  			"once": "boolean"
                                                                  		}
                                                                  	@end-meta-configuration
                                                                  */

			if (falzy(event) || !protype(event, STRING)) {
				throw new Error("invalid event");
			}

			if (falzy(handler) || !protype(handler, FUNCTION)) {
				throw new Error("invalid handler");
			}

			/*;
     	@note:
     		If the event is not yet registered, create a handler collection.
     	@end-note
     */
			if (!kein(event, this[HANDLER])) {
				if (!clazof(handler, "Handler")) {
					if (once === true) {
						handler = called.bind(self)(handler);
					}

					handler = listener().push(handler).context(self).register(this);
				}

				this[HANDLER][event] = handler;

			} else {
				/*;
           	@note:
           		If the event is registered, make sure we are pushing the handler function
           			not the handler collection, if we encounter a handler collection,
           			merge it.
           	@end-note
           */
				if (clazof(handler, "Handler")) {
					if (once === true) {
						handler.lock();
					}

					this[HANDLER][event].merge(handler);

				} else {
					if (once === true) {
						handler = called.bind(self)(handler);
					}

					this[HANDLER][event].push(handler);
				}
			}

			return this;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImJ1ZGdlIiwiY2FsbGVkIiwiY2xhem9mIiwiZGlhdG9tIiwiZXFlIiwiZmFsenkiLCJoYXJkZW4iLCJoZXJlZGl0byIsImlkbnRmeSIsImluZmFjZSIsImluZnJheSIsImtlaW4iLCJsZXZlbGQiLCJwbG91Z2giLCJwcm90eXBlIiwicHljayIsInJhemUiLCJzeW1iaW90ZSIsInZhbHUiLCJ6ZWxmIiwibGlzdGVuZXIiLCJFVkVOVCIsIkhBTkRMRVIiLCJMSU1JVCIsIlRJTUVPVVQiLCJERUZBVUxUX1RJTUVPVVQiLCJERUZBVUxUX0xJTUlUIiwiZWRvIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwic2VsZiIsIkV2ZW50IiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsImRlbGF5IiwicmVzdHJpY3QiLCJvbiIsImV2ZW50IiwiaGFuZGxlciIsIlNUUklORyIsIkZVTkNUSU9OIiwicmVnaXN0ZXJlZCIsInJlZHVjZSIsInB1c2giLCJjb250ZXh0IiwicmVnaXN0ZXIiLCJzZXJ2ZXIiLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiZm9yRWFjaCIsImNsaWVudCIsImhhbmRsZSIsIkVycm9yIiwib25jZSIsIm1hcCIsImJpbmQiLCJlbWl0IiwiY291bnQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiY29uY2F0IiwiY2xlYXJUaW1lb3V0Iiwibm90aWZ5IiwiTlVNQkVSIiwibGltaXQiLCJicm9hZGNhc3QiLCJsaXN0ZW5lckNvdW50IiwiZmx1c2giLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJtZXJnZSIsInRyYW5zZmVyIiwibGlzdCIsIm5hbWUiLCJldmVudE5hbWVzIiwibGlzdGVuZXJzIiwic29tZSIsImxvY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RCxVQUFNdkQsT0FBTixFQUFpQmUsS0FBakIsRUFBeUJpQyxLQUF6QixDQUFnQ2hDLE9BQWhDOztBQUVBLEtBUEQsTUFPSztBQUNKLFNBQUllLFNBQVMsSUFBYixFQUFtQjtBQUNsQmYsZ0JBQVVyQyxPQUFPc0QsSUFBUCxDQUFhekIsSUFBYixFQUFxQlEsT0FBckIsQ0FBVjtBQUNBOztBQUVELFVBQU1oQixPQUFOLEVBQWlCZSxLQUFqQixFQUF5Qk0sSUFBekIsQ0FBK0JMLE9BQS9CO0FBQ0E7QUFDRDs7QUFFRCxVQUFPLElBQVA7QUFDQSxHQTVERDtBQTZEQTtBQUNEOzs7O0FBSUEsS0FBSXpDLEtBQU0rQixTQUFOLENBQUosRUFBdUI7QUFDdEIsU0FBT0csS0FBUDs7QUFFQSxFQUhELE1BR0s7QUFDSixTQUFPQSxNQUFNNkIsS0FBTixDQUFhLElBQWIsRUFBbUJoQyxTQUFuQixDQUFQO0FBQ0E7QUFDRCxDQW5lRDs7QUFxZUFrRCxPQUFPQyxPQUFQLEdBQWlCcEQsR0FBakIiLCJmaWxlIjoiZWRvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWRvL2Vkby5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZWRvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWRvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWRvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXZlbnRFbWl0dGVyIGV4dGVuc2lvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcblx0XHRcdFwiRXZlbnRFbWl0dGVyXCI6IFwiZXZlbnRzXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImhlcmVkaXRvXCI6IFwiaGVyZWRpdG9cIixcblx0XHRcdFwiaWRudGZ5XCI6IFwiaWRudGZ5XCIsXG5cdFx0XHRcImluZmFjZVwiOiBcImluZmFjZVwiLFxuXHRcdFx0XCJpbmZyYXlcIjogXCJpbmZyYXlcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwibGV2ZWxkXCI6IFwibGV2ZWxkXCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInZhbHVcIjogXCJ2YWx1XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGJ1ZGdlID0gcmVxdWlyZSggXCJidWRnZVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBlcWUgPSByZXF1aXJlKCBcImVxZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGlkbnRmeSA9IHJlcXVpcmUoIFwiaWRudGZ5XCIgKTtcbmNvbnN0IGluZmFjZSA9IHJlcXVpcmUoIFwiaW5mYWNlXCIgKTtcbmNvbnN0IGluZnJheSA9IHJlcXVpcmUoIFwiaW5mcmF5XCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbGV2ZWxkID0gcmVxdWlyZSggXCJsZXZlbGRcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCBweWNrID0gcmVxdWlyZSggXCJweWNrXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHZhbHUgPSByZXF1aXJlKCBcInZhbHVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGxpc3RlbmVyID0gcmVxdWlyZSggXCIuL2xpc3RlbmVyLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cbmNvbnN0IEVWRU5UID0gU3ltYm9sKCBcImV2ZW50XCIgKTtcbmNvbnN0IEhBTkRMRVIgPSBTeW1ib2woIFwiaGFuZGxlclwiICk7XG5jb25zdCBMSU1JVCA9IFN5bWJvbCggXCJsaW1pdFwiICk7XG5jb25zdCBUSU1FT1VUID0gU3ltYm9sKCBcInRpbWVvdXRcIiApO1xuXG5jb25zdCBERUZBVUxUX1RJTUVPVVQgPSAxMDAwO1xuY29uc3QgREVGQVVMVF9MSU1JVCA9IDEwMDA7XG5cbmNvbnN0IGVkbyA9IGZ1bmN0aW9uIGVkbyggcGFyYW1ldGVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdGxldCBFdmVudCA9IGRpYXRvbSggXCJFdmVudFwiICk7XG5cblx0RXZlbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdHRoaXMuZGVsYXkoIERFRkFVTFRfVElNRU9VVCApO1xuXHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdGhhcmRlbiggSEFORExFUiwgeyB9LCB0aGlzICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbiggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdENoZWNrcyBpZiB0aGUgZXZlbnQtaGFuZGxlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCB0aGlzLnJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGhhbmRsZXIgPSBoYW5kbGVyLnJlZHVjZSggKCBsaXN0ZW5lciwgaGFuZGxlciApID0+IHtcblx0XHRcdHJldHVybiBsaXN0ZW5lci5wdXNoKCBoYW5kbGVyICk7XG5cdFx0fSwgbGlzdGVuZXIoICkgKS5jb250ZXh0KCBzZWxmICkucmVnaXN0ZXIoIHRoaXMgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0bGV0IGVtaXR0ZXIgPSBpbmZhY2UoIHRoaXMsIEV2ZW50RW1pdHRlciApO1xuXG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gZW1pdHRlci5vbiggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5oYW5kbGUoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKTtcblxuXHRcdGlmKCB0aGlzLnJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGhhbmRsZXIgPSBoYW5kbGVyLm1hcCggKCBoYW5kbGVyICkgPT4gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApIClcblx0XHRcdC5yZWR1Y2UoICggbGlzdGVuZXIsIGhhbmRsZXIgKSA9PiBsaXN0ZW5lci5wdXNoKCBoYW5kbGVyICksIGxpc3RlbmVyKCApIClcblx0XHRcdC5jb250ZXh0KCBzZWxmIClcblx0XHRcdC5yZWdpc3RlciggdGhpcyApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRsZXQgZW1pdHRlciA9IGluZmFjZSggdGhpcywgRXZlbnRFbWl0dGVyICk7XG5cblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uY2UoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuaGFuZGxlKCBldmVudCwgaGFuZGxlciwgdHJ1ZSApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSBidWRnZSggYXJndW1lbnRzICk7XG5cblx0XHRpZiggdGhpc1sgTElNSVQgXSA8PSAwICl7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmNvdW50KCBldmVudCApIDw9IDAgKXtcblx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggKCApID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdFx0fSwgdGhpc1sgVElNRU9VVCBdICk7XG5cblx0XHRcdHRoaXNbIExJTUlUIF0tLTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0bGV0IGVtaXR0ZXIgPSBpbmZhY2UoIHRoaXMsIEV2ZW50RW1pdHRlciApO1xuXG5cdFx0XHRcdGVtaXR0ZXIuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdHRoaXMubm90aWZ5LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KCB0aW1lb3V0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aW1lb3V0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCB0aW1lb3V0ICkgfHwgIXByb3R5cGUoIHRpbWVvdXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0aW1lb3V0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBUSU1FT1VUIF0gPSB0aW1lb3V0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLnJlc3RyaWN0ID0gZnVuY3Rpb24gcmVzdHJpY3QoIGxpbWl0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJsaW1pdDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggbGltaXQgKSB8fCAhcHJvdHlwZSggbGltaXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaW1pdFwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgTElNSVQgXSA9IGxpbWl0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmJyb2FkY2FzdCA9IGZ1bmN0aW9uIGJyb2FkY2FzdCggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0ZXZlbnQgPSBwbG91Z2goIFsgZXZlbnQgXSApO1xuXG5cdFx0cGFyYW1ldGVyID0gYnVkZ2UoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoIGV2ZW50ICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5saXN0ZW5lckNvdW50KCBldmVudCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRpZigga2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uY291bnQoICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHZhbHUoIHRoaXNbIEhBTkRMRVIgXSApLmZvckVhY2goICggaGFuZGxlciApID0+IGhhbmRsZXIuZmx1c2goICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEJpLWRpcmVjdGlvbmFsIG1lcmdpbmcgb2YgZXZlbnQgaGFuZGxlcnMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IG1lcmdlIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyYW5zZmVyKCBldmVudCApO1xuXHRcdGV2ZW50LnRyYW5zZmVyKCB0aGlzICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUcmFuc2ZlciBldmVudCBoYW5kbGVycy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS50cmFuc2ZlciA9IGZ1bmN0aW9uIHRyYW5zZmVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgdHJhbnNmZXIgZnJvbSBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0aW5mcmF5KCBldmVudC5saXN0KCApLCB0aGlzLmxpc3QoICkgKVxuXHRcdFx0LmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgZnVuY3Rpb24gZW1pdCggKXtcblx0XHRcdFx0XHRldmVudC5lbWl0LmFwcGx5KCBldmVudCwgWyBuYW1lIF0uY29uY2F0KCByYXplKCBhcmd1bWVudHMgKSApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdExpc3QgcmVnaXN0ZXJlZCBldmVudCBuYW1lcy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24gbGlzdCggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmV2ZW50TmFtZXMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyggdGhpc1sgSEFORExFUiBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0TGlzdCB0aGUgaGFuZGxlcnMgb2YgdGhlIGV2ZW50LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0cmV0dXJuIFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVycyggZXZlbnQgKS5yZWR1Y2UoICggbGlzdCwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdHJldHVybiBsaXN0LmNvbmNhdCggaGFuZGxlci5saXN0KCApICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgWyBdICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCAha2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiBbIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubGlzdCggKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRDaGVja3MgaWYgdGhlIGV2ZW50LWhhbmRsZXIgaXMgcmVnaXN0ZXJlZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5yZWdpc3RlcmVkID0gZnVuY3Rpb24gcmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJbZnVuY3Rpb25dXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRoYW5kbGVyID0gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgRlVOQ1RJT04gKTtcblxuXHRcdHJldHVybiBweWNrKCBwbG91Z2goIGFyZ3VtZW50cyApLCBTVFJJTkcgKS5zb21lKCAoIGV2ZW50ICkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlciggZXZlbnQgKS5zb21lKCAoIGxpc3RlbmVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gaGFuZGxlci5zb21lKCAoIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGlkbnRmeSggbGlzdGVuZXIsIGhhbmRsZXIgKSB8fCBlcWUoIGxpc3RlbmVyLCBoYW5kbGVyICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH07XG5cblx0Ly86IEBjbGllbnQ6XG5cdGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdEV2ZW50LnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZigga2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHBhcmFtZXRlciA9IGJ1ZGdlKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uYXBwbHkoIHNlbGYsIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0RXZlbnQucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uIGhhbmRsZSggZXZlbnQsIGhhbmRsZXIsIG9uY2UgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcIm9uY2VcIjogXCJib29sZWFuXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBldmVudFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIG5vdCB5ZXQgcmVnaXN0ZXJlZCwgY3JlYXRlIGEgaGFuZGxlciBjb2xsZWN0aW9uLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggIWtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRpZiggIWNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhhbmRsZXIgPSBsaXN0ZW5lciggKS5wdXNoKCBoYW5kbGVyICkuY29udGV4dCggc2VsZiApLnJlZ2lzdGVyKCB0aGlzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0gPSBoYW5kbGVyO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHRJZiB0aGUgZXZlbnQgaXMgcmVnaXN0ZXJlZCwgbWFrZSBzdXJlIHdlIGFyZSBwdXNoaW5nIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG5cdFx0XHRcdFx0XHRcdG5vdCB0aGUgaGFuZGxlciBjb2xsZWN0aW9uLCBpZiB3ZSBlbmNvdW50ZXIgYSBoYW5kbGVyIGNvbGxlY3Rpb24sXG5cdFx0XHRcdFx0XHRcdG1lcmdlIGl0LlxuXHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHQqL1xuXHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdGhhbmRsZXIubG9jayggKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubWVyZ2UoIGhhbmRsZXIgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZiggb25jZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0aGFuZGxlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ucHVzaCggaGFuZGxlciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdH1cblx0Ly86IEBlbmQtY2xpZW50XG5cblx0XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIEV2ZW50O1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBFdmVudC5hcHBseSggbnVsbCwgcGFyYW1ldGVyICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZWRvO1xuIl19
//# sourceMappingURL=edo.support.js.map
