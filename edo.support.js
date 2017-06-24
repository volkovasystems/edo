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
                                                                                                                                                                                                                                                                                                                    			"embedd": "embedd",
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
var embedd = require("embedd");
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
		var handlerList = handler;

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
					_this.on.apply(_this, event.concat(handler).concat(option));
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

		if (!embedd(this, event) && !option.disableOnListenerNotification) {
			this.emit(idntty(this).toString() + ":on-listener-added", event, handlerList);
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
		var handlerList = handler;

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
					_this2.once.apply(_this2, event.concat(handler).concat(option));
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

		if (!embedd(this, event) && !option.disableOnceListenerNotification) {
			this.emit(idntty(this).toString() + ":once-listener-added", event, handlerList);
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

		limit = asyum(pyp(parameter, EventList), function hasEvent() {
			return false;
		});

		if (limit.hasEvent(this)) {
			return this;
		}

		asyum(pyp(parameter, EventList), function push(event) {
			parameter.push(EventList(event));
		}).push(this);

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
			if (embedd(_this6, name) || embedd(event, name)) {
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

				asyum(pyp(parameter, EventList), function push(event) {
					parameter.push(EventList(event));
				}).push(self);

				event.invoke.apply(event, [name].concat(parameter));
			};

			_this6.on(name, invoke);

			asyum(invoke, function linkedTo() {}).linkedTo(event);
		});

		var identity = idntty(this).toString();
		this.on(identity + ":on-listener-added", function onListenerAdded(name) {
			/*;
                                                                           	@note:
                                                                           		Name of events are in array.
                                                                           	@end-note
                                                                           */

			if (event.haveLink(name, self)) {
				return;
			}

			var invoke = function invoke() {
				var parameter = raze(arguments);

				asyum(pyp(parameter, EventList), function push(event) {
					parameter.push(EventList(event));
				}).push(event);

				name.forEach(function (name) {return self.invoke.apply(self, [name].concat(parameter));});
			};

			event.on(name, invoke);

			asyum(invoke, function linkedTo() {}).linkedTo(self);
		});

		this.on(identity + ":once-listener-added", function onceListenerAdded(name) {
			/*;
                                                                               	@note:
                                                                               		Name of events are in array.
                                                                               	@end-note
                                                                               */

			if (event.haveLink(name, self)) {
				return;
			}

			var invoke = function invoke() {
				var parameter = raze(arguments);

				asyum(pyp(parameter, EventList), function push(event) {
					parameter.push(EventList(event));
				}).push(event);

				name.forEach(function (name) {return self.invoke.apply(self, [name].concat(parameter));});
			};

			event.once(name, invoke);

			asyum(invoke, function linkedTo() {}).linkedTo(self);
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

	Event.prototype.haveLink = function haveLink(event, link) {var _this9 = this;
		/*;
                                                                               	@meta-configuration:
                                                                               		{
                                                                               			"event:required": [
                                                                               				"[string]",
                                                                               				"..."
                                                                               			],
                                                                               			"link:required": "Event"
                                                                               		}
                                                                               	@end-meta-configuration
                                                                               */

		var parameter = raze(arguments);

		event = pyck(plough(parameter), STRING);

		if (arid(event)) {
			throw new Error("invalid event");
		}

		link = pyp(parameter, "Event");

		if (falzy(link) || !clazof(link, "Event")) {
			throw new Error("invalid link");
		}

		return event.some(function (event) {return _this9.hasLink(event, link);});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImFzeXVtIiwiY2FsbGVkIiwiY2xhem9mIiwiZGVwaGVyIiwiZGlhdG9tIiwiZWVuIiwiZW1iZWRkIiwiZXFlIiwiZmFsenkiLCJoYXJkZW4iLCJoZXJlZGl0byIsImlkbnRmeSIsImlkbnR0eSIsImZlcmdlIiwiaW5mcmF5Iiwia2VpbiIsImt1cnNlIiwibGV2ZWxkIiwicGxvdWdoIiwicHlwIiwicHJvdHlwZSIsInB5Y2siLCJyYXplIiwic2hmdCIsInN5bWJpb3RlIiwidmFsdSIsInplbGYiLCJFdmVudExpc3QiLCJsaXN0ZW5lciIsIkVWRU5UIiwiSEFORExFUiIsIkxJTUlUIiwiTElOSyIsIlRJTUVPVVQiLCJERUZBVUxUX1RJTUVPVVQiLCJERUZBVUxUX0xJTUlUIiwiZWRvIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwic2VsZiIsIkV2ZW50IiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsImRlbGF5IiwicmVzdHJpY3QiLCJpZGVudGl0eSIsInRvU3RyaW5nIiwib24iLCJoYW5kbGUiLCJldmVudCIsImhhbmRsZXIiLCJvcHRpb24iLCJTVFJJTkciLCJGVU5DVElPTiIsImhhbmRsZXJMaXN0IiwiT0JKRUNUIiwicmVnaXN0ZXJlZCIsImhhdmVFdmVudCIsImZvckVhY2giLCJoYXNFdmVudCIsImhvbGRlciIsInB1c2giLCJhcHBseSIsImNvbmNhdCIsInJlZ2lzdGVyIiwiY29udGV4dCIsInJlZHVjZSIsInNlcnZlciIsImVtaXR0ZXIiLCJjbGllbnQiLCJFcnJvciIsImRpc2FibGVPbkxpc3RlbmVyTm90aWZpY2F0aW9uIiwiZW1pdCIsIm9uY2UiLCJtYXAiLCJiaW5kIiwiZGlzYWJsZU9uY2VMaXN0ZW5lck5vdGlmaWNhdGlvbiIsIm5vdGlmeSIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaW52b2tlIiwibGltaXQiLCJOVU1CRVIiLCJicm9hZGNhc3QiLCJjb3VudCIsImxpc3RlbmVyQ291bnQiLCJmbHVzaCIsImxpc3QiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJsZW5ndGgiLCJwb3AiLCJtZXJnZSIsInRyYW5zZmVyIiwibmFtZSIsImhhc0xpbmsiLCJsaW5rZWRUbyIsIm9uTGlzdGVuZXJBZGRlZCIsImhhdmVMaW5rIiwib25jZUxpc3RlbmVyQWRkZWQiLCJsaW5rIiwiZXZlbnROYW1lcyIsImxpc3RlbmVycyIsInVuZGVmaW5lZCIsInNvbWUiLCJnZXRMaW5rIiwibG9jayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJvVEFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0ZBLElBQU1BLE9BQU9DLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUksU0FBU0osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1NLFNBQVNOLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU8sTUFBTVAsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNUSxTQUFTUixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1TLE1BQU1ULFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTVUsUUFBUVYsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNVyxTQUFTWCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1ZLFdBQVdaLFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1hLFNBQVNiLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTWMsU0FBU2QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNZSxRQUFRZixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1n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RCxNQVdLO0FBQ0o7Ozs7Ozs7QUFPQSxRQUFJaEQsT0FBUWdELE9BQVIsRUFBaUIsU0FBakIsQ0FBSixFQUFrQztBQUNqQyxTQUFJdUIsU0FBUyxJQUFiLEVBQW1CO0FBQ2xCdkIsY0FBUXdELElBQVI7QUFDQTs7QUFFRCxVQUFNNUUsT0FBTixFQUFpQm1CLEtBQWpCLEVBQXlCMkMsS0FBekIsQ0FBZ0MxQyxPQUFoQzs7QUFFQSxLQVBELE1BT0s7QUFDSixTQUFJdUIsU0FBUyxJQUFiLEVBQW1CO0FBQ2xCdkIsZ0JBQVVqRCxPQUFPMEUsSUFBUCxDQUFhcEMsSUFBYixFQUFxQlcsT0FBckIsQ0FBVjtBQUNBOztBQUVELFVBQU1wQixPQUFOLEVBQWlCbUIsS0FBakIsRUFBeUJZLElBQXpCLENBQStCWCxPQUEvQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTyxJQUFQO0FBQ0EsR0E1REQ7QUE2REE7QUFDRDs7OztBQUlBLEtBQUlyRCxLQUFNd0MsU0FBTixDQUFKLEVBQXVCO0FBQ3RCLFNBQU9HLEtBQVA7O0FBRUEsRUFIRCxNQUdLO0FBQ0osU0FBT0EsTUFBTXNCLEtBQU4sQ0FBYSxJQUFiLEVBQW1CekIsU0FBbkIsQ0FBUDtBQUNBO0FBQ0QsQ0F2MUJEOztBQXkxQkFzRSxPQUFPQyxPQUFQLEdBQWlCeEUsR0FBakIiLCJmaWxlIjoiZWRvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWRvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlZG8vZWRvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJlZG8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZWRvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lZG8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJlZG8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFdmVudEVtaXR0ZXIgZXh0ZW5zaW9uLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmlkXCI6IFwiYXJpZFwiLFxuXHRcdFx0XCJhc2VhXCI6IFwiYXNlYVwiLFxuXHRcdFx0XCJhc3l1bVwiOiBcImFzeXVtXCIsXG5cdFx0XHRcImNhbGxlZFwiOiBcImNhbGxlZFwiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGVwaGVyXCI6IFwiZGVwaGVyXCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJlcWVcIjogXCJlcWVcIixcblx0XHRcdFwiZW1iZWRkXCI6IFwiZW1iZWRkXCIsXG5cdFx0XHRcIkV2ZW50RW1pdHRlclwiOiBcImV2ZW50c1wiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImlkbnRmeVwiOiBcImlkbnRmeVwiLFxuXHRcdFx0XCJpZG50dHlcIjogXCJpZG50dHlcIixcblx0XHRcdFwiZmVyZ2VcIjogXCJmZXJnZVwiLFxuXHRcdFx0XCJpbmZyYXlcIjogXCJpbmZyYXlcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwia3Vyc2VcIjogXCJrdXJzZVwiLFxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInB5cFwiOiBcInB5cFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInZhbHVcIjogXCJ2YWx1XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhc2VhID0gcmVxdWlyZSggXCJhc2VhXCIgKTtcbmNvbnN0IGFzeXVtID0gcmVxdWlyZSggXCJhc3l1bVwiICk7XG5jb25zdCBjYWxsZWQgPSByZXF1aXJlKCBcImNhbGxlZFwiICk7XG5jb25zdCBjbGF6b2YgPSByZXF1aXJlKCBcImNsYXpvZlwiICk7XG5jb25zdCBkZXBoZXIgPSByZXF1aXJlKCBcImRlcGhlclwiICk7XG5jb25zdCBkaWF0b20gPSByZXF1aXJlKCBcImRpYXRvbVwiICk7XG5jb25zdCBlZW4gPSByZXF1aXJlKCBcImVlblwiICk7XG5jb25zdCBlbWJlZGQgPSByZXF1aXJlKCBcImVtYmVkZFwiICk7XG5jb25zdCBlcWUgPSByZXF1aXJlKCBcImVxZVwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgaGVyZWRpdG8gPSByZXF1aXJlKCBcImhlcmVkaXRvXCIgKTtcbmNvbnN0IGlkbnRmeSA9IHJlcXVpcmUoIFwiaWRudGZ5XCIgKTtcbmNvbnN0IGlkbnR0eSA9IHJlcXVpcmUoIFwiaWRudHR5XCIgKTtcbmNvbnN0IGZlcmdlID0gcmVxdWlyZSggXCJmZXJnZVwiICk7XG5jb25zdCBpbmZyYXkgPSByZXF1aXJlKCBcImluZnJheVwiICk7XG5jb25zdCBrZWluID0gcmVxdWlyZSggXCJrZWluXCIgKTtcbmNvbnN0IGt1cnNlID0gcmVxdWlyZSggXCJrdXJzZVwiICk7XG5jb25zdCBsZXZlbGQgPSByZXF1aXJlKCBcImxldmVsZFwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBweXAgPSByZXF1aXJlKCBcInB5cFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcInB5Y2tcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcbmNvbnN0IHN5bWJpb3RlID0gcmVxdWlyZSggXCJzeW1iaW90ZVwiICk7XG5jb25zdCB2YWx1ID0gcmVxdWlyZSggXCJ2YWx1XCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBFdmVudExpc3QgPSByZXF1aXJlKCBcIi4vZXZlbnQtbGlzdC5zdXBwb3J0LmpzXCIgKTtcbmNvbnN0IGxpc3RlbmVyID0gcmVxdWlyZSggXCIuL2xpc3RlbmVyLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cbmNvbnN0IEVWRU5UID0gU3ltYm9sKCBcImV2ZW50XCIgKTtcbmNvbnN0IEhBTkRMRVIgPSBTeW1ib2woIFwiaGFuZGxlclwiICk7XG5jb25zdCBMSU1JVCA9IFN5bWJvbCggXCJsaW1pdFwiICk7XG5jb25zdCBMSU5LID0gU3ltYm9sKCBcImxpbmtcIiApO1xuY29uc3QgVElNRU9VVCA9IFN5bWJvbCggXCJ0aW1lb3V0XCIgKTtcblxuY29uc3QgREVGQVVMVF9USU1FT1VUID0gMTAwMDtcbmNvbnN0IERFRkFVTFRfTElNSVQgPSAxMDtcblxuY29uc3QgZWRvID0gZnVuY3Rpb24gZWRvKCBwYXJhbWV0ZXIgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0bGV0IHNlbGYgPSB6ZWxmKCB0aGlzICk7XG5cblx0bGV0IEV2ZW50ID0gZGlhdG9tKCBcIkV2ZW50XCIgKTtcblxuXHRFdmVudC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoICl7XG5cdFx0dGhpcy5kZWxheSggREVGQVVMVF9USU1FT1VUICk7XG5cdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0aGFyZGVuKCBIQU5ETEVSLCB7IH0sIHRoaXMgKTtcblx0XHRoYXJkZW4oIExJTkssIFsgXSwgdGhpcyApO1xuXG5cdFx0a3Vyc2UoIHRoaXMgKTtcblxuXHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggdGhpcyApLnRvU3RyaW5nKCApO1xuXHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9Om9uLWxpc3RlbmVyLWFkZGVkYCwgZnVuY3Rpb24gaGFuZGxlKCApeyB9ICk7XG5cdFx0dGhpcy5vbiggYCR7IGlkZW50aXR5IH06b25jZS1saXN0ZW5lci1hZGRlZGAsIGZ1bmN0aW9uIGhhbmRsZSggKXsgfSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oIGV2ZW50LCBoYW5kbGVyLCBvcHRpb24gKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJvcHRpb25cIjogXCJvYmplY3RcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRsZXQgcGFyYW1ldGVyID0gbGV2ZWxkKCBhcmd1bWVudHMgKTtcblxuXHRcdGV2ZW50ID0gcHljayggcGFyYW1ldGVyLCBTVFJJTkcgKTtcblxuXHRcdGhhbmRsZXIgPSBweWNrKCBwYXJhbWV0ZXIsIEZVTkNUSU9OICk7XG5cblx0XHQvLzogQG5vdGU6IFByZXNlcnZlIHRoZSBvcmlnaW5hbCBoYW5kbGVyLiBUaGlzIHdpbGwgYmUgdXNlZCB0byBlbWl0IG5vdGlmaWNhdGlvbi5cblx0XHRsZXQgaGFuZGxlckxpc3QgPSBoYW5kbGVyO1xuXG5cdFx0b3B0aW9uID0gZGVwaGVyKCBwYXJhbWV0ZXIsIE9CSkVDVCwgeyB9ICk7XG5cblx0XHQvKjtcblx0XHRcdEBub3RlOlxuXHRcdFx0XHRDaGVja3MgaWYgdGhlIGV2ZW50LWhhbmRsZXIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLlxuXG5cdFx0XHRcdE5vdGUgdGhhdCB0aGlzIHdpbGwgY2hlY2sgdGhlIHJlYWwgaGFuZGxlciBmdW5jdGlvbiBub3QgdGhlIEhhbmRsZXIgaW5zdGFuY2UuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCB0aGlzLnJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmhhdmVFdmVudCggZXZlbnQgKSApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHtcblx0XHRcdFx0aWYoIHRoaXMuaGFzRXZlbnQoIGV2ZW50ICkgKXtcblx0XHRcdFx0XHR0aGlzLmhvbGRlciggZXZlbnQgKS5wdXNoKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dGhpcy5vbi5hcHBseSggdGhpcywgZXZlbnQuY29uY2F0KCBoYW5kbGVyICkuY29uY2F0KCBvcHRpb24gKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdGxldCBob2xkZXIgPSBsaXN0ZW5lciggKS5yZWdpc3RlciggdGhpcyApLmNvbnRleHQoIHNlbGYgKTtcblxuXHRcdFx0aGFuZGxlciA9IGhhbmRsZXIucmVkdWNlKCAoIGxpc3RlbmVyLCBoYW5kbGVyICkgPT4gbGlzdGVuZXIucHVzaCggaGFuZGxlciApLCBob2xkZXIgKTtcblxuXHRcdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRcdGxldCBlbWl0dGVyID0gZmVyZ2UoIHRoaXMsIFwiRXZlbnRFbWl0dGVyXCIgKTtcblxuXHRcdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gZW1pdHRlci5vbiggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuaGFuZGxlKCBldmVudCwgaGFuZGxlciApICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Lyo7XG5cdFx0XHRAbm90ZTpcblx0XHRcdFx0VGhpcyBpcyBvdXIgb3duIG5vdGlmaWNhdGlvbiB0aGF0IHRoZSBldmVudCBoYXMgYmVlbiBhZGRlZC5cblxuXHRcdFx0XHROb3RlIHRoYXQgd2Ugd2lsbCBub3Qgbm90aWZ5IGlmIHRoZSBldmVudCBpcyBhbiBpZGVudGl0eSBldmVudCBvclxuXHRcdFx0XHRcdFwiZGlzYWJsZU9uTGlzdGVuZXJOb3RpZmljYXRpb25cIiBpcyBlbmFibGVkLlxuXHRcdFx0QGVuZC1ub3RlXG5cdFx0Ki9cblx0XHRpZiggIWVtYmVkZCggdGhpcywgZXZlbnQgKSAmJiAhb3B0aW9uLmRpc2FibGVPbkxpc3RlbmVyTm90aWZpY2F0aW9uICl7XG5cdFx0XHR0aGlzLmVtaXQoIGAkeyBpZG50dHkoIHRoaXMgKS50b1N0cmluZyggKSB9Om9uLWxpc3RlbmVyLWFkZGVkYCwgZXZlbnQsIGhhbmRsZXJMaXN0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCBldmVudCwgaGFuZGxlciwgb3B0aW9uICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCIuLi5cIlxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcIm9wdGlvblwiOiBcIm9iamVjdFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKTtcblxuXHRcdC8vOiBAbm90ZTogUHJlc2VydmUgdGhlIG9yaWdpbmFsIGhhbmRsZXIuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIGVtaXQgbm90aWZpY2F0aW9uLlxuXHRcdGxldCBoYW5kbGVyTGlzdCA9IGhhbmRsZXI7XG5cblx0XHRvcHRpb24gPSBkZXBoZXIoIHBhcmFtZXRlciwgT0JKRUNULCB7IH0gKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdENoZWNrcyBpZiB0aGUgZXZlbnQtaGFuZGxlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXG5cblx0XHRcdFx0Tm90ZSB0aGF0IHRoaXMgd2lsbCBjaGVjayB0aGUgcmVhbCBoYW5kbGVyIGZ1bmN0aW9uIG5vdCB0aGUgSGFuZGxlciBpbnN0YW5jZS5cblx0XHRcdEBlbmQtbm90ZVxuXHRcdCovXG5cdFx0aWYoIHRoaXMucmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKSApe1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aGFuZGxlciA9IGhhbmRsZXIubWFwKCAoIGhhbmRsZXIgKSA9PiBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICkgKTtcblxuXHRcdGlmKCB0aGlzLmhhdmVFdmVudCggZXZlbnQgKSApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHtcblx0XHRcdFx0aWYoIHRoaXMuaGFzRXZlbnQoIGV2ZW50ICkgKXtcblx0XHRcdFx0XHR0aGlzLmhvbGRlciggZXZlbnQgKS5wdXNoKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0dGhpcy5vbmNlLmFwcGx5KCB0aGlzLCBldmVudC5jb25jYXQoIGhhbmRsZXIgKS5jb25jYXQoIG9wdGlvbiApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0bGV0IGhvbGRlciA9IGxpc3RlbmVyKCApLnJlZ2lzdGVyKCB0aGlzICkuY29udGV4dCggc2VsZiApO1xuXG5cdFx0XHRoYW5kbGVyID0gaGFuZGxlci5yZWR1Y2UoICggbGlzdGVuZXIsIGhhbmRsZXIgKSA9PiBsaXN0ZW5lci5wdXNoKCBoYW5kbGVyICksIGhvbGRlciApO1xuXG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0bGV0IGVtaXR0ZXIgPSBmZXJnZSggdGhpcywgXCJFdmVudEVtaXR0ZXJcIiApO1xuXG5cdFx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uY2UoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiB0aGlzLmhhbmRsZSggZXZlbnQsIGhhbmRsZXIsIHRydWUgKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdFRoaXMgaXMgb3VyIG93biBub3RpZmljYXRpb24gdGhhdCB0aGUgZXZlbnQgaGFzIGJlZW4gYWRkZWQgb25jZS5cblxuXHRcdFx0XHROb3RlIHRoYXQgd2Ugd2lsbCBub3Qgbm90aWZ5IGlmIHRoZSBldmVudCBpcyBhbiBpZGVudGl0eSBldmVudCBvclxuXHRcdFx0XHRcdFwiZGlzYWJsZU9uY2VMaXN0ZW5lck5vdGlmaWNhdGlvblwiIGlzIGVuYWJsZWQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCAhZW1iZWRkKCB0aGlzLCBldmVudCApICYmICFvcHRpb24uZGlzYWJsZU9uY2VMaXN0ZW5lck5vdGlmaWNhdGlvbiApe1xuXHRcdFx0dGhpcy5lbWl0KCBgJHsgaWRudHR5KCB0aGlzICkudG9TdHJpbmcoICkgfTpvbmNlLWxpc3RlbmVyLWFkZGVkYCwgZXZlbnQsIGhhbmRsZXJMaXN0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRpZiggdGhpc1sgTElNSVQgXSA8PSAwICl7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmhhc0V2ZW50KCBldmVudCApICl7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdFx0ZW1pdHRlci5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0dGhpcy5ub3RpZnkuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0XHR9XG5cblx0XHR9ZWxzZXtcblx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggKCApID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdFx0fSwgdGhpc1sgVElNRU9VVCBdICk7XG5cblx0XHRcdHRoaXNbIExJTUlUIF0tLTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuaW52b2tlID0gZnVuY3Rpb24gaW52b2tlKCBldmVudCwgcGFyYW1ldGVyLCBsaW1pdCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiLFxuXHRcdFx0XHRcdFwibGltaXRcIjogXCJFdmVudExpc3RcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRcdGxpbWl0ID0gYXN5dW0oIHB5cCggcGFyYW1ldGVyLCBFdmVudExpc3QgKSwgZnVuY3Rpb24gaGFzRXZlbnQoICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSApO1xuXG5cdFx0aWYoIGxpbWl0Lmhhc0V2ZW50KCB0aGlzICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGFzeXVtKCBweXAoIHBhcmFtZXRlciwgRXZlbnRMaXN0ICksIGZ1bmN0aW9uIHB1c2goIGV2ZW50ICl7XG5cdFx0XHRwYXJhbWV0ZXIucHVzaCggRXZlbnRMaXN0KCBldmVudCApICk7XG5cdFx0fSApLnB1c2goIHRoaXMgKTtcblxuXHRcdGlmKCB0aGlzLmhhc0V2ZW50KCBldmVudCApICl7XG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0bGV0IGVtaXR0ZXIgPSBmZXJnZSggdGhpcywgXCJFdmVudEVtaXR0ZXJcIiApO1xuXG5cdFx0XHRcdGVtaXR0ZXIuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdHRoaXMubm90aWZ5LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KCB0aW1lb3V0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aW1lb3V0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCB0aW1lb3V0ICkgfHwgIXByb3R5cGUoIHRpbWVvdXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0aW1lb3V0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBUSU1FT1VUIF0gPSB0aW1lb3V0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLnJlc3RyaWN0ID0gZnVuY3Rpb24gcmVzdHJpY3QoIGxpbWl0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJsaW1pdDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggbGltaXQgKSB8fCAhcHJvdHlwZSggbGltaXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaW1pdFwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgTElNSVQgXSA9IGxpbWl0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmJyb2FkY2FzdCA9IGZ1bmN0aW9uIGJyb2FkY2FzdCggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0ZXZlbnQgPSBwbG91Z2goIFsgZXZlbnQgXSApO1xuXG5cdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCggZXZlbnQgKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVyQ291bnQoIGV2ZW50ICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCBrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5jb3VudCggKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDA7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHR0aGlzLmxpc3QoICkuZm9yRWFjaCggKCBldmVudCApID0+IGFzeXVtKCB0aGlzLmhvbGRlciggZXZlbnQgKSwgZnVuY3Rpb24gZmx1c2goICl7IH0gKS5mbHVzaCggKSApO1xuXG5cdFx0XHR0aGlzLnJlbW92ZUFsbExpc3RlbmVycyggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0dmFsdSggdGhpc1sgSEFORExFUiBdICkuZm9yRWFjaCggKCBoYW5kbGVyICkgPT4gaGFuZGxlci5mbHVzaCggKSApO1xuXG5cdFx0XHRPYmplY3Qua2V5cyggdGhpc1sgSEFORExFUiBdICkuZm9yRWFjaCggKCBldmVudCApID0+ICggZGVsZXRlIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXSApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHR3aGlsZSggdGhpc1sgTElOSyBdLmxlbmd0aCApIHRoaXNbIExJTksgXS5wb3AoICkuZmx1c2goICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRCaS1kaXJlY3Rpb25hbCBmb3J3YXJkIGZsb3cgbWVyZ2luZyBvZiBldmVudCBoYW5kbGVycy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5tZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgbWVyZ2UgZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdHRoaXMudHJhbnNmZXIoIGV2ZW50ICk7XG5cdFx0ZXZlbnQudHJhbnNmZXIoIHRoaXMgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdFRyYW5zZmVyIGV2ZW50IGhhbmRsZXJzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLnRyYW5zZmVyID0gZnVuY3Rpb24gdHJhbnNmZXIoIGV2ZW50ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFjbGF6b2YoIGV2ZW50LCBcIkV2ZW50XCIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCB0cmFuc2ZlciBmcm9tIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cblx0XHRpbmZyYXkoIGV2ZW50Lmxpc3QoICksIHRoaXMubGlzdCggKSApXG5cdFx0XHQuZm9yRWFjaCggKCBuYW1lICkgPT4ge1xuXHRcdFx0XHQvKjtcblx0XHRcdFx0XHRAbm90ZTpcblx0XHRcdFx0XHRcdElkZW50aXR5IGV2ZW50cyBhcmUgbm90IGNvcGllZC5cblx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0Ki9cblx0XHRcdFx0aWYoIGVtYmVkZCggdGhpcywgbmFtZSApIHx8IGVtYmVkZCggZXZlbnQsIG5hbWUgKSApe1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8qO1xuXHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0SWYgZXZlbnQgaXMgYWxyZWFkeSBsaW5rLCBkbyBub3QgbGluayBpdCBhbnltb3JlLlxuXHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHQqL1xuXHRcdFx0XHRpZiggdGhpcy5oYXNMaW5rKCBuYW1lLCBldmVudCApICl7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGludm9rZSA9IGZ1bmN0aW9uIGludm9rZSggKXtcblx0XHRcdFx0XHRsZXQgcGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0XHRhc3l1bSggcHlwKCBwYXJhbWV0ZXIsIEV2ZW50TGlzdCApLCBmdW5jdGlvbiBwdXNoKCBldmVudCApe1xuXHRcdFx0XHRcdFx0cGFyYW1ldGVyLnB1c2goIEV2ZW50TGlzdCggZXZlbnQgKSApO1xuXHRcdFx0XHRcdH0gKS5wdXNoKCBzZWxmICk7XG5cblx0XHRcdFx0XHRldmVudC5pbnZva2UuYXBwbHkoIGV2ZW50LCBbIG5hbWUgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgaW52b2tlICk7XG5cblx0XHRcdFx0YXN5dW0oIGludm9rZSwgZnVuY3Rpb24gbGlua2VkVG8oICl7IH0gKS5saW5rZWRUbyggZXZlbnQgKTtcblx0XHRcdH0gKTtcblxuXHRcdGxldCBpZGVudGl0eSA9IGlkbnR0eSggdGhpcyApLnRvU3RyaW5nKCApO1xuXHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9Om9uLWxpc3RlbmVyLWFkZGVkYCwgZnVuY3Rpb24gb25MaXN0ZW5lckFkZGVkKCBuYW1lICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0TmFtZSBvZiBldmVudHMgYXJlIGluIGFycmF5LlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cblx0XHRcdGlmKCBldmVudC5oYXZlTGluayggbmFtZSwgc2VsZiApICl7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0bGV0IGludm9rZSA9IGZ1bmN0aW9uIGludm9rZSggKXtcblx0XHRcdFx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRcdGFzeXVtKCBweXAoIHBhcmFtZXRlciwgRXZlbnRMaXN0ICksIGZ1bmN0aW9uIHB1c2goIGV2ZW50ICl7XG5cdFx0XHRcdFx0cGFyYW1ldGVyLnB1c2goIEV2ZW50TGlzdCggZXZlbnQgKSApO1xuXHRcdFx0XHR9ICkucHVzaCggZXZlbnQgKTtcblxuXHRcdFx0XHRuYW1lLmZvckVhY2goICggbmFtZSApID0+IHNlbGYuaW52b2tlLmFwcGx5KCBzZWxmLCBbIG5hbWUgXS5jb25jYXQoIHBhcmFtZXRlciApICkgKTtcblx0XHRcdH07XG5cblx0XHRcdGV2ZW50Lm9uKCBuYW1lLCBpbnZva2UgKTtcblxuXHRcdFx0YXN5dW0oIGludm9rZSwgZnVuY3Rpb24gbGlua2VkVG8oICl7IH0gKS5saW5rZWRUbyggc2VsZiApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMub24oIGAkeyBpZGVudGl0eSB9Om9uY2UtbGlzdGVuZXItYWRkZWRgLCBmdW5jdGlvbiBvbmNlTGlzdGVuZXJBZGRlZCggbmFtZSApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdE5hbWUgb2YgZXZlbnRzIGFyZSBpbiBhcnJheS5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZXZlbnQuaGF2ZUxpbmsoIG5hbWUsIHNlbGYgKSApe1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGxldCBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoICl7XG5cdFx0XHRcdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHRhc3l1bSggcHlwKCBwYXJhbWV0ZXIsIEV2ZW50TGlzdCApLCBmdW5jdGlvbiBwdXNoKCBldmVudCApe1xuXHRcdFx0XHRcdHBhcmFtZXRlci5wdXNoKCBFdmVudExpc3QoIGV2ZW50ICkgKTtcblx0XHRcdFx0fSApLnB1c2goIGV2ZW50ICk7XG5cblx0XHRcdFx0bmFtZS5mb3JFYWNoKCAoIG5hbWUgKSA9PiBzZWxmLmludm9rZS5hcHBseSggc2VsZiwgWyBuYW1lIF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cdFx0XHR9O1xuXG5cdFx0XHRldmVudC5vbmNlKCBuYW1lLCBpbnZva2UgKTtcblxuXHRcdFx0YXN5dW0oIGludm9rZSwgZnVuY3Rpb24gbGlua2VkVG8oICl7IH0gKS5saW5rZWRUbyggc2VsZiApO1xuXHRcdH0gKTtcblxuXHRcdHRoaXMubGluayggZXZlbnQgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24gbGluayggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGxpbmsgZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdGlmKCAhZWVuKCB0aGlzWyBMSU5LIF0sIGV2ZW50LCAoIGxpbmssIGV2ZW50ICkgPT4gaWRudGZ5KCBsaW5rLCBldmVudCApICkgKXtcblx0XHRcdHRoaXNbIExJTksgXS5wdXNoKCBldmVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdExpc3QgcmVnaXN0ZXJlZCBldmVudCBuYW1lcy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24gbGlzdCggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmV2ZW50TmFtZXMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyggdGhpc1sgSEFORExFUiBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0TGlzdCB0aGUgaGFuZGxlcnMgb2YgdGhlIGV2ZW50LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0cmV0dXJuIFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVycyggZXZlbnQgKS5yZWR1Y2UoICggbGlzdCwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdHJldHVybiBsaXN0LmNvbmNhdCggaGFuZGxlci5saXN0KCApICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgWyBdICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCAha2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiBbIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubGlzdCggKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRSZXR1cm4gdGhlIEhhbmRsZXIgdGhhdCBob2xkcyB0aGUgaGFuZGxlciBwcm9jZWR1cmVzLlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhvbGRlciA9IGZ1bmN0aW9uIGhvbGRlciggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltzdHJpbmddLFxuXHRcdFx0XHRcdFx0XCIuLi5cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGV2ZW50ID0gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgU1RSSU5HICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiBldmVudC5yZWR1Y2UoICggaG9sZGVyLCBldmVudCApID0+IHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGlzdGVuZXJzKCBldmVudCApLnJlZHVjZSggKCBob2xkZXIsIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXI7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGhvbGRlcjtcblx0XHRcdFx0fSwgdW5kZWZpbmVkICk7XG5cdFx0XHR9LCB1bmRlZmluZWQgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0cmV0dXJuIGV2ZW50LnJlZHVjZSggKCBob2xkZXIsIGV2ZW50ICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpc1sgSEFORExFUiBdWyBldmVudCBdO1xuXHRcdFx0fSwgdW5kZWZpbmVkICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0Q2hlY2tzIGlmIHRoZSBldmVudC1oYW5kbGVyIGlzIHJlZ2lzdGVyZWQuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXG5cdFx0QHRvZG86XG5cdFx0XHRUaGlzIG5lZWRzIG9wdGltaXphdGlvbi5cblx0XHRAZW5kLXRvZG9cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLnJlZ2lzdGVyZWQgPSBmdW5jdGlvbiByZWdpc3RlcmVkKCBldmVudCwgaGFuZGxlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiW3N0cmluZ11cIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcIltmdW5jdGlvbl1cIixcblx0XHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGhhbmRsZXIgPSBweWNrKCBwbG91Z2goIGFyZ3VtZW50cyApLCBGVU5DVElPTiApO1xuXG5cdFx0cmV0dXJuIHB5Y2soIHBsb3VnaCggYXJndW1lbnRzICksIFNUUklORyApLnNvbWUoICggZXZlbnQgKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5oYW5kbGVyKCBldmVudCApLnNvbWUoICggbGlzdGVuZXIgKSA9PiB7XG5cdFx0XHRcdHJldHVybiBoYW5kbGVyLnNvbWUoICggaGFuZGxlciApID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaWRudGZ5KCBsaXN0ZW5lciwgaGFuZGxlciApIHx8IGVxZSggbGlzdGVuZXIsIGhhbmRsZXIgKTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuaGFzRXZlbnQgPSBmdW5jdGlvbiBoYXNFdmVudCggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFwcm90eXBlKCBldmVudCwgU1RSSU5HICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZWVuKCB0aGlzLmxpc3QoICksIGV2ZW50ICk7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmhhdmVFdmVudCA9IGZ1bmN0aW9uIGhhdmVFdmVudCggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiW3N0cmluZ11cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRldmVudCA9IHB5Y2soIHBsb3VnaCggYXJndW1lbnRzICksIFNUUklORyApO1xuXG5cdFx0bGV0IGxpc3QgPSB0aGlzLmxpc3QoICk7XG5cblx0XHRyZXR1cm4gZXZlbnQuc29tZSggKCBldmVudCApID0+IGVlbiggbGlzdCwgZXZlbnQgKSApO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5oYXNMaW5rID0gZnVuY3Rpb24gaGFzTGluayggZXZlbnQsIGxpbmsgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJsaW5rOnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdGlmKCBmYWx6eSggbGluayApIHx8ICFjbGF6b2YoIGxpbmssIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaW5rXCIgKTtcblx0XHR9XG5cblx0XHRsZXQgaG9sZGVyID0gdGhpcy5ob2xkZXIoIGV2ZW50ICk7XG5cdFx0aWYoIGZhbHp5KCBob2xkZXIgKSApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmKCAhZWVuKCB0aGlzWyBMSU5LIF0sIGxpbmssICggZXZlbnQsIGxpbmsgKSA9PiBpZG50ZnkoIGV2ZW50LCBsaW5rICkgKSApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGxpbmsgPSBpZG50dHkoIGxpbmsgKTtcblxuXHRcdHJldHVybiBlZW4oIGhvbGRlci5saXN0KCApLCBsaW5rLCAoIGhhbmRsZXIsIGxpbmsgKSA9PiAoIGhhbmRsZXIuZ2V0TGluayggKSA9PT0gbGluayApICk7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmhhdmVMaW5rID0gZnVuY3Rpb24gaGF2ZUxpbmsoIGV2ZW50LCBsaW5rICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImxpbms6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdGV2ZW50ID0gcHljayggcGxvdWdoKCBwYXJhbWV0ZXIgKSwgU1RSSU5HICk7XG5cblx0XHRpZiggYXJpZCggZXZlbnQgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdGxpbmsgPSBweXAoIHBhcmFtZXRlciwgXCJFdmVudFwiICk7XG5cblx0XHRpZiggZmFsenkoIGxpbmsgKSB8fCAhY2xhem9mKCBsaW5rLCBcIkV2ZW50XCIgKSApe1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbGlua1wiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnNvbWUoICggZXZlbnQgKSA9PiB0aGlzLmhhc0xpbmsoIGV2ZW50LCBsaW5rICkgKTtcblx0fTtcblxuXHQvLzogQGNsaWVudDpcblx0aWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0RXZlbnQucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLmFwcGx5KCBzZWxmLCBwYXJhbWV0ZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fTtcblxuXHRcdEV2ZW50LnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiBoYW5kbGUoIGV2ZW50LCBoYW5kbGVyLCBvbmNlICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJvbmNlXCI6IFwiYm9vbGVhblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFwcm90eXBlKCBldmVudCwgU1RSSU5HICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZmFsenkoIGhhbmRsZXIgKSB8fCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBoYW5kbGVyXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Lyo7XG5cdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdElmIHRoZSBldmVudCBpcyBub3QgeWV0IHJlZ2lzdGVyZWQsIGNyZWF0ZSBhIGhhbmRsZXIgY29sbGVjdGlvbi5cblx0XHRcdFx0QGVuZC1ub3RlXG5cdFx0XHQqL1xuXHRcdFx0aWYoICFrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0aWYoICFjbGF6b2YoIGhhbmRsZXIsIFwiSGFuZGxlclwiICkgKXtcblx0XHRcdFx0XHRpZiggb25jZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0aGFuZGxlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoYW5kbGVyID0gbGlzdGVuZXIoICkucHVzaCggaGFuZGxlciApLmNvbnRleHQoIHNlbGYgKS5yZWdpc3RlciggdGhpcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdID0gaGFuZGxlcjtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdC8qO1xuXHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIHJlZ2lzdGVyZWQsIG1ha2Ugc3VyZSB3ZSBhcmUgcHVzaGluZyB0aGUgaGFuZGxlciBmdW5jdGlvblxuXHRcdFx0XHRcdFx0XHRub3QgdGhlIGhhbmRsZXIgY29sbGVjdGlvbiwgaWYgd2UgZW5jb3VudGVyIGEgaGFuZGxlciBjb2xsZWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRtZXJnZSBpdC5cblx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0Ki9cblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyLmxvY2soICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLm1lcmdlKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdGhhbmRsZXIgPSBjYWxsZWQuYmluZCggc2VsZiApKCBoYW5kbGVyICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdLnB1c2goIGhhbmRsZXIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXHR9XG5cdC8vOiBAZW5kLWNsaWVudFxuXG5cdFxuXG5cdGlmKCBhcmlkKCBwYXJhbWV0ZXIgKSApe1xuXHRcdHJldHVybiBFdmVudDtcblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gRXZlbnQuYXBwbHkoIG51bGwsIHBhcmFtZXRlciApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVkbztcbiJdfQ==
//# sourceMappingURL=edo.support.js.map
