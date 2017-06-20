"use strict";var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
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
                                                                                                                                                                                                                                                                                                                    			"contributors": [
                                                                                                                                                                                                                                                                                                                    				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                                                                                                                    				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                                                                                                                    			],
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
                                                                                                                                                                                                                                                                                                                    */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImFzeXVtIiwiY2FsbGVkIiwiY2xhem9mIiwiZGVwaGVyIiwiZGlhdG9tIiwiZWVuIiwiZXFlIiwiZmFsenkiLCJoYXJkZW4iLCJoZXJlZGl0byIsImlkbnRmeSIsImlkbnR0eSIsImZlcmdlIiwiaW5mcmF5Iiwia2VpbiIsImt1cnNlIiwibGV2ZWxkIiwicGxvdWdoIiwicHJvdHlwZSIsInB5Y2siLCJyYXplIiwic2hmdCIsInN5bWJpb3RlIiwidmFsdSIsIndpY2hldnIiLCJ6ZWxmIiwibGlzdGVuZXIiLCJFVkVOVCIsIkhBTkRMRVIiLCJMSU1JVCIsIkxJTksiLCJUSU1FT1VUIiwiREVGQVVMVF9USU1FT1VUIiwiREVGQVVMVF9MSU1JVCIsImVkbyIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsInNlbGYiLCJFdmVudCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJkZWxheSIsInJlc3RyaWN0IiwiaWRlbnRpdHkiLCJ0b1N0cmluZyIsIm9uIiwiaGFuZGxlIiwiZXZlbnQiLCJoYW5kbGVyIiwib3B0aW9uIiwiU1RSSU5HIiwiRlVOQ1RJT04iLCJfaGFuZGxlciIsIk9CSkVDVCIsInJlZ2lzdGVyZWQiLCJyZWR1Y2UiLCJwdXNoIiwiaG9sZGVyIiwiY29udGV4dCIsInJlZ2lzdGVyIiwic2VydmVyIiwiZW1pdHRlciIsImZvckVhY2giLCJjbGllbnQiLCJFcnJvciIsIlJlZ0V4cCIsInRlc3QiLCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvbiIsImVtaXQiLCJvbmNlIiwibWFwIiwiYmluZCIsImRpc2FibGVPbmNlTGlzdGVuZXJOb3RpZmljYXRpb24iLCJjb3VudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJjb25jYXQiLCJjbGVhclRpbWVvdXQiLCJub3RpZnkiLCJOVU1CRVIiLCJsaW1pdCIsImJyb2FkY2FzdCIsImxpc3RlbmVyQ291bnQiLCJmbHVzaCIsImxpc3QiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJsZW5ndGgiLCJwb3AiLCJtZXJnZSIsInRyYW5zZmVyIiwibmFtZSIsIm9uTGlzdGVuZXJBZGRlZCIsIm9uY2VMaXN0ZW5lckFkZGVkIiwibGluayIsImV2ZW50TmFtZXMiLCJsaXN0ZW5lcnMiLCJ1bmRlZmluZWQiLCJzb21lIiwiaGFzRXZlbnQiLCJsb2NrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Im9UQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1GQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssU0FBU0wsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTSxTQUFTTixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1PLE1BQU1QLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTVEsTUFBTVIsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNUyxRQUFRVCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1VLFNBQVNWLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVcsV0FBV1gsUUFBUyxVQUFULENBQWpCO0FBQ0EsSUFBTVksU0FBU1osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNYSxTQUFTYixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1jLFFBQVFkLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTWUsU0FBU2YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNZ0IsT0FBT2hCLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTWlCLFFBQVFqQixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1r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LEVBQXFCVyxPQUFyQixDQUFWO0FBQ0E7O0FBRURBLGVBQVV0QixXQUFZOEIsSUFBWixDQUFrQlIsT0FBbEIsRUFBNEJVLE9BQTVCLENBQXFDckIsSUFBckMsRUFBNENzQixRQUE1QyxDQUFzRCxJQUF0RCxDQUFWO0FBQ0E7O0FBRUQsU0FBTS9CLE9BQU4sRUFBaUJtQixLQUFqQixJQUEyQkMsT0FBM0I7O0FBRUEsSUFYRCxNQVdLO0FBQ0o7Ozs7Ozs7QUFPQSxRQUFJOUMsT0FBUThDLE9BQVIsRUFBaUIsU0FBakIsQ0FBSixFQUFrQztBQUNqQyxTQUFJcUIsU0FBUyxJQUFiLEVBQW1CO0FBQ2xCckIsY0FBUW9ELElBQVI7QUFDQTs7QUFFRCxVQUFNeEUsT0FBTixFQUFpQm1CLEtBQWpCLEVBQXlCMEMsS0FBekIsQ0FBZ0N6QyxPQUFoQzs7QUFFQSxLQVBELE1BT0s7QUFDSixTQUFJcUIsU0FBUyxJQUFiLEVBQW1CO0FBQ2xCckIsZ0JBQVUvQyxPQUFPc0UsSUFBUCxDQUFhbEMsSUFBYixFQUFxQlcsT0FBckIsQ0FBVjtBQUNBOztBQUVELFVBQU1wQixPQUFOLEVBQWlCbUIsS0FBakIsRUFBeUJTLElBQXpCLENBQStCUixPQUEvQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTyxJQUFQO0FBQ0EsR0E1REQ7QUE2REE7QUFDRDs7OztBQUlBLEtBQUluRCxLQUFNc0MsU0FBTixDQUFKLEVBQXVCO0FBQ3RCLFNBQU9HLEtBQVA7O0FBRUEsRUFIRCxNQUdLO0FBQ0osU0FBT0EsTUFBTXNDLEtBQU4sQ0FBYSxJQUFiLEVBQW1CekMsU0FBbkIsQ0FBUDtBQUNBO0FBQ0QsQ0Fsb0JEOztBQW9vQkFrRSxPQUFPQyxPQUFQLEdBQWlCcEUsR0FBakIiLCJmaWxlIjoiZWRvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWRvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlZG8vZWRvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJlZG8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZWRvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lZG8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJlZG8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFdmVudEVtaXR0ZXIgZXh0ZW5zaW9uLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJhc3l1bVwiOiBcImFzeXVtXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGVwaGVyXCI6IFwiZGVwaGVyXCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcblx0XHRcdFwiRXZlbnRFbWl0dGVyXCI6IFwiZXZlbnRzXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImhlcmVkaXRvXCI6IFwiaGVyZWRpdG9cIixcblx0XHRcdFwiaWRudGZ5XCI6IFwiaWRudGZ5XCIsXG5cdFx0XHRcImlkbnR0eVwiOiBcImlkbnR0eVwiLFxuXHRcdFx0XCJmZXJnZVwiOiBcImZlcmdlXCIsXG5cdFx0XHRcImluZnJheVwiOiBcImluZnJheVwiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJrdXJzZVwiOiBcImt1cnNlXCIsXG5cdFx0XHRcImxldmVsZFwiOiBcImxldmVsZFwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwic2hmdFwiOiBcInNoZnRcIixcblx0XHRcdFwic3ltYmlvdGVcIjogXCJzeW1iaW90ZVwiLFxuXHRcdFx0XCJ2YWx1XCI6IFwidmFsdVwiLFxuXHRcdFx0XCJ3aWNoZXZyXCI6IFwid2ljaGV2clwiLFxuXHRcdFx0XCJ6ZWxmXCI6IFwiemVsZlwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFyaWQgPSByZXF1aXJlKCBcImFyaWRcIiApO1xuY29uc3QgYXNlYSA9IHJlcXVpcmUoIFwiYXNlYVwiICk7XG5jb25zdCBhc3l1bSA9IHJlcXVpcmUoIFwiYXN5dW1cIiApO1xuY29uc3QgY2FsbGVkID0gcmVxdWlyZSggXCJjYWxsZWRcIiApO1xuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCJkZXBoZXJcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZWVuID0gcmVxdWlyZSggXCJlZW5cIiApO1xuY29uc3QgZXFlID0gcmVxdWlyZSggXCJlcWVcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGhlcmVkaXRvID0gcmVxdWlyZSggXCJoZXJlZGl0b1wiICk7XG5jb25zdCBpZG50ZnkgPSByZXF1aXJlKCBcImlkbnRmeVwiICk7XG5jb25zdCBpZG50dHkgPSByZXF1aXJlKCBcImlkbnR0eVwiICk7XG5jb25zdCBmZXJnZSA9IHJlcXVpcmUoIFwiZmVyZ2VcIiApO1xuY29uc3QgaW5mcmF5ID0gcmVxdWlyZSggXCJpbmZyYXlcIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBrdXJzZSA9IHJlcXVpcmUoIFwia3Vyc2VcIiApO1xuY29uc3QgbGV2ZWxkID0gcmVxdWlyZSggXCJsZXZlbGRcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCBweWNrID0gcmVxdWlyZSggXCJweWNrXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdmFsdSA9IHJlcXVpcmUoIFwidmFsdVwiICk7XG5jb25zdCB3aWNoZXZyID0gcmVxdWlyZSggXCJ3aWNoZXZyXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBsaXN0ZW5lciA9IHJlcXVpcmUoIFwiLi9saXN0ZW5lci5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBIQU5ETEVSID0gU3ltYm9sKCBcImhhbmRsZXJcIiApO1xuY29uc3QgTElNSVQgPSBTeW1ib2woIFwibGltaXRcIiApO1xuY29uc3QgTElOSyA9IFN5bWJvbCggXCJsaW5rXCIgKTtcbmNvbnN0IFRJTUVPVVQgPSBTeW1ib2woIFwidGltZW91dFwiICk7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDA7XG5jb25zdCBERUZBVUxUX0xJTUlUID0gMTAwMDtcblxuY29uc3QgZWRvID0gZnVuY3Rpb24gZWRvKCBwYXJhbWV0ZXIgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IEV2ZW50ID0gZGlhdG9tKCBcIkV2ZW50XCIgKTtcblxuXHRFdmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0dGhpcy5kZWxheSggREVGQVVMVF9USU1FT1VUICk7XG5cdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0aGFyZGVuKCBIQU5ETEVSLCB7IH0sIHRoaXMgKTtcblx0XHRoYXJkZW4oIExJTkssIFsgXSwgdGhpcyApO1xuXG5cdFx0a3Vyc2UoIHRoaXMgKTtcblxuXHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggdGhpcyApLnRvU3RyaW5nKCApO1xuXHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9Om9uLWxpc3RlbmVyLWFkZGVkYCwgZnVuY3Rpb24gaGFuZGxlKCApeyB9ICk7XG5cdFx0dGhpcy5vbiggYCR7IGlkZW50aXR5IH06b25jZS1saXN0ZW5lci1hZGRlZGAsIGZ1bmN0aW9uIGhhbmRsZSggKXsgfSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oIGV2ZW50LCBoYW5kbGVyLCBvcHRpb24gKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwib3B0aW9uXCI6IFwib2JqZWN0XCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IGxldmVsZCggYXJndW1lbnRzICk7XG5cblx0XHRldmVudCA9IHB5Y2soIHBhcmFtZXRlciwgU1RSSU5HICk7XG5cblx0XHRoYW5kbGVyID0gcHljayggcGFyYW1ldGVyLCBGVU5DVElPTiApO1xuXG5cdFx0Ly86IEBub3RlOiBQcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgaGFuZGxlci4gVGhpcyB3aWxsIGJlIHVzZWQgdG8gZW1pdCBub3RpZmljYXRpb24uXG5cdFx0bGV0IF9oYW5kbGVyID0gaGFuZGxlcjtcblxuXHRcdG9wdGlvbiA9IGRlcGhlciggcGFyYW1ldGVyLCBPQkpFQ1QsIHsgfSApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0Q2hlY2tzIGlmIHRoZSBldmVudC1oYW5kbGVyIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5cblxuXHRcdFx0XHROb3RlIHRoYXQgdGhpcyB3aWxsIGNoZWNrIHRoZSByZWFsIGhhbmRsZXIgZnVuY3Rpb24gbm90IHRoZSBIYW5kbGVyIGluc3RhbmNlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggdGhpcy5yZWdpc3RlcmVkKCBldmVudCwgaGFuZGxlciApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRoYW5kbGVyID0gaGFuZGxlci5yZWR1Y2UoICggbGlzdGVuZXIsIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRyZXR1cm4gbGlzdGVuZXIucHVzaCggaGFuZGxlciApO1xuXHRcdH0sIHdpY2hldnIoIHRoaXMuaG9sZGVyKCBldmVudCApLCBsaXN0ZW5lciggKSApICkuY29udGV4dCggc2VsZiApLnJlZ2lzdGVyKCB0aGlzICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdGxldCBlbWl0dGVyID0gZmVyZ2UoIHRoaXMsIFwiRXZlbnRFbWl0dGVyXCIgKTtcblxuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IGVtaXR0ZXIub24oIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuaGFuZGxlKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGlzIGlzIG91ciBvd24gbm90aWZpY2F0aW9uIHRoYXQgdGhlIGV2ZW50IGhhcyBiZWVuIGFkZGVkLlxuXG5cdFx0XHRcdE5vdGUgdGhhdCB3ZSB3aWxsIG5vdCBub3RpZnkgaWYgdGhlIGV2ZW50IGlzIGFuIGlkZW50aXR5IGV2ZW50IG9yXG5cdFx0XHRcdFx0XCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvblwiIGlzIGVuYWJsZWQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggdGhpcyApLnRvU3RyaW5nKCApO1xuXHRcdGlmKCAhKCBuZXcgUmVnRXhwKCBpZGVudGl0eSApICkudGVzdCggZXZlbnQgKSAmJiAhb3B0aW9uLmRpc2FibGVPbkxpc3RlbmVyTm90aWZpY2F0aW9uICl7XG5cdFx0XHR0aGlzLmVtaXQoIGAkeyBpZGVudGl0eSB9Om9uLWxpc3RlbmVyLWFkZGVkYCwgZXZlbnQsIF9oYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCBldmVudCwgaGFuZGxlciwgb3B0aW9uICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9wdGlvblwiOiBcIm9iamVjdFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKTtcblxuXHRcdC8vOiBAbm90ZTogUHJlc2VydmUgdGhlIG9yaWdpbmFsIGhhbmRsZXIuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIGVtaXQgbm90aWZpY2F0aW9uLlxuXHRcdGxldCBfaGFuZGxlciA9IGhhbmRsZXI7XG5cblx0XHRvcHRpb24gPSBkZXBoZXIoIHBhcmFtZXRlciwgT0JKRUNULCB7IH0gKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdENoZWNrcyBpZiB0aGUgZXZlbnQtaGFuZGxlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXG5cblx0XHRcdFx0Tm90ZSB0aGF0IHRoaXMgd2lsbCBjaGVjayB0aGUgcmVhbCBoYW5kbGVyIGZ1bmN0aW9uIG5vdCB0aGUgSGFuZGxlciBpbnN0YW5jZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRoaXMucmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aGFuZGxlciA9IGhhbmRsZXIubWFwKCAoIGhhbmRsZXIgKSA9PiBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICkgKVxuXHRcdFx0LnJlZHVjZSggKCBsaXN0ZW5lciwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0cmV0dXJuIGxpc3RlbmVyLnB1c2goIGhhbmRsZXIgKTtcblx0XHRcdH0sIHdpY2hldnIoIHRoaXMuaG9sZGVyKCBldmVudCApLCBsaXN0ZW5lciggKSApIClcblx0XHRcdC5jb250ZXh0KCBzZWxmIClcblx0XHRcdC5yZWdpc3RlciggdGhpcyApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uY2UoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuaGFuZGxlKCBldmVudCwgaGFuZGxlciwgdHJ1ZSApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGlzIGlzIG91ciBvd24gbm90aWZpY2F0aW9uIHRoYXQgdGhlIGV2ZW50IGhhcyBiZWVuIGFkZGVkIG9uY2UuXG5cblx0XHRcdFx0Tm90ZSB0aGF0IHdlIHdpbGwgbm90IG5vdGlmeSBpZiB0aGUgZXZlbnQgaXMgYW4gaWRlbnRpdHkgZXZlbnQgb3Jcblx0XHRcdFx0XHRcImRpc2FibGVPbmNlTGlzdGVuZXJOb3RpZmljYXRpb25cIiBpcyBlbmFibGVkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRsZXQgaWRlbnRpdHkgPSBpZG50dHkoIHRoaXMgKS50b1N0cmluZyggKTtcblx0XHRpZiggISggbmV3IFJlZ0V4cCggaWRlbnRpdHkgKSApLnRlc3QoIGV2ZW50ICkgJiYgIW9wdGlvbi5kaXNhYmxlT25jZUxpc3RlbmVyTm90aWZpY2F0aW9uICl7XG5cdFx0XHR0aGlzLmVtaXQoIGAkeyBpZGVudGl0eSB9Om9uY2UtbGlzdGVuZXItYWRkZWRgLCBldmVudCwgX2hhbmRsZXIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdGlmKCB0aGlzWyBMSU1JVCBdIDw9IDAgKXtcblx0XHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuY291bnQoIGV2ZW50ICkgPD0gMCApe1xuXHRcdFx0bGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoICkgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0XHR9LCB0aGlzWyBUSU1FT1VUIF0gKTtcblxuXHRcdFx0dGhpc1sgTElNSVQgXS0tO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdFx0ZW1pdHRlci5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0dGhpcy5ub3RpZnkuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoIHRpbWVvdXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpbWVvdXQ6cmVxdWlyZWRcIjogXCJudW1iZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIHRpbWVvdXQgKSB8fCAhcHJvdHlwZSggdGltZW91dCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHRpbWVvdXRcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRJTUVPVVQgXSA9IHRpbWVvdXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUucmVzdHJpY3QgPSBmdW5jdGlvbiByZXN0cmljdCggbGltaXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImxpbWl0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBsaW1pdCApIHx8ICFwcm90eXBlKCBsaW1pdCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpbWl0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBMSU1JVCBdID0gbGltaXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuYnJvYWRjYXN0ID0gZnVuY3Rpb24gYnJvYWRjYXN0KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRldmVudCA9IHBsb3VnaCggWyBldmVudCBdICk7XG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiB0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KCBldmVudCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJDb3VudCggZXZlbnQgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0aWYoIGtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSEFORExFUiBdWyBldmVudCBdLmNvdW50KCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMDtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHRoaXMubGlzdCggKS5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gYXN5dW0oIHRoaXMuaG9sZGVyKCBldmVudCApLCBmdW5jdGlvbiBmbHVzaCggKXsgfSApLmZsdXNoKCApICk7XG5cblx0XHRcdHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHR2YWx1KCB0aGlzWyBIQU5ETEVSIF0gKS5mb3JFYWNoKCAoIGhhbmRsZXIgKSA9PiBoYW5kbGVyLmZsdXNoKCApICk7XG5cblx0XHRcdE9iamVjdC5rZXlzKCB0aGlzWyBIQU5ETEVSIF0gKS5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gKCBkZWxldGUgdGhpc1sgSEFORExFUiBdWyBldmVudCBdICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHdoaWxlKCB0aGlzWyBMSU5LIF0ubGVuZ3RoICkgdGhpc1sgTElOSyBdLnBvcCggKS5mbHVzaCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEJpLWRpcmVjdGlvbmFsIG1lcmdpbmcgb2YgZXZlbnQgaGFuZGxlcnMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IG1lcmdlIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyYW5zZmVyKCBldmVudCApO1xuXHRcdGV2ZW50LnRyYW5zZmVyKCB0aGlzICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUcmFuc2ZlciBldmVudCBoYW5kbGVycy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS50cmFuc2ZlciA9IGZ1bmN0aW9uIHRyYW5zZmVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgdHJhbnNmZXIgZnJvbSBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0aW5mcmF5KCBldmVudC5saXN0KCApLCB0aGlzLmxpc3QoICkgKVxuXHRcdFx0LmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgZnVuY3Rpb24gZW1pdCggKXtcblx0XHRcdFx0XHRldmVudC5lbWl0LmFwcGx5KCBldmVudCwgWyBuYW1lIF0uY29uY2F0KCByYXplKCBhcmd1bWVudHMgKSApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRsZXQgaWRlbnRpdHkgPSBpZG50dHkoIHRoaXMgKS50b1N0cmluZyggKTtcblx0XHR0aGlzLm9uKCBgJHsgaWRlbnRpdHkgfTpvbi1saXN0ZW5lci1hZGRlZGAsIGZ1bmN0aW9uIG9uTGlzdGVuZXJBZGRlZCggbmFtZSApe1xuXHRcdFx0ZXZlbnQub24oIG5hbWUsIGZ1bmN0aW9uIGVtaXQoICl7XG5cdFx0XHRcdHNlbGYuZW1pdC5hcHBseSggc2VsZiwgWyBuYW1lIF0uY29uY2F0KCByYXplKCBhcmd1bWVudHMgKSApICk7XG5cdFx0XHR9LCB7IFwiZGlzYWJsZU9uTGlzdGVuZXJOb3RpZmljYXRpb25cIjogdHJ1ZSB9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5vbiggYCR7IGlkZW50aXR5IH06b25jZS1saXN0ZW5lci1hZGRlZGAsIGZ1bmN0aW9uIG9uY2VMaXN0ZW5lckFkZGVkKCBuYW1lICl7XG5cdFx0XHRldmVudC5vbmNlKCBuYW1lLCBmdW5jdGlvbiBlbWl0KCApe1xuXHRcdFx0XHRzZWxmLmVtaXQuYXBwbHkoIHNlbGYsIFsgbmFtZSBdLmNvbmNhdCggcmF6ZSggYXJndW1lbnRzICkgKSApO1xuXHRcdFx0fSwgeyBcImRpc2FibGVPbmNlTGlzdGVuZXJOb3RpZmljYXRpb25cIjogdHJ1ZSB9ICk7XG5cdFx0fSApO1xuXG5cdFx0dGhpcy5saW5rKCBldmVudCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmxpbmsgPSBmdW5jdGlvbiBsaW5rKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgbGluayBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0aWYoICFlZW4oIHRoaXNbIExJTksgXSwgZXZlbnQsICggbGluaywgZXZlbnQgKSA9PiBpZG50ZnkoIGxpbmssIGV2ZW50ICkgKSApe1xuXHRcdFx0dGhpc1sgTElOSyBdLnB1c2goIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0TGlzdCByZWdpc3RlcmVkIGV2ZW50IG5hbWVzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmxpc3QgPSBmdW5jdGlvbiBsaXN0KCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIHRoaXMuZXZlbnROYW1lcyggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKCB0aGlzWyBIQU5ETEVSIF0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRMaXN0IHRoZSBoYW5kbGVycyBvZiB0aGUgZXZlbnQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUuaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhcHJvdHlwZSggZXZlbnQsIFNUUklORyApICl7XG5cdFx0XHRyZXR1cm4gWyBdO1xuXHRcdH1cblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJzKCBldmVudCApLnJlZHVjZSggKCBsaXN0LCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0cmV0dXJuIGxpc3QuY29uY2F0KCBoYW5kbGVyLmxpc3QoICkgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRsaXN0LnB1c2goIGhhbmRsZXIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBbIF0gKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0aWYoICFrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cmV0dXJuIFsgXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5saXN0KCApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFJldHVybiB0aGUgSGFuZGxlciB0aGF0IGhvbGRzIHRoZSBoYW5kbGVyIHByb2NlZHVyZXMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUuaG9sZGVyID0gZnVuY3Rpb24gaG9sZGVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiW3N0cmluZ10sXG5cdFx0XHRcdFx0XHRcIi4uLlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwbG91Z2goIGFyZ3VtZW50cyApLCBTVFJJTkcgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIGV2ZW50LnJlZHVjZSggKCBob2xkZXIsIGV2ZW50ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5saXN0ZW5lcnMoIGV2ZW50ICkucmVkdWNlKCAoIGhvbGRlciwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gaG9sZGVyO1xuXHRcdFx0XHR9LCB1bmRlZmluZWQgKTtcblx0XHRcdH0sIHVuZGVmaW5lZCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRyZXR1cm4gZXZlbnQucmVkdWNlKCAoIGhvbGRlciwgZXZlbnQgKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF07XG5cdFx0XHR9LCB1bmRlZmluZWQgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRDaGVja3MgaWYgdGhlIGV2ZW50LWhhbmRsZXIgaXMgcmVnaXN0ZXJlZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cblx0XHRAdG9kbzpcblx0XHRcdFRoaXMgbmVlZHMgb3B0aW1pemF0aW9uLlxuXHRcdEBlbmQtdG9kb1xuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUucmVnaXN0ZXJlZCA9IGZ1bmN0aW9uIHJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFwiW2Z1bmN0aW9uXVwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBsb3VnaCggYXJndW1lbnRzICksIEZVTkNUSU9OICk7XG5cblx0XHRyZXR1cm4gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgU1RSSU5HICkuc29tZSggKCBldmVudCApID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmhhbmRsZXIoIGV2ZW50ICkuc29tZSggKCBsaXN0ZW5lciApID0+IHtcblx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuc29tZSggKCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBpZG50ZnkoIGxpc3RlbmVyLCBoYW5kbGVyICkgfHwgZXFlKCBsaXN0ZW5lciwgaGFuZGxlciApO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5oYXNFdmVudCA9IGZ1bmN0aW9uIGhhc0V2ZW50KCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiBlZW4oIHRoaXMubGlzdCggKSwgZXZlbnQgKTtcblx0fTtcblxuXHQvLzogQGNsaWVudDpcblx0aWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0RXZlbnQucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLmFwcGx5KCBzZWxmLCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdEV2ZW50LnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUoIGV2ZW50LCBoYW5kbGVyLCBvbmNlICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJvbmNlXCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFwcm90eXBlKCBldmVudCwgU1RSSU5HICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBoYW5kbGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHRoZSBldmVudCBpcyBub3QgeWV0IHJlZ2lzdGVyZWQsIGNyZWF0ZSBhIGhhbmRsZXIgY29sbGVjdGlvbi5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoICFrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0aWYoICFjbGF6b2YoIGhhbmRsZXIsIFwiSGFuZGxlclwiICkgKXtcblx0XHRcdFx0XHRpZiggb25jZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0aGFuZGxlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoYW5kbGVyID0gbGlzdGVuZXIoICkucHVzaCggaGFuZGxlciApLmNvbnRleHQoIHNlbGYgKS5yZWdpc3RlciggdGhpcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdID0gaGFuZGxlcjtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8qO1xuXHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIHJlZ2lzdGVyZWQsIG1ha2Ugc3VyZSB3ZSBhcmUgcHVzaGluZyB0aGUgaGFuZGxlciBmdW5jdGlvblxuXHRcdFx0XHRcdFx0XHRub3QgdGhlIGhhbmRsZXIgY29sbGVjdGlvbiwgaWYgd2UgZW5jb3VudGVyIGEgaGFuZGxlciBjb2xsZWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRtZXJnZSBpdC5cblx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0Ki9cblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmxvY2soICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLm1lcmdlKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdGhhbmRsZXIgPSBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLnB1c2goIGhhbmRsZXIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXHR9XG5cdC8vOiBAZW5kLWNsaWVudFxuXG5cdFxuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiBFdmVudDtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gRXZlbnQuYXBwbHkoIG51bGwsIHBhcmFtZXRlciApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVkbztcbiJdfQ==
//# sourceMappingURL=edo.support.js.map
