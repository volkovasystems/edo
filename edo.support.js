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
    		@todo:
    		This needs optimization.
    	@end-todo
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

	Event.prototype.hasEvent = function hasEvent(event) {
		/*;
                                                      	@meta-configuration:
                                                      		{
                                                      			"event:required": "string"
                                                      		}
                                                      	@end-meta-configuration
                                                      */

		if (falzy(event) || !protype(event, STRING)) {
			throw new Error("invalid event");
		}

		return een(this.list(), event);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImFzeXVtIiwiY2FsbGVkIiwiY2xhem9mIiwiZGVwaGVyIiwiZGlhdG9tIiwiZWVuIiwiZXFlIiwiZmFsenkiLCJoYXJkZW4iLCJoZXJlZGl0byIsImlkbnRmeSIsImlkbnR0eSIsImZlcmdlIiwiaW5mcmF5Iiwia2VpbiIsImt1cnNlIiwibGV2ZWxkIiwicGxvdWdoIiwicHJvdHlwZSIsInB5Y2siLCJyYXplIiwic2hmdCIsInN5bWJpb3RlIiwidmFsdSIsIndpY2hldnIiLCJ6ZWxmIiwibGlzdGVuZXIiLCJFVkVOVCIsIkhBTkRMRVIiLCJMSU1JVCIsIkxJTksiLCJUSU1FT1VUIiwiREVGQVVMVF9USU1FT1VUIiwiREVGQVVMVF9MSU1JVCIsImVkbyIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsInNlbGYiLCJFdmVudCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJkZWxheSIsInJlc3RyaWN0IiwiaWRlbnRpdHkiLCJ0b1N0cmluZyIsIm9uIiwiaGFuZGxlIiwiZXZlbnQiLCJoYW5kbGVyIiwib3B0aW9uIiwiU1RSSU5HIiwiRlVOQ1RJT04iLCJfaGFuZGxlciIsIk9CSkVDVCIsInJlZ2lzdGVyZWQiLCJyZWR1Y2UiLCJwdXNoIiwiaG9sZGVyIiwiY29udGV4dCIsInJlZ2lzdGVyIiwic2VydmVyIiwiZW1pdHRlciIsImZvckVhY2giLCJjbGllbnQiLCJFcnJvciIsIlJlZ0V4cCIsInRlc3QiLCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvbiIsImVtaXQiLCJvbmNlIiwibWFwIiwiYmluZCIsImRpc2FibGVPbmNlTGlzdGVuZXJOb3RpZmljYXRpb24iLCJjb3VudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJjb25jYXQiLCJjbGVhclRpbWVvdXQiLCJub3RpZnkiLCJOVU1CRVIiLCJsaW1pdCIsImJyb2FkY2FzdCIsImxpc3RlbmVyQ291bnQiLCJmbHVzaCIsImxpc3QiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJsZW5ndGgiLCJwb3AiLCJtZXJnZSIsInRyYW5zZmVyIiwibmFtZSIsIm9uTGlzdGVuZXJBZGRlZCIsIm9uY2VMaXN0ZW5lckFkZGVkIiwibGluayIsImV2ZW50TmFtZXMiLCJsaXN0ZW5lcnMiLCJ1bmRlZmluZWQiLCJzb21lIiwiaGFzRXZlbnQiLCJsb2NrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRkEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFFBQVFGLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLFNBQVNMLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU0sU0FBU04sUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTyxNQUFNUCxRQUFTLEtBQVQsQ0FBWjtBQUNBLElBQU1RLE1BQU1SLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTVMsUUFBUVQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNVSxTQUFTVixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1XLFdBQVdYLFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1ZLFNBQVNaLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTWEsU0FBU2IsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNYyxRQUFRZCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1lLFNBQVNmLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTWdCLE9BQU9oQixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1pQixRQUFRakIsUUFBUyxPQUFULENBQWQ7QUFDQSxJ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SUFBYixFQUFxQlcsT0FBckIsQ0FBVjtBQUNBOztBQUVEQSxlQUFVdEIsV0FBWThCLElBQVosQ0FBa0JSLE9BQWxCLEVBQTRCVSxPQUE1QixDQUFxQ3JCLElBQXJDLEVBQTRDc0IsUUFBNUMsQ0FBc0QsSUFBdEQsQ0FBVjtBQUNBOztBQUVELFNBQU0vQixPQUFOLEVBQWlCbUIsS0FBakIsSUFBMkJDLE9BQTNCOztBQUVBLElBWEQsTUFXSztBQUNKOzs7Ozs7O0FBT0EsUUFBSTlDLE9BQVE4QyxPQUFSLEVBQWlCLFNBQWpCLENBQUosRUFBa0M7QUFDakMsU0FBSXFCLFNBQVMsSUFBYixFQUFtQjtBQUNsQnJCLGNBQVFvRCxJQUFSO0FBQ0E7O0FBRUQsVUFBTXhFLE9BQU4sRUFBaUJtQixLQUFqQixFQUF5QjBDLEtBQXpCLENBQWdDekMsT0FBaEM7O0FBRUEsS0FQRCxNQU9LO0FBQ0osU0FBSXFCLFNBQVMsSUFBYixFQUFtQjtBQUNsQnJCLGdCQUFVL0MsT0FBT3NFLElBQVAsQ0FBYWxDLElBQWIsRUFBcUJXLE9BQXJCLENBQVY7QUFDQTs7QUFFRCxVQUFNcEIsT0FBTixFQUFpQm1CLEtBQWpCLEVBQXlCUyxJQUF6QixDQUErQlIsT0FBL0I7QUFDQTtBQUNEOztBQUVELFVBQU8sSUFBUDtBQUNBLEdBNUREO0FBNkRBO0FBQ0Q7Ozs7QUFJQSxLQUFJbkQsS0FBTXNDLFNBQU4sQ0FBSixFQUF1QjtBQUN0QixTQUFPRyxLQUFQOztBQUVBLEVBSEQsTUFHSztBQUNKLFNBQU9BLE1BQU1zQyxLQUFOLENBQWEsSUFBYixFQUFtQnpDLFNBQW5CLENBQVA7QUFDQTtBQUNELENBbG9CRDs7QUFvb0JBa0UsT0FBT0MsT0FBUCxHQUFpQnBFLEdBQWpCIiwiZmlsZSI6ImVkby5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlZG9cIixcblx0XHRcdFwicGF0aFwiOiBcImVkby9lZG8uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImVkby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlZG9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lZG8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJlZG8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFdmVudEVtaXR0ZXIgZXh0ZW5zaW9uLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJhc3l1bVwiOiBcImFzeXVtXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGVwaGVyXCI6IFwiZGVwaGVyXCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcblx0XHRcdFwiRXZlbnRFbWl0dGVyXCI6IFwiZXZlbnRzXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImhlcmVkaXRvXCI6IFwiaGVyZWRpdG9cIixcblx0XHRcdFwiaWRudGZ5XCI6IFwiaWRudGZ5XCIsXG5cdFx0XHRcImlkbnR0eVwiOiBcImlkbnR0eVwiLFxuXHRcdFx0XCJmZXJnZVwiOiBcImZlcmdlXCIsXG5cdFx0XHRcImluZnJheVwiOiBcImluZnJheVwiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJrdXJzZVwiOiBcImt1cnNlXCIsXG5cdFx0XHRcImxldmVsZFwiOiBcImxldmVsZFwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ2YWx1XCI6IFwidmFsdVwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBhc3l1bSA9IHJlcXVpcmUoIFwiYXN5dW1cIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCJkZXBoZXJcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZWVuID0gcmVxdWlyZSggXCJlZW5cIiApO1xuY29uc3QgZXFlID0gcmVxdWlyZSggXCJlcWVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBpZG50ZnkgPSByZXF1aXJlKCBcImlkbnRmeVwiICk7XG5jb25zdCBpZG50dHkgPSByZXF1aXJlKCBcImlkbnR0eVwiICk7XG5jb25zdCBmZXJnZSA9IHJlcXVpcmUoIFwiZmVyZ2VcIiApO1xuY29uc3QgaW5mcmF5ID0gcmVxdWlyZSggXCJpbmZyYXlcIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBrdXJzZSA9IHJlcXVpcmUoIFwia3Vyc2VcIiApO1xuY29uc3QgbGV2ZWxkID0gcmVxdWlyZSggXCJsZXZlbGRcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCBweWNrID0gcmVxdWlyZSggXCJweWNrXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdmFsdSA9IHJlcXVpcmUoIFwidmFsdVwiICk7XG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBsaXN0ZW5lciA9IHJlcXVpcmUoIFwiLi9saXN0ZW5lci5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBIQU5ETEVSID0gU3ltYm9sKCBcImhhbmRsZXJcIiApO1xuY29uc3QgTElNSVQgPSBTeW1ib2woIFwibGltaXRcIiApO1xuY29uc3QgTElOSyA9IFN5bWJvbCggXCJsaW5rXCIgKTtcbmNvbnN0IFRJTUVPVVQgPSBTeW1ib2woIFwidGltZW91dFwiICk7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDA7XG5jb25zdCBERUZBVUxUX0xJTUlUID0gMTAwMDtcblxuY29uc3QgZWRvID0gZnVuY3Rpb24gZWRvKCBwYXJhbWV0ZXIgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IEV2ZW50ID0gZGlhdG9tKCBcIkV2ZW50XCIgKTtcblxuXHRFdmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0dGhpcy5kZWxheSggREVGQVVMVF9USU1FT1VUICk7XG5cdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0aGFyZGVuKCBIQU5ETEVSLCB7IH0sIHRoaXMgKTtcblx0XHRoYXJkZW4oIExJTkssIFsgXSwgdGhpcyApO1xuXG5cdFx0a3Vyc2UoIHRoaXMgKTtcblxuXHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggdGhpcyApLnRvU3RyaW5nKCApO1xuXHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9Om9uLWxpc3RlbmVyLWFkZGVkYCwgZnVuY3Rpb24gaGFuZGxlKCApeyB9ICk7XG5cdFx0dGhpcy5vbiggYCR7IGlkZW50aXR5IH06b25jZS1saXN0ZW5lci1hZGRlZGAsIGZ1bmN0aW9uIGhhbmRsZSggKXsgfSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oIGV2ZW50LCBoYW5kbGVyLCBvcHRpb24gKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwib3B0aW9uXCI6IFwib2JqZWN0XCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IGxldmVsZCggYXJndW1lbnRzICk7XG5cblx0XHRldmVudCA9IHB5Y2soIHBhcmFtZXRlciwgU1RSSU5HICk7XG5cblx0XHRoYW5kbGVyID0gcHljayggcGFyYW1ldGVyLCBGVU5DVElPTiApO1xuXG5cdFx0Ly86IEBub3RlOiBQcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgaGFuZGxlci4gVGhpcyB3aWxsIGJlIHVzZWQgdG8gZW1pdCBub3RpZmljYXRpb24uXG5cdFx0bGV0IF9oYW5kbGVyID0gaGFuZGxlcjtcblxuXHRcdG9wdGlvbiA9IGRlcGhlciggcGFyYW1ldGVyLCBPQkpFQ1QsIHsgfSApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0Q2hlY2tzIGlmIHRoZSBldmVudC1oYW5kbGVyIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5cblxuXHRcdFx0XHROb3RlIHRoYXQgdGhpcyB3aWxsIGNoZWNrIHRoZSByZWFsIGhhbmRsZXIgZnVuY3Rpb24gbm90IHRoZSBIYW5kbGVyIGluc3RhbmNlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggdGhpcy5yZWdpc3RlcmVkKCBldmVudCwgaGFuZGxlciApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRoYW5kbGVyID0gaGFuZGxlci5yZWR1Y2UoICggbGlzdGVuZXIsIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGlzdGVuZXIucHVzaCggaGFuZGxlciApO1xuXHRcdH0sIHdpY2hldnIoIHRoaXMuaG9sZGVyKCBldmVudCApLCBsaXN0ZW5lciggKSApICkuY29udGV4dCggc2VsZiApLnJlZ2lzdGVyKCB0aGlzICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdGxldCBlbWl0dGVyID0gZmVyZ2UoIHRoaXMsIFwiRXZlbnRFbWl0dGVyXCIgKTtcblxuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IGVtaXR0ZXIub24oIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuaGFuZGxlKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGlzIGlzIG91ciBvd24gbm90aWZpY2F0aW9uIHRoYXQgdGhlIGV2ZW50IGhhcyBiZWVuIGFkZGVkLlxuXG5cdFx0XHRcdE5vdGUgdGhhdCB3ZSB3aWxsIG5vdCBub3RpZnkgaWYgdGhlIGV2ZW50IGlzIGFuIGlkZW50aXR5IGV2ZW50IG9yXG5cdFx0XHRcdFx0XCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvblwiIGlzIGVuYWJsZWQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggdGhpcyApLnRvU3RyaW5nKCApO1xuXHRcdGlmKCAhKCBuZXcgUmVnRXhwKCBpZGVudGl0eSApICkudGVzdCggZXZlbnQgKSAmJiAhb3B0aW9uLmRpc2FibGVPbkxpc3RlbmVyTm90aWZpY2F0aW9uICl7XG5cdFx0XHR0aGlzLmVtaXQoIGAkeyBpZGVudGl0eSB9Om9uLWxpc3RlbmVyLWFkZGVkYCwgZXZlbnQsIF9oYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCBldmVudCwgaGFuZGxlciwgb3B0aW9uICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9wdGlvblwiOiBcIm9iamVjdFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKTtcblxuXHRcdC8vOiBAbm90ZTogUHJlc2VydmUgdGhlIG9yaWdpbmFsIGhhbmRsZXIuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIGVtaXQgbm90aWZpY2F0aW9uLlxuXHRcdGxldCBfaGFuZGxlciA9IGhhbmRsZXI7XG5cblx0XHRvcHRpb24gPSBkZXBoZXIoIHBhcmFtZXRlciwgT0JKRUNULCB7IH0gKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdENoZWNrcyBpZiB0aGUgZXZlbnQtaGFuZGxlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXG5cblx0XHRcdFx0Tm90ZSB0aGF0IHRoaXMgd2lsbCBjaGVjayB0aGUgcmVhbCBoYW5kbGVyIGZ1bmN0aW9uIG5vdCB0aGUgSGFuZGxlciBpbnN0YW5jZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRoaXMucmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aGFuZGxlciA9IGhhbmRsZXIubWFwKCAoIGhhbmRsZXIgKSA9PiBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICkgKVxuXHRcdFx0LnJlZHVjZSggKCBsaXN0ZW5lciwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIGxpc3RlbmVyLnB1c2goIGhhbmRsZXIgKTtcblx0XHRcdH0sIHdpY2hldnIoIHRoaXMuaG9sZGVyKCBldmVudCApLCBsaXN0ZW5lciggKSApIClcblx0XHRcdC5jb250ZXh0KCBzZWxmIClcblx0XHRcdC5yZWdpc3RlciggdGhpcyApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uY2UoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuaGFuZGxlKCBldmVudCwgaGFuZGxlciwgdHJ1ZSApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGlzIGlzIG91ciBvd24gbm90aWZpY2F0aW9uIHRoYXQgdGhlIGV2ZW50IGhhcyBiZWVuIGFkZGVkIG9uY2UuXG5cblx0XHRcdFx0Tm90ZSB0aGF0IHdlIHdpbGwgbm90IG5vdGlmeSBpZiB0aGUgZXZlbnQgaXMgYW4gaWRlbnRpdHkgZXZlbnQgb3Jcblx0XHRcdFx0XHRcImRpc2FibGVPbmNlTGlzdGVuZXJOb3RpZmljYXRpb25cIiBpcyBlbmFibGVkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRsZXQgaWRlbnRpdHkgPSBpZG50dHkoIHRoaXMgKS50b1N0cmluZyggKTtcblx0XHRpZiggISggbmV3IFJlZ0V4cCggaWRlbnRpdHkgKSApLnRlc3QoIGV2ZW50ICkgJiYgIW9wdGlvbi5kaXNhYmxlT25jZUxpc3RlbmVyTm90aWZpY2F0aW9uICl7XG5cdFx0XHR0aGlzLmVtaXQoIGAkeyBpZGVudGl0eSB9Om9uY2UtbGlzdGVuZXItYWRkZWRgLCBldmVudCwgX2hhbmRsZXIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdGlmKCB0aGlzWyBMSU1JVCBdIDw9IDAgKXtcblx0XHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuY291bnQoIGV2ZW50ICkgPD0gMCApe1xuXHRcdFx0bGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoICkgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0XHR9LCB0aGlzWyBUSU1FT1VUIF0gKTtcblxuXHRcdFx0dGhpc1sgTElNSVQgXS0tO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdFx0ZW1pdHRlci5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0dGhpcy5ub3RpZnkuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoIHRpbWVvdXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpbWVvdXQ6cmVxdWlyZWRcIjogXCJudW1iZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIHRpbWVvdXQgKSB8fCAhcHJvdHlwZSggdGltZW91dCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHRpbWVvdXRcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRJTUVPVVQgXSA9IHRpbWVvdXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUucmVzdHJpY3QgPSBmdW5jdGlvbiByZXN0cmljdCggbGltaXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImxpbWl0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBsaW1pdCApIHx8ICFwcm90eXBlKCBsaW1pdCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpbWl0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBMSU1JVCBdID0gbGltaXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuYnJvYWRjYXN0ID0gZnVuY3Rpb24gYnJvYWRjYXN0KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRldmVudCA9IHBsb3VnaCggWyBldmVudCBdICk7XG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiB0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KCBldmVudCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJDb3VudCggZXZlbnQgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0aWYoIGtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSEFORExFUiBdWyBldmVudCBdLmNvdW50KCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMDtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHRoaXMubGlzdCggKS5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gYXN5dW0oIHRoaXMuaG9sZGVyKCBldmVudCApLCBmdW5jdGlvbiBmbHVzaCggKXsgfSApLmZsdXNoKCApICk7XG5cblx0XHRcdHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHR2YWx1KCB0aGlzWyBIQU5ETEVSIF0gKS5mb3JFYWNoKCAoIGhhbmRsZXIgKSA9PiBoYW5kbGVyLmZsdXNoKCApICk7XG5cblx0XHRcdE9iamVjdC5rZXlzKCB0aGlzWyBIQU5ETEVSIF0gKS5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gKCBkZWxldGUgdGhpc1sgSEFORExFUiBdWyBldmVudCBdICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHdoaWxlKCB0aGlzWyBMSU5LIF0ubGVuZ3RoICkgdGhpc1sgTElOSyBdLnBvcCggKS5mbHVzaCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEJpLWRpcmVjdGlvbmFsIG1lcmdpbmcgb2YgZXZlbnQgaGFuZGxlcnMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IG1lcmdlIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyYW5zZmVyKCBldmVudCApO1xuXHRcdGV2ZW50LnRyYW5zZmVyKCB0aGlzICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUcmFuc2ZlciBldmVudCBoYW5kbGVycy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS50cmFuc2ZlciA9IGZ1bmN0aW9uIHRyYW5zZmVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgdHJhbnNmZXIgZnJvbSBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0aW5mcmF5KCBldmVudC5saXN0KCApLCB0aGlzLmxpc3QoICkgKVxuXHRcdFx0LmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgZnVuY3Rpb24gZW1pdCggKXtcblx0XHRcdFx0XHRldmVudC5lbWl0LmFwcGx5KCBldmVudCwgWyBuYW1lIF0uY29uY2F0KCByYXplKCBhcmd1bWVudHMgKSApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRsZXQgaWRlbnRpdHkgPSBpZG50dHkoIHRoaXMgKS50b1N0cmluZyggKTtcblx0XHR0aGlzLm9uKCBgJHsgaWRlbnRpdHkgfTpvbi1saXN0ZW5lci1hZGRlZGAsIGZ1bmN0aW9uIG9uTGlzdGVuZXJBZGRlZCggbmFtZSApe1xuXHRcdFx0ZXZlbnQub24oIG5hbWUsIGZ1bmN0aW9uIGVtaXQoICl7XG5cdFx0XHRcdHNlbGYuZW1pdC5hcHBseSggc2VsZiwgWyBuYW1lIF0uY29uY2F0KCByYXplKCBhcmd1bWVudHMgKSApICk7XG5cdFx0XHR9LCB7IFwiZGlzYWJsZU9uTGlzdGVuZXJOb3RpZmljYXRpb25cIjogdHJ1ZSB9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5vbiggYCR7IGlkZW50aXR5IH06b25jZS1saXN0ZW5lci1hZGRlZGAsIGZ1bmN0aW9uIG9uY2VMaXN0ZW5lckFkZGVkKCBuYW1lICl7XG5cdFx0XHRldmVudC5vbmNlKCBuYW1lLCBmdW5jdGlvbiBlbWl0KCApe1xuXHRcdFx0XHRzZWxmLmVtaXQuYXBwbHkoIHNlbGYsIFsgbmFtZSBdLmNvbmNhdCggcmF6ZSggYXJndW1lbnRzICkgKSApO1xuXHRcdFx0fSwgeyBcImRpc2FibGVPbmNlTGlzdGVuZXJOb3RpZmljYXRpb25cIjogdHJ1ZSB9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5saW5rKCBldmVudCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiBsaW5rKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgbGluayBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0aWYoICFlZW4oIHRoaXNbIExJTksgXSwgZXZlbnQsICggbGluaywgZXZlbnQgKSA9PiBpZG50ZnkoIGxpbmssIGV2ZW50ICkgKSApe1xuXHRcdFx0dGhpc1sgTElOSyBdLnB1c2goIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0TGlzdCByZWdpc3RlcmVkIGV2ZW50IG5hbWVzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbiBsaXN0KCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIHRoaXMuZXZlbnROYW1lcyggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKCB0aGlzWyBIQU5ETEVSIF0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRMaXN0IHRoZSBoYW5kbGVycyBvZiB0aGUgZXZlbnQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhcHJvdHlwZSggZXZlbnQsIFNUUklORyApICl7XG5cdFx0XHRyZXR1cm4gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJzKCBldmVudCApLnJlZHVjZSggKCBsaXN0LCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0cmV0dXJuIGxpc3QuY29uY2F0KCBoYW5kbGVyLmxpc3QoICkgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRsaXN0LnB1c2goIGhhbmRsZXIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBbIF0gKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0aWYoICFrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cmV0dXJuIFsgXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5saXN0KCApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybiB0aGUgSGFuZGxlciB0aGF0IGhvbGRzIHRoZSBoYW5kbGVyIHByb2NlZHVyZXMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUuaG9sZGVyID0gZnVuY3Rpb24gaG9sZGVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiW3N0cmluZ10sXG5cdFx0XHRcdFx0XHRcIi4uLlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwbG91Z2goIGFyZ3VtZW50cyApLCBTVFJJTkcgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGV2ZW50LnJlZHVjZSggKCBob2xkZXIsIGV2ZW50ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5saXN0ZW5lcnMoIGV2ZW50ICkucmVkdWNlKCAoIGhvbGRlciwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gaG9sZGVyO1xuXHRcdFx0XHR9LCB1bmRlZmluZWQgKTtcblx0XHRcdH0sIHVuZGVmaW5lZCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRyZXR1cm4gZXZlbnQucmVkdWNlKCAoIGhvbGRlciwgZXZlbnQgKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF07XG5cdFx0XHR9LCB1bmRlZmluZWQgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRDaGVja3MgaWYgdGhlIGV2ZW50LWhhbmRsZXIgaXMgcmVnaXN0ZXJlZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAdG9kbzpcblx0XHRcdFRoaXMgbmVlZHMgb3B0aW1pemF0aW9uLlxuXHRcdEBlbmQtdG9kb1xuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUucmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFwiW2Z1bmN0aW9uXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBsb3VnaCggYXJndW1lbnRzICksIEZVTkNUSU9OICk7XG5cblx0XHRyZXR1cm4gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgU1RSSU5HICkuc29tZSggKCBldmVudCApID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmhhbmRsZXIoIGV2ZW50ICkuc29tZSggKCBsaXN0ZW5lciApID0+IHtcblx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuc29tZSggKCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBpZG50ZnkoIGxpc3RlbmVyLCBoYW5kbGVyICkgfHwgZXFlKCBsaXN0ZW5lciwgaGFuZGxlciApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5oYXNFdmVudCA9IGZ1bmN0aW9uIGhhc0V2ZW50KCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiBlZW4oIHRoaXMubGlzdCggKSwgZXZlbnQgKTtcblx0fTtcblxuXHQvLzogQGNsaWVudDpcblx0aWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0RXZlbnQucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLmFwcGx5KCBzZWxmLCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdEV2ZW50LnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUoIGV2ZW50LCBoYW5kbGVyLCBvbmNlICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJvbmNlXCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFwcm90eXBlKCBldmVudCwgU1RSSU5HICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBoYW5kbGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHRoZSBldmVudCBpcyBub3QgeWV0IHJlZ2lzdGVyZWQsIGNyZWF0ZSBhIGhhbmRsZXIgY29sbGVjdGlvbi5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoICFrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0aWYoICFjbGF6b2YoIGhhbmRsZXIsIFwiSGFuZGxlclwiICkgKXtcblx0XHRcdFx0XHRpZiggb25jZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0aGFuZGxlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoYW5kbGVyID0gbGlzdGVuZXIoICkucHVzaCggaGFuZGxlciApLmNvbnRleHQoIHNlbGYgKS5yZWdpc3RlciggdGhpcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdID0gaGFuZGxlcjtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8qO1xuXHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIHJlZ2lzdGVyZWQsIG1ha2Ugc3VyZSB3ZSBhcmUgcHVzaGluZyB0aGUgaGFuZGxlciBmdW5jdGlvblxuXHRcdFx0XHRcdFx0XHRub3QgdGhlIGhhbmRsZXIgY29sbGVjdGlvbiwgaWYgd2UgZW5jb3VudGVyIGEgaGFuZGxlciBjb2xsZWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRtZXJnZSBpdC5cblx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0Ki9cblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmxvY2soICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLm1lcmdlKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdGhhbmRsZXIgPSBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLnB1c2goIGhhbmRsZXIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXHR9XG5cdC8vOiBAZW5kLWNsaWVudFxuXG5cdFxuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiBFdmVudDtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gRXZlbnQuYXBwbHkoIG51bGwsIHBhcmFtZXRlciApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVkbztcbiJdfQ==
//# sourceMappingURL=edo.support.js.map
