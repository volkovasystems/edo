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
              			"asyum": "asyum",
              			"called": "called",
              			"clazof": "clazof",
              			"depher": "depher",
              			"diatom": "diatom",
              			"eqe": "eqe",
              			"EventEmitter": "events",
              			"falzy": "falzy",
              			"harden": "harden",
              			"heredito": "heredito",
              			"idntfy": "idntfy",
              			"idntty": "idntty",
              			"ferge": "ferge",
              			"infray": "infray",
              			"kein": "kein",
              			"kurse": "kurse",
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
var asyum = require("asyum");
var called = require("called");
var clazof = require("clazof");
var depher = require("depher");
var diatom = require("diatom");
var een = require("een");
var eqe = require("eqe");
var falzy = require("falzy");
var harden = require("harden");
var heredito = require("heredito");
var idntfy = require("idntfy");
var idntty = require("idntty");
var ferge = require("ferge");
var infray = require("infray");
var kein = require("kein");
var kurse = require("kurse");
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
var LINK = (0, _symbol2.default)("link");
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
		harden(LINK, [], this);

		kurse(this);

		var identity = idntty(this).toString();
		this.on(identity + ":on-listener-added", function handle() {});
		this.on(identity + ":once-listener-added", function handle() {});

		return this;
	};

	Event.prototype.on = function on(event, handler, option) {var _this = this;
		/*;
                                                                             	@meta-configuration:
                                                                             		{
                                                                             			"event:required": [
                                                                             				"string",
                                                                             				"..."
                                                                             			],
                                                                             			"handler:required": "function",
                                                                             			"option": "object"
                                                                             		}
                                                                             	@end-meta-configuration
                                                                             */

		var parameter = leveld(arguments);

		event = pyck(parameter, STRING);

		handler = pyck(parameter, FUNCTION);

		//: @note: Preserve the original handler. This will be used to emit notification.
		var _handler = handler;

		option = depher(parameter, OBJECT, {});

		/*;
                                          	@note:
                                          		Checks if the event-handler is already registered.
                                          			Note that this will check the real handler function not the Handler instance.
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

		/*;
    	@note:
    		This is our own notification that the event has been added.
    			Note that we will not notify if the event is an identity event or
    			"disableOnListenerNotification" is enabled.
    	@end-note
    */

		var identity = idntty(this).toString();
		if (!new RegExp(identity).test(event) && !option.disableOnListenerNotification) {
			this.emit(identity + ":on-listener-added", event, _handler);
		}

		return this;
	};

	Event.prototype.once = function once(event, handler, option) {var _this2 = this;
		/*;
                                                                                  	@meta-configuration:
                                                                                  		{
                                                                                  			"event:required": [
                                                                                  				"string",
                                                                                  				"..."
                                                                                  			],
                                                                                  			"handler:required": "function",
                                                                                  			"option": "object"
                                                                                  		}
                                                                                  	@end-meta-configuration
                                                                                  */

		var parameter = leveld(arguments);

		event = pyck(parameter, STRING);

		handler = pyck(parameter, FUNCTION);

		//: @note: Preserve the original handler. This will be used to emit notification.
		var _handler = handler;

		option = depher(parameter, OBJECT, {});

		/*;
                                          	@note:
                                          		Checks if the event-handler is already registered.
                                          			Note that this will check the real handler function not the Handler instance.
                                          	@end-note
                                          */

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

		/*;
    	@note:
    		This is our own notification that the event has been added once.
    			Note that we will not notify if the event is an identity event or
    			"disableOnceListenerNotification" is enabled.
    	@end-note
    */

		var identity = idntty(this).toString();
		if (!new RegExp(identity).test(event) && !option.disableOnceListenerNotification) {
			this.emit(identity + ":once-listener-added", event, _handler);
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

	Event.prototype.flush = function flush() {var _this5 = this;
		if (asea.server) {
			this.list().forEach(function (event) {return asyum(_this5.holder(event), function flush() {}).flush();});

			this.removeAllListeners();

		} else if (asea.client) {
			valu(this[HANDLER]).forEach(function (handler) {return handler.flush();});

			(0, _keys2.default)(this[HANDLER]).forEach(function (event) {return delete _this5[HANDLER][event];});

		} else {
			throw new Error("cannot determine platform, platform not supported");
		}

		while (this[LINK].length) {this[LINK].pop().flush();}

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
	Event.prototype.transfer = function transfer(event) {var _this6 = this;
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
			_this6.on(name, function emit() {
				event.emit.apply(event, [name].concat(raze(arguments)));
			});
		});

		var self = this;
		var identity = idntty(this).toString();
		this.on(identity + ":on-listener-added", function onListenerAdded(name) {
			event.on(name, function emit() {
				self.emit.apply(self, [name].concat(raze(arguments)));
			}, { "disableOnListenerNotification": true });
		});

		this.on(identity + ":once-listener-added", function onceListenerAdded(name) {
			event.once(name, function emit() {
				self.emit.apply(self, [name].concat(raze(arguments)));
			}, { "disableOnceListenerNotification": true });
		});

		this.link(event);

		return this;
	};

	Event.prototype.link = function link(event) {
		/*;
                                              	@meta-configuration:
                                              		{
                                              			"event:required": "Event"
                                              		}
                                              	@end-meta-configuration
                                              */

		if (falzy(event) || !clazof(event, "Event")) {
			throw new Error("cannot link event");
		}

		if (!een(this[LINK], event, function (link, event) {return idntfy(link, event);})) {
			this[LINK].push(event);
		}

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
	Event.prototype.holder = function holder(event) {var _this7 = this;
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
				return _this7.listeners(event).reduce(function (holder, handler) {
					if (clazof(handler, "Handler")) {
						return handler;
					}

					return holder;
				}, undefined);
			}, undefined);

		} else if (asea.client) {
			return event.reduce(function (holder, event) {
				return _this7[HANDLER][event];
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
	Event.prototype.registered = function registered(event, handler) {var _this8 = this;
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
			return _this8.handler(event).some(function (listener) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImFzeXVtIiwiY2FsbGVkIiwiY2xhem9mIiwiZGVwaGVyIiwiZGlhdG9tIiwiZWVuIiwiZXFlIiwiZmFsenkiLCJoYXJkZW4iLCJoZXJlZGl0byIsImlkbnRmeSIsImlkbnR0eSIsImZlcmdlIiwiaW5mcmF5Iiwia2VpbiIsImt1cnNlIiwibGV2ZWxkIiwicGxvdWdoIiwicHJvdHlwZSIsInB5Y2siLCJyYXplIiwic2hmdCIsInN5bWJpb3RlIiwidmFsdSIsIndpY2hldnIiLCJ6ZWxmIiwibGlzdGVuZXIiLCJFVkVOVCIsIkhBTkRMRVIiLCJMSU1JVCIsIkxJTksiLCJUSU1FT1VUIiwiREVGQVVMVF9USU1FT1VUIiwiREVGQVVMVF9MSU1JVCIsImVkbyIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsInNlbGYiLCJFdmVudCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJkZWxheSIsInJlc3RyaWN0IiwiaWRlbnRpdHkiLCJ0b1N0cmluZyIsIm9uIiwiaGFuZGxlIiwiZXZlbnQiLCJoYW5kbGVyIiwib3B0aW9uIiwiU1RSSU5HIiwiRlVOQ1RJT04iLCJfaGFuZGxlciIsIk9CSkVDVCIsInJlZ2lzdGVyZWQiLCJyZWR1Y2UiLCJwdXNoIiwiaG9sZGVyIiwiY29udGV4dCIsInJlZ2lzdGVyIiwic2VydmVyIiwiZW1pdHRlciIsImZvckVhY2giLCJjbGllbnQiLCJFcnJvciIsIlJlZ0V4cCIsInRlc3QiLCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvbiIsImVtaXQiLCJvbmNlIiwibWFwIiwiYmluZCIsImRpc2FibGVPbmNlTGlzdGVuZXJOb3RpZmljYXRpb24iLCJjb3VudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJjb25jYXQiLCJjbGVhclRpbWVvdXQiLCJub3RpZnkiLCJOVU1CRVIiLCJsaW1pdCIsImJyb2FkY2FzdCIsImxpc3RlbmVyQ291bnQiLCJmbHVzaCIsImxpc3QiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJsZW5ndGgiLCJwb3AiLCJtZXJnZSIsInRyYW5zZmVyIiwibmFtZSIsIm9uTGlzdGVuZXJBZGRlZCIsIm9uY2VMaXN0ZW5lckFkZGVkIiwibGluayIsImV2ZW50TmFtZXMiLCJsaXN0ZW5lcnMiLCJ1bmRlZmluZWQiLCJzb21lIiwibG9jayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksU0FBU0osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1NLFNBQVNOLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU8sTUFBTVAsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNUSxNQUFNUixRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1TLFFBQVFULFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTVUsU0FBU1YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNVyxXQUFXWCxRQUFTLFVBQVQsQ0FBakI7QUFDQSxJQUFNWSxTQUFTWixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1hLFNBQVNiLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTWMsUUFBUWQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNZSxTQUFTZixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1nQixPQUFPaEIsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNaUIsUUFBUWpCLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTWtCLFNBQVNs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QUFDbEJyQixjQUFRbUQsSUFBUjtBQUNBOztBQUVELFVBQU12RSxPQUFOLEVBQWlCbUIsS0FBakIsRUFBeUIwQyxLQUF6QixDQUFnQ3pDLE9BQWhDOztBQUVBLEtBUEQsTUFPSztBQUNKLFNBQUlxQixTQUFTLElBQWIsRUFBbUI7QUFDbEJyQixnQkFBVS9DLE9BQU9zRSxJQUFQLENBQWFsQyxJQUFiLEVBQXFCVyxPQUFyQixDQUFWO0FBQ0E7O0FBRUQsVUFBTXBCLE9BQU4sRUFBaUJtQixLQUFqQixFQUF5QlMsSUFBekIsQ0FBK0JSLE9BQS9CO0FBQ0E7QUFDRDs7QUFFRCxVQUFPLElBQVA7QUFDQSxHQTVERDtBQTZEQTtBQUNEOzs7O0FBSUEsS0FBSW5ELEtBQU1zQyxTQUFOLENBQUosRUFBdUI7QUFDdEIsU0FBT0csS0FBUDs7QUFFQSxFQUhELE1BR0s7QUFDSixTQUFPQSxNQUFNc0MsS0FBTixDQUFhLElBQWIsRUFBbUJ6QyxTQUFuQixDQUFQO0FBQ0E7QUFDRCxDQTltQkQ7O0FBZ25CQWlFLE9BQU9DLE9BQVAsR0FBaUJuRSxHQUFqQiIsImZpbGUiOiJlZG8uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWRvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlZG8vZWRvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJlZG8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZWRvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWRvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWRvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXZlbnRFbWl0dGVyIGV4dGVuc2lvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYXN5dW1cIjogXCJhc3l1bVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcImRlcGhlclwiOiBcImRlcGhlclwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXG5cdFx0XHRcIkV2ZW50RW1pdHRlclwiOiBcImV2ZW50c1wiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImlkbnRmeVwiOiBcImlkbnRmeVwiLFxuXHRcdFx0XCJpZG50dHlcIjogXCJpZG50dHlcIixcblx0XHRcdFwiZmVyZ2VcIjogXCJmZXJnZVwiLFxuXHRcdFx0XCJpbmZyYXlcIjogXCJpbmZyYXlcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwia3Vyc2VcIjogXCJrdXJzZVwiLFxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInB5Y2tcIjogXCJweWNrXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidmFsdVwiOiBcInZhbHVcIixcblx0XHRcdFwid2ljaGV2clwiOiBcIndpY2hldnJcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYXN5dW0gPSByZXF1aXJlKCBcImFzeXVtXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRlcGhlciA9IHJlcXVpcmUoIFwiZGVwaGVyXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiZXFlXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3QgaWRudGZ5ID0gcmVxdWlyZSggXCJpZG50ZnlcIiApO1xuY29uc3QgaWRudHR5ID0gcmVxdWlyZSggXCJpZG50dHlcIiApO1xuY29uc3QgZmVyZ2UgPSByZXF1aXJlKCBcImZlcmdlXCIgKTtcbmNvbnN0IGluZnJheSA9IHJlcXVpcmUoIFwiaW5mcmF5XCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3Qga3Vyc2UgPSByZXF1aXJlKCBcImt1cnNlXCIgKTtcbmNvbnN0IGxldmVsZCA9IHJlcXVpcmUoIFwibGV2ZWxkXCIgKTtcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHZhbHUgPSByZXF1aXJlKCBcInZhbHVcIiApO1xuY29uc3Qgd2ljaGV2ciA9IHJlcXVpcmUoIFwid2ljaGV2clwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgbGlzdGVuZXIgPSByZXF1aXJlKCBcIi4vbGlzdGVuZXIuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuY29uc3QgRVZFTlQgPSBTeW1ib2woIFwiZXZlbnRcIiApO1xuY29uc3QgSEFORExFUiA9IFN5bWJvbCggXCJoYW5kbGVyXCIgKTtcbmNvbnN0IExJTUlUID0gU3ltYm9sKCBcImxpbWl0XCIgKTtcbmNvbnN0IExJTksgPSBTeW1ib2woIFwibGlua1wiICk7XG5jb25zdCBUSU1FT1VUID0gU3ltYm9sKCBcInRpbWVvdXRcIiApO1xuXG5jb25zdCBERUZBVUxUX1RJTUVPVVQgPSAxMDAwO1xuY29uc3QgREVGQVVMVF9MSU1JVCA9IDEwMDA7XG5cbmNvbnN0IGVkbyA9IGZ1bmN0aW9uIGVkbyggcGFyYW1ldGVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdGxldCBFdmVudCA9IGRpYXRvbSggXCJFdmVudFwiICk7XG5cblx0RXZlbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdHRoaXMuZGVsYXkoIERFRkFVTFRfVElNRU9VVCApO1xuXHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdGhhcmRlbiggSEFORExFUiwgeyB9LCB0aGlzICk7XG5cdFx0aGFyZGVuKCBMSU5LLCBbIF0sIHRoaXMgKTtcblxuXHRcdGt1cnNlKCB0aGlzICk7XG5cblx0XHRsZXQgaWRlbnRpdHkgPSBpZG50dHkoIHRoaXMgKS50b1N0cmluZyggKTtcblx0XHR0aGlzLm9uKCBgJHsgaWRlbnRpdHkgfTpvbi1saXN0ZW5lci1hZGRlZGAsIGZ1bmN0aW9uIGhhbmRsZSggKXsgfSApO1xuXHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9Om9uY2UtbGlzdGVuZXItYWRkZWRgLCBmdW5jdGlvbiBoYW5kbGUoICl7IH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKCBldmVudCwgaGFuZGxlciwgb3B0aW9uICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9wdGlvblwiOiBcIm9iamVjdFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKTtcblxuXHRcdC8vOiBAbm90ZTogUHJlc2VydmUgdGhlIG9yaWdpbmFsIGhhbmRsZXIuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIGVtaXQgbm90aWZpY2F0aW9uLlxuXHRcdGxldCBfaGFuZGxlciA9IGhhbmRsZXI7XG5cblx0XHRvcHRpb24gPSBkZXBoZXIoIHBhcmFtZXRlciwgT0JKRUNULCB7IH0gKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdENoZWNrcyBpZiB0aGUgZXZlbnQtaGFuZGxlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXG5cblx0XHRcdFx0Tm90ZSB0aGF0IHRoaXMgd2lsbCBjaGVjayB0aGUgcmVhbCBoYW5kbGVyIGZ1bmN0aW9uIG5vdCB0aGUgSGFuZGxlciBpbnN0YW5jZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRoaXMucmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aGFuZGxlciA9IGhhbmRsZXIucmVkdWNlKCAoIGxpc3RlbmVyLCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0cmV0dXJuIGxpc3RlbmVyLnB1c2goIGhhbmRsZXIgKTtcblx0XHR9LCB3aWNoZXZyKCB0aGlzLmhvbGRlciggZXZlbnQgKSwgbGlzdGVuZXIoICkgKSApLmNvbnRleHQoIHNlbGYgKS5yZWdpc3RlciggdGhpcyApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiB0aGlzLmhhbmRsZSggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0VGhpcyBpcyBvdXIgb3duIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBldmVudCBoYXMgYmVlbiBhZGRlZC5cblxuXHRcdFx0XHROb3RlIHRoYXQgd2Ugd2lsbCBub3Qgbm90aWZ5IGlmIHRoZSBldmVudCBpcyBhbiBpZGVudGl0eSBldmVudCBvclxuXHRcdFx0XHRcdFwiZGlzYWJsZU9uTGlzdGVuZXJOb3RpZmljYXRpb25cIiBpcyBlbmFibGVkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRsZXQgaWRlbnRpdHkgPSBpZG50dHkoIHRoaXMgKS50b1N0cmluZyggKTtcblx0XHRpZiggISggbmV3IFJlZ0V4cCggaWRlbnRpdHkgKSApLnRlc3QoIGV2ZW50ICkgJiYgIW9wdGlvbi5kaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvbiApe1xuXHRcdFx0dGhpcy5lbWl0KCBgJHsgaWRlbnRpdHkgfTpvbi1saXN0ZW5lci1hZGRlZGAsIGV2ZW50LCBfaGFuZGxlciApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSggZXZlbnQsIGhhbmRsZXIsIG9wdGlvbiApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJvcHRpb25cIjogXCJvYmplY3RcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcGFyYW1ldGVyID0gbGV2ZWxkKCBhcmd1bWVudHMgKTtcblxuXHRcdGV2ZW50ID0gcHljayggcGFyYW1ldGVyLCBTVFJJTkcgKTtcblxuXHRcdGhhbmRsZXIgPSBweWNrKCBwYXJhbWV0ZXIsIEZVTkNUSU9OICk7XG5cblx0XHQvLzogQG5vdGU6IFByZXNlcnZlIHRoZSBvcmlnaW5hbCBoYW5kbGVyLiBUaGlzIHdpbGwgYmUgdXNlZCB0byBlbWl0IG5vdGlmaWNhdGlvbi5cblx0XHRsZXQgX2hhbmRsZXIgPSBoYW5kbGVyO1xuXG5cdFx0b3B0aW9uID0gZGVwaGVyKCBwYXJhbWV0ZXIsIE9CSkVDVCwgeyB9ICk7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRDaGVja3MgaWYgdGhlIGV2ZW50LWhhbmRsZXIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLlxuXG5cdFx0XHRcdE5vdGUgdGhhdCB0aGlzIHdpbGwgY2hlY2sgdGhlIHJlYWwgaGFuZGxlciBmdW5jdGlvbiBub3QgdGhlIEhhbmRsZXIgaW5zdGFuY2UuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCB0aGlzLnJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGhhbmRsZXIgPSBoYW5kbGVyLm1hcCggKCBoYW5kbGVyICkgPT4gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApIClcblx0XHRcdC5yZWR1Y2UoICggbGlzdGVuZXIsIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBsaXN0ZW5lci5wdXNoKCBoYW5kbGVyICk7XG5cdFx0XHR9LCB3aWNoZXZyKCB0aGlzLmhvbGRlciggZXZlbnQgKSwgbGlzdGVuZXIoICkgKSApXG5cdFx0XHQuY29udGV4dCggc2VsZiApXG5cdFx0XHQucmVnaXN0ZXIoIHRoaXMgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0bGV0IGVtaXR0ZXIgPSBmZXJnZSggdGhpcywgXCJFdmVudEVtaXR0ZXJcIiApO1xuXG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gZW1pdHRlci5vbmNlKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiB0aGlzLmhhbmRsZSggZXZlbnQsIGhhbmRsZXIsIHRydWUgKSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0VGhpcyBpcyBvdXIgb3duIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBldmVudCBoYXMgYmVlbiBhZGRlZCBvbmNlLlxuXG5cdFx0XHRcdE5vdGUgdGhhdCB3ZSB3aWxsIG5vdCBub3RpZnkgaWYgdGhlIGV2ZW50IGlzIGFuIGlkZW50aXR5IGV2ZW50IG9yXG5cdFx0XHRcdFx0XCJkaXNhYmxlT25jZUxpc3RlbmVyTm90aWZpY2F0aW9uXCIgaXMgZW5hYmxlZC5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0bGV0IGlkZW50aXR5ID0gaWRudHR5KCB0aGlzICkudG9TdHJpbmcoICk7XG5cdFx0aWYoICEoIG5ldyBSZWdFeHAoIGlkZW50aXR5ICkgKS50ZXN0KCBldmVudCApICYmICFvcHRpb24uZGlzYWJsZU9uY2VMaXN0ZW5lck5vdGlmaWNhdGlvbiApe1xuXHRcdFx0dGhpcy5lbWl0KCBgJHsgaWRlbnRpdHkgfTpvbmNlLWxpc3RlbmVyLWFkZGVkYCwgZXZlbnQsIF9oYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRpZiggdGhpc1sgTElNSVQgXSA8PSAwICl7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmNvdW50KCBldmVudCApIDw9IDAgKXtcblx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggKCApID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdFx0fSwgdGhpc1sgVElNRU9VVCBdICk7XG5cblx0XHRcdHRoaXNbIExJTUlUIF0tLTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0bGV0IGVtaXR0ZXIgPSBmZXJnZSggdGhpcywgXCJFdmVudEVtaXR0ZXJcIiApO1xuXG5cdFx0XHRcdGVtaXR0ZXIuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdHRoaXMubm90aWZ5LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KCB0aW1lb3V0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aW1lb3V0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCB0aW1lb3V0ICkgfHwgIXByb3R5cGUoIHRpbWVvdXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0aW1lb3V0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBUSU1FT1VUIF0gPSB0aW1lb3V0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLnJlc3RyaWN0ID0gZnVuY3Rpb24gcmVzdHJpY3QoIGxpbWl0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJsaW1pdDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggbGltaXQgKSB8fCAhcHJvdHlwZSggbGltaXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaW1pdFwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgTElNSVQgXSA9IGxpbWl0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmJyb2FkY2FzdCA9IGZ1bmN0aW9uIGJyb2FkY2FzdCggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0ZXZlbnQgPSBwbG91Z2goIFsgZXZlbnQgXSApO1xuXG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCggZXZlbnQgKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVyQ291bnQoIGV2ZW50ICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCBrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5jb3VudCggKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDA7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHR0aGlzLmxpc3QoICkuZm9yRWFjaCggKCBldmVudCApID0+IGFzeXVtKCB0aGlzLmhvbGRlciggZXZlbnQgKSwgZnVuY3Rpb24gZmx1c2goICl7IH0gKS5mbHVzaCggKSApO1xuXG5cdFx0XHR0aGlzLnJlbW92ZUFsbExpc3RlbmVycyggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0dmFsdSggdGhpc1sgSEFORExFUiBdICkuZm9yRWFjaCggKCBoYW5kbGVyICkgPT4gaGFuZGxlci5mbHVzaCggKSApO1xuXG5cdFx0XHRPYmplY3Qua2V5cyggdGhpc1sgSEFORExFUiBdICkuZm9yRWFjaCggKCBldmVudCApID0+ICggZGVsZXRlIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXSApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHR3aGlsZSggdGhpc1sgTElOSyBdLmxlbmd0aCApIHRoaXNbIExJTksgXS5wb3AoICkuZmx1c2goICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRCaS1kaXJlY3Rpb25hbCBtZXJnaW5nIG9mIGV2ZW50IGhhbmRsZXJzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFjbGF6b2YoIGV2ZW50LCBcIkV2ZW50XCIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBtZXJnZSBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmFuc2ZlciggZXZlbnQgKTtcblx0XHRldmVudC50cmFuc2ZlciggdGhpcyApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VHJhbnNmZXIgZXZlbnQgaGFuZGxlcnMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUudHJhbnNmZXIgPSBmdW5jdGlvbiB0cmFuc2ZlciggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHRyYW5zZmVyIGZyb20gZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdGluZnJheSggZXZlbnQubGlzdCggKSwgdGhpcy5saXN0KCApIClcblx0XHRcdC5mb3JFYWNoKCAoIG5hbWUgKSA9PiB7XG5cdFx0XHRcdHRoaXMub24oIG5hbWUsIGZ1bmN0aW9uIGVtaXQoICl7XG5cdFx0XHRcdFx0ZXZlbnQuZW1pdC5hcHBseSggZXZlbnQsIFsgbmFtZSBdLmNvbmNhdCggcmF6ZSggYXJndW1lbnRzICkgKSApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IGlkZW50aXR5ID0gaWRudHR5KCB0aGlzICkudG9TdHJpbmcoICk7XG5cdFx0dGhpcy5vbiggYCR7IGlkZW50aXR5IH06b24tbGlzdGVuZXItYWRkZWRgLCBmdW5jdGlvbiBvbkxpc3RlbmVyQWRkZWQoIG5hbWUgKXtcblx0XHRcdGV2ZW50Lm9uKCBuYW1lLCBmdW5jdGlvbiBlbWl0KCApe1xuXHRcdFx0XHRzZWxmLmVtaXQuYXBwbHkoIHNlbGYsIFsgbmFtZSBdLmNvbmNhdCggcmF6ZSggYXJndW1lbnRzICkgKSApO1xuXHRcdFx0fSwgeyBcImRpc2FibGVPbkxpc3RlbmVyTm90aWZpY2F0aW9uXCI6IHRydWUgfSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9Om9uY2UtbGlzdGVuZXItYWRkZWRgLCBmdW5jdGlvbiBvbmNlTGlzdGVuZXJBZGRlZCggbmFtZSApe1xuXHRcdFx0ZXZlbnQub25jZSggbmFtZSwgZnVuY3Rpb24gZW1pdCggKXtcblx0XHRcdFx0c2VsZi5lbWl0LmFwcGx5KCBzZWxmLCBbIG5hbWUgXS5jb25jYXQoIHJhemUoIGFyZ3VtZW50cyApICkgKTtcblx0XHRcdH0sIHsgXCJkaXNhYmxlT25jZUxpc3RlbmVyTm90aWZpY2F0aW9uXCI6IHRydWUgfSApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMubGluayggZXZlbnQgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gbGluayggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGxpbmsgZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdGlmKCAhZWVuKCB0aGlzWyBMSU5LIF0sIGV2ZW50LCAoIGxpbmssIGV2ZW50ICkgPT4gaWRudGZ5KCBsaW5rLCBldmVudCApICkgKXtcblx0XHRcdHRoaXNbIExJTksgXS5wdXNoKCBldmVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdExpc3QgcmVnaXN0ZXJlZCBldmVudCBuYW1lcy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24gbGlzdCggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmV2ZW50TmFtZXMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyggdGhpc1sgSEFORExFUiBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0TGlzdCB0aGUgaGFuZGxlcnMgb2YgdGhlIGV2ZW50LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0cmV0dXJuIFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVycyggZXZlbnQgKS5yZWR1Y2UoICggbGlzdCwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdHJldHVybiBsaXN0LmNvbmNhdCggaGFuZGxlci5saXN0KCApICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgWyBdICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCAha2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiBbIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubGlzdCggKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm4gdGhlIEhhbmRsZXIgdGhhdCBob2xkcyB0aGUgaGFuZGxlciBwcm9jZWR1cmVzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhvbGRlciA9IGZ1bmN0aW9uIGhvbGRlciggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltzdHJpbmddLFxuXHRcdFx0XHRcdFx0XCIuLi5cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGV2ZW50ID0gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgU1RSSU5HICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBldmVudC5yZWR1Y2UoICggaG9sZGVyLCBldmVudCApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJzKCBldmVudCApLnJlZHVjZSggKCBob2xkZXIsIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGhvbGRlcjtcblx0XHRcdFx0fSwgdW5kZWZpbmVkICk7XG5cdFx0XHR9LCB1bmRlZmluZWQgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0cmV0dXJuIGV2ZW50LnJlZHVjZSggKCBob2xkZXIsIGV2ZW50ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSEFORExFUiBdWyBldmVudCBdO1xuXHRcdFx0fSwgdW5kZWZpbmVkICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Q2hlY2tzIGlmIHRoZSBldmVudC1oYW5kbGVyIGlzIHJlZ2lzdGVyZWQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUucmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFwiW2Z1bmN0aW9uXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBsb3VnaCggYXJndW1lbnRzICksIEZVTkNUSU9OICk7XG5cblx0XHRyZXR1cm4gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgU1RSSU5HICkuc29tZSggKCBldmVudCApID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmhhbmRsZXIoIGV2ZW50ICkuc29tZSggKCBsaXN0ZW5lciApID0+IHtcblx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuc29tZSggKCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBpZG50ZnkoIGxpc3RlbmVyLCBoYW5kbGVyICkgfHwgZXFlKCBsaXN0ZW5lciwgaGFuZGxlciApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdC8vOiBAY2xpZW50OlxuXHRpZiggYXNlYS5jbGllbnQgKXtcblx0XHRFdmVudC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uYXBwbHkoIHNlbGYsIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0RXZlbnQucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uIGhhbmRsZSggZXZlbnQsIGhhbmRsZXIsIG9uY2UgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcIm9uY2VcIjogXCJib29sZWFuXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBldmVudFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIG5vdCB5ZXQgcmVnaXN0ZXJlZCwgY3JlYXRlIGEgaGFuZGxlciBjb2xsZWN0aW9uLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggIWtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRpZiggIWNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhhbmRsZXIgPSBsaXN0ZW5lciggKS5wdXNoKCBoYW5kbGVyICkuY29udGV4dCggc2VsZiApLnJlZ2lzdGVyKCB0aGlzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0gPSBoYW5kbGVyO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHRJZiB0aGUgZXZlbnQgaXMgcmVnaXN0ZXJlZCwgbWFrZSBzdXJlIHdlIGFyZSBwdXNoaW5nIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG5cdFx0XHRcdFx0XHRcdG5vdCB0aGUgaGFuZGxlciBjb2xsZWN0aW9uLCBpZiB3ZSBlbmNvdW50ZXIgYSBoYW5kbGVyIGNvbGxlY3Rpb24sXG5cdFx0XHRcdFx0XHRcdG1lcmdlIGl0LlxuXHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHQqL1xuXHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdGhhbmRsZXIubG9jayggKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubWVyZ2UoIGhhbmRsZXIgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZiggb25jZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0aGFuZGxlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ucHVzaCggaGFuZGxlciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdH1cblx0Ly86IEBlbmQtY2xpZW50XG5cblx0XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIEV2ZW50O1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBFdmVudC5hcHBseSggbnVsbCwgcGFyYW1ldGVyICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZWRvO1xuIl19
//# sourceMappingURL=edo.support.js.map
