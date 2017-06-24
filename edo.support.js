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
                                                                                                                                                                                                                                                                                                                    			"posp": "posp",
                                                                                                                                                                                                                                                                                                                    			"pyp": "pyp",
                                                                                                                                                                                                                                                                                                                    			"protype": "protype",
                                                                                                                                                                                                                                                                                                                    			"pyck": "pyck",
                                                                                                                                                                                                                                                                                                                    			"raze": "raze",
                                                                                                                                                                                                                                                                                                                    			"shft": "shft",
                                                                                                                                                                                                                                                                                                                    			"symbiote": "symbiote",
                                                                                                                                                                                                                                                                                                                    			"valu": "valu",
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
var posp = require("posp");
var pyp = require("pyp");
var protype = require("protype");
var pyck = require("pyck");
var raze = require("raze");
var shft = require("shft");
var symbiote = require("symbiote");
var valu = require("valu");
var zelf = require("zelf");



//: @client:
var EventList = require("./event-list.support.js");
var listener = require("./listener.support.js");
//: @end-client


var EVENT = (0, _symbol2.default)("event");
var HANDLER = (0, _symbol2.default)("handler");
var LIMIT = (0, _symbol2.default)("limit");
var LINK = (0, _symbol2.default)("link");
var TIMEOUT = (0, _symbol2.default)("timeout");

