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
              			"arkount": "arkount",
              			"asea": "asea",
              			"budge": "budge",
              			"called": "called",
              			"clazof": "clazof",
              			"diatom": "diatom",
              			"EventEmitter": "events"
              			"exorcise": "exorcise",
              			"falzy": "falzy",
              			"filled": "filled",
              			"harden": "harden",
              			"heredito": "heredito",
              			"inface": "inface",
              			"kein": "kein",
              			"leveld": "leveld",
              			"plough": "plough",
              			"protype": "protype",
              			"pyck": "pyck",
              			"raze": "raze",
              			"statis": "statis",
              			"symbiote": "symbiote",
              			"valu": "valu",
              			"zelf": "zelf"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var arid = require("arid");
var arkount = require("arkount");
var asea = require("asea");
var budge = require("budge");
var called = require("called");
var clazof = require("clazof");
var diatom = require("diatom");
var falzy = require("falzy");
var filled = require("filled");
var harden = require("harden");
var heredito = require("heredito");
var inface = require("inface");
var kein = require("kein");
var leveld = require("leveld");
var plough = require("plough");
var protype = require("protype");
var pyck = require("pyck");
var raze = require("raze");
var statis = require("statis");
var symbiote = require("symbiote");
var valu = require("valu");
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
	}).
	implement("count", function count() {
		return arkount(this[HANDLER]);
	}).
	implement("flush", function flush() {
		while (filled(this[HANDLER])) {this[HANDLER].pop();}

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

		harden(HANDLER, {}, this);

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

		handler = pyck(parameter, FUNCTION).
		reduce(function (delegate, handler) {return delegate.push(handler);}, Handler).
		context(self).
		register(this);

		if (asea.server) {
			var emitter = inface(this, EventEmitter);

			event.forEach(function (event) {return emitter.on(event, handler);});

		} else if (asea.client) {
			event.forEach(function (event) {return _this2.record(event, handler);});

		} else {
			throw new Error("cannot determine platform, platform not supported");
		}

		return this;
	};

	Event.prototype.once = function once(event, handler) {var _this3 = this;
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

		handler = pyck(parameter, FUNCTION).
		map(function (handler) {return called.bind(self)(handler);}).
		reduce(function (delegate, handler) {return delegate.push(handler);}, Handler).
		context(self).
		register(this);

		handler = called(handler);

		if (asea.server) {
			var emitter = inface(this, EventEmitter);

			event.forEach(function (event) {return emitter.once(event, handler);});

		} else if (asea.client) {
			event.forEach(function (event) {return _this3.record(event, handler, true);});

		} else {
			throw new Error("cannot determine platform, platform not supported");
		}

		return this;
	};

	Event.prototype.emit = function emit(event, parameter) {var _this4 = this;
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
				_this4.emit.apply(_this4, [event].concat(parameter));

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

	Event.prototype.broadcast = function broadcast(event, parameter) {var _this5 = this;
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

		event.forEach(function (event) {return _this5.emit.apply(_this5, [event].concat(parameter));});

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

		Event.prototype.record = function record(event, handler, once) {
			/*;
                                                                  	@meta-configuration:
                                                                  		{
                                                                  			"event:required": "string",
                                                                  			"handler:required": "function",
                                                                  			"once": "boolean"
                                                                  		}
                                                                  	@end-meta-configuration
                                                                  */

			if (!clazof(handler, "Handler")) {
				handler = Handler.push(handler).
				context(self).
				register(this);
			}

			if (once === true) {
				handler = called(handler);
			}

			if (!kein(event, this[HANDLER])) {
				this[HANDLER][event] = handler;

			} else {
				this[HANDLER][event].push(handler);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXJrb3VudCIsImFzZWEiLCJidWRnZSIsImNhbGxlZCIsImNsYXpvZiIsImRpYXRvbSIsImZhbHp5IiwiZmlsbGVkIiwiaGFyZGVuIiwiaGVyZWRpdG8iLCJpbmZhY2UiLCJrZWluIiwibGV2ZWxkIiwicGxvdWdoIiwicHJvdHlwZSIsInB5Y2siLCJyYXplIiwic3RhdGlzIiwic3ltYmlvdGUiLCJ2YWx1IiwiemVsZiIsIkNPTlRFWFQiLCJFVkVOVCIsIkhBTkRMRVIiLCJMSU1JVCIsIlRJTUVPVVQiLCJERUZBVUxUX1RJTUVPVVQiLCJERUZBVUxUX0xJTUlUIiwiZWRvIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwic2VsZiIsIkhhbmRsZXIiLCJhdHRhY2giLCJpbXBsZW1lbnQiLCJwdXNoIiwiaGFuZGxlciIsIkZVTkNUSU9OIiwiRXJyb3IiLCJjb250ZXh0IiwicmVnaXN0ZXIiLCJldmVudCIsImNvdW50IiwiZmx1c2giLCJwb3AiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwiZXhlY3V0ZSIsImFwcGx5IiwiZm9yRWFjaCIsImVycm9yIiwiZW1pdCIsIkV2ZW50IiwiZGVsYXkiLCJyZXN0cmljdCIsIm9uIiwiU1RSSU5HIiwicmVkdWNlIiwiZGVsZWdhdGUiLCJzZXJ2ZXIiLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiY2xpZW50IiwicmVjb3JkIiwib25jZSIsIm1hcCIsImJpbmQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsImNvbmNhdCIsImNsZWFyVGltZW91dCIsIm5vdGlmeSIsIk5VTUJFUiIsImxpbWl0IiwiYnJvYWRjYXN0IiwibGlzdGVuZXJDb3VudCIsInJlbW92ZUFsbExpc3RlbmVycyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyRUEsSUFBTUEsT0FBT0MsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNQyxVQUFVRCxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNRSxPQUFPRixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1HLFFBQVFILFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUksU0FBU0osUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSyxTQUFTTCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1NLFNBQVNOLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU8sUUFBUVAsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNUSxTQUFTUixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1TLFNBQVNULFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVUsV0FBV1YsUUFBUyxVQUFULENBQWpCO0FBQ0EsSUFBTVcsU0FBU1gsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNWSxPQUFPWixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1hLFNBQVNiLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTWMsU0FBU2QsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNZSxVQUFVZixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNZ0IsT0FBT2hCLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTWlCLE9BQU9qQixRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1rQixTQUFTbEIsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNbUIsV0FBV25CLFFBQVMsVUFBVCxDQUFqQjtBQUNBLElBQU1vQixPQUFPcEIsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNcUIsT0FBT3JCLFFBQVMsTUFBVCxDQUFiOzs7O0FBSUEsSUFBTXNCLFVBQVUsc0JBQVEsU0FBUixDQUFoQjtBQUNBLElBQU1DLFFBQVEsc0JBQVEsT0FBUixDQUFkO0FBQ0EsSUFBTUMsVUFBVSxzQkFBUSxTQUFSLENBQWhCO0FBQ0EsSUFBTUMsUUFBUSxzQkFBUSxPQUFSLENBQWQ7QUFDQSxJQUFNQyxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsa0JBQWtCLElBQXhCO0FBQ0EsSUFBTUMsZ0JBQWdCLElBQXRCOztBQUVBLElBQU1DLE1BQU0sU0FBU0EsR0FBVCxDQUFjQyxTQUFkLEVBQXlCO0FBQ3BDOzs7Ozs7OztBQVFBQSxhQUFZYixLQUFNYyxTQUFOLENBQVo7O0FBRUEsS0FBSUMsT0FBT1gsS0FBTSxJQUFOLENBQVg7O0FBRUEsS0FBSVksVUFBVTNCLE9BQVEsU0FBUixDQUFkO0FBQ0FZLFFBQVFlLE9BQVI7QUFDRUMsT0FERixDQUNVVixPQURWLEVBQ21CLEVBRG5CO0FBRUVXLFVBRkYsQ0FFYSxNQUZiLEVBRXFCLFNBQVNDLElBQVQsQ0FBZUMsT0FBZixFQUF3QjtBQUMzQzs7Ozs7Ozs7QUFRQSxNQUFJLENBQUN0QixRQUFTc0IsT0FBVCxFQUFrQkMsUUFBbEIsQ0FBTCxFQUFtQztBQUNsQyxTQUFNLElBQUlDLEtBQUosQ0FBVywwQkFBWCxDQUFOO0FBQ0E7O0FBRUQsT0FBTWYsT0FBTixFQUFnQlksSUFBaEIsQ0FBc0JDLE9BQXRCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBbEJGO0FBbUJFRixVQW5CRixDQW1CYSxTQW5CYixFQW1Cd0IsU0FBU0ssT0FBVCxDQUFrQlIsSUFBbEIsRUFBd0I7QUFDOUM7Ozs7Ozs7O0FBUUEsT0FBTVYsT0FBTixJQUFrQkQsS0FBTVcsSUFBTixDQUFsQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQS9CRjtBQWdDRUcsVUFoQ0YsQ0FnQ2EsVUFoQ2IsRUFnQ3lCLFNBQVNNLFFBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ2pEOzs7Ozs7OztBQVFBLE1BQUluQyxNQUFPbUMsS0FBUCxLQUFrQixDQUFDckMsT0FBUXFDLEtBQVIsRUFBZSxPQUFmLENBQXZCLEVBQWlEO0FBQ2hELFNBQU0sSUFBSUgsS0FBSixDQUFXLGVBQVgsQ0FBTjtBQUNBOztBQUVELE9BQU1oQixLQUFOLElBQWdCbUIsS0FBaEI7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFoREY7QUFpREVQLFVBakRGLENBaURhLE9BakRiLEVBaURzQixTQUFTUSxLQUFULEdBQWlCO0FBQ3JDLFNBQU8xQyxRQUFTLEtBQU11QixPQUFOLENBQVQsQ0FBUDtBQUNBLEVBbkRGO0FBb0RFVyxVQXBERixDQW9EYSxPQXBEYixFQW9Ec0IsU0FBU1MsS0FBVCxHQUFpQjtBQUNyQyxTQUFPcEMsT0FBUSxLQUFNZ0IsT0FBTixDQUFSLENBQVAsR0FBbUMsS0FBTUEsT0FBTixFQUFnQnFCLEdBQWhCLEdBQW5DOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBeERGOztBQTBEQVosU0FBUWEsU0FBUixDQUFrQkMsVUFBbEIsR0FBK0IsU0FBU0EsVUFBVCxDQUFxQmpCLFNBQXJCLEVBQWdDO0FBQzlEOzs7Ozs7OztBQVFBQSxjQUFZYixLQUFNYyxTQUFOLENBQVo7O0FBRUEsT0FBS1MsT0FBTCxHQUFlUCxRQUFTWCxPQUFULENBQWY7QUFDQSxPQUFLb0IsS0FBTCxHQUFhVCxRQUFTVixLQUFULENBQWI7QUFDQSxPQUFLYyxPQUFMLEdBQWVKLFFBQVNULE9BQVQsQ0FBZjs7QUFFQSxPQUFLd0IsT0FBTCxDQUFhQyxLQUFiLENBQW9CLElBQXBCLEVBQTBCbkIsU0FBMUI7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFsQkQ7O0FBb0JBRyxTQUFRYSxTQUFSLENBQWtCRSxPQUFsQixHQUE0QixTQUFTQSxPQUFULENBQWtCbEIsU0FBbEIsRUFBNkI7QUFDeEQ7Ozs7Ozs7O0FBUUFBLGNBQVliLEtBQU1jLFNBQU4sQ0FBWjs7QUFFQSxPQUFLTSxPQUFMLENBQWFhLE9BQWIsQ0FBc0IsVUFBRWIsT0FBRixFQUFlO0FBQ3BDLE9BQUc7QUFDRkEsWUFBUVksS0FBUixDQUFlLE1BQUtULE9BQXBCLEVBQTZCVixTQUE3Qjs7QUFFQSxJQUhELENBR0MsT0FBT3FCLEtBQVAsRUFBYztBQUNkLFVBQUtULEtBQUwsQ0FBV1UsSUFBWCxDQUFpQixPQUFqQixFQUEwQkQsS0FBMUI7QUFDQTtBQUNELEdBUEQ7O0FBU0EsU0FBTyxJQUFQO0FBQ0EsRUFyQkQ7O0FBdUJBLEtBQUlFLFFBQVEvQyxPQUFRLE9BQVIsQ0FBWjs7QUFFQStDLE9BQU1QLFNBQU4sQ0FBZ0JDLFVBQWhCLEdBQTZCLFNBQVNBLFVBQVQsR0FBc0I7QUFDbEQsT0FBS08sS0FBTCxDQUFZM0IsZUFBWjtBQUNBLE9BQUs0QixRQUFMLENBQWUzQixhQUFmOztBQUVBbkIsU0FBUWUsT0FBUixFQUFpQixFQUFqQixFQUFzQixJQUF0Qjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQVBEOztBQVNBNkIsT0FBTVAsU0FBTixDQUFnQlUsRUFBaEIsR0FBcUIsU0FBU0EsRUFBVCxDQUFhZCxLQUFiLEVBQW9CTCxPQUFwQixFQUE2QjtBQUNqRDs7Ozs7Ozs7Ozs7O0FBWUEsTUFBSVAsWUFBWWpCLE9BQVFrQixTQUFSLENBQWhCOztBQUVBVyxVQUFRMUIsS0FBTWMsU0FBTixFQUFpQjJCLE1BQWpCLENBQVI7O0FBRUFwQixZQUFVckIsS0FBTWMsU0FBTixFQUFpQlEsUUFBakI7QUFDUm9CLFFBRFEsQ0FDQSxVQUFFQyxRQUFGLEVBQVl0QixPQUFaLFVBQXlCc0IsU0FBU3ZCLElBQVQsQ0FBZUMsT0FBZixDQUF6QixFQURBLEVBQ21ESixPQURuRDtBQUVSTyxTQUZRLENBRUNSLElBRkQ7QUFHUlMsVUFIUSxDQUdFLElBSEYsQ0FBVjs7QUFLQSxNQUFJdkMsS0FBSzBELE1BQVQsRUFBaUI7QUFDaEIsT0FBSUMsVUFBVWxELE9BQVEsSUFBUixFQUFjbUQsWUFBZCxDQUFkOztBQUVBcEIsU0FBTVEsT0FBTixDQUFlLFVBQUVSLEtBQUYsVUFBYW1CLFFBQVFMLEVBQVIsQ0FBWWQsS0FBWixFQUFtQkwsT0FBbkIsQ0FBYixFQUFmOztBQUVBLEdBTEQsTUFLTSxJQUFJbkMsS0FBSzZELE1BQVQsRUFBaUI7QUFDdEJyQixTQUFNUSxPQUFOLENBQWUsVUFBRVIsS0FBRixVQUFhLE9BQUtzQixNQUFMLENBQWF0QixLQUFiLEVBQW9CTCxPQUFwQixDQUFiLEVBQWY7O0FBRUEsR0FISyxNQUdEO0FBQ0osU0FBTSxJQUFJRSxLQUFKLENBQVcsbURBQVgsQ0FBTjtBQUNBOztBQUVELFNBQU8sSUFBUDtBQUNBLEVBbkNEOztBQXFDQWMsT0FBTVAsU0FBTixDQUFnQm1CLElBQWhCLEdBQXVCLFNBQVNBLElBQVQsQ0FBZXZCLEtBQWYsRUFBc0JMLE9BQXRCLEVBQStCO0FBQ3JEOzs7Ozs7Ozs7Ozs7QUFZQSxNQUFJUCxZQUFZakIsT0FBUWtCLFNBQVIsQ0FBaEI7O0FBRUFXLFVBQVExQixLQUFNYyxTQUFOLEVBQWlCMkIsTUFBakIsQ0FBUjs7QUFFQXBCLFlBQVVyQixLQUFNYyxTQUFOLEVBQWlCUSxRQUFqQjtBQUNSNEIsS0FEUSxDQUNILFVBQUU3QixPQUFGLFVBQWVqQyxPQUFPK0QsSUFBUCxDQUFhbkMsSUFBYixFQUFxQkssT0FBckIsQ0FBZixFQURHO0FBRVJxQixRQUZRLENBRUEsVUFBRUMsUUFBRixFQUFZdEIsT0FBWixVQUF5QnNCLFNBQVN2QixJQUFULENBQWVDLE9BQWYsQ0FBekIsRUFGQSxFQUVtREosT0FGbkQ7QUFHUk8sU0FIUSxDQUdDUixJQUhEO0FBSVJTLFVBSlEsQ0FJRSxJQUpGLENBQVY7O0FBTUFKLFlBQVVqQyxPQUFRaUMsT0FBUixDQUFWOztBQUVBLE1BQUluQyxLQUFLMEQsTUFBVCxFQUFpQjtBQUNoQixPQUFJQyxVQUFVbEQsT0FBUSxJQUFSLEVBQWNtRCxZQUFkLENBQWQ7O0FBRUFwQixTQUFNUSxPQUFOLENBQWUsVUFBRVIsS0FBRixVQUFhbUIsUUFBUUksSUFBUixDQUFjdkIsS0FBZCxFQUFxQkwsT0FBckIsQ0FBYixFQUFmOztBQUVBLEdBTEQsTUFLTSxJQUFJbkMsS0FBSzZELE1BQVQsRUFBaUI7QUFDdEJyQixTQUFNUSxPQUFOLENBQWUsVUFBRVIsS0FBRixVQUFhLE9BQUtzQixNQUFMLENBQWF0QixLQUFiLEVBQW9CTCxPQUFwQixFQUE2QixJQUE3QixDQUFiLEVBQWY7O0FBRUEsR0FISyxNQUdEO0FBQ0osU0FBTSxJQUFJRSxLQUFKLENBQVcsbURBQVgsQ0FBTjtBQUNBOztBQUVELFNBQU8sSUFBUDtBQUNBLEVBdENEOztBQXdDQWMsT0FBTVAsU0FBTixDQUFnQk0sSUFBaEIsR0FBdUIsU0FBU0EsSUFBVCxDQUFlVixLQUFmLEVBQXNCWixTQUF0QixFQUFpQztBQUN2RDs7Ozs7Ozs7O0FBU0FBLGNBQVkzQixNQUFPNEIsU0FBUCxDQUFaOztBQUVBLE1BQUksS0FBTU4sS0FBTixLQUFpQixDQUFyQixFQUF3QjtBQUN2QixRQUFLOEIsUUFBTCxDQUFlM0IsYUFBZjs7QUFFQSxVQUFPLElBQVA7QUFDQTs7QUFFRCxNQUFJLEtBQUtlLEtBQUwsQ0FBWUQsS0FBWixLQUF1QixDQUEzQixFQUE4QjtBQUM3QixPQUFJMEIsVUFBVUMsV0FBWSxZQUFPO0FBQ2hDLFdBQUtqQixJQUFMLENBQVVILEtBQVYsU0FBdUIsQ0FBRVAsS0FBRixFQUFVNEIsTUFBVixDQUFrQnhDLFNBQWxCLENBQXZCOztBQUVBeUMsaUJBQWNILE9BQWQ7QUFDQSxJQUphLEVBSVgsS0FBTTFDLE9BQU4sQ0FKVyxDQUFkOztBQU1BLFFBQU1ELEtBQU47O0FBRUEsR0FURCxNQVNLO0FBQ0osUUFBSzhCLFFBQUwsQ0FBZTNCLGFBQWY7O0FBRUEsT0FBSTFCLEtBQUswRCxNQUFULEVBQWlCO0FBQ2hCLFFBQUlDLFVBQVVsRCxPQUFRLElBQVIsRUFBY21ELFlBQWQsQ0FBZDs7QUFFQUQsWUFBUVQsSUFBUixDQUFhSCxLQUFiLENBQW9CLElBQXBCLEVBQTBCLENBQUVQLEtBQUYsRUFBVTRCLE1BQVYsQ0FBa0J4QyxTQUFsQixDQUExQjs7QUFFQSxJQUxELE1BS00sSUFBSTVCLEtBQUs2RCxNQUFULEVBQWlCO0FBQ3RCLFNBQUtTLE1BQUwsQ0FBWXZCLEtBQVosQ0FBbUIsSUFBbkIsRUFBeUIsQ0FBRVAsS0FBRixFQUFVNEIsTUFBVixDQUFrQnhDLFNBQWxCLENBQXpCOztBQUVBLElBSEssTUFHRDtBQUNKLFVBQU0sSUFBSVMsS0FBSixDQUFXLG1EQUFYLENBQU47QUFDQTtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNBLEVBNUNEOztBQThDQWMsT0FBTVAsU0FBTixDQUFnQlEsS0FBaEIsR0FBd0IsU0FBU0EsS0FBVCxDQUFnQmMsT0FBaEIsRUFBeUI7QUFDaEQ7Ozs7Ozs7O0FBUUEsTUFBSTdELE1BQU82RCxPQUFQLEtBQW9CLENBQUNyRCxRQUFTcUQsT0FBVCxFQUFrQkssTUFBbEIsQ0FBekIsRUFBcUQ7QUFDcEQsU0FBTSxJQUFJbEMsS0FBSixDQUFXLGlCQUFYLENBQU47QUFDQTs7QUFFRCxPQUFNYixPQUFOLElBQWtCMEMsT0FBbEI7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFoQkQ7O0FBa0JBZixPQUFNUCxTQUFOLENBQWdCUyxRQUFoQixHQUEyQixTQUFTQSxRQUFULENBQW1CbUIsS0FBbkIsRUFBMEI7QUFDcEQ7Ozs7Ozs7O0FBUUEsTUFBSW5FLE1BQU9tRSxLQUFQLEtBQWtCLENBQUMzRCxRQUFTMkQsS0FBVCxFQUFnQkQsTUFBaEIsQ0FBdkIsRUFBaUQ7QUFDaEQsU0FBTSxJQUFJbEMsS0FBSixDQUFXLGVBQVgsQ0FBTjtBQUNBOztBQUVELE9BQU1kLEtBQU4sSUFBZ0JpRCxLQUFoQjs7QUFFQSxTQUFPLElBQVA7QUFDQSxFQWhCRDs7QUFrQkFyQixPQUFNUCxTQUFOLENBQWdCNkIsU0FBaEIsR0FBNEIsU0FBU0EsU0FBVCxDQUFvQmpDLEtBQXBCLEVBQTJCWixTQUEzQixFQUFzQztBQUNqRTs7Ozs7Ozs7O0FBU0FZLFVBQVE1QixPQUFRLENBQUU0QixLQUFGLENBQVIsQ0FBUjs7QUFFQVosY0FBWTNCLE1BQU80QixTQUFQLENBQVo7O0FBRUFXLFFBQU1RLE9BQU4sQ0FBZSxVQUFFUixLQUFGLFVBQWEsT0FBS1UsSUFBTCxDQUFVSCxLQUFWLFNBQXVCLENBQUVQLEtBQUYsRUFBVTRCLE1BQVYsQ0FBa0J4QyxTQUFsQixDQUF2QixDQUFiLEVBQWY7O0FBRUEsU0FBTyxJQUFQO0FBQ0EsRUFqQkQ7O0FBbUJBdUIsT0FBTVAsU0FBTixDQUFnQkgsS0FBaEIsR0FBd0IsU0FBU0EsS0FBVCxDQUFnQkQsS0FBaEIsRUFBdUI7QUFDOUMsTUFBSXhDLEtBQUswRCxNQUFULEVBQWlCO0FBQ2hCLFVBQU8sS0FBS2dCLGFBQUwsQ0FBb0JsQyxLQUFwQixDQUFQOztBQUVBLEdBSEQsTUFHTSxJQUFJeEMsS0FBSzZELE1BQVQsRUFBaUI7QUFDdEIsT0FBSW5ELEtBQU04QixLQUFOLEVBQWEsS0FBTWxCLE9BQU4sQ0FBYixDQUFKLEVBQW9DO0FBQ25DLFdBQU8sS0FBTUEsT0FBTixFQUFpQmtCLEtBQWpCLEVBQXlCQyxLQUF6QixFQUFQO0FBQ0E7O0FBRUQsVUFBTyxDQUFQOztBQUVBLEdBUEssTUFPRDtBQUNKLFNBQU0sSUFBSUosS0FBSixDQUFXLG1EQUFYLENBQU47QUFDQTtBQUNELEVBZEQ7O0FBZ0JBYyxPQUFNUCxTQUFOLENBQWdCRixLQUFoQixHQUF3QixTQUFTQSxLQUFULEdBQWlCO0FBQ3hDLE1BQUkxQyxLQUFLMEQsTUFBVCxFQUFpQjtBQUNoQixRQUFLaUIsa0JBQUw7O0FBRUEsR0FIRCxNQUdNLElBQUkzRSxLQUFLNkQsTUFBVCxFQUFpQjtBQUN0QjNDLFFBQU0sS0FBTUksT0FBTixDQUFOLEVBQXdCMEIsT0FBeEIsQ0FBaUMsVUFBRWIsT0FBRixVQUFlQSxRQUFRTyxLQUFSLEVBQWYsRUFBakM7O0FBRUEsR0FISyxNQUdEO0FBQ0osU0FBTSxJQUFJTCxLQUFKLENBQVcsbURBQVgsQ0FBTjtBQUNBOztBQUVELFNBQU8sSUFBUDtBQUNBLEVBWkQ7O0FBY0E7QUFDQSxLQUFJckMsS0FBSzZELE1BQVQsRUFBaUI7QUFDaEJWLFFBQU1QLFNBQU4sQ0FBZ0IwQixNQUFoQixHQUF5QixTQUFTQSxNQUFULENBQWlCOUIsS0FBakIsRUFBd0JaLFNBQXhCLEVBQW1DO0FBQzNEOzs7Ozs7Ozs7QUFTQSxPQUFJbEIsS0FBTThCLEtBQU4sRUFBYSxLQUFNbEIsT0FBTixDQUFiLENBQUosRUFBb0M7QUFDbkNNLGdCQUFZM0IsTUFBTzRCLFNBQVAsQ0FBWjs7QUFFQSxTQUFNUCxPQUFOLEVBQWlCa0IsS0FBakIsRUFBeUJPLEtBQXpCLENBQWdDakIsSUFBaEMsRUFBc0NGLFNBQXRDO0FBQ0E7O0FBRUQsVUFBTyxJQUFQO0FBQ0EsR0FqQkQ7O0FBbUJBdUIsUUFBTVAsU0FBTixDQUFnQmtCLE1BQWhCLEdBQXlCLFNBQVNBLE1BQVQsQ0FBaUJ0QixLQUFqQixFQUF3QkwsT0FBeEIsRUFBaUM0QixJQUFqQyxFQUF1QztBQUMvRDs7Ozs7Ozs7OztBQVVBLE9BQUksQ0FBQzVELE9BQVFnQyxPQUFSLEVBQWlCLFNBQWpCLENBQUwsRUFBbUM7QUFDbENBLGNBQVVKLFFBQVFHLElBQVIsQ0FBY0MsT0FBZDtBQUNSRyxXQURRLENBQ0NSLElBREQ7QUFFUlMsWUFGUSxDQUVFLElBRkYsQ0FBVjtBQUdBOztBQUVELE9BQUl3QixTQUFTLElBQWIsRUFBbUI7QUFDbEI1QixjQUFVakMsT0FBUWlDLE9BQVIsQ0FBVjtBQUNBOztBQUVELE9BQUksQ0FBQ3pCLEtBQU04QixLQUFOLEVBQWEsS0FBTWxCLE9BQU4sQ0FBYixDQUFMLEVBQXFDO0FBQ3BDLFNBQU1BLE9BQU4sRUFBaUJrQixLQUFqQixJQUEyQkwsT0FBM0I7O0FBRUEsSUFIRCxNQUdLO0FBQ0osU0FBTWIsT0FBTixFQUFpQmtCLEtBQWpCLEVBQXlCTixJQUF6QixDQUErQkMsT0FBL0I7QUFDQTs7QUFFRCxVQUFPLElBQVA7QUFDQSxHQTdCRDtBQThCQTtBQUNEOzs7O0FBSUEsS0FBSXRDLEtBQU0rQixTQUFOLENBQUosRUFBdUI7QUFDdEIsU0FBT3VCLEtBQVA7O0FBRUEsRUFIRCxNQUdLO0FBQ0osU0FBT0EsTUFBTUosS0FBTixDQUFhLElBQWIsRUFBbUJuQixTQUFuQixDQUFQO0FBQ0E7QUFDRCxDQTVZRDs7QUE4WUFnRCxPQUFPQyxPQUFQLEdBQWlCbEQsR0FBakIiLCJmaWxlIjoiZWRvLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWRvL2Vkby5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZWRvLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWRvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWRvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0RXZlbnRFbWl0dGVyIGV4dGVuc2lvbi5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJpZFwiOiBcImFyaWRcIixcblx0XHRcdFwiYXJrb3VudFwiOiBcImFya291bnRcIixcblx0XHRcdFwiYXNlYVwiOiBcImFzZWFcIixcblx0XHRcdFwiYnVkZ2VcIjogXCJidWRnZVwiLFxuXHRcdFx0XCJjYWxsZWRcIjogXCJjYWxsZWRcIixcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJFdmVudEVtaXR0ZXJcIjogXCJldmVudHNcIlxuXHRcdFx0XCJleG9yY2lzZVwiOiBcImV4b3JjaXNlXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiZmlsbGVkXCI6IFwiZmlsbGVkXCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImluZmFjZVwiOiBcImluZmFjZVwiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInB5Y2tcIjogXCJweWNrXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInN0YXRpc1wiOiBcInN0YXRpc1wiLFxuXHRcdFx0XCJzeW1iaW90ZVwiOiBcInN5bWJpb3RlXCIsXG5cdFx0XHRcInZhbHVcIjogXCJ2YWx1XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXJpZCA9IHJlcXVpcmUoIFwiYXJpZFwiICk7XG5jb25zdCBhcmtvdW50ID0gcmVxdWlyZSggXCJhcmtvdW50XCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3QgaW5mYWNlID0gcmVxdWlyZSggXCJpbmZhY2VcIiApO1xuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XG5jb25zdCBsZXZlbGQgPSByZXF1aXJlKCBcImxldmVsZFwiICk7XG5jb25zdCBwbG91Z2ggPSByZXF1aXJlKCBcInBsb3VnaFwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcInB5Y2tcIiApO1xuY29uc3QgcmF6ZSA9IHJlcXVpcmUoIFwicmF6ZVwiICk7XG5jb25zdCBzdGF0aXMgPSByZXF1aXJlKCBcInN0YXRpc1wiICk7XG5jb25zdCBzeW1iaW90ZSA9IHJlcXVpcmUoIFwic3ltYmlvdGVcIiApO1xuY29uc3QgdmFsdSA9IHJlcXVpcmUoIFwidmFsdVwiICk7XG5jb25zdCB6ZWxmID0gcmVxdWlyZSggXCJ6ZWxmXCIgKTtcblxuXG5cbmNvbnN0IENPTlRFWFQgPSBTeW1ib2woIFwiY29udGV4dFwiICk7XG5jb25zdCBFVkVOVCA9IFN5bWJvbCggXCJldmVudFwiICk7XG5jb25zdCBIQU5ETEVSID0gU3ltYm9sKCBcImhhbmRsZXJcIiApO1xuY29uc3QgTElNSVQgPSBTeW1ib2woIFwibGltaXRcIiApO1xuY29uc3QgVElNRU9VVCA9IFN5bWJvbCggXCJ0aW1lb3V0XCIgKTtcblxuY29uc3QgREVGQVVMVF9USU1FT1VUID0gMTAwMDtcbmNvbnN0IERFRkFVTFRfTElNSVQgPSAxMDAwO1xuXG5jb25zdCBlZG8gPSBmdW5jdGlvbiBlZG8oIHBhcmFtZXRlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRsZXQgSGFuZGxlciA9IGRpYXRvbSggXCJIYW5kbGVyXCIgKTtcblx0c3RhdGlzKCBIYW5kbGVyIClcblx0XHQuYXR0YWNoKCBIQU5ETEVSLCBbIF0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicHVzaFwiLCBmdW5jdGlvbiBwdXNoKCBoYW5kbGVyICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXIgZnVuY3Rpb25cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBIQU5ETEVSIF0ucHVzaCggaGFuZGxlciApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImNvbnRleHRcIiwgZnVuY3Rpb24gY29udGV4dCggc2VsZiApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJzZWxmOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0dGhpc1sgQ09OVEVYVCBdID0gemVsZiggc2VsZiApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcInJlZ2lzdGVyXCIsIGZ1bmN0aW9uIHJlZ2lzdGVyKCBldmVudCApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV2ZW50XCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgRVZFTlQgXSA9IGV2ZW50O1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImNvdW50XCIsIGZ1bmN0aW9uIGNvdW50KCApe1xuXHRcdFx0cmV0dXJuIGFya291bnQoIHRoaXNbIEhBTkRMRVIgXSApO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiZmx1c2hcIiwgZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0XHR3aGlsZSggZmlsbGVkKCB0aGlzWyBIQU5ETEVSIF0gKSApIHRoaXNbIEhBTkRMRVIgXS5wb3AoICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKTtcblxuXHRIYW5kbGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuY29udGV4dCA9IEhhbmRsZXJbIENPTlRFWFQgXTtcblx0XHR0aGlzLmV2ZW50ID0gSGFuZGxlclsgRVZFTlQgXTtcblx0XHR0aGlzLmhhbmRsZXIgPSBIYW5kbGVyWyBIQU5ETEVSIF07XG5cblx0XHR0aGlzLmV4ZWN1dGUuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0SGFuZGxlci5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIGV4ZWN1dGUoIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLmhhbmRsZXIuZm9yRWFjaCggKCBoYW5kbGVyICkgPT4ge1xuXHRcdFx0dHJ5e1xuXHRcdFx0XHRoYW5kbGVyLmFwcGx5KCB0aGlzLmNvbnRleHQsIHBhcmFtZXRlciApO1xuXG5cdFx0XHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0XHRcdHRoaXMuZXZlbnQuZW1pdCggXCJlcnJvclwiLCBlcnJvciApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdGxldCBFdmVudCA9IGRpYXRvbSggXCJFdmVudFwiICk7XG5cblx0RXZlbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdHRoaXMuZGVsYXkoIERFRkFVTFRfVElNRU9VVCApO1xuXHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdGhhcmRlbiggSEFORExFUiwgeyB9LCB0aGlzICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbiggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKVxuXHRcdFx0LnJlZHVjZSggKCBkZWxlZ2F0ZSwgaGFuZGxlciApID0+IGRlbGVnYXRlLnB1c2goIGhhbmRsZXIgKSwgSGFuZGxlciApXG5cdFx0XHQuY29udGV4dCggc2VsZiApXG5cdFx0XHQucmVnaXN0ZXIoIHRoaXMgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0bGV0IGVtaXR0ZXIgPSBpbmZhY2UoIHRoaXMsIEV2ZW50RW1pdHRlciApO1xuXG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gZW1pdHRlci5vbiggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5yZWNvcmQoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKVxuXHRcdFx0Lm1hcCggKCBoYW5kbGVyICkgPT4gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApIClcblx0XHRcdC5yZWR1Y2UoICggZGVsZWdhdGUsIGhhbmRsZXIgKSA9PiBkZWxlZ2F0ZS5wdXNoKCBoYW5kbGVyICksIEhhbmRsZXIgKVxuXHRcdFx0LmNvbnRleHQoIHNlbGYgKVxuXHRcdFx0LnJlZ2lzdGVyKCB0aGlzICk7XG5cblx0XHRoYW5kbGVyID0gY2FsbGVkKCBoYW5kbGVyICk7XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdGxldCBlbWl0dGVyID0gaW5mYWNlKCB0aGlzLCBFdmVudEVtaXR0ZXIgKTtcblxuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IGVtaXR0ZXIub25jZSggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5yZWNvcmQoIGV2ZW50LCBoYW5kbGVyLCB0cnVlICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IGJ1ZGdlKCBhcmd1bWVudHMgKTtcblxuXHRcdGlmKCB0aGlzWyBMSU1JVCBdIDw9IDAgKXtcblx0XHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYoIHRoaXMuY291bnQoIGV2ZW50ICkgPD0gMCApe1xuXHRcdFx0bGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCAoICkgPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXQuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdFx0Y2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0XHR9LCB0aGlzWyBUSU1FT1VUIF0gKTtcblxuXHRcdFx0dGhpc1sgTElNSVQgXS0tO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0XHRsZXQgZW1pdHRlciA9IGluZmFjZSggdGhpcywgRXZlbnRFbWl0dGVyICk7XG5cblx0XHRcdFx0ZW1pdHRlci5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdFx0dGhpcy5ub3RpZnkuYXBwbHkoIHRoaXMsIFsgZXZlbnQgXS5jb25jYXQoIHBhcmFtZXRlciApICk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoIHRpbWVvdXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpbWVvdXQ6cmVxdWlyZWRcIjogXCJudW1iZXJcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIHRpbWVvdXQgKSB8fCAhcHJvdHlwZSggdGltZW91dCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHRpbWVvdXRcIiApO1xuXHRcdH1cblxuXHRcdHRoaXNbIFRJTUVPVVQgXSA9IHRpbWVvdXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUucmVzdHJpY3QgPSBmdW5jdGlvbiByZXN0cmljdCggbGltaXQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImxpbWl0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCBsaW1pdCApIHx8ICFwcm90eXBlKCBsaW1pdCwgTlVNQkVSICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpbWl0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBMSU1JVCBdID0gbGltaXQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuYnJvYWRjYXN0ID0gZnVuY3Rpb24gYnJvYWRjYXN0KCBldmVudCwgcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJldmVudDpyZXF1aXJlZFwiOiBcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRldmVudCA9IHBsb3VnaCggWyBldmVudCBdICk7XG5cblx0XHRwYXJhbWV0ZXIgPSBidWRnZSggYXJndW1lbnRzICk7XG5cblx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbiBjb3VudCggZXZlbnQgKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVyQ291bnQoIGV2ZW50ICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCBrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0cmV0dXJuIHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5jb3VudCggKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDA7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHR0aGlzLnJlbW92ZUFsbExpc3RlbmVycyggKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0dmFsdSggdGhpc1sgSEFORExFUiBdICkuZm9yRWFjaCggKCBoYW5kbGVyICkgPT4gaGFuZGxlci5mbHVzaCggKSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0Ly86IEBjbGllbnQ6XG5cdGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdEV2ZW50LnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZigga2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHBhcmFtZXRlciA9IGJ1ZGdlKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uYXBwbHkoIHNlbGYsIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0RXZlbnQucHJvdG90eXBlLnJlY29yZCA9IGZ1bmN0aW9uIHJlY29yZCggZXZlbnQsIGhhbmRsZXIsIG9uY2UgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcIm9uY2VcIjogXCJib29sZWFuXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggIWNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRoYW5kbGVyID0gSGFuZGxlci5wdXNoKCBoYW5kbGVyIClcblx0XHRcdFx0XHQuY29udGV4dCggc2VsZiApXG5cdFx0XHRcdFx0LnJlZ2lzdGVyKCB0aGlzICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdGhhbmRsZXIgPSBjYWxsZWQoIGhhbmRsZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoICFrZWluKCBldmVudCwgdGhpc1sgSEFORExFUiBdICkgKXtcblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBldmVudCBdID0gaGFuZGxlcjtcblxuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdHRoaXNbIEhBTkRMRVIgXVsgZXZlbnQgXS5wdXNoKCBoYW5kbGVyICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdH1cblx0Ly86IEBlbmQtY2xpZW50XG5cblx0XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIEV2ZW50O1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBFdmVudC5hcHBseSggbnVsbCwgcGFyYW1ldGVyICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZWRvO1xuIl19
//# sourceMappingURL=edo.support.js.map
