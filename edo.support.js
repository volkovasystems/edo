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
              			"ferge": "ferge",
              			"infray": "infray",
              			"kein": "kein",
              			"leveld": "leveld",
              			"plough": "plough",
              			"protype": "protype",
              			"pyck": "pyck",
              			"raze": "raze",
              			"symbiote": "symbiote",
              			"valu": "valu",
              			"wichevr": "wichevr",
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
var ferge = require("ferge");
var infray = require("infray");
var kein = require("kein");
var leveld = require("leveld");
var plough = require("plough");
var protype = require("protype");
var pyck = require("pyck");
var raze = require("raze");
var symbiote = require("symbiote");
var valu = require("valu");
var wichevr = require("wichevr");
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
		}, wichevr(this.holder(event), listener())).context(self).register(this);

		if (asea.server) {
			var emitter = ferge(this, "EventEmitter");

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
		reduce(function (listener, handler) {
			return listener.push(handler);
		}, wichevr(this.holder(event), listener())).
		context(self).
		register(this);

		if (asea.server) {
			var emitter = ferge(this, "EventEmitter");

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
				var emitter = ferge(this, "EventEmitter");

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
    		Return the Handler that holds the handler procedures.
    	@end-method-documentation
    */
	Event.prototype.holder = function holder(event) {var _this6 = this;
		/*;
                                                                     	@meta-configuration:
                                                                     		{
                                                                     			"event:required": [
                                                                     				"string",
                                                                     				"[string],
                                                                     				"...
                                                                     			]
                                                                     		}
                                                                     	@end-meta-configuration
                                                                     */

		event = pyck(plough(arguments), STRING);

		if (asea.server) {
			return event.reduce(function (holder, event) {
				return _this6.listeners(event).reduce(function (holder, handler) {
					if (clazof(handler, "Handler")) {
						return handler;
					}

					return holder;
				}, undefined);
			}, undefined);

		} else if (asea.client) {
			return event.reduce(function (holder, event) {
				return _this6[HANDLER][event];
			}, undefined);

		} else {
			throw new Error("cannot determine platform, platform not supported");
		}
	};

	/*;
    	@method-documentation:
    		Checks if the event-handler is registered.
    	@end-method-documentation
    */
	Event.prototype.registered = function registered(event, handler) {var _this7 = this;
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
			return _this7.handler(event).some(function (listener) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImJ1ZGdlIiwiY2FsbGVkIiwiY2xhem9mIiwiZGlhdG9tIiwiZXFlIiwiZmFsenkiLCJoYXJkZW4iLCJoZXJlZGl0byIsImlkbnRmeSIsImZlcmdlIiwiaW5mcmF5Iiwia2VpbiIsImxldmVsZCIsInBsb3VnaCIsInByb3R5cGUiLCJweWNrIiwicmF6ZSIsInN5bWJpb3RlIiwidmFsdSIsIndpY2hldnIiLCJ6ZWxmIiwibGlzdGVuZXIiLCJFVkVOVCIsIkhBTkRMRVIiLCJMSU1JVCIsIlRJTUVPVVQiLCJERUZBVUxUX1RJTUVPVVQiLCJERUZBVUxUX0xJTUlUIiwiZWRvIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwic2VsZiIsIkV2ZW50IiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsImRlbGF5IiwicmVzdHJpY3QiLCJvbiIsImV2ZW50IiwiaGFuZGxlciIsIlNUUklORyIsIkZVTkNUSU9OIiwicmVnaXN0ZXJlZCIsInJlZHVjZSIsInB1c2giLCJob2xkZXIiLCJjb250ZXh0IiwicmVnaXN0ZXIiLCJzZXJ2ZXIiLCJlbWl0dGVyIiwiZm9yRWFjaCIsImNsaWVudCIsImhhbmRsZSIsIkVycm9yIiwib25jZSIsIm1hcCIsImJpbmQiLCJlbWl0IiwiY291bnQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiY29uY2F0IiwiY2xlYXJUaW1lb3V0Iiwibm90aWZ5IiwiTlVNQkVSIiwibGltaXQiLCJicm9hZGNhc3QiLCJsaXN0ZW5lckNvdW50IiwiZmx1c2giLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJtZXJnZSIsInRyYW5zZmVyIiwibGlzdCIsIm5hbWUiLCJldmVudE5hbWVzIiwibGlzdGVuZXJzIiwidW5kZWZpbmVkIiwic29tZSIsImxvY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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aEMsT0FBaEM7O0FBRUEsS0FQRCxNQU9LO0FBQ0osU0FBSWUsU0FBUyxJQUFiLEVBQW1CO0FBQ2xCZixnQkFBVXRDLE9BQU91RCxJQUFQLENBQWF6QixJQUFiLEVBQXFCUSxPQUFyQixDQUFWO0FBQ0E7O0FBRUQsVUFBTWhCLE9BQU4sRUFBaUJlLEtBQWpCLEVBQXlCTSxJQUF6QixDQUErQkwsT0FBL0I7QUFDQTtBQUNEOztBQUVELFVBQU8sSUFBUDtBQUNBLEdBNUREO0FBNkRBO0FBQ0Q7Ozs7QUFJQSxLQUFJMUMsS0FBTWdDLFNBQU4sQ0FBSixFQUF1QjtBQUN0QixTQUFPRyxLQUFQOztBQUVBLEVBSEQsTUFHSztBQUNKLFNBQU9BLE1BQU02QixLQUFOLENBQWEsSUFBYixFQUFtQmhDLFNBQW5CLENBQVA7QUFDQTtBQUNELENBOWdCRDs7QUFnaEJBbUQsT0FBT0MsT0FBUCxHQUFpQnJELEdBQWpCIiwiZmlsZSI6ImVkby5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlZG9cIixcblx0XHRcdFwicGF0aFwiOiBcImVkby9lZG8uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImVkby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlZG9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vkby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVkby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEV2ZW50RW1pdHRlciBleHRlbnNpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXG5cdFx0XHRcIkV2ZW50RW1pdHRlclwiOiBcImV2ZW50c1wiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImlkbnRmeVwiOiBcImlkbnRmeVwiLFxuXHRcdFx0XCJmZXJnZVwiOiBcImZlcmdlXCIsXG5cdFx0XHRcImluZnJheVwiOiBcImluZnJheVwiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInB5Y2tcIjogXCJweWNrXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidmFsdVwiOiBcInZhbHVcIixcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiZXFlXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3QgaWRudGZ5ID0gcmVxdWlyZSggXCJpZG50ZnlcIiApO1xuY29uc3QgZmVyZ2UgPSByZXF1aXJlKCBcImZlcmdlXCIgKTtcbmNvbnN0IGluZnJheSA9IHJlcXVpcmUoIFwiaW5mcmF5XCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbGV2ZWxkID0gcmVxdWlyZSggXCJsZXZlbGRcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCBweWNrID0gcmVxdWlyZSggXCJweWNrXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHZhbHUgPSByZXF1aXJlKCBcInZhbHVcIiApO1xuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwid2ljaGV2clwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgbGlzdGVuZXIgPSByZXF1aXJlKCBcIi4vbGlzdGVuZXIuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuY29uc3QgRVZFTlQgPSBTeW1ib2woIFwiZXZlbnRcIiApO1xuY29uc3QgSEFORExFUiA9IFN5bWJvbCggXCJoYW5kbGVyXCIgKTtcbmNvbnN0IExJTUlUID0gU3ltYm9sKCBcImxpbWl0XCIgKTtcbmNvbnN0IFRJTUVPVVQgPSBTeW1ib2woIFwidGltZW91dFwiICk7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDA7XG5jb25zdCBERUZBVUxUX0xJTUlUID0gMTAwMDtcblxuY29uc3QgZWRvID0gZnVuY3Rpb24gZWRvKCBwYXJhbWV0ZXIgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IEV2ZW50ID0gZGlhdG9tKCBcIkV2ZW50XCIgKTtcblxuXHRFdmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0dGhpcy5kZWxheSggREVGQVVMVF9USU1FT1VUICk7XG5cdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0aGFyZGVuKCBIQU5ETEVSLCB7IH0sIHRoaXMgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKCBldmVudCwgaGFuZGxlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IGxldmVsZCggYXJndW1lbnRzICk7XG5cblx0XHRldmVudCA9IHB5Y2soIHBhcmFtZXRlciwgU1RSSU5HICk7XG5cblx0XHRoYW5kbGVyID0gcHljayggcGFyYW1ldGVyLCBGVU5DVElPTiApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0Q2hlY2tzIGlmIHRoZSBldmVudC1oYW5kbGVyIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRoaXMucmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aGFuZGxlciA9IGhhbmRsZXIucmVkdWNlKCAoIGxpc3RlbmVyLCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0cmV0dXJuIGxpc3RlbmVyLnB1c2goIGhhbmRsZXIgKTtcblx0XHR9LCB3aWNoZXZyKCB0aGlzLmhvbGRlciggZXZlbnQgKSwgbGlzdGVuZXIoICkgKSApLmNvbnRleHQoIHNlbGYgKS5yZWdpc3RlciggdGhpcyApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiB0aGlzLmhhbmRsZSggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCBldmVudCwgaGFuZGxlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IGxldmVsZCggYXJndW1lbnRzICk7XG5cblx0XHRldmVudCA9IHB5Y2soIHBhcmFtZXRlciwgU1RSSU5HICk7XG5cblx0XHRoYW5kbGVyID0gcHljayggcGFyYW1ldGVyLCBGVU5DVElPTiApO1xuXG5cdFx0aWYoIHRoaXMucmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aGFuZGxlciA9IGhhbmRsZXIubWFwKCAoIGhhbmRsZXIgKSA9PiBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICkgKVxuXHRcdFx0LnJlZHVjZSggKCBsaXN0ZW5lciwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIGxpc3RlbmVyLnB1c2goIGhhbmRsZXIgKTtcblx0XHRcdH0sIHdpY2hldnIoIHRoaXMuaG9sZGVyKCBldmVudCApLCBsaXN0ZW5lciggKSApIClcblx0XHRcdC5jb250ZXh0KCBzZWxmIClcblx0XHRcdC5yZWdpc3RlciggdGhpcyApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uY2UoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuaGFuZGxlKCBldmVudCwgaGFuZGxlciwgdHJ1ZSApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSBidWRnZSggYXJndW1lbnRzICk7XG5cblx0XHRpZiggdGhpc1sgTElNSVQgXSA8PSAwICl7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmNvdW50KCBldmVudCApIDw9IDAgKXtcblx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggKCApID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdFx0fSwgdGhpc1sgVElNRU9VVCBdICk7XG5cblx0XHRcdHRoaXNbIExJTUlUIF0tLTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0bGV0IGVtaXR0ZXIgPSBmZXJnZSggdGhpcywgXCJFdmVudEVtaXR0ZXJcIiApO1xuXG5cdFx0XHRcdGVtaXR0ZXIuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdHRoaXMubm90aWZ5LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KCB0aW1lb3V0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aW1lb3V0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCB0aW1lb3V0ICkgfHwgIXByb3R5cGUoIHRpbWVvdXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0aW1lb3V0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBUSU1FT1VUIF0gPSB0aW1lb3V0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLnJlc3RyaWN0ID0gZnVuY3Rpb24gcmVzdHJpY3QoIGxpbWl0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJsaW1pdDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggbGltaXQgKSB8fCAhcHJvdHlwZSggbGltaXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaW1pdFwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgTElNSVQgXSA9IGxpbWl0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmJyb2FkY2FzdCA9IGZ1bmN0aW9uIGJyb2FkY2FzdCggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0ZXZlbnQgPSBwbG91Z2goIFsgZXZlbnQgXSApO1xuXG5cdFx0cGFyYW1ldGVyID0gYnVkZ2UoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoIGV2ZW50ICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5saXN0ZW5lckNvdW50KCBldmVudCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRpZigga2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uY291bnQoICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHZhbHUoIHRoaXNbIEhBTkRMRVIgXSApLmZvckVhY2goICggaGFuZGxlciApID0+IGhhbmRsZXIuZmx1c2goICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEJpLWRpcmVjdGlvbmFsIG1lcmdpbmcgb2YgZXZlbnQgaGFuZGxlcnMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IG1lcmdlIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyYW5zZmVyKCBldmVudCApO1xuXHRcdGV2ZW50LnRyYW5zZmVyKCB0aGlzICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUcmFuc2ZlciBldmVudCBoYW5kbGVycy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS50cmFuc2ZlciA9IGZ1bmN0aW9uIHRyYW5zZmVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgdHJhbnNmZXIgZnJvbSBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0aW5mcmF5KCBldmVudC5saXN0KCApLCB0aGlzLmxpc3QoICkgKVxuXHRcdFx0LmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgZnVuY3Rpb24gZW1pdCggKXtcblx0XHRcdFx0XHRldmVudC5lbWl0LmFwcGx5KCBldmVudCwgWyBuYW1lIF0uY29uY2F0KCByYXplKCBhcmd1bWVudHMgKSApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdExpc3QgcmVnaXN0ZXJlZCBldmVudCBuYW1lcy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24gbGlzdCggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmV2ZW50TmFtZXMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyggdGhpc1sgSEFORExFUiBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0TGlzdCB0aGUgaGFuZGxlcnMgb2YgdGhlIGV2ZW50LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0cmV0dXJuIFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVycyggZXZlbnQgKS5yZWR1Y2UoICggbGlzdCwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdHJldHVybiBsaXN0LmNvbmNhdCggaGFuZGxlci5saXN0KCApICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgWyBdICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCAha2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiBbIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubGlzdCggKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm4gdGhlIEhhbmRsZXIgdGhhdCBob2xkcyB0aGUgaGFuZGxlciBwcm9jZWR1cmVzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhvbGRlciA9IGZ1bmN0aW9uIGhvbGRlciggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltzdHJpbmddLFxuXHRcdFx0XHRcdFx0XCIuLi5cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGV2ZW50ID0gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgU1RSSU5HICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBldmVudC5yZWR1Y2UoICggaG9sZGVyLCBldmVudCApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJzKCBldmVudCApLnJlZHVjZSggKCBob2xkZXIsIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGhvbGRlcjtcblx0XHRcdFx0fSwgdW5kZWZpbmVkICk7XG5cdFx0XHR9LCB1bmRlZmluZWQgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0cmV0dXJuIGV2ZW50LnJlZHVjZSggKCBob2xkZXIsIGV2ZW50ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSEFORExFUiBdWyBldmVudCBdO1xuXHRcdFx0fSwgdW5kZWZpbmVkICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Q2hlY2tzIGlmIHRoZSBldmVudC1oYW5kbGVyIGlzIHJlZ2lzdGVyZWQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUucmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFwiW2Z1bmN0aW9uXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBsb3VnaCggYXJndW1lbnRzICksIEZVTkNUSU9OICk7XG5cblx0XHRyZXR1cm4gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgU1RSSU5HICkuc29tZSggKCBldmVudCApID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmhhbmRsZXIoIGV2ZW50ICkuc29tZSggKCBsaXN0ZW5lciApID0+IHtcblx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuc29tZSggKCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBpZG50ZnkoIGxpc3RlbmVyLCBoYW5kbGVyICkgfHwgZXFlKCBsaXN0ZW5lciwgaGFuZGxlciApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdC8vOiBAY2xpZW50OlxuXHRpZiggYXNlYS5jbGllbnQgKXtcblx0XHRFdmVudC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSBidWRnZSggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLmFwcGx5KCBzZWxmLCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdEV2ZW50LnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUoIGV2ZW50LCBoYW5kbGVyLCBvbmNlICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJvbmNlXCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFwcm90eXBlKCBldmVudCwgU1RSSU5HICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBoYW5kbGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHRoZSBldmVudCBpcyBub3QgeWV0IHJlZ2lzdGVyZWQsIGNyZWF0ZSBhIGhhbmRsZXIgY29sbGVjdGlvbi5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoICFrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0aWYoICFjbGF6b2YoIGhhbmRsZXIsIFwiSGFuZGxlclwiICkgKXtcblx0XHRcdFx0XHRpZiggb25jZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0aGFuZGxlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoYW5kbGVyID0gbGlzdGVuZXIoICkucHVzaCggaGFuZGxlciApLmNvbnRleHQoIHNlbGYgKS5yZWdpc3RlciggdGhpcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdID0gaGFuZGxlcjtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8qO1xuXHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIHJlZ2lzdGVyZWQsIG1ha2Ugc3VyZSB3ZSBhcmUgcHVzaGluZyB0aGUgaGFuZGxlciBmdW5jdGlvblxuXHRcdFx0XHRcdFx0XHRub3QgdGhlIGhhbmRsZXIgY29sbGVjdGlvbiwgaWYgd2UgZW5jb3VudGVyIGEgaGFuZGxlciBjb2xsZWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRtZXJnZSBpdC5cblx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0Ki9cblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmxvY2soICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLm1lcmdlKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdGhhbmRsZXIgPSBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLnB1c2goIGhhbmRsZXIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXHR9XG5cdC8vOiBAZW5kLWNsaWVudFxuXG5cdFxuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiBFdmVudDtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gRXZlbnQuYXBwbHkoIG51bGwsIHBhcmFtZXRlciApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVkbztcbiJdfQ==
//# sourceMappingURL=edo.support.js.map