var DEFAULT_TIMEOUT = 1000;
var DEFAULT_LIMIT = 10;

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
                                                                             			"handler:required": [
                                                                             				"function",
                                                                             				"..."
                                                                             			],
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

		if (this.haveEvent(event)) {
			event.forEach(function (event) {
				if (_this.hasEvent(event)) {
					_this.holder(event).push(handler);

				} else {
					_this.on.apply(_this, event.concat(handler).concat([option]));
				}
			});

		} else {
			var holder = listener().register(this).context(self);

			handler = handler.reduce(function (listener, handler) {return listener.push(handler);}, holder);

			if (asea.server) {
				var emitter = ferge(this, "EventEmitter");

				event.forEach(function (event) {return emitter.on(event, handler);});

			} else if (asea.client) {
				event.forEach(function (event) {return _this.handle(event, handler);});

			} else {
				throw new Error("cannot determine platform, platform not supported");
			}
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

		handler = handler.map(function (handler) {return called.bind(self)(handler);});

		if (this.haveEvent(event)) {
			event.forEach(function (event) {
				if (_this2.hasEvent(event)) {
					_this2.holder(event).push(handler);

				} else {
					_this2.once.apply(_this2, event.concat(handler).concat([option]));
				}
			});

		} else {
			var holder = listener().register(this).context(self);

			handler = handler.reduce(function (listener, handler) {return listener.push(handler);}, holder);

			if (asea.server) {
				var emitter = ferge(this, "EventEmitter");

				event.forEach(function (event) {return emitter.once(event, handler);});

			} else if (asea.client) {
				event.forEach(function (event) {return _this2.handle(event, handler, true);});

			} else {
				throw new Error("cannot determine platform, platform not supported");
			}
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

		if (this.hasEvent(event)) {
			this.restrict(DEFAULT_LIMIT);

			if (asea.server) {
				var emitter = ferge(this, "EventEmitter");

				emitter.emit.apply(this, [event].concat(parameter));

			} else if (asea.client) {
				this.notify.apply(this, [event].concat(parameter));

			} else {
				throw new Error("cannot determine platform, platform not supported");
			}

		} else {
			var timeout = setTimeout(function () {
				_this3.emit.apply(_this3, [event].concat(parameter));

				clearTimeout(timeout);
			}, this[TIMEOUT]);

			this[LIMIT]--;
		}

		return this;
	};

	Event.prototype.invoke = function invoke(event, parameter, limit) {
		/*;
                                                                    	@meta-configuration:
                                                                    		{
                                                                    			"event:required": "string",
                                                                    			"parameter": "...",
                                                                    			"limit": "EventList"
                                                                    		}
                                                                    	@end-meta-configuration
                                                                    */

		parameter = shft(arguments);

		limit = asyum(pyp(parameter, EventList), EventList, function hasEvent() {
			return false;
		});

		posp(parameter, EventList);

		if (limit.hasEvent(this)) {
			return this;
		}

		if (this.hasEvent(event)) {
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
    		Bi-directional forward flow merging of event handlers.
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

		var self = this;

		infray(event.list(), this.list()).
		forEach(function (name) {
			/*;
                           	@note:
                           		Identity events are not copied.
                           	@end-note
                           */
			var thisIdentity = idntty(_this6).toString();
			var eventIdentity = idntty(event).toString();
			if (new RegExp(thisIdentity).test(name) ||
			new RegExp(eventIdentity).test(name))
			{
				return;
			}

			/*;
     	@note:
     		If event is already link, do not link it anymore.
     	@end-note
     */
			if (_this6.hasLink(name, event)) {
				return;
			}

			var invoke = function invoke() {
				var parameter = raze(arguments);

				asyum(pyp(parameter, EventList), EventList, function push(event) {
					parameter.push(EventList(event));
				}).push(self);

				event.invoke.apply(event, [name].concat(parameter));
			};

			_this6.on(name, invoke, { "disableOnListenerNotification": true });

			asyum(invoke, function linkedTo() {}).linkedTo(event);
		});

		var identity = idntty(this).toString();
		this.on(identity + ":on-listener-added", function onListenerAdded(name) {
			if (self.hasLink(name, event)) {
				return;
			}

			var invoke = function invoke() {
				var parameter = raze(arguments);

				asyum(pyp(parameter, EventList), EventList, function push(event) {
					parameter.push(EventList(event));
				}).push(self);

				self.invoke.apply(self, [name].concat(parameter));
			};

			event.on(name, invoke, { "disableOnListenerNotification": true });

			asyum(invoke, function linkedTo() {}).linkedTo(event);
		});

		this.on(identity + ":once-listener-added", function onceListenerAdded(name) {
			if (self.hasLink(name, event)) {
				return;
			}

			var invoke = function invoke() {
				var parameter = raze(arguments);

				asyum(pyp(parameter, EventList), EventList, function push(event) {
					parameter.push(EventList(event));
				}).push(self);

				self.invoke.apply(self, [name].concat(parameter));
			};

			event.once(name, invoke, { "disableOnceListenerNotification": true });

			asyum(invoke, function linkedTo() {}).linkedTo(event);
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

	Event.prototype.haveEvent = function haveEvent(event) {
		/*;
                                                        	@meta-configuration:
                                                        		{
                                                        			"event:required": "[string]"
                                                        		}
                                                        	@end-meta-configuration
                                                        */

		event = pyck(plough(arguments), STRING);

		var list = this.list();

		return event.some(function (event) {return een(list, event);});
	};

	Event.prototype.hasLink = function hasLink(event, link) {
		/*;
                                                          	@meta-configuration:
                                                          		{
                                                          			"event:required": "string",
                                                          			"link:required": "Event"
                                                          		}
                                                          	@end-meta-configuration
                                                          */

		if (falzy(event) || !protype(event, STRING)) {
			throw new Error("invalid event");
		}

		if (falzy(link) || !clazof(link, "Event")) {
			throw new Error("invalid link");
		}

		var holder = this.holder(event);
		if (falzy(holder)) {
			return false;
		}

		if (!een(this[LINK], link, function (event, link) {return idntfy(event, link);})) {
			return false;
		}

		link = idntty(link);

		return een(holder.list(), link, function (handler, link) {return handler.getLink() === link;});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImFzeXVtIiwiY2FsbGVkIiwiY2xhem9mIiwiZGVwaGVyIiwiZGlhdG9tIiwiZWVuIiwiZXFlIiwiZmFsenkiLCJoYXJkZW4iLCJoZXJlZGl0byIsImlkbnRmeSIsImlkbnR0eSIsImZlcmdlIiwiaW5mcmF5Iiwia2VpbiIsImt1cnNlIiwibGV2ZWxkIiwicGxvdWdoIiwicG9zcCIsInB5cCIsInByb3R5cGUiLCJweWNrIiwicmF6ZSIsInNoZnQiLCJzeW1iaW90ZSIsInZhbHUiLCJ6ZWxmIiwiRXZlbnRMaXN0IiwibGlzdGVuZXIiLCJFVkVOVCIsIkhBTkRMRVIiLCJMSU1JVCIsIkxJTksiLCJUSU1FT1VUIiwiREVGQVVMVF9USU1FT1VUIiwiREVGQVVMVF9MSU1JVCIsImVkbyIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsInNlbGYiLCJFdmVudCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJkZWxheSIsInJlc3RyaWN0IiwiaWRlbnRpdHkiLCJ0b1N0cmluZyIsIm9uIiwiaGFuZGxlIiwiZXZlbnQiLCJoYW5kbGVyIiwib3B0aW9uIiwiU1RSSU5HIiwiRlVOQ1RJT04iLCJfaGFuZGxlciIsIk9CSkVDVCIsInJlZ2lzdGVyZWQiLCJoYXZlRXZlbnQiLCJmb3JFYWNoIiwiaGFzRXZlbnQiLCJob2xkZXIiLCJwdXNoIiwiYXBwbHkiLCJjb25jYXQiLCJyZWdpc3RlciIsImNvbnRleHQiLCJyZWR1Y2UiLCJzZXJ2ZXIiLCJlbWl0dGVyIiwiY2xpZW50IiwiRXJyb3IiLCJSZWdFeHAiLCJ0ZXN0IiwiZGlzYWJsZU9uTGlzdGVuZXJOb3RpZmljYXRpb24iLCJlbWl0Iiwib25jZSIsIm1hcCIsImJpbmQiLCJkaXNhYmxlT25jZUxpc3RlbmVyTm90aWZpY2F0aW9uIiwibm90aWZ5IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJpbnZva2UiLCJsaW1pdCIsIk5VTUJFUiIsImJyb2FkY2FzdCIsImNvdW50IiwibGlzdGVuZXJDb3VudCIsImZsdXNoIiwibGlzdCIsInJlbW92ZUFsbExpc3RlbmVycyIsImxlbmd0aCIsInBvcCIsIm1lcmdlIiwidHJhbnNmZXIiLCJuYW1lIiwidGhpc0lkZW50aXR5IiwiZXZlbnRJZGVudGl0eSIsImhhc0xpbmsiLCJsaW5rZWRUbyIsIm9uTGlzdGVuZXJBZGRlZCIsIm9uY2VMaXN0ZW5lckFkZGVkIiwibGluayIsImV2ZW50TmFtZXMiLCJsaXN0ZW5lcnMiLCJ1bmRlZmluZWQiLCJzb21lIiwiZ2V0TGluayIsImxvY2siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoib1RBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9GQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssU0FBU0wsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTSxTQUFTTixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1PLE1BQU1QLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTVEsTUFBTVIsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNUyxRQUFRVCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1VLFNBQVNWLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVcsV0FBV1gsUUFBUyxVQUFULENBQWpCO0FBQ0EsSUFBTVksU0FBU1osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNYSxTQUFTYixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1jLFFBQVFkLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTWUs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LEtBQWpCLEVBQXlCWSxJQUF6QixDQUErQlgsT0FBL0I7QUFDQTtBQUNEOztBQUVELFVBQU8sSUFBUDtBQUNBLEdBNUREO0FBNkRBO0FBQ0Q7Ozs7QUFJQSxLQUFJckQsS0FBTXdDLFNBQU4sQ0FBSixFQUF1QjtBQUN0QixTQUFPRyxLQUFQOztBQUVBLEVBSEQsTUFHSztBQUNKLFNBQU9BLE1BQU1zQixLQUFOLENBQWEsSUFBYixFQUFtQnpCLFNBQW5CLENBQVA7QUFDQTtBQUNELENBanpCRDs7QUFtekJBeUUsT0FBT0MsT0FBUCxHQUFpQjNFLEdBQWpCIiwiZmlsZSI6ImVkby5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWRvL2Vkby5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZWRvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWRvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWRvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXZlbnRFbWl0dGVyIGV4dGVuc2lvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYXN5dW1cIjogXCJhc3l1bVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcImRlcGhlclwiOiBcImRlcGhlclwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXG5cdFx0XHRcIkV2ZW50RW1pdHRlclwiOiBcImV2ZW50c1wiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImlkbnRmeVwiOiBcImlkbnRmeVwiLFxuXHRcdFx0XCJpZG50dHlcIjogXCJpZG50dHlcIixcblx0XHRcdFwiZmVyZ2VcIjogXCJmZXJnZVwiLFxuXHRcdFx0XCJpbmZyYXlcIjogXCJpbmZyYXlcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwia3Vyc2VcIjogXCJrdXJzZVwiLFxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInBvc3BcIjogXCJwb3NwXCIsXG5cdFx0XHRcInB5cFwiOiBcInB5cFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInZhbHVcIjogXCJ2YWx1XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGFzeXVtID0gcmVxdWlyZSggXCJhc3l1bVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkZXBoZXIgPSByZXF1aXJlKCBcImRlcGhlclwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XG5jb25zdCBlcWUgPSByZXF1aXJlKCBcImVxZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGlkbnRmeSA9IHJlcXVpcmUoIFwiaWRudGZ5XCIgKTtcbmNvbnN0IGlkbnR0eSA9IHJlcXVpcmUoIFwiaWRudHR5XCIgKTtcbmNvbnN0IGZlcmdlID0gcmVxdWlyZSggXCJmZXJnZVwiICk7XG5jb25zdCBpbmZyYXkgPSByZXF1aXJlKCBcImluZnJheVwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IGt1cnNlID0gcmVxdWlyZSggXCJrdXJzZVwiICk7XG5jb25zdCBsZXZlbGQgPSByZXF1aXJlKCBcImxldmVsZFwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwb3NwID0gcmVxdWlyZSggXCJwb3NwXCIgKTtcbmNvbnN0IHB5cCA9IHJlcXVpcmUoIFwicHlwXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHZhbHUgPSByZXF1aXJlKCBcInZhbHVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IEV2ZW50TGlzdCA9IHJlcXVpcmUoIFwiLi9ldmVudC1saXN0LnN1cHBvcnQuanNcIiApO1xuY29uc3QgbGlzdGVuZXIgPSByZXF1aXJlKCBcIi4vbGlzdGVuZXIuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBIQU5ETEVSID0gU3ltYm9sKCBcImhhbmRsZXJcIiApO1xuY29uc3QgTElNSVQgPSBTeW1ib2woIFwibGltaXRcIiApO1xuY29uc3QgTElOSyA9IFN5bWJvbCggXCJsaW5rXCIgKTtcbmNvbnN0IFRJTUVPVVQgPSBTeW1ib2woIFwidGltZW91dFwiICk7XG5cbmNvbnN0IERFRkFVTFRfVElNRU9VVCA9IDEwMDA7XG5jb25zdCBERUZBVUxUX0xJTUlUID0gMTA7XG5cbmNvbnN0IGVkbyA9IGZ1bmN0aW9uIGVkbyggcGFyYW1ldGVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdGxldCBFdmVudCA9IGRpYXRvbSggXCJFdmVudFwiICk7XG5cblx0RXZlbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdHRoaXMuZGVsYXkoIERFRkFVTFRfVElNRU9VVCApO1xuXHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdGhhcmRlbiggSEFORExFUiwgeyB9LCB0aGlzICk7XG5cdFx0aGFyZGVuKCBMSU5LLCBbIF0sIHRoaXMgKTtcblxuXHRcdGt1cnNlKCB0aGlzICk7XG5cblx0XHRsZXQgaWRlbnRpdHkgPSBpZG50dHkoIHRoaXMgKS50b1N0cmluZyggKTtcblx0XHR0aGlzLm9uKCBgJHsgaWRlbnRpdHkgfTpvbi1saXN0ZW5lci1hZGRlZGAsIGZ1bmN0aW9uIGhhbmRsZSggKXsgfSApO1xuXHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9Om9uY2UtbGlzdGVuZXItYWRkZWRgLCBmdW5jdGlvbiBoYW5kbGUoICl7IH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKCBldmVudCwgaGFuZGxlciwgb3B0aW9uICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwib3B0aW9uXCI6IFwib2JqZWN0XCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0bGV0IHBhcmFtZXRlciA9IGxldmVsZCggYXJndW1lbnRzICk7XG5cblx0XHRldmVudCA9IHB5Y2soIHBhcmFtZXRlciwgU1RSSU5HICk7XG5cblx0XHRoYW5kbGVyID0gcHljayggcGFyYW1ldGVyLCBGVU5DVElPTiApO1xuXG5cdFx0Ly86IEBub3RlOiBQcmVzZXJ2ZSB0aGUgb3JpZ2luYWwgaGFuZGxlci4gVGhpcyB3aWxsIGJlIHVzZWQgdG8gZW1pdCBub3RpZmljYXRpb24uXG5cdFx0bGV0IF9oYW5kbGVyID0gaGFuZGxlcjtcblxuXHRcdG9wdGlvbiA9IGRlcGhlciggcGFyYW1ldGVyLCBPQkpFQ1QsIHsgfSApO1xuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0Q2hlY2tzIGlmIHRoZSBldmVudC1oYW5kbGVyIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5cblxuXHRcdFx0XHROb3RlIHRoYXQgdGhpcyB3aWxsIGNoZWNrIHRoZSByZWFsIGhhbmRsZXIgZnVuY3Rpb24gbm90IHRoZSBIYW5kbGVyIGluc3RhbmNlLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggdGhpcy5yZWdpc3RlcmVkKCBldmVudCwgaGFuZGxlciApICl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiggdGhpcy5oYXZlRXZlbnQoIGV2ZW50ICkgKXtcblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiB7XG5cdFx0XHRcdGlmKCB0aGlzLmhhc0V2ZW50KCBldmVudCApICl7XG5cdFx0XHRcdFx0dGhpcy5ob2xkZXIoIGV2ZW50ICkucHVzaCggaGFuZGxlciApO1xuXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHRoaXMub24uYXBwbHkoIHRoaXMsIGV2ZW50LmNvbmNhdCggaGFuZGxlciApLmNvbmNhdCggWyBvcHRpb24gXSApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0bGV0IGhvbGRlciA9IGxpc3RlbmVyKCApLnJlZ2lzdGVyKCB0aGlzICkuY29udGV4dCggc2VsZiApO1xuXG5cdFx0XHRoYW5kbGVyID0gaGFuZGxlci5yZWR1Y2UoICggbGlzdGVuZXIsIGhhbmRsZXIgKSA9PiBsaXN0ZW5lci5wdXNoKCBoYW5kbGVyICksIGhvbGRlciApO1xuXG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0bGV0IGVtaXR0ZXIgPSBmZXJnZSggdGhpcywgXCJFdmVudEVtaXR0ZXJcIiApO1xuXG5cdFx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5oYW5kbGUoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGlzIGlzIG91ciBvd24gbm90aWZpY2F0aW9uIHRoYXQgdGhlIGV2ZW50IGhhcyBiZWVuIGFkZGVkLlxuXG5cdFx0XHRcdE5vdGUgdGhhdCB3ZSB3aWxsIG5vdCBub3RpZnkgaWYgdGhlIGV2ZW50IGlzIGFuIGlkZW50aXR5IGV2ZW50IG9yXG5cdFx0XHRcdFx0XCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvblwiIGlzIGVuYWJsZWQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggdGhpcyApLnRvU3RyaW5nKCApO1xuXHRcdGlmKCAhKCBuZXcgUmVnRXhwKCBpZGVudGl0eSApICkudGVzdCggZXZlbnQgKSAmJiAhb3B0aW9uLmRpc2FibGVPbkxpc3RlbmVyTm90aWZpY2F0aW9uICl7XG5cdFx0XHR0aGlzLmVtaXQoIGAkeyBpZGVudGl0eSB9Om9uLWxpc3RlbmVyLWFkZGVkYCwgZXZlbnQsIF9oYW5kbGVyICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCBldmVudCwgaGFuZGxlciwgb3B0aW9uICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9wdGlvblwiOiBcIm9iamVjdFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKTtcblxuXHRcdC8vOiBAbm90ZTogUHJlc2VydmUgdGhlIG9yaWdpbmFsIGhhbmRsZXIuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIGVtaXQgbm90aWZpY2F0aW9uLlxuXHRcdGxldCBfaGFuZGxlciA9IGhhbmRsZXI7XG5cblx0XHRvcHRpb24gPSBkZXBoZXIoIHBhcmFtZXRlciwgT0JKRUNULCB7IH0gKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdENoZWNrcyBpZiB0aGUgZXZlbnQtaGFuZGxlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXG5cblx0XHRcdFx0Tm90ZSB0aGF0IHRoaXMgd2lsbCBjaGVjayB0aGUgcmVhbCBoYW5kbGVyIGZ1bmN0aW9uIG5vdCB0aGUgSGFuZGxlciBpbnN0YW5jZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRoaXMucmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aGFuZGxlciA9IGhhbmRsZXIubWFwKCAoIGhhbmRsZXIgKSA9PiBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICkgKTtcblxuXHRcdGlmKCB0aGlzLmhhdmVFdmVudCggZXZlbnQgKSApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHtcblx0XHRcdFx0aWYoIHRoaXMuaGFzRXZlbnQoIGV2ZW50ICkgKXtcblx0XHRcdFx0XHR0aGlzLmhvbGRlciggZXZlbnQgKS5wdXNoKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dGhpcy5vbmNlLmFwcGx5KCB0aGlzLCBldmVudC5jb25jYXQoIGhhbmRsZXIgKS5jb25jYXQoIFsgb3B0aW9uIF0gKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdGxldCBob2xkZXIgPSBsaXN0ZW5lciggKS5yZWdpc3RlciggdGhpcyApLmNvbnRleHQoIHNlbGYgKTtcblxuXHRcdFx0aGFuZGxlciA9IGhhbmRsZXIucmVkdWNlKCAoIGxpc3RlbmVyLCBoYW5kbGVyICkgPT4gbGlzdGVuZXIucHVzaCggaGFuZGxlciApLCBob2xkZXIgKTtcblxuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdGxldCBlbWl0dGVyID0gZmVyZ2UoIHRoaXMsIFwiRXZlbnRFbWl0dGVyXCIgKTtcblxuXHRcdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gZW1pdHRlci5vbmNlKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5oYW5kbGUoIGV2ZW50LCBoYW5kbGVyLCB0cnVlICkgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRUaGlzIGlzIG91ciBvd24gbm90aWZpY2F0aW9uIHRoYXQgdGhlIGV2ZW50IGhhcyBiZWVuIGFkZGVkIG9uY2UuXG5cblx0XHRcdFx0Tm90ZSB0aGF0IHdlIHdpbGwgbm90IG5vdGlmeSBpZiB0aGUgZXZlbnQgaXMgYW4gaWRlbnRpdHkgZXZlbnQgb3Jcblx0XHRcdFx0XHRcImRpc2FibGVPbmNlTGlzdGVuZXJOb3RpZmljYXRpb25cIiBpcyBlbmFibGVkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRsZXQgaWRlbnRpdHkgPSBpZG50dHkoIHRoaXMgKS50b1N0cmluZyggKTtcblx0XHRpZiggISggbmV3IFJlZ0V4cCggaWRlbnRpdHkgKSApLnRlc3QoIGV2ZW50ICkgJiYgIW9wdGlvbi5kaXNhYmxlT25jZUxpc3RlbmVyTm90aWZpY2F0aW9uICl7XG5cdFx0XHR0aGlzLmVtaXQoIGAkeyBpZGVudGl0eSB9Om9uY2UtbGlzdGVuZXItYWRkZWRgLCBldmVudCwgX2hhbmRsZXIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdGlmKCB0aGlzWyBMSU1JVCBdIDw9IDAgKXtcblx0XHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuaGFzRXZlbnQoIGV2ZW50ICkgKXtcblx0XHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdGxldCBlbWl0dGVyID0gZmVyZ2UoIHRoaXMsIFwiRXZlbnRFbWl0dGVyXCIgKTtcblxuXHRcdFx0XHRlbWl0dGVyLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0XHR0aGlzLm5vdGlmeS5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdH1lbHNle1xuXHRcdFx0bGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoICkgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0XHR9LCB0aGlzWyBUSU1FT1VUIF0gKTtcblxuXHRcdFx0dGhpc1sgTElNSVQgXS0tO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoIGV2ZW50LCBwYXJhbWV0ZXIsIGxpbWl0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCIsXG5cdFx0XHRcdFx0XCJsaW1pdFwiOiBcIkV2ZW50TGlzdFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IHNoZnQoIGFyZ3VtZW50cyApO1xuXG5cdFx0bGltaXQgPSBhc3l1bSggcHlwKCBwYXJhbWV0ZXIsIEV2ZW50TGlzdCApLCBFdmVudExpc3QsIGZ1bmN0aW9uIGhhc0V2ZW50KCApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gKTtcblxuXHRcdHBvc3AoIHBhcmFtZXRlciwgRXZlbnRMaXN0ICk7XG5cblx0XHRpZiggbGltaXQuaGFzRXZlbnQoIHRoaXMgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuaGFzRXZlbnQoIGV2ZW50ICkgKXtcblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdFx0ZW1pdHRlci5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0dGhpcy5ub3RpZnkuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoIHRpbWVvdXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpbWVvdXQ6cmVxdWlyZWRcIjogXCJudW1iZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIHRpbWVvdXQgKSB8fCAhcHJvdHlwZSggdGltZW91dCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHRpbWVvdXRcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRJTUVPVVQgXSA9IHRpbWVvdXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUucmVzdHJpY3QgPSBmdW5jdGlvbiByZXN0cmljdCggbGltaXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImxpbWl0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBsaW1pdCApIHx8ICFwcm90eXBlKCBsaW1pdCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpbWl0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBMSU1JVCBdID0gbGltaXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuYnJvYWRjYXN0ID0gZnVuY3Rpb24gYnJvYWRjYXN0KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRldmVudCA9IHBsb3VnaCggWyBldmVudCBdICk7XG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiB0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICkgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KCBldmVudCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJDb3VudCggZXZlbnQgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0aWYoIGtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSEFORExFUiBdWyBldmVudCBdLmNvdW50KCApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gMDtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHRoaXMubGlzdCggKS5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gYXN5dW0oIHRoaXMuaG9sZGVyKCBldmVudCApLCBmdW5jdGlvbiBmbHVzaCggKXsgfSApLmZsdXNoKCApICk7XG5cblx0XHRcdHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHR2YWx1KCB0aGlzWyBIQU5ETEVSIF0gKS5mb3JFYWNoKCAoIGhhbmRsZXIgKSA9PiBoYW5kbGVyLmZsdXNoKCApICk7XG5cblx0XHRcdE9iamVjdC5rZXlzKCB0aGlzWyBIQU5ETEVSIF0gKS5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gKCBkZWxldGUgdGhpc1sgSEFORExFUiBdWyBldmVudCBdICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHdoaWxlKCB0aGlzWyBMSU5LIF0ubGVuZ3RoICkgdGhpc1sgTElOSyBdLnBvcCggKS5mbHVzaCggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEJpLWRpcmVjdGlvbmFsIGZvcndhcmQgZmxvdyBtZXJnaW5nIG9mIGV2ZW50IGhhbmRsZXJzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFjbGF6b2YoIGV2ZW50LCBcIkV2ZW50XCIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBtZXJnZSBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmFuc2ZlciggZXZlbnQgKTtcblx0XHRldmVudC50cmFuc2ZlciggdGhpcyApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0VHJhbnNmZXIgZXZlbnQgaGFuZGxlcnMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUudHJhbnNmZXIgPSBmdW5jdGlvbiB0cmFuc2ZlciggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IHRyYW5zZmVyIGZyb20gZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdGxldCBzZWxmID0gdGhpcztcblxuXHRcdGluZnJheSggZXZlbnQubGlzdCggKSwgdGhpcy5saXN0KCApIClcblx0XHRcdC5mb3JFYWNoKCAoIG5hbWUgKSA9PiB7XG5cdFx0XHRcdC8qO1xuXHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0SWRlbnRpdHkgZXZlbnRzIGFyZSBub3QgY29waWVkLlxuXHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHQqL1xuXHRcdFx0XHRsZXQgdGhpc0lkZW50aXR5ID0gaWRudHR5KCB0aGlzICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdGxldCBldmVudElkZW50aXR5ID0gaWRudHR5KCBldmVudCApLnRvU3RyaW5nKCApO1xuXHRcdFx0XHRpZiggKCBuZXcgUmVnRXhwKCB0aGlzSWRlbnRpdHkgKSApLnRlc3QoIG5hbWUgKSB8fFxuXHRcdFx0IFx0XHQoIG5ldyBSZWdFeHAoIGV2ZW50SWRlbnRpdHkgKSApLnRlc3QoIG5hbWUgKSApXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKjtcblx0XHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRcdElmIGV2ZW50IGlzIGFscmVhZHkgbGluaywgZG8gbm90IGxpbmsgaXQgYW55bW9yZS5cblx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0Ki9cblx0XHRcdFx0aWYoIHRoaXMuaGFzTGluayggbmFtZSwgZXZlbnQgKSApe1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoICl7XG5cdFx0XHRcdFx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRcdFx0YXN5dW0oIHB5cCggcGFyYW1ldGVyLCBFdmVudExpc3QgKSwgRXZlbnRMaXN0LCBmdW5jdGlvbiBwdXNoKCBldmVudCApe1xuXHRcdFx0XHRcdFx0cGFyYW1ldGVyLnB1c2goIEV2ZW50TGlzdCggZXZlbnQgKSApO1xuXHRcdFx0XHRcdH0gKS5wdXNoKCBzZWxmICk7XG5cblx0XHRcdFx0XHRldmVudC5pbnZva2UuYXBwbHkoIGV2ZW50LCBbIG5hbWUgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgaW52b2tlLCB7IFwiZGlzYWJsZU9uTGlzdGVuZXJOb3RpZmljYXRpb25cIjogdHJ1ZSB9ICk7XG5cblx0XHRcdFx0YXN5dW0oIGludm9rZSwgZnVuY3Rpb24gbGlua2VkVG8oICl7IH0gKS5saW5rZWRUbyggZXZlbnQgKTtcblx0XHRcdH0gKTtcblxuXHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggdGhpcyApLnRvU3RyaW5nKCApO1xuXHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9Om9uLWxpc3RlbmVyLWFkZGVkYCwgZnVuY3Rpb24gb25MaXN0ZW5lckFkZGVkKCBuYW1lICl7XG5cdFx0XHRpZiggc2VsZi5oYXNMaW5rKCBuYW1lLCBldmVudCApICl7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGludm9rZSA9IGZ1bmN0aW9uIGludm9rZSggKXtcblx0XHRcdFx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRcdGFzeXVtKCBweXAoIHBhcmFtZXRlciwgRXZlbnRMaXN0ICksIEV2ZW50TGlzdCwgZnVuY3Rpb24gcHVzaCggZXZlbnQgKXtcblx0XHRcdFx0XHRwYXJhbWV0ZXIucHVzaCggRXZlbnRMaXN0KCBldmVudCApICk7XG5cdFx0XHRcdH0gKS5wdXNoKCBzZWxmICk7XG5cblx0XHRcdFx0c2VsZi5pbnZva2UuYXBwbHkoIHNlbGYsIFsgbmFtZSBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblx0XHRcdH07XG5cblx0XHRcdGV2ZW50Lm9uKCBuYW1lLCBpbnZva2UsIHsgXCJkaXNhYmxlT25MaXN0ZW5lck5vdGlmaWNhdGlvblwiOiB0cnVlIH0gKTtcblxuXHRcdFx0YXN5dW0oIGludm9rZSwgZnVuY3Rpb24gbGlua2VkVG8oICl7IH0gKS5saW5rZWRUbyggZXZlbnQgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLm9uKCBgJHsgaWRlbnRpdHkgfTpvbmNlLWxpc3RlbmVyLWFkZGVkYCwgZnVuY3Rpb24gb25jZUxpc3RlbmVyQWRkZWQoIG5hbWUgKXtcblx0XHRcdGlmKCBzZWxmLmhhc0xpbmsoIG5hbWUsIGV2ZW50ICkgKXtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgaW52b2tlID0gZnVuY3Rpb24gaW52b2tlKCApe1xuXHRcdFx0XHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0YXN5dW0oIHB5cCggcGFyYW1ldGVyLCBFdmVudExpc3QgKSwgRXZlbnRMaXN0LCBmdW5jdGlvbiBwdXNoKCBldmVudCApe1xuXHRcdFx0XHRcdHBhcmFtZXRlci5wdXNoKCBFdmVudExpc3QoIGV2ZW50ICkgKTtcblx0XHRcdFx0fSApLnB1c2goIHNlbGYgKTtcblxuXHRcdFx0XHRzZWxmLmludm9rZS5hcHBseSggc2VsZiwgWyBuYW1lIF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXHRcdFx0fTtcblxuXHRcdFx0ZXZlbnQub25jZSggbmFtZSwgaW52b2tlLCB7IFwiZGlzYWJsZU9uY2VMaXN0ZW5lck5vdGlmaWNhdGlvblwiOiB0cnVlIH0gKTtcblxuXHRcdFx0YXN5dW0oIGludm9rZSwgZnVuY3Rpb24gbGlua2VkVG8oICl7IH0gKS5saW5rZWRUbyggZXZlbnQgKTtcblx0XHR9ICk7XG5cblx0XHR0aGlzLmxpbmsoIGV2ZW50ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uIGxpbmsoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFjbGF6b2YoIGV2ZW50LCBcIkV2ZW50XCIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBsaW5rIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHRpZiggIWVlbiggdGhpc1sgTElOSyBdLCBldmVudCwgKCBsaW5rLCBldmVudCApID0+IGlkbnRmeSggbGluaywgZXZlbnQgKSApICl7XG5cdFx0XHR0aGlzWyBMSU5LIF0ucHVzaCggZXZlbnQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRMaXN0IHJlZ2lzdGVyZWQgZXZlbnQgbmFtZXMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uIGxpc3QoICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5ldmVudE5hbWVzKCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmtleXMoIHRoaXNbIEhBTkRMRVIgXSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdExpc3QgdGhlIGhhbmRsZXJzIG9mIHRoZSBldmVudC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5oYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlciggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFwcm90eXBlKCBldmVudCwgU1RSSU5HICkgKXtcblx0XHRcdHJldHVybiBbIF07XG5cdFx0fVxuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5saXN0ZW5lcnMoIGV2ZW50ICkucmVkdWNlKCAoIGxpc3QsIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRcdGlmKCBjbGF6b2YoIGhhbmRsZXIsIFwiSGFuZGxlclwiICkgKXtcblx0XHRcdFx0XHRyZXR1cm4gbGlzdC5jb25jYXQoIGhhbmRsZXIubGlzdCggKSApO1xuXG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdGxpc3QucHVzaCggaGFuZGxlciApO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHRcdH1cblx0XHRcdH0sIFsgXSApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRpZiggIWtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRyZXR1cm4gWyBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpc1sgSEFORExFUiBdWyBldmVudCBdLmxpc3QoICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0UmV0dXJuIHRoZSBIYW5kbGVyIHRoYXQgaG9sZHMgdGhlIGhhbmRsZXIgcHJvY2VkdXJlcy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5ob2xkZXIgPSBmdW5jdGlvbiBob2xkZXIoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbc3RyaW5nXSxcblx0XHRcdFx0XHRcdFwiLi4uXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRldmVudCA9IHB5Y2soIHBsb3VnaCggYXJndW1lbnRzICksIFNUUklORyApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gZXZlbnQucmVkdWNlKCAoIGhvbGRlciwgZXZlbnQgKSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVycyggZXZlbnQgKS5yZWR1Y2UoICggaG9sZGVyLCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0XHRcdGlmKCBjbGF6b2YoIGhhbmRsZXIsIFwiSGFuZGxlclwiICkgKXtcblx0XHRcdFx0XHRcdHJldHVybiBoYW5kbGVyO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBob2xkZXI7XG5cdFx0XHRcdH0sIHVuZGVmaW5lZCApO1xuXHRcdFx0fSwgdW5kZWZpbmVkICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHJldHVybiBldmVudC5yZWR1Y2UoICggaG9sZGVyLCBldmVudCApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXTtcblx0XHRcdH0sIHVuZGVmaW5lZCApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdENoZWNrcyBpZiB0aGUgZXZlbnQtaGFuZGxlciBpcyByZWdpc3RlcmVkLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblxuXHRcdEB0b2RvOlxuXHRcdFx0VGhpcyBuZWVkcyBvcHRpbWl6YXRpb24uXG5cdFx0QGVuZC10b2RvXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5yZWdpc3RlcmVkID0gZnVuY3Rpb24gcmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJbZnVuY3Rpb25dXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRoYW5kbGVyID0gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgRlVOQ1RJT04gKTtcblxuXHRcdHJldHVybiBweWNrKCBwbG91Z2goIGFyZ3VtZW50cyApLCBTVFJJTkcgKS5zb21lKCAoIGV2ZW50ICkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlciggZXZlbnQgKS5zb21lKCAoIGxpc3RlbmVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gaGFuZGxlci5zb21lKCAoIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGlkbnRmeSggbGlzdGVuZXIsIGhhbmRsZXIgKSB8fCBlcWUoIGxpc3RlbmVyLCBoYW5kbGVyICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmhhc0V2ZW50ID0gZnVuY3Rpb24gaGFzRXZlbnQoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhcHJvdHlwZSggZXZlbnQsIFNUUklORyApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVlbiggdGhpcy5saXN0KCApLCBldmVudCApO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5oYXZlRXZlbnQgPSBmdW5jdGlvbiBoYXZlRXZlbnQoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIltzdHJpbmddXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwbG91Z2goIGFyZ3VtZW50cyApLCBTVFJJTkcgKTtcblxuXHRcdGxldCBsaXN0ID0gdGhpcy5saXN0KCApO1xuXG5cdFx0cmV0dXJuIGV2ZW50LnNvbWUoICggZXZlbnQgKSA9PiBlZW4oIGxpc3QsIGV2ZW50ICkgKTtcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuaGFzTGluayA9IGZ1bmN0aW9uIGhhc0xpbmsoIGV2ZW50LCBsaW5rICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwibGluazpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFwcm90eXBlKCBldmVudCwgU1RSSU5HICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHRpZiggZmFsenkoIGxpbmsgKSB8fCAhY2xhem9mKCBsaW5rLCBcIkV2ZW50XCIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbGlua1wiICk7XG5cdFx0fVxuXG5cdFx0bGV0IGhvbGRlciA9IHRoaXMuaG9sZGVyKCBldmVudCApO1xuXHRcdGlmKCBmYWx6eSggaG9sZGVyICkgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiggIWVlbiggdGhpc1sgTElOSyBdLCBsaW5rLCAoIGV2ZW50LCBsaW5rICkgPT4gaWRudGZ5KCBldmVudCwgbGluayApICkgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRsaW5rID0gaWRudHR5KCBsaW5rICk7XG5cblx0XHRyZXR1cm4gZWVuKCBob2xkZXIubGlzdCggKSwgbGluaywgKCBoYW5kbGVyLCBsaW5rICkgPT4gKCBoYW5kbGVyLmdldExpbmsoICkgPT09IGxpbmsgKSApO1xuXHR9O1xuXG5cdC8vOiBAY2xpZW50OlxuXHRpZiggYXNlYS5jbGllbnQgKXtcblx0XHRFdmVudC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uYXBwbHkoIHNlbGYsIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0RXZlbnQucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uIGhhbmRsZSggZXZlbnQsIGhhbmRsZXIsIG9uY2UgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcIm9uY2VcIjogXCJib29sZWFuXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBldmVudFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIG5vdCB5ZXQgcmVnaXN0ZXJlZCwgY3JlYXRlIGEgaGFuZGxlciBjb2xsZWN0aW9uLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggIWtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRpZiggIWNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhhbmRsZXIgPSBsaXN0ZW5lciggKS5wdXNoKCBoYW5kbGVyICkuY29udGV4dCggc2VsZiApLnJlZ2lzdGVyKCB0aGlzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0gPSBoYW5kbGVyO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHRJZiB0aGUgZXZlbnQgaXMgcmVnaXN0ZXJlZCwgbWFrZSBzdXJlIHdlIGFyZSBwdXNoaW5nIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG5cdFx0XHRcdFx0XHRcdG5vdCB0aGUgaGFuZGxlciBjb2xsZWN0aW9uLCBpZiB3ZSBlbmNvdW50ZXIgYSBoYW5kbGVyIGNvbGxlY3Rpb24sXG5cdFx0XHRcdFx0XHRcdG1lcmdlIGl0LlxuXHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHQqL1xuXHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdGhhbmRsZXIubG9jayggKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubWVyZ2UoIGhhbmRsZXIgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZiggb25jZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0aGFuZGxlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ucHVzaCggaGFuZGxlciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdH1cblx0Ly86IEBlbmQtY2xpZW50XG5cblx0XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIEV2ZW50O1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBFdmVudC5hcHBseSggbnVsbCwgcGFyYW1ldGVyICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZWRvO1xuIl19
//# sourceMappingURL=edo.support.js.map
