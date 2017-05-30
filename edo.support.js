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
              			"execd": "execd",
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
var execd = require("execd");
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

		handler = called(handler);

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

				if (execd(this[HANDLER][event])) {
					delete this[HANDLER][event];
				}
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
				if (once === true) {
					handler = called.bind(self)(handler);
				}

				if (!clazof(handler, "Handler")) {
					handler = listener().push().
					context(self).
					register(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImJ1ZGdlIiwiY2FsbGVkIiwiY2xhem9mIiwiZGlhdG9tIiwiZXFlIiwiZXhlY2QiLCJmYWx6eSIsImhhcmRlbiIsImhlcmVkaXRvIiwiaWRudGZ5IiwiaW5mYWNlIiwiaW5mcmF5Iiwia2VpbiIsImxldmVsZCIsInBsb3VnaCIsInByb3R5cGUiLCJweWNrIiwicmF6ZSIsInN5bWJpb3RlIiwidmFsdSIsInplbGYiLCJsaXN0ZW5lciIsIkVWRU5UIiwiSEFORExFUiIsIkxJTUlUIiwiVElNRU9VVCIsIkRFRkFVTFRfVElNRU9VVCIsIkRFRkFVTFRfTElNSVQiLCJlZG8iLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJzZWxmIiwiRXZlbnQiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwiZGVsYXkiLCJyZXN0cmljdCIsIm9uIiwiZXZlbnQiLCJoYW5kbGVyIiwiU1RSSU5HIiwiRlVOQ1RJT04iLCJyZWdpc3RlcmVkIiwicmVkdWNlIiwicHVzaCIsImNvbnRleHQiLCJyZWdpc3RlciIsInNlcnZlciIsImVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJmb3JFYWNoIiwiY2xpZW50IiwiaGFuZGxlIiwiRXJyb3IiLCJvbmNlIiwibWFwIiwiYmluZCIsImVtaXQiLCJjb3VudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJjb25jYXQiLCJjbGVhclRpbWVvdXQiLCJub3RpZnkiLCJOVU1CRVIiLCJsaW1pdCIsImJyb2FkY2FzdCIsImxpc3RlbmVyQ291bnQiLCJmbHVzaCIsInJlbW92ZUFsbExpc3RlbmVycyIsIm1lcmdlIiwidHJhbnNmZXIiLCJsaXN0IiwibmFtZSIsImV2ZW50TmFtZXMiLCJsaXN0ZW5lcnMiLCJzb21lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBQWpCLElBQTJCQyxPQUEzQjs7QUFFQSxJQWJELE1BYUs7QUFDSjs7Ozs7OztBQU9BLFFBQUlyQyxPQUFRcUMsT0FBUixFQUFpQixTQUFqQixDQUFKLEVBQWtDO0FBQ2pDLFVBQU1oQixPQUFOLEVBQWlCZSxLQUFqQixFQUF5QmlDLEtBQXpCLENBQWdDaEMsT0FBaEM7O0FBRUEsS0FIRCxNQUdLO0FBQ0osU0FBSWUsU0FBUyxJQUFiLEVBQW1CO0FBQ2xCZixnQkFBVXRDLE9BQU91RCxJQUFQLENBQWF6QixJQUFiLEVBQXFCUSxPQUFyQixDQUFWO0FBQ0E7O0FBRUQsVUFBTWhCLE9BQU4sRUFBaUJlLEtBQWpCLEVBQXlCTSxJQUF6QixDQUErQkwsT0FBL0I7QUFDQTtBQUNEOztBQUVELFVBQU8sSUFBUDtBQUNBLEdBMUREO0FBMkRBO0FBQ0Q7Ozs7QUFJQSxLQUFJMUMsS0FBTWdDLFNBQU4sQ0FBSixFQUF1QjtBQUN0QixTQUFPRyxLQUFQOztBQUVBLEVBSEQsTUFHSztBQUNKLFNBQU9BLE1BQU02QixLQUFOLENBQWEsSUFBYixFQUFtQmhDLFNBQW5CLENBQVA7QUFDQTtBQUNELENBdmVEOztBQXllQWlELE9BQU9DLE9BQVAsR0FBaUJuRCxHQUFqQiIsImZpbGUiOiJlZG8uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWRvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlZG8vZWRvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJlZG8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZWRvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lZG8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJlZG8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFdmVudEVtaXR0ZXIgZXh0ZW5zaW9uLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJidWRnZVwiOiBcImJ1ZGdlXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcImVxZVwiOiBcImVxZVwiLFxuXHRcdFx0XCJFdmVudEVtaXR0ZXJcIjogXCJldmVudHNcIixcblx0XHRcdFwiZXhlY2RcIjogXCJleGVjZFwiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImlkbnRmeVwiOiBcImlkbnRmeVwiLFxuXHRcdFx0XCJpbmZhY2VcIjogXCJpbmZhY2VcIixcblx0XHRcdFwiaW5mcmF5XCI6IFwiaW5mcmF5XCIsXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXG5cdFx0XHRcImxldmVsZFwiOiBcImxldmVsZFwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ2YWx1XCI6IFwidmFsdVwiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBidWRnZSA9IHJlcXVpcmUoIFwiYnVkZ2VcIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZXFlID0gcmVxdWlyZSggXCJlcWVcIiApO1xuY29uc3QgZXhlY2QgPSByZXF1aXJlKCBcImV4ZWNkXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3QgaWRudGZ5ID0gcmVxdWlyZSggXCJpZG50ZnlcIiApO1xuY29uc3QgaW5mYWNlID0gcmVxdWlyZSggXCJpbmZhY2VcIiApO1xuY29uc3QgaW5mcmF5ID0gcmVxdWlyZSggXCJpbmZyYXlcIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBsZXZlbGQgPSByZXF1aXJlKCBcImxldmVsZFwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcInB5Y2tcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdmFsdSA9IHJlcXVpcmUoIFwidmFsdVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgbGlzdGVuZXIgPSByZXF1aXJlKCBcIi4vbGlzdGVuZXIuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuY29uc3QgRVZFTlQgPSBTeW1ib2woIFwiZXZlbnRcIiApO1xuY29uc3QgSEFORExFUiA9IFN5bWJvbCggXCJoYW5kbGVyXCIgKTtcbmNvbnN0IExJTUlUID0gU3ltYm9sKCBcImxpbWl0XCIgKTtcbmNvbnN0IFRJTUVPVVQgPSBTeW1ib2woIFwidGltZW91dFwiICk7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDA7XG5jb25zdCBERUZBVUxUX0xJTUlUID0gMTAwMDtcblxuY29uc3QgZWRvID0gZnVuY3Rpb24gZWRvKCBwYXJhbWV0ZXIgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IEV2ZW50ID0gZGlhdG9tKCBcIkV2ZW50XCIgKTtcblxuXHRFdmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0dGhpcy5kZWxheSggREVGQVVMVF9USU1FT1VUICk7XG5cdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0aGFyZGVuKCBIQU5ETEVSLCB7IH0sIHRoaXMgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKCBldmVudCwgaGFuZGxlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IGxldmVsZCggYXJndW1lbnRzICk7XG5cblx0XHRldmVudCA9IHB5Y2soIHBhcmFtZXRlciwgU1RSSU5HICk7XG5cblx0XHRoYW5kbGVyID0gcHljayggcGFyYW1ldGVyLCBGVU5DVElPTiApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0Q2hlY2tzIGlmIHRoZSBldmVudC1oYW5kbGVyIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRoaXMucmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aGFuZGxlciA9IGhhbmRsZXIucmVkdWNlKCAoIGxpc3RlbmVyLCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0cmV0dXJuIGxpc3RlbmVyLnB1c2goIGhhbmRsZXIgKTtcblx0XHR9LCBsaXN0ZW5lciggKSApLmNvbnRleHQoIHNlbGYgKS5yZWdpc3RlciggdGhpcyApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRsZXQgZW1pdHRlciA9IGluZmFjZSggdGhpcywgRXZlbnRFbWl0dGVyICk7XG5cblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiB0aGlzLmhhbmRsZSggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCBldmVudCwgaGFuZGxlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IGxldmVsZCggYXJndW1lbnRzICk7XG5cblx0XHRldmVudCA9IHB5Y2soIHBhcmFtZXRlciwgU1RSSU5HICk7XG5cblx0XHRoYW5kbGVyID0gcHljayggcGFyYW1ldGVyLCBGVU5DVElPTiApO1xuXG5cdFx0aWYoIHRoaXMucmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aGFuZGxlciA9IGhhbmRsZXIubWFwKCAoIGhhbmRsZXIgKSA9PiBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICkgKVxuXHRcdFx0LnJlZHVjZSggKCBsaXN0ZW5lciwgaGFuZGxlciApID0+IGxpc3RlbmVyLnB1c2goIGhhbmRsZXIgKSwgbGlzdGVuZXIoICkgKVxuXHRcdFx0LmNvbnRleHQoIHNlbGYgKVxuXHRcdFx0LnJlZ2lzdGVyKCB0aGlzICk7XG5cblx0XHRoYW5kbGVyID0gY2FsbGVkKCBoYW5kbGVyICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdGxldCBlbWl0dGVyID0gaW5mYWNlKCB0aGlzLCBFdmVudEVtaXR0ZXIgKTtcblxuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IGVtaXR0ZXIub25jZSggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5oYW5kbGUoIGV2ZW50LCBoYW5kbGVyLCB0cnVlICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IGJ1ZGdlKCBhcmd1bWVudHMgKTtcblxuXHRcdGlmKCB0aGlzWyBMSU1JVCBdIDw9IDAgKXtcblx0XHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuY291bnQoIGV2ZW50ICkgPD0gMCApe1xuXHRcdFx0bGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoICkgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0XHR9LCB0aGlzWyBUSU1FT1VUIF0gKTtcblxuXHRcdFx0dGhpc1sgTElNSVQgXS0tO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRsZXQgZW1pdHRlciA9IGluZmFjZSggdGhpcywgRXZlbnRFbWl0dGVyICk7XG5cblx0XHRcdFx0ZW1pdHRlci5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0dGhpcy5ub3RpZnkuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoIHRpbWVvdXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpbWVvdXQ6cmVxdWlyZWRcIjogXCJudW1iZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIHRpbWVvdXQgKSB8fCAhcHJvdHlwZSggdGltZW91dCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHRpbWVvdXRcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRJTUVPVVQgXSA9IHRpbWVvdXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUucmVzdHJpY3QgPSBmdW5jdGlvbiByZXN0cmljdCggbGltaXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImxpbWl0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBsaW1pdCApIHx8ICFwcm90eXBlKCBsaW1pdCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpbWl0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBMSU1JVCBdID0gbGltaXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuYnJvYWRjYXN0ID0gZnVuY3Rpb24gYnJvYWRjYXN0KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRldmVudCA9IHBsb3VnaCggWyBldmVudCBdICk7XG5cblx0XHRwYXJhbWV0ZXIgPSBidWRnZSggYXJndW1lbnRzICk7XG5cblx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCggZXZlbnQgKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVyQ291bnQoIGV2ZW50ICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCBrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5jb3VudCggKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDA7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHR0aGlzLnJlbW92ZUFsbExpc3RlbmVycyggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0dmFsdSggdGhpc1sgSEFORExFUiBdICkuZm9yRWFjaCggKCBoYW5kbGVyICkgPT4gaGFuZGxlci5mbHVzaCggKSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0QmktZGlyZWN0aW9uYWwgbWVyZ2luZyBvZiBldmVudCBoYW5kbGVycy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgbWVyZ2UgZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdHRoaXMudHJhbnNmZXIoIGV2ZW50ICk7XG5cdFx0ZXZlbnQudHJhbnNmZXIoIHRoaXMgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRyYW5zZmVyIGV2ZW50IGhhbmRsZXJzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLnRyYW5zZmVyID0gZnVuY3Rpb24gdHJhbnNmZXIoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFjbGF6b2YoIGV2ZW50LCBcIkV2ZW50XCIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCB0cmFuc2ZlciBmcm9tIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHRpbmZyYXkoIGV2ZW50Lmxpc3QoICksIHRoaXMubGlzdCggKSApXG5cdFx0XHQuZm9yRWFjaCggKCBuYW1lICkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uKCBuYW1lLCBmdW5jdGlvbiBlbWl0KCApe1xuXHRcdFx0XHRcdGV2ZW50LmVtaXQuYXBwbHkoIGV2ZW50LCBbIG5hbWUgXS5jb25jYXQoIHJhemUoIGFyZ3VtZW50cyApICkgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0TGlzdCByZWdpc3RlcmVkIGV2ZW50IG5hbWVzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbiBsaXN0KCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIHRoaXMuZXZlbnROYW1lcyggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKCB0aGlzWyBIQU5ETEVSIF0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRMaXN0IHRoZSBoYW5kbGVycyBvZiB0aGUgZXZlbnQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhcHJvdHlwZSggZXZlbnQsIFNUUklORyApICl7XG5cdFx0XHRyZXR1cm4gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJzKCBldmVudCApLnJlZHVjZSggKCBsaXN0LCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0cmV0dXJuIGxpc3QuY29uY2F0KCBoYW5kbGVyLmxpc3QoICkgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRsaXN0LnB1c2goIGhhbmRsZXIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBbIF0gKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0aWYoICFrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cmV0dXJuIFsgXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5saXN0KCApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdENoZWNrcyBpZiB0aGUgZXZlbnQtaGFuZGxlciBpcyByZWdpc3RlcmVkLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLnJlZ2lzdGVyZWQgPSBmdW5jdGlvbiByZWdpc3RlcmVkKCBldmVudCwgaGFuZGxlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiW3N0cmluZ11cIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcIltmdW5jdGlvbl1cIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGhhbmRsZXIgPSBweWNrKCBwbG91Z2goIGFyZ3VtZW50cyApLCBGVU5DVElPTiApO1xuXG5cdFx0cmV0dXJuIHB5Y2soIHBsb3VnaCggYXJndW1lbnRzICksIFNUUklORyApLnNvbWUoICggZXZlbnQgKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYW5kbGVyKCBldmVudCApLnNvbWUoICggbGlzdGVuZXIgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBoYW5kbGVyLnNvbWUoICggaGFuZGxlciApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaWRudGZ5KCBsaXN0ZW5lciwgaGFuZGxlciApIHx8IGVxZSggbGlzdGVuZXIsIGhhbmRsZXIgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fTtcblxuXHQvLzogQGNsaWVudDpcblx0aWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0RXZlbnQucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gYnVkZ2UoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRcdHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5hcHBseSggc2VsZiwgcGFyYW1ldGVyICk7XG5cblx0XHRcdFx0aWYoIGV4ZWNkKCB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0gKSApe1xuXHRcdFx0XHRcdGRlbGV0ZSB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdEV2ZW50LnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUoIGV2ZW50LCBoYW5kbGVyLCBvbmNlICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJvbmNlXCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFwcm90eXBlKCBldmVudCwgU1RSSU5HICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBoYW5kbGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHRoZSBldmVudCBpcyBub3QgeWV0IHJlZ2lzdGVyZWQsIGNyZWF0ZSBhIGhhbmRsZXIgY29sbGVjdGlvbi5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoICFrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRoYW5kbGVyID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoICFjbGF6b2YoIGhhbmRsZXIsIFwiSGFuZGxlclwiICkgKXtcblx0XHRcdFx0XHRoYW5kbGVyID0gbGlzdGVuZXIoICkucHVzaCggIClcblx0XHRcdFx0XHRcdC5jb250ZXh0KCBzZWxmIClcblx0XHRcdFx0XHRcdC5yZWdpc3RlciggdGhpcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdID0gaGFuZGxlcjtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8qO1xuXHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIHJlZ2lzdGVyZWQsIG1ha2Ugc3VyZSB3ZSBhcmUgcHVzaGluZyB0aGUgaGFuZGxlciBmdW5jdGlvblxuXHRcdFx0XHRcdFx0XHRub3QgdGhlIGhhbmRsZXIgY29sbGVjdGlvbiwgaWYgd2UgZW5jb3VudGVyIGEgaGFuZGxlciBjb2xsZWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRtZXJnZSBpdC5cblx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0Ki9cblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5tZXJnZSggaGFuZGxlciApO1xuXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ucHVzaCggaGFuZGxlciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdH1cblx0Ly86IEBlbmQtY2xpZW50XG5cblx0XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIEV2ZW50O1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBFdmVudC5hcHBseSggbnVsbCwgcGFyYW1ldGVyICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZWRvO1xuIl19
//# sourceMappingURL=edo.support.js.map
