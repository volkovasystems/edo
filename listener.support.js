"use strict";var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
                                                                                                                                                                                                                	@submodule-license:
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
                                                                                                                                                                                                                	@end-submodule-license
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@submodule-configuration:
                                                                                                                                                                                                                		{
                                                                                                                                                                                                                			"package": "edo",
                                                                                                                                                                                                                			"path": "edo/listener.module.js",
                                                                                                                                                                                                                			"file": "listener.module.js",
                                                                                                                                                                                                                			"module": "edo",
                                                                                                                                                                                                                			"author": "Richeve S. Bebedor",
                                                                                                                                                                                                                			"eMail": "richeve.bebedor@gmail.com",
                                                                                                                                                                                                                			"repository": "https://github.com/volkovasystems/edo.git",
                                                                                                                                                                                                                			"test": "edo-test.js",
                                                                                                                                                                                                                			"global": false,
                                                                                                                                                                                                                			"internal": true
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-submodule-configuration
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@submodule-documentation:
                                                                                                                                                                                                                		Handler class factory.
                                                                                                                                                                                                                	@end-submodule-documentation
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@include:
                                                                                                                                                                                                                		{
                                                                                                                                                                                                                			"arkount": "arkount",
                                                                                                                                                                                                                			"clazof": "clazof",
                                                                                                                                                                                                                			"diatom": "diatom",
                                                                                                                                                                                                                			"exorcise": "exorcise",
                                                                                                                                                                                                                			"falzy": "falzy",
                                                                                                                                                                                                                			"filled": "filled",
                                                                                                                                                                                                                			"kurse": "kurse",
                                                                                                                                                                                                                			"protype": "protype",
                                                                                                                                                                                                                			"raze": "raze",
                                                                                                                                                                                                                			"statis": "statis",
                                                                                                                                                                                                                			"zelf": "zelf"
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-include
                                                                                                                                                                                                                */

var arkount = require("arkount");
var clazof = require("clazof");
var diatom = require("diatom");
var falzy = require("falzy");
var filled = require("filled");
var kurse = require("kurse");
var protype = require("protype");
var raze = require("raze");
var statis = require("statis");
var zelf = require("zelf");



var CONTEXT = (0, _symbol2.default)("context");
var EVENT = (0, _symbol2.default)("event");
var HANDLER = (0, _symbol2.default)("handler");

var listener = function listener() {
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

		this[HANDLER].push(kurse(handler));

		return this;
	}).
	implement("merge", function merge(handler) {var _this = this;
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

		if (clazof(handler, "Handler")) {
			handler.list().forEach(function (handler) {return _this.push(handler);});
		}

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
	}).
	implement("list", function list() {
		return raze(this[HANDLER]);
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

	Handler.prototype.execute = function execute(parameter) {var _this2 = this;
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
				handler.apply(_this2.context, parameter);

			} catch (error) {
				_this2.event.emit("error", error);
			}
		});

		return this;
	};



	return Handler;
};

