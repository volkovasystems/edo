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
		reduce(function (listener, handler) {return listener.push(handler);}, listener()).
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImFyaWQiLCJyZXF1aXJlIiwiYXNlYSIsImJ1ZGdlIiwiY2FsbGVkIiwiY2xhem9mIiwiZGlhdG9tIiwiZXFlIiwiZmFsenkiLCJoYXJkZW4iLCJoZXJlZGl0byIsImlkbnRmeSIsImZlcmdlIiwiaW5mcmF5Iiwia2VpbiIsImxldmVsZCIsInBsb3VnaCIsInByb3R5cGUiLCJweWNrIiwicmF6ZSIsInN5bWJpb3RlIiwidmFsdSIsInplbGYiLCJsaXN0ZW5lciIsIkVWRU5UIiwiSEFORExFUiIsIkxJTUlUIiwiVElNRU9VVCIsIkRFRkFVTFRfVElNRU9VVCIsIkRFRkFVTFRfTElNSVQiLCJlZG8iLCJwYXJhbWV0ZXIiLCJhcmd1bWVudHMiLCJzZWxmIiwiRXZlbnQiLCJwcm90b3R5cGUiLCJpbml0aWFsaXplIiwiZGVsYXkiLCJyZXN0cmljdCIsIm9uIiwiZXZlbnQiLCJoYW5kbGVyIiwiU1RSSU5HIiwiRlVOQ1RJT04iLCJyZWdpc3RlcmVkIiwicmVkdWNlIiwicHVzaCIsImNvbnRleHQiLCJyZWdpc3RlciIsInNlcnZlciIsImVtaXR0ZXIiLCJmb3JFYWNoIiwiY2xpZW50IiwiaGFuZGxlIiwiRXJyb3IiLCJvbmNlIiwibWFwIiwiYmluZCIsImVtaXQiLCJjb3VudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJjb25jYXQiLCJjbGVhclRpbWVvdXQiLCJub3RpZnkiLCJOVU1CRVIiLCJsaW1pdCIsImJyb2FkY2FzdCIsImxpc3RlbmVyQ291bnQiLCJmbHVzaCIsInJlbW92ZUFsbExpc3RlbmVycyIsIm1lcmdlIiwidHJhbnNmZXIiLCJsaXN0IiwibmFtZSIsImV2ZW50TmFtZXMiLCJsaXN0ZW5lcnMiLCJzb21lIiwibG9jayIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QWpCLEVBQXlCZ0MsS0FBekIsQ0FBZ0MvQixPQUFoQzs7QUFFQSxLQVBELE1BT0s7QUFDSixTQUFJYyxTQUFTLElBQWIsRUFBbUI7QUFDbEJkLGdCQUFVckMsT0FBT3FELElBQVAsQ0FBYXhCLElBQWIsRUFBcUJRLE9BQXJCLENBQVY7QUFDQTs7QUFFRCxVQUFNaEIsT0FBTixFQUFpQmUsS0FBakIsRUFBeUJNLElBQXpCLENBQStCTCxPQUEvQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBTyxJQUFQO0FBQ0EsR0E1REQ7QUE2REE7QUFDRDs7OztBQUlBLEtBQUl6QyxLQUFNK0IsU0FBTixDQUFKLEVBQXVCO0FBQ3RCLFNBQU9HLEtBQVA7O0FBRUEsRUFIRCxNQUdLO0FBQ0osU0FBT0EsTUFBTTRCLEtBQU4sQ0FBYSxJQUFiLEVBQW1CL0IsU0FBbkIsQ0FBUDtBQUNBO0FBQ0QsQ0FuZUQ7O0FBcWVBaUQsT0FBT0MsT0FBUCxHQUFpQm5ELEdBQWpCIiwiZmlsZSI6ImVkby5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJlZG9cIixcblx0XHRcdFwicGF0aFwiOiBcImVkby9lZG8uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImVkby5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlZG9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vkby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVkby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEV2ZW50RW1pdHRlciBleHRlbnNpb24uXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFyaWRcIjogXCJhcmlkXCIsXG5cdFx0XHRcImFzZWFcIjogXCJhc2VhXCIsXG5cdFx0XHRcImJ1ZGdlXCI6IFwiYnVkZ2VcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZXFlXCI6IFwiZXFlXCIsXG5cdFx0XHRcIkV2ZW50RW1pdHRlclwiOiBcImV2ZW50c1wiLFxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJoZXJlZGl0b1wiOiBcImhlcmVkaXRvXCIsXG5cdFx0XHRcImlkbnRmeVwiOiBcImlkbnRmeVwiLFxuXHRcdFx0XCJmZXJnZVwiOiBcImZlcmdlXCIsXG5cdFx0XHRcImluZnJheVwiOiBcImluZnJheVwiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJsZXZlbGRcIjogXCJsZXZlbGRcIixcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCIsXG5cdFx0XHRcInB5Y2tcIjogXCJweWNrXCIsXG5cdFx0XHRcInJhemVcIjogXCJyYXplXCIsXG5cdFx0XHRcInN5bWJpb3RlXCI6IFwic3ltYmlvdGVcIixcblx0XHRcdFwidmFsdVwiOiBcInZhbHVcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmlkID0gcmVxdWlyZSggXCJhcmlkXCIgKTtcbmNvbnN0IGFzZWEgPSByZXF1aXJlKCBcImFzZWFcIiApO1xuY29uc3QgYnVkZ2UgPSByZXF1aXJlKCBcImJ1ZGdlXCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGVxZSA9IHJlcXVpcmUoIFwiZXFlXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBoZXJlZGl0byA9IHJlcXVpcmUoIFwiaGVyZWRpdG9cIiApO1xuY29uc3QgaWRudGZ5ID0gcmVxdWlyZSggXCJpZG50ZnlcIiApO1xuY29uc3QgZmVyZ2UgPSByZXF1aXJlKCBcImZlcmdlXCIgKTtcbmNvbnN0IGluZnJheSA9IHJlcXVpcmUoIFwiaW5mcmF5XCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgbGV2ZWxkID0gcmVxdWlyZSggXCJsZXZlbGRcIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCBweWNrID0gcmVxdWlyZSggXCJweWNrXCIgKTtcbmNvbnN0IHJhemUgPSByZXF1aXJlKCBcInJhemVcIiApO1xuY29uc3Qgc3ltYmlvdGUgPSByZXF1aXJlKCBcInN5bWJpb3RlXCIgKTtcbmNvbnN0IHZhbHUgPSByZXF1aXJlKCBcInZhbHVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IGxpc3RlbmVyID0gcmVxdWlyZSggXCIuL2xpc3RlbmVyLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cbmNvbnN0IEVWRU5UID0gU3ltYm9sKCBcImV2ZW50XCIgKTtcbmNvbnN0IEhBTkRMRVIgPSBTeW1ib2woIFwiaGFuZGxlclwiICk7XG5jb25zdCBMSU1JVCA9IFN5bWJvbCggXCJsaW1pdFwiICk7XG5jb25zdCBUSU1FT1VUID0gU3ltYm9sKCBcInRpbWVvdXRcIiApO1xuXG5jb25zdCBERUZBVUxUX1RJTUVPVVQgPSAxMDAwO1xuY29uc3QgREVGQVVMVF9MSU1JVCA9IDEwMDA7XG5cbmNvbnN0IGVkbyA9IGZ1bmN0aW9uIGVkbyggcGFyYW1ldGVyICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xuXG5cdGxldCBFdmVudCA9IGRpYXRvbSggXCJFdmVudFwiICk7XG5cblx0RXZlbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCApe1xuXHRcdHRoaXMuZGVsYXkoIERFRkFVTFRfVElNRU9VVCApO1xuXHRcdHRoaXMucmVzdHJpY3QoIERFRkFVTFRfTElNSVQgKTtcblxuXHRcdGhhcmRlbiggSEFORExFUiwgeyB9LCB0aGlzICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbiggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKTtcblxuXHRcdC8qO1xuXHRcdFx0QG5vdGU6XG5cdFx0XHRcdENoZWNrcyBpZiB0aGUgZXZlbnQtaGFuZGxlciBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuXG5cdFx0XHRAZW5kLW5vdGVcblx0XHQqL1xuXHRcdGlmKCB0aGlzLnJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGhhbmRsZXIgPSBoYW5kbGVyLnJlZHVjZSggKCBsaXN0ZW5lciwgaGFuZGxlciApID0+IHtcblx0XHRcdHJldHVybiBsaXN0ZW5lci5wdXNoKCBoYW5kbGVyICk7XG5cdFx0fSwgbGlzdGVuZXIoICkgKS5jb250ZXh0KCBzZWxmICkucmVnaXN0ZXIoIHRoaXMgKTtcblxuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0bGV0IGVtaXR0ZXIgPSBmZXJnZSggdGhpcywgXCJFdmVudEVtaXR0ZXJcIiApO1xuXG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gZW1pdHRlci5vbiggZXZlbnQsIGhhbmRsZXIgKSApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRldmVudC5mb3JFYWNoKCAoIGV2ZW50ICkgPT4gdGhpcy5oYW5kbGUoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGxldCBwYXJhbWV0ZXIgPSBsZXZlbGQoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQgPSBweWNrKCBwYXJhbWV0ZXIsIFNUUklORyApO1xuXG5cdFx0aGFuZGxlciA9IHB5Y2soIHBhcmFtZXRlciwgRlVOQ1RJT04gKTtcblxuXHRcdGlmKCB0aGlzLnJlZ2lzdGVyZWQoIGV2ZW50LCBoYW5kbGVyICkgKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGhhbmRsZXIgPSBoYW5kbGVyLm1hcCggKCBoYW5kbGVyICkgPT4gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApIClcblx0XHRcdC5yZWR1Y2UoICggbGlzdGVuZXIsIGhhbmRsZXIgKSA9PiBsaXN0ZW5lci5wdXNoKCBoYW5kbGVyICksIGxpc3RlbmVyKCApIClcblx0XHRcdC5jb250ZXh0KCBzZWxmIClcblx0XHRcdC5yZWdpc3RlciggdGhpcyApO1xuXG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRsZXQgZW1pdHRlciA9IGZlcmdlKCB0aGlzLCBcIkV2ZW50RW1pdHRlclwiICk7XG5cblx0XHRcdGV2ZW50LmZvckVhY2goICggZXZlbnQgKSA9PiBlbWl0dGVyLm9uY2UoIGV2ZW50LCBoYW5kbGVyICkgKTtcblxuXHRcdH1lbHNlIGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuaGFuZGxlKCBldmVudCwgaGFuZGxlciwgdHJ1ZSApICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRFdmVudC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSBidWRnZSggYXJndW1lbnRzICk7XG5cblx0XHRpZiggdGhpc1sgTElNSVQgXSA8PSAwICl7XG5cdFx0XHR0aGlzLnJlc3RyaWN0KCBERUZBVUxUX0xJTUlUICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmKCB0aGlzLmNvdW50KCBldmVudCApIDw9IDAgKXtcblx0XHRcdGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCggKCApID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdFx0fSwgdGhpc1sgVElNRU9VVCBdICk7XG5cblx0XHRcdHRoaXNbIExJTUlUIF0tLTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5yZXN0cmljdCggREVGQVVMVF9MSU1JVCApO1xuXG5cdFx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdFx0bGV0IGVtaXR0ZXIgPSBmZXJnZSggdGhpcywgXCJFdmVudEVtaXR0ZXJcIiApO1xuXG5cdFx0XHRcdGVtaXR0ZXIuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKTtcblxuXHRcdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRcdHRoaXMubm90aWZ5LmFwcGx5KCB0aGlzLCBbIGV2ZW50IF0uY29uY2F0KCBwYXJhbWV0ZXIgKSApO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KCB0aW1lb3V0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aW1lb3V0OnJlcXVpcmVkXCI6IFwibnVtYmVyXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0aWYoIGZhbHp5KCB0aW1lb3V0ICkgfHwgIXByb3R5cGUoIHRpbWVvdXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCB0aW1lb3V0XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzWyBUSU1FT1VUIF0gPSB0aW1lb3V0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLnJlc3RyaWN0ID0gZnVuY3Rpb24gcmVzdHJpY3QoIGxpbWl0ICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJsaW1pdDpyZXF1aXJlZFwiOiBcIm51bWJlclwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggbGltaXQgKSB8fCAhcHJvdHlwZSggbGltaXQsIE5VTUJFUiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsaW1pdFwiICk7XG5cdFx0fVxuXG5cdFx0dGhpc1sgTElNSVQgXSA9IGxpbWl0O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmJyb2FkY2FzdCA9IGZ1bmN0aW9uIGJyb2FkY2FzdCggZXZlbnQsIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJbc3RyaW5nXVwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0ZXZlbnQgPSBwbG91Z2goIFsgZXZlbnQgXSApO1xuXG5cdFx0cGFyYW1ldGVyID0gYnVkZ2UoIGFyZ3VtZW50cyApO1xuXG5cdFx0ZXZlbnQuZm9yRWFjaCggKCBldmVudCApID0+IHRoaXMuZW1pdC5hcHBseSggdGhpcywgWyBldmVudCBdLmNvbmNhdCggcGFyYW1ldGVyICkgKSApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0RXZlbnQucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoIGV2ZW50ICl7XG5cdFx0aWYoIGFzZWEuc2VydmVyICl7XG5cdFx0XHRyZXR1cm4gdGhpcy5saXN0ZW5lckNvdW50KCBldmVudCApO1xuXG5cdFx0fWVsc2UgaWYoIGFzZWEuY2xpZW50ICl7XG5cdFx0XHRpZigga2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uY291bnQoICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAwO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IGRldGVybWluZSBwbGF0Zm9ybSwgcGxhdGZvcm0gbm90IHN1cHBvcnRlZFwiICk7XG5cdFx0fVxuXHR9O1xuXG5cdEV2ZW50LnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCApe1xuXHRcdGlmKCBhc2VhLnNlcnZlciApe1xuXHRcdFx0dGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHZhbHUoIHRoaXNbIEhBTkRMRVIgXSApLmZvckVhY2goICggaGFuZGxlciApID0+IGhhbmRsZXIuZmx1c2goICkgKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdEJpLWRpcmVjdGlvbmFsIG1lcmdpbmcgb2YgZXZlbnQgaGFuZGxlcnMuXG5cdFx0QGVuZC1tZXRob2QtZG9jdW1lbnRhdGlvblxuXHQqL1xuXHRFdmVudC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSggZXZlbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiY2Fubm90IG1lcmdlIGV2ZW50XCIgKTtcblx0XHR9XG5cblx0XHR0aGlzLnRyYW5zZmVyKCBldmVudCApO1xuXHRcdGV2ZW50LnRyYW5zZmVyKCB0aGlzICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRUcmFuc2ZlciBldmVudCBoYW5kbGVycy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS50cmFuc2ZlciA9IGZ1bmN0aW9uIHRyYW5zZmVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgdHJhbnNmZXIgZnJvbSBldmVudFwiICk7XG5cdFx0fVxuXG5cdFx0aW5mcmF5KCBldmVudC5saXN0KCApLCB0aGlzLmxpc3QoICkgKVxuXHRcdFx0LmZvckVhY2goICggbmFtZSApID0+IHtcblx0XHRcdFx0dGhpcy5vbiggbmFtZSwgZnVuY3Rpb24gZW1pdCggKXtcblx0XHRcdFx0XHRldmVudC5lbWl0LmFwcGx5KCBldmVudCwgWyBuYW1lIF0uY29uY2F0KCByYXplKCBhcmd1bWVudHMgKSApICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdC8qO1xuXHRcdEBtZXRob2QtZG9jdW1lbnRhdGlvbjpcblx0XHRcdExpc3QgcmVnaXN0ZXJlZCBldmVudCBuYW1lcy5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24gbGlzdCggKXtcblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmV2ZW50TmFtZXMoICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdHJldHVybiBPYmplY3Qua2V5cyggdGhpc1sgSEFORExFUiBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHRocm93IG5ldyBFcnJvciggXCJjYW5ub3QgZGV0ZXJtaW5lIHBsYXRmb3JtLCBwbGF0Zm9ybSBub3Qgc3VwcG9ydGVkXCIgKTtcblx0XHR9XG5cdH07XG5cblx0Lyo7XG5cdFx0QG1ldGhvZC1kb2N1bWVudGF0aW9uOlxuXHRcdFx0TGlzdCB0aGUgaGFuZGxlcnMgb2YgdGhlIGV2ZW50LlxuXHRcdEBlbmQtbWV0aG9kLWRvY3VtZW50YXRpb25cblx0Ki9cblx0RXZlbnQucHJvdG90eXBlLmhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKCBldmVudCApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0cmV0dXJuIFsgXTtcblx0XHR9XG5cblx0XHRpZiggYXNlYS5zZXJ2ZXIgKXtcblx0XHRcdHJldHVybiB0aGlzLmxpc3RlbmVycyggZXZlbnQgKS5yZWR1Y2UoICggbGlzdCwgaGFuZGxlciApID0+IHtcblx0XHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdHJldHVybiBsaXN0LmNvbmNhdCggaGFuZGxlci5saXN0KCApICk7XG5cblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0bGlzdC5wdXNoKCBoYW5kbGVyICk7XG5cblx0XHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgWyBdICk7XG5cblx0XHR9ZWxzZSBpZiggYXNlYS5jbGllbnQgKXtcblx0XHRcdGlmKCAha2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHJldHVybiBbIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubGlzdCggKTtcblxuXHRcdH1lbHNle1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImNhbm5vdCBkZXRlcm1pbmUgcGxhdGZvcm0sIHBsYXRmb3JtIG5vdCBzdXBwb3J0ZWRcIiApO1xuXHRcdH1cblx0fTtcblxuXHQvKjtcblx0XHRAbWV0aG9kLWRvY3VtZW50YXRpb246XG5cdFx0XHRDaGVja3MgaWYgdGhlIGV2ZW50LWhhbmRsZXIgaXMgcmVnaXN0ZXJlZC5cblx0XHRAZW5kLW1ldGhvZC1kb2N1bWVudGF0aW9uXG5cdCovXG5cdEV2ZW50LnByb3RvdHlwZS5yZWdpc3RlcmVkID0gZnVuY3Rpb24gcmVnaXN0ZXJlZCggZXZlbnQsIGhhbmRsZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcdFwic3RyaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltzdHJpbmddXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcImhhbmRsZXI6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFx0XCJbZnVuY3Rpb25dXCIsXG5cdFx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRoYW5kbGVyID0gcHljayggcGxvdWdoKCBhcmd1bWVudHMgKSwgRlVOQ1RJT04gKTtcblxuXHRcdHJldHVybiBweWNrKCBwbG91Z2goIGFyZ3VtZW50cyApLCBTVFJJTkcgKS5zb21lKCAoIGV2ZW50ICkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuaGFuZGxlciggZXZlbnQgKS5zb21lKCAoIGxpc3RlbmVyICkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gaGFuZGxlci5zb21lKCAoIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGlkbnRmeSggbGlzdGVuZXIsIGhhbmRsZXIgKSB8fCBlcWUoIGxpc3RlbmVyLCBoYW5kbGVyICk7XG5cdFx0XHRcdH0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH07XG5cblx0Ly86IEBjbGllbnQ6XG5cdGlmKCBhc2VhLmNsaWVudCApe1xuXHRcdEV2ZW50LnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoIGV2ZW50LCBwYXJhbWV0ZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZigga2VpbiggZXZlbnQsIHRoaXNbIEhBTkRMRVIgXSApICl7XG5cdFx0XHRcdHBhcmFtZXRlciA9IGJ1ZGdlKCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0uYXBwbHkoIHNlbGYsIHBhcmFtZXRlciApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9O1xuXG5cdFx0RXZlbnQucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uIGhhbmRsZSggZXZlbnQsIGhhbmRsZXIsIG9uY2UgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XHRcIm9uY2VcIjogXCJib29sZWFuXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIXByb3R5cGUoIGV2ZW50LCBTVFJJTkcgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBldmVudFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBmYWx6eSggaGFuZGxlciApIHx8ICFwcm90eXBlKCBoYW5kbGVyLCBGVU5DVElPTiApICl7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGhhbmRsZXJcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvKjtcblx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0SWYgdGhlIGV2ZW50IGlzIG5vdCB5ZXQgcmVnaXN0ZXJlZCwgY3JlYXRlIGEgaGFuZGxlciBjb2xsZWN0aW9uLlxuXHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdCovXG5cdFx0XHRpZiggIWtlaW4oIGV2ZW50LCB0aGlzWyBIQU5ETEVSIF0gKSApe1xuXHRcdFx0XHRpZiggIWNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRcdGlmKCBvbmNlID09PSB0cnVlICl7XG5cdFx0XHRcdFx0XHRoYW5kbGVyID0gY2FsbGVkLmJpbmQoIHNlbGYgKSggaGFuZGxlciApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhhbmRsZXIgPSBsaXN0ZW5lciggKS5wdXNoKCBoYW5kbGVyICkuY29udGV4dCggc2VsZiApLnJlZ2lzdGVyKCB0aGlzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0gPSBoYW5kbGVyO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0QG5vdGU6XG5cdFx0XHRcdFx0XHRJZiB0aGUgZXZlbnQgaXMgcmVnaXN0ZXJlZCwgbWFrZSBzdXJlIHdlIGFyZSBwdXNoaW5nIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG5cdFx0XHRcdFx0XHRcdG5vdCB0aGUgaGFuZGxlciBjb2xsZWN0aW9uLCBpZiB3ZSBlbmNvdW50ZXIgYSBoYW5kbGVyIGNvbGxlY3Rpb24sXG5cdFx0XHRcdFx0XHRcdG1lcmdlIGl0LlxuXHRcdFx0XHRcdEBlbmQtbm90ZVxuXHRcdFx0XHQqL1xuXHRcdFx0XHRpZiggY2xhem9mKCBoYW5kbGVyLCBcIkhhbmRsZXJcIiApICl7XG5cdFx0XHRcdFx0aWYoIG9uY2UgPT09IHRydWUgKXtcblx0XHRcdFx0XHRcdGhhbmRsZXIubG9jayggKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ubWVyZ2UoIGhhbmRsZXIgKTtcblxuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRpZiggb25jZSA9PT0gdHJ1ZSApe1xuXHRcdFx0XHRcdFx0aGFuZGxlciA9IGNhbGxlZC5iaW5kKCBzZWxmICkoIGhhbmRsZXIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzWyBIQU5ETEVSIF1bIGV2ZW50IF0ucHVzaCggaGFuZGxlciApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH07XG5cdH1cblx0Ly86IEBlbmQtY2xpZW50XG5cblx0XG5cblx0aWYoIGFyaWQoIHBhcmFtZXRlciApICl7XG5cdFx0cmV0dXJuIEV2ZW50O1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiBFdmVudC5hcHBseSggbnVsbCwgcGFyYW1ldGVyICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZWRvO1xuIl19
//# sourceMappingURL=edo.support.js.map
