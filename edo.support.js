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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
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
              			"shft": "shft",
              			"symbiote": "symbiote",
              			"valu": "valu",
              			"wichevr": "wichevr",
              			"zelf": "zelf"
              		}
              	@end-include
              */var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var arid = require("arid");
var asea = require("asea");
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
var shft = require("shft");
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

		parameter = shft(arguments);

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

		parameter = shft(arguments);

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
				parameter = shft(arguments);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImVxZSIsImZhbHp5IiwiaGFyZGVuIiwiaGVyZWRpdG8iLCJpZG50ZnkiLCJmZXJnZSIsImluZnJheSIsImtlaW4iLCJsZXZlbGQiLCJwbG91Z2giLCJwcm90eXBlIiwicHljayIsInJhemUiLCJzaGZ0Iiwic3ltYmlvdGUiLCJ2YWx1Iiwid2ljaGV2ciIsInplbGYiLCJsaXN0ZW5lciIsIkVWRU5UIiwiSEFORExFUiIsIkxJTUlUIiwiVElNRU9VVCIsIkRFRkFVTFRfVElNRU9VVCIsIkRFRkFVTFRfTElNSVQiLCJlZG8iLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJzZWxmIiwiRXZlbnQiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwiZGVsYXkiLCJyZXN0cmljdCIsIm9uIiwiZXZlbnQiLCJoYW5kbGVyIiwiU1RSSU5HIiwiRlVOQ1RJT04iLCJyZWdpc3RlcmVkIiwicmVkdWNlIiwicHVzaCIsImhvbGRlciIsImNvbnRleHQiLCJyZWdpc3RlciIsInNlcnZlciIsImVtaXR0ZXIiLCJmb3JFYWNoIiwiY2xpZW50IiwiaGFuZGxlIiwiRXJyb3IiLCJvbmNlIiwibWFwIiwiYmluZCIsImVtaXQiLCJjb3VudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJjb25jYXQiLCJjbGVhclRpbWVvdXQiLCJub3RpZnkiLCJOVU1CRVIiLCJsaW1pdCIsImJyb2FkY2FzdCIsImxpc3RlbmVyQ291bnQiLCJmbHVzaCIsInJlbW92ZUFsbExpc3RlbmVycyIsIm1lcmdlIiwidHJhbnNmZXIiLCJsaXN0IiwibmFtZSIsImV2ZW50TmFtZXMiLCJsaXN0ZW5lcnMiLCJ1bmRlZmluZWQiLCJzb21lIiwibG9jayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFoQzs7QUFFQSxLQVBELE1BT0s7QUFDSixTQUFJZSxTQUFTLElBQWIsRUFBbUI7QUFDbEJmLGdCQUFVdkMsT0FBT3dELElBQVAsQ0FBYXpCLElBQWIsRUFBcUJRLE9BQXJCLENBQVY7QUFDQTs7QUFFRCxVQUFNaEIsT0FBTixFQUFpQmUsS0FBakIsRUFBeUJNLElBQXpCLENBQStCTCxPQUEvQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTyxJQUFQO0FBQ0EsR0E1REQ7QUE2REE7QUFDRDs7OztBQUlBLEtBQUkxQyxLQUFNZ0MsU0FBTixDQUFKLEVBQXVCO0FBQ3RCLFNBQU9HLEtBQVA7O0FBRUEsRUFIRCxNQUdLO0FBQ0osU0FBT0EsTUFBTTZCLEtBQU4sQ0FBYSxJQUFiLEVBQW1CaEMsU0FBbkIsQ0FBUDtBQUNBO0FBQ0QsQ0E5Z0JEOztBQWdoQkFtRCxPQUFPQyxPQUFQLEdBQWlCckQsR0FBakIiLCJmaWxlIjoiZWRvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWRvL2Vkby5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZWRvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vkby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVkby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEV2ZW50RW1pdHRlciBleHRlbnNpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcImVxZVwiOiBcImVxZVwiLFxuXHRcdFx0XCJFdmVudEVtaXR0ZXJcIjogXCJldmVudHNcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwiaGVyZWRpdG9cIjogXCJoZXJlZGl0b1wiLFxuXHRcdFx0XCJpZG50ZnlcIjogXCJpZG50ZnlcIixcblx0XHRcdFwiZmVyZ2VcIjogXCJmZXJnZVwiLFxuXHRcdFx0XCJpbmZyYXlcIjogXCJpbmZyYXlcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwibGV2ZWxkXCI6IFwibGV2ZWxkXCIsXG5cdFx0XHRcInBsb3VnaFwiOiBcInBsb3VnaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInZhbHVcIjogXCJ2YWx1XCIsXG5cdFx0XHRcIndpY2hldnJcIjogXCJ3aWNoZXZyXCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiZXFlXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3QgaWRudGZ5ID0gcmVxdWlyZSggXCJpZG50ZnlcIiApO1xuY29uc3QgZmVyZ2UgPSByZXF1aXJlKCBcImZlcmdlXCIgKTtcbmNvbnN0IGluZnJheSA9IHJlcXVpcmUoIFwiaW5mcmF5XCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbGV2ZWxkID0gcmVxdWlyZSggXCJsZXZlbGRcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCBweWNrID0gcmVxdWlyZSggXCJweWNrXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdmFsdSA9IHJlcXVpcmUoIFwidmFsdVwiICk7XG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBsaXN0ZW5lciA9IHJlcXVpcmUoIFwiLi9saXN0ZW5lci5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBIQU5ETEVSID0gU3ltYm9sKCBcImhhbmRsZXJcIiApO1xuY29uc3QgTElNSVQgPSBTeW1ib2woIFwibGltaXRcIiApO1xuY29uc3QgVElNRU9VVCA9IFN5bWJvbCggXCJ0aW1lb3V0XCIgKTtcblxuY29uc3QgREVGQVVMVF9USU1FT1VUID0gMTAwMDtcbmNvbnN0IERFRkFVTFRfTElNSVQgPSAxMDAwO1xuXG5jb25zdCBlZG8gPSBmdW5jdGlvbiBlZG8oIHBhcmFtZXRlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgRXZlbnQgPSBkaWF0b20oIFwiRXZlbnRcIiApO1xuXG5cdEV2ZW50LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggKXtcblx0XHR0aGlzLmRlbGF5KCBERUZBVUxUX1RJTUVPVVQgKTtcblx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRoYXJkZW4oIEhBTkRMRVIsIHsgfSwgdGhpcyApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oIGV2ZW50LCBoYW5kbGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcGFyYW1ldGVyID0gbGV2ZWxkKCBhcmd1bWVudHMgKTtcblxuXHRcdGV2ZW50ID0gcHljayggcGFyYW1ldGVyLCBTVFJJTkcgKTtcblxuXHRcdGhhbmRsZXIgPSBweWNrKCBwYXJhbWV0ZXIsIEZVTkNUSU9OICk7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRDaGVja3MgaWYgdGhlIGV2ZW50LWhhbmRsZXIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggdGhpcy5yZWdpc3RlcmVkKCBldmVudCwgaGFuZGxlciApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRoYW5kbGVyID0gaGFuZGxlci5yZWR1Y2UoICggbGlzdGVuZXIsIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGlzdGVuZXIucHVzaCggaGFuZGxlciApO1xuXHRcdH0sIHdpY2hldnIoIHRoaXMuaG9sZGVyKCBldmVudCApLCBsaXN0ZW5lciggKSApICkuY29udGV4dCggc2VsZiApLnJlZ2lzdGVyKCB0aGlzICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdGxldCBlbWl0dGVyID0gZmVyZ2UoIHRoaXMsIFwiRXZlbnRFbWl0dGVyXCIgKTtcblxuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IGVtaXR0ZXIub24oIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuaGFuZGxlKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoIGV2ZW50LCBoYW5kbGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcGFyYW1ldGVyID0gbGV2ZWxkKCBhcmd1bWVudHMgKTtcblxuXHRcdGV2ZW50ID0gcHljayggcGFyYW1ldGVyLCBTVFJJTkcgKTtcblxuXHRcdGhhbmRsZXIgPSBweWNrKCBwYXJhbWV0ZXIsIEZVTkNUSU9OICk7XG5cblx0XHRpZiggdGhpcy5yZWdpc3RlcmVkKCBldmVudCwgaGFuZGxlciApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRoYW5kbGVyID0gaGFuZGxlci5tYXAoICggaGFuZGxlciApID0+IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKSApXG5cdFx0XHQucmVkdWNlKCAoIGxpc3RlbmVyLCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbGlzdGVuZXIucHVzaCggaGFuZGxlciApO1xuXHRcdFx0fSwgd2ljaGV2ciggdGhpcy5ob2xkZXIoIGV2ZW50ICksIGxpc3RlbmVyKCApICkgKVxuXHRcdFx0LmNvbnRleHQoIHNlbGYgKVxuXHRcdFx0LnJlZ2lzdGVyKCB0aGlzICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdGxldCBlbWl0dGVyID0gZmVyZ2UoIHRoaXMsIFwiRXZlbnRFbWl0dGVyXCIgKTtcblxuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IGVtaXR0ZXIub25jZSggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5oYW5kbGUoIGV2ZW50LCBoYW5kbGVyLCB0cnVlICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdFx0aWYoIHRoaXNbIExJTUlUIF0gPD0gMCApe1xuXHRcdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdGhpcy5jb3VudCggZXZlbnQgKSA8PSAwICl7XG5cdFx0XHRsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoICggKSA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblx0XHRcdH0sIHRoaXNbIFRJTUVPVVQgXSApO1xuXG5cdFx0XHR0aGlzWyBMSU1JVCBdLS07XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdGxldCBlbWl0dGVyID0gZmVyZ2UoIHRoaXMsIFwiRXZlbnRFbWl0dGVyXCIgKTtcblxuXHRcdFx0XHRlbWl0dGVyLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHR0aGlzLm5vdGlmeS5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbiBkZWxheSggdGltZW91dCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGltZW91dDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggdGltZW91dCApIHx8ICFwcm90eXBlKCB0aW1lb3V0LCBOVU1CRVIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgdGltZW91dFwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgVElNRU9VVCBdID0gdGltZW91dDtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5yZXN0cmljdCA9IGZ1bmN0aW9uIHJlc3RyaWN0KCBsaW1pdCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibGltaXQ6cmVxdWlyZWRcIjogXCJudW1iZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGxpbWl0ICkgfHwgIXByb3R5cGUoIGxpbWl0LCBOVU1CRVIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbGltaXRcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIExJTUlUIF0gPSBsaW1pdDtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5icm9hZGNhc3QgPSBmdW5jdGlvbiBicm9hZGNhc3QoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiW3N0cmluZ11cIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGV2ZW50ID0gcGxvdWdoKCBbIGV2ZW50IF0gKTtcblxuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoIGV2ZW50ICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5saXN0ZW5lckNvdW50KCBldmVudCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRpZigga2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uY291bnQoICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHZhbHUoIHRoaXNbIEhBTkRMRVIgXSApLmZvckVhY2goICggaGFuZGxlciApID0+IGhhbmRsZXIuZmx1c2goICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEJpLWRpcmVjdGlvbmFsIG1lcmdpbmcgb2YgZXZlbnQgaGFuZGxlcnMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IG1lcmdlIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyYW5zZmVyKCBldmVudCApO1xuXHRcdGV2ZW50LnRyYW5zZmVyKCB0aGlzICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUcmFuc2ZlciBldmVudCBoYW5kbGVycy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS50cmFuc2ZlciA9IGZ1bmN0aW9uIHRyYW5zZmVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgdHJhbnNmZXIgZnJvbSBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0aW5mcmF5KCBldmVudC5saXN0KCApLCB0aGlzLmxpc3QoICkgKVxuXHRcdFx0LmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgZnVuY3Rpb24gZW1pdCggKXtcblx0XHRcdFx0XHRldmVudC5lbWl0LmFwcGx5KCBldmVudCwgWyBuYW1lIF0uY29uY2F0KCByYXplKCBhcmd1bWVudHMgKSApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdExpc3QgcmVnaXN0ZXJlZCBldmVudCBuYW1lcy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24gbGlzdCggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmV2ZW50TmFtZXMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyggdGhpc1sgSEFORExFUiBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0TGlzdCB0aGUgaGFuZGxlcnMgb2YgdGhlIGV2ZW50LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0cmV0dXJuIFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVycyggZXZlbnQgKS5yZWR1Y2UoICggbGlzdCwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdHJldHVybiBsaXN0LmNvbmNhdCggaGFuZGxlci5saXN0KCApICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgWyBdICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCAha2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiBbIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubGlzdCggKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm4gdGhlIEhhbmRsZXIgdGhhdCBob2xkcyB0aGUgaGFuZGxlciBwcm9jZWR1cmVzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhvbGRlciA9IGZ1bmN0aW9uIGhvbGRlciggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltzdHJpbmddLFxuXHRcdFx0XHRcdFx0XCIuLi5cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGV2ZW50ID0gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgU1RSSU5HICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBldmVudC5yZWR1Y2UoICggaG9sZGVyLCBldmVudCApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJzKCBldmVudCApLnJlZHVjZSggKCBob2xkZXIsIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGhvbGRlcjtcblx0XHRcdFx0fSwgdW5kZWZpbmVkICk7XG5cdFx0XHR9LCB1bmRlZmluZWQgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0cmV0dXJuIGV2ZW50LnJlZHVjZSggKCBob2xkZXIsIGV2ZW50ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSEFORExFUiBdWyBldmVudCBdO1xuXHRcdFx0fSwgdW5kZWZpbmVkICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Q2hlY2tzIGlmIHRoZSBldmVudC1oYW5kbGVyIGlzIHJlZ2lzdGVyZWQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUucmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFwiW2Z1bmN0aW9uXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBsb3VnaCggYXJndW1lbnRzICksIEZVTkNUSU9OICk7XG5cblx0XHRyZXR1cm4gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgU1RSSU5HICkuc29tZSggKCBldmVudCApID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmhhbmRsZXIoIGV2ZW50ICkuc29tZSggKCBsaXN0ZW5lciApID0+IHtcblx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuc29tZSggKCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBpZG50ZnkoIGxpc3RlbmVyLCBoYW5kbGVyICkgfHwgZXFlKCBsaXN0ZW5lciwgaGFuZGxlciApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdC8vOiBAY2xpZW50OlxuXHRpZiggYXNlYS5jbGllbnQgKXtcblx0XHRFdmVudC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uYXBwbHkoIHNlbGYsIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0RXZlbnQucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uIGhhbmRsZSggZXZlbnQsIGhhbmRsZXIsIG9uY2UgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcIm9uY2VcIjogXCJib29sZWFuXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBldmVudFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIG5vdCB5ZXQgcmVnaXN0ZXJlZCwgY3JlYXRlIGEgaGFuZGxlciBjb2xsZWN0aW9uLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggIWtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRpZiggIWNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhhbmRsZXIgPSBsaXN0ZW5lciggKS5wdXNoKCBoYW5kbGVyICkuY29udGV4dCggc2VsZiApLnJlZ2lzdGVyKCB0aGlzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0gPSBoYW5kbGVyO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHRJZiB0aGUgZXZlbnQgaXMgcmVnaXN0ZXJlZCwgbWFrZSBzdXJlIHdlIGFyZSBwdXNoaW5nIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG5cdFx0XHRcdFx0XHRcdG5vdCB0aGUgaGFuZGxlciBjb2xsZWN0aW9uLCBpZiB3ZSBlbmNvdW50ZXIgYSBoYW5kbGVyIGNvbGxlY3Rpb24sXG5cdFx0XHRcdFx0XHRcdG1lcmdlIGl0LlxuXHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHQqL1xuXHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdGhhbmRsZXIubG9jayggKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubWVyZ2UoIGhhbmRsZXIgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZiggb25jZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0aGFuZGxlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ucHVzaCggaGFuZGxlciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdH1cblx0Ly86IEBlbmQtY2xpZW50XG5cblx0XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIEV2ZW50O1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBFdmVudC5hcHBseSggbnVsbCwgcGFyYW1ldGVyICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZWRvO1xuIl19
//# sourceMappingURL=edo.support.js.map