module.exports = listener;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RlbmVyLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXJrb3VudCIsInJlcXVpcmUiLCJjbGF6b2YiLCJkaWF0b20iLCJmYWx6eSIsImZpbGxlZCIsImt1cnNlIiwicHJvdHlwZSIsInJhemUiLCJzdGF0aXMiLCJ6ZWxmIiwiQ09OVEVYVCIsIkVWRU5UIiwiSEFORExFUiIsImxpc3RlbmVyIiwiSGFuZGxlciIsImF0dGFjaCIsImltcGxlbWVudCIsInB1c2giLCJoYW5kbGVyIiwiRlVOQ1RJT04iLCJFcnJvciIsIm1lcmdlIiwibGlzdCIsImZvckVhY2giLCJjb250ZXh0Iiwic2VsZiIsInJlZ2lzdGVyIiwiZXZlbnQiLCJjb3VudCIsImZsdXNoIiwicG9wIiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsImV4ZWN1dGUiLCJhcHBseSIsImVycm9yIiwiZW1pdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJnTkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0RBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssUUFBUUwsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNTSxVQUFVTixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNTyxPQUFPUCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1RLFNBQVNSLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTVMsT0FBT1QsUUFBUyxNQUFULENBQWI7Ozs7QUFJQSxJQUFNVSxVQUFVLHNCQUFRLFNBQVIsQ0FBaEI7QUFDQSxJQUFNQyxRQUFRLHNC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U0FBUWlCLFNBQVIsQ0FBa0JJLE9BQWxCLEdBQTRCLFNBQVNBLE9BQVQsQ0FBa0JGLFNBQWxCLEVBQTZCO0FBQ3hEOzs7Ozs7OztBQVFBQSxjQUFZMUIsS0FBTTJCLFNBQU4sQ0FBWjs7QUFFQSxPQUFLaEIsT0FBTCxDQUFhSyxPQUFiLENBQXNCLFVBQUVMLE9BQUYsRUFBZTtBQUNwQyxPQUFHO0FBQ0ZBLFlBQVFrQixLQUFSLENBQWUsT0FBS1osT0FBcEIsRUFBNkJTLFNBQTdCOztBQUVBLElBSEQsQ0FHQyxPQUFPSSxLQUFQLEVBQWM7QUFDZCxXQUFLVixLQUFMLENBQVdXLElBQVgsQ0FBaUIsT0FBakIsRUFBMEJELEtBQTFCO0FBQ0E7QUFDRCxHQVBEOztBQVNBLFNBQU8sSUFBUDtBQUNBLEVBckJEOzs7O0FBeUJBLFFBQU92QixPQUFQO0FBQ0EsQ0FqSUQ7O0FBbUlBeUIsT0FBT0MsT0FBUCxHQUFpQjNCLFFBQWpCIiwiZmlsZSI6Imxpc3RlbmVyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWRvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlZG8vbGlzdGVuZXIubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJsaXN0ZW5lci5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZWRvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9lZG8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJlZG8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogZmFsc2UsXG5cdFx0XHRcImludGVybmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtc3VibW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAc3VibW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0SGFuZGxlciBjbGFzcyBmYWN0b3J5LlxuXHRAZW5kLXN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhcmtvdW50XCI6IFwiYXJrb3VudFwiLFxuXHRcdFx0XCJjbGF6b2ZcIjogXCJjbGF6b2ZcIixcblx0XHRcdFwiZGlhdG9tXCI6IFwiZGlhdG9tXCIsXG5cdFx0XHRcImV4b3JjaXNlXCI6IFwiZXhvcmNpc2VcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmaWxsZWRcIjogXCJmaWxsZWRcIixcblx0XHRcdFwia3Vyc2VcIjogXCJrdXJzZVwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzdGF0aXNcIjogXCJzdGF0aXNcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmtvdW50ID0gcmVxdWlyZSggXCJhcmtvdW50XCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBmaWxsZWQgPSByZXF1aXJlKCBcImZpbGxlZFwiICk7XG5jb25zdCBrdXJzZSA9IHJlcXVpcmUoIFwia3Vyc2VcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHN0YXRpcyA9IHJlcXVpcmUoIFwic3RhdGlzXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5cblxuY29uc3QgQ09OVEVYVCA9IFN5bWJvbCggXCJjb250ZXh0XCIgKTtcbmNvbnN0IEVWRU5UID0gU3ltYm9sKCBcImV2ZW50XCIgKTtcbmNvbnN0IEhBTkRMRVIgPSBTeW1ib2woIFwiaGFuZGxlclwiICk7XG5cbmNvbnN0IGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoICl7XG5cdGxldCBIYW5kbGVyID0gZGlhdG9tKCBcIkhhbmRsZXJcIiApO1xuXG5cdHN0YXRpcyggSGFuZGxlciApXG5cdFx0LmF0dGFjaCggSEFORExFUiwgWyBdIClcblx0XHQuaW1wbGVtZW50KCBcInB1c2hcIiwgZnVuY3Rpb24gcHVzaCggaGFuZGxlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBoYW5kbGVyIGZ1bmN0aW9uXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgSEFORExFUiBdLnB1c2goIGt1cnNlKCBoYW5kbGVyICkgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJtZXJnZVwiLCBmdW5jdGlvbiBtZXJnZSggaGFuZGxlciApe1xuXHRcdFx0Lyo7XG5cdFx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJoYW5kbGVyOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBoYW5kbGVyIGZ1bmN0aW9uXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGNsYXpvZiggaGFuZGxlciwgXCJIYW5kbGVyXCIgKSApe1xuXHRcdFx0XHRoYW5kbGVyLmxpc3QoICkuZm9yRWFjaCggKCBoYW5kbGVyICkgPT4gdGhpcy5wdXNoKCBoYW5kbGVyICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJjb250ZXh0XCIsIGZ1bmN0aW9uIGNvbnRleHQoIHNlbGYgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwic2VsZjpyZXF1aXJlZFwiOiBcIipcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdHRoaXNbIENPTlRFWFQgXSA9IHplbGYoIHNlbGYgKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJyZWdpc3RlclwiLCBmdW5jdGlvbiByZWdpc3RlciggZXZlbnQgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiZXZlbnQ6cmVxdWlyZWRcIjogXCJFdmVudFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdFx0Ki9cblxuXHRcdFx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFjbGF6b2YoIGV2ZW50LCBcIkV2ZW50XCIgKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBldmVudFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXNbIEVWRU5UIF0gPSBldmVudDtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJjb3VudFwiLCBmdW5jdGlvbiBjb3VudCggKXtcblx0XHRcdHJldHVybiBhcmtvdW50KCB0aGlzWyBIQU5ETEVSIF0gKTtcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImZsdXNoXCIsIGZ1bmN0aW9uIGZsdXNoKCApe1xuXHRcdFx0d2hpbGUoIGZpbGxlZCggdGhpc1sgSEFORExFUiBdICkgKSB0aGlzWyBIQU5ETEVSIF0ucG9wKCApO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9IClcblx0XHQuaW1wbGVtZW50KCBcImxpc3RcIiwgZnVuY3Rpb24gbGlzdCggKXtcblx0XHRcdHJldHVybiByYXplKCB0aGlzWyBIQU5ETEVSIF0gKTtcblx0XHR9ICk7XG5cblx0SGFuZGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLmNvbnRleHQgPSBIYW5kbGVyWyBDT05URVhUIF07XG5cdFx0dGhpcy5ldmVudCA9IEhhbmRsZXJbIEVWRU5UIF07XG5cdFx0dGhpcy5oYW5kbGVyID0gSGFuZGxlclsgSEFORExFUiBdO1xuXG5cdFx0dGhpcy5leGVjdXRlLmFwcGx5KCB0aGlzLCBwYXJhbWV0ZXIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdEhhbmRsZXIucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiBleGVjdXRlKCBwYXJhbWV0ZXIgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInBhcmFtZXRlclwiOiBcIi4uLlwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXG5cdFx0dGhpcy5oYW5kbGVyLmZvckVhY2goICggaGFuZGxlciApID0+IHtcblx0XHRcdHRyeXtcblx0XHRcdFx0aGFuZGxlci5hcHBseSggdGhpcy5jb250ZXh0LCBwYXJhbWV0ZXIgKTtcblxuXHRcdFx0fWNhdGNoKCBlcnJvciApe1xuXHRcdFx0XHR0aGlzLmV2ZW50LmVtaXQoIFwiZXJyb3JcIiwgZXJyb3IgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHRcblxuXHRyZXR1cm4gSGFuZGxlcjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdGVuZXI7XG4iXX0=
//# sourceMappingURL=listener.support.js.map
