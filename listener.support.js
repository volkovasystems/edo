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
                                                                                                                                                                                                                			"contributors": [
                                                                                                                                                                                                                				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
                                                                                                                                                                                                                				"Vinse Vinalon <vinsevinalon@gmail.com>"
                                                                                                                                                                                                                			],
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
                                                                                                                                                                                                                			"called": "called",
                                                                                                                                                                                                                			"clazof": "clazof",
                                                                                                                                                                                                                			"diatom": "diatom",
                                                                                                                                                                                                                			"doubt": "doubt",
                                                                                                                                                                                                                			"execd": "execd",
                                                                                                                                                                                                                			"exorcise": "exorcise",
                                                                                                                                                                                                                			"falzy": "falzy",
                                                                                                                                                                                                                			"filled": "filled",
                                                                                                                                                                                                                			"harden": "harden",
                                                                                                                                                                                                                			"idntty": "idntty",
                                                                                                                                                                                                                			"kurse": "kurse",
                                                                                                                                                                                                                			"mrkd": "mrkd",
                                                                                                                                                                                                                			"ntrprt": "ntrprt",
                                                                                                                                                                                                                			"posp": "posp",
                                                                                                                                                                                                                			"protype": "protype",
                                                                                                                                                                                                                			"raze": "raze",
                                                                                                                                                                                                                			"statis": "statis",
                                                                                                                                                                                                                			"zelf": "zelf"
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-include
                                                                                                                                                                                                                */

var arkount = require("arkount");
var called = require("called");
var clazof = require("clazof");
var diatom = require("diatom");
var doubt = require("doubt");
var execd = require("execd");
var falzy = require("falzy");
var filled = require("filled");
var harden = require("harden");
var idntty = require("idntty");
var kurse = require("kurse");
var mrkd = require("mrkd");
var ntrprt = require("ntrprt");
var posp = require("posp");
var protype = require("protype");
var raze = require("raze");
var statis = require("statis");
var zelf = require("zelf");



var CONTEXT = (0, _symbol2.default)("context");
var EVENT = (0, _symbol2.default)("event");
var ID = (0, _symbol2.default)("id");
var LINK = (0, _symbol2.default)("link");
var HANDLER = (0, _symbol2.default)("handler");
var OWNER = (0, _symbol2.default)("owner");

var listener = function listener() {
	var Handler = diatom("Handler");



	statis(Handler).
	attach(HANDLER, []).
	implement("push", function push(handler) {var _this = this;
		/*;
                                                             	@meta-configuration:
                                                             		{
                                                             			"handler:required": [
                                                             				"function",
                                                             				"[function]"
                                                             			]
                                                             		}
                                                             	@end-meta-configuration
                                                             */

		if (doubt(handler, AS_ARRAY)) {
			raze(handler).forEach(function (handler) {return _this.push(handler);});

			return this;
		}

		if (!protype(handler, FUNCTION)) {
			throw new Error("invalid handler function");
		}

		this[HANDLER].push(kurse(handler));

		statis(handler).
		implement("ownedBy", function ownedBy(owner) {
			/*;
                                                	@meta-configuration:
                                                		{
                                                			"owner:required": "Event"
                                                		}
                                                	@end-meta-configuration
                                                */

			if (falzy(owner) || !clazof(owner, "Event")) {
				throw new Error("invalid owner");
			}

			if (mrkd(OWNER, this)) {
				return this;
			}

			harden(OWNER, idntty(owner), this);

			return this;
		}).
		implement("linkedTo", function linkedTo(link) {
			/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"link:required": "Event"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

			if (falzy(link) || !clazof(link, "Event")) {
				throw new Error("invalid link");
			}

			if (mrkd(LINK, this)) {
				return this;
			}

			harden(LINK, idntty(link), this);

			return this;
		}).
		implement("getOwner", function getOwner() {
			return this[OWNER];
		}).
		implement("getLink", function getLink() {
			return this[LINK];
		});

		handler.ownedBy(this[EVENT]);

		return this;
	}).
	implement("merge", function merge(handler) {var _this2 = this;
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
			handler.list().forEach(function (handler) {return _this2.push(handler);});
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

		release();

		return this;
	}).
	implement("list", function list() {
		return raze(this[HANDLER]);
	}).
	implement("lock", function lock() {var _this3 = this;
		this[HANDLER].forEach(function (handler, index) {
			_this3[HANDLER][index] = called.bind(_this3[CONTEXT])(handler);
		});

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

	Handler.prototype.execute = function execute(parameter) {var _this4 = this;
		/*;
                                                                             	@meta-configuration:
                                                                             		{
                                                                             			"parameter": "..."
                                                                             		}
                                                                             	@end-meta-configuration
                                                                             */

		parameter = raze(arguments);

		this.handler.reverse().forEach(function (handler) {
			try {
				handler.apply(_this4.context, parameter);

			} catch (error) {
				_this4.event.emit("error", error);
			}

			if (execd(handler)) {
				posp(_this4.handler, handler);
			}
		});

		return this;
	};

	return Handler;
};

module.exports = listener;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RlbmVyLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiYXJrb3VudCIsInJlcXVpcmUiLCJjYWxsZWQiLCJjbGF6b2YiLCJkaWF0b20iLCJkb3VidCIsImV4ZWNkIiwiZmFsenkiLCJmaWxsZWQiLCJoYXJkZW4iLCJpZG50dHkiLCJrdXJzZSIsIm1ya2QiLCJudHJwcnQiLCJwb3NwIiwicHJvdHlwZSIsInJhemUiLCJzdGF0aXMiLCJ6ZWxmIiwiQ09OVEVYVCIsIkVWRU5UIiwiSUQiLCJMSU5LIiwiSEFORExFUiIsIk9XTkVSIiwibGlzdGVuZXIiLCJIYW5kbGVyIiwiYXR0YWNoIiwiaW1wbGVtZW50IiwicHVzaCIsImhhbmRsZXIiLCJBU19BUlJBWSIsImZvckVhY2giLCJGVU5DVElPTiIsIkVycm9yIiwib3duZWRCeSIsIm93bmVyIiwibGlua2VkVG8iLCJsaW5rIiwiZ2V0T3duZXIiLCJnZXRMaW5rIiwibWVyZ2UiLCJsaXN0IiwiY29udGV4dCIsInNlbGYiLCJyZWdpc3RlciIsImV2ZW50IiwiY291bnQiLCJmbHVzaCIsInBvcCIsInJlbGVhc2UiLCJsb2NrIiwiaW5kZXgiLCJiaW5kIiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsInBhcmFtZXRlciIsImFyZ3VtZW50cyIsImV4ZWN1dGUiLCJhcHBseSIsInJldmVyc2UiLCJlcnJvciIsImVtaXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiZ05BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDtBQUNBLElB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OztBQUVBLE9BQUttQyxPQUFMLENBQWFDLEtBQWIsQ0FBb0IsSUFBcEIsRUFBMEJILFNBQTFCOztBQUVBLFNBQU8sSUFBUDtBQUNBLEVBbEJEOztBQW9CQTlCLFNBQVE0QixTQUFSLENBQWtCSSxPQUFsQixHQUE0QixTQUFTQSxPQUFULENBQWtCRixTQUFsQixFQUE2QjtBQUN4RDs7Ozs7Ozs7QUFRQUEsY0FBWXhDLEtBQU15QyxTQUFOLENBQVo7O0FBRUEsT0FBSzNCLE9BQUwsQ0FBYThCLE9BQWIsR0FBd0I1QixPQUF4QixDQUFpQyxVQUFFRixPQUFGLEVBQWU7QUFDL0MsT0FBRztBQUNGQSxZQUFRNkIsS0FBUixDQUFlLE9BQUtoQixPQUFwQixFQUE2QmEsU0FBN0I7O0FBRUEsSUFIRCxDQUdDLE9BQU9LLEtBQVAsRUFBYztBQUNkLFdBQUtmLEtBQUwsQ0FBV2dCLElBQVgsQ0FBaUIsT0FBakIsRUFBMEJELEtBQTFCO0FBQ0E7O0FBRUQsT0FBSXZELE1BQU93QixPQUFQLENBQUosRUFBc0I7QUFDckJoQixTQUFNLE9BQUtnQixPQUFYLEVBQW9CQSxPQUFwQjtBQUNBO0FBQ0QsR0FYRDs7QUFhQSxTQUFPLElBQVA7QUFDQSxFQXpCRDs7QUEyQkEsUUFBT0osT0FBUDtBQUNBLENBM01EOztBQTZNQXFDLE9BQU9DLE9BQVAsR0FBaUJ2QyxRQUFqQiIsImZpbGUiOiJsaXN0ZW5lci5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWRvL2xpc3RlbmVyLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwibGlzdGVuZXIubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWRvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWRvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEhhbmRsZXIgY2xhc3MgZmFjdG9yeS5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXJrb3VudFwiOiBcImFya291bnRcIixcblx0XHRcdFwiY2FsbGVkXCI6IFwiY2FsbGVkXCIsXG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZG91YnRcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJleGVjZFwiOiBcImV4ZWNkXCIsXG5cdFx0XHRcImV4b3JjaXNlXCI6IFwiZXhvcmNpc2VcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJmaWxsZWRcIjogXCJmaWxsZWRcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImlkbnR0eVwiOiBcImlkbnR0eVwiLFxuXHRcdFx0XCJrdXJzZVwiOiBcImt1cnNlXCIsXG5cdFx0XHRcIm1ya2RcIjogXCJtcmtkXCIsXG5cdFx0XHRcIm50cnBydFwiOiBcIm50cnBydFwiLFxuXHRcdFx0XCJwb3NwXCI6IFwicG9zcFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiLFxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxuXHRcdFx0XCJzdGF0aXNcIjogXCJzdGF0aXNcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhcmtvdW50ID0gcmVxdWlyZSggXCJhcmtvdW50XCIgKTtcbmNvbnN0IGNhbGxlZCA9IHJlcXVpcmUoIFwiY2FsbGVkXCIgKTtcbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGRvdWJ0ID0gcmVxdWlyZSggXCJkb3VidFwiICk7XG5jb25zdCBleGVjZCA9IHJlcXVpcmUoIFwiZXhlY2RcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGZpbGxlZCA9IHJlcXVpcmUoIFwiZmlsbGVkXCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGlkbnR0eSA9IHJlcXVpcmUoIFwiaWRudHR5XCIgKTtcbmNvbnN0IGt1cnNlID0gcmVxdWlyZSggXCJrdXJzZVwiICk7XG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCJtcmtkXCIgKTtcbmNvbnN0IG50cnBydCA9IHJlcXVpcmUoIFwibnRycHJ0XCIgKTtcbmNvbnN0IHBvc3AgPSByZXF1aXJlKCBcInBvc3BcIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHN0YXRpcyA9IHJlcXVpcmUoIFwic3RhdGlzXCIgKTtcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xuXG5cblxuY29uc3QgQ09OVEVYVCA9IFN5bWJvbCggXCJjb250ZXh0XCIgKTtcbmNvbnN0IEVWRU5UID0gU3ltYm9sKCBcImV2ZW50XCIgKTtcbmNvbnN0IElEID0gU3ltYm9sKCBcImlkXCIgKTtcbmNvbnN0IExJTksgPSBTeW1ib2woIFwibGlua1wiICk7XG5jb25zdCBIQU5ETEVSID0gU3ltYm9sKCBcImhhbmRsZXJcIiApO1xuY29uc3QgT1dORVIgPSBTeW1ib2woIFwib3duZXJcIiApO1xuXG5jb25zdCBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCApe1xuXHRsZXQgSGFuZGxlciA9IGRpYXRvbSggXCJIYW5kbGVyXCIgKTtcblxuXHRcblxuXHRzdGF0aXMoIEhhbmRsZXIgKVxuXHRcdC5hdHRhY2goIEhBTkRMRVIsIFsgXSApXG5cdFx0LmltcGxlbWVudCggXCJwdXNoXCIsIGZ1bmN0aW9uIHB1c2goIGhhbmRsZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcblx0XHRcdFx0XHRcdFx0XCJbZnVuY3Rpb25dXCJcblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggZG91YnQoIGhhbmRsZXIsIEFTX0FSUkFZICkgKXtcblx0XHRcdFx0cmF6ZSggaGFuZGxlciApLmZvckVhY2goICggaGFuZGxlciApID0+IHRoaXMucHVzaCggaGFuZGxlciApICk7XG5cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCAhcHJvdHlwZSggaGFuZGxlciwgRlVOQ1RJT04gKSApe1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBoYW5kbGVyIGZ1bmN0aW9uXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpc1sgSEFORExFUiBdLnB1c2goIGt1cnNlKCBoYW5kbGVyICkgKTtcblxuXHRcdFx0c3RhdGlzKCBoYW5kbGVyIClcblx0XHRcdFx0LmltcGxlbWVudCggXCJvd25lZEJ5XCIsIGZ1bmN0aW9uIG93bmVkQnkoIG93bmVyICl7XG5cdFx0XHRcdFx0Lyo7XG5cdFx0XHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XCJvd25lcjpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdFx0XHQqL1xuXG5cdFx0XHRcdFx0aWYoIGZhbHp5KCBvd25lciApIHx8ICFjbGF6b2YoIG93bmVyLCBcIkV2ZW50XCIgKSApe1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgb3duZXJcIiApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKCBtcmtkKCBPV05FUiwgdGhpcyApICl7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoYXJkZW4oIE9XTkVSLCBpZG50dHkoIG93bmVyICksIHRoaXMgKTtcblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmltcGxlbWVudCggXCJsaW5rZWRUb1wiLCBmdW5jdGlvbiBsaW5rZWRUbyggbGluayApe1xuXHRcdFx0XHRcdC8qO1xuXHRcdFx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFwibGluazpyZXF1aXJlZFwiOiBcIkV2ZW50XCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdFx0XHQqL1xuXG5cdFx0XHRcdFx0aWYoIGZhbHp5KCBsaW5rICkgfHwgIWNsYXpvZiggbGluaywgXCJFdmVudFwiICkgKXtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGxpbmtcIiApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKCBtcmtkKCBMSU5LLCB0aGlzICkgKXtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhhcmRlbiggTElOSywgaWRudHR5KCBsaW5rICksIHRoaXMgKTtcblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9IClcblx0XHRcdFx0LmltcGxlbWVudCggXCJnZXRPd25lclwiLCBmdW5jdGlvbiBnZXRPd25lciggKXtcblx0XHRcdFx0XHRyZXR1cm4gdGhpc1sgT1dORVIgXTtcblx0XHRcdFx0fSApXG5cdFx0XHRcdC5pbXBsZW1lbnQoIFwiZ2V0TGlua1wiLCBmdW5jdGlvbiBnZXRMaW5rKCApe1xuXHRcdFx0XHRcdHJldHVybiB0aGlzWyBMSU5LIF07XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0aGFuZGxlci5vd25lZEJ5KCB0aGlzWyBFVkVOVCBdICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwibWVyZ2VcIiwgZnVuY3Rpb24gbWVyZ2UoIGhhbmRsZXIgKXtcblx0XHRcdC8qO1xuXHRcdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwiaGFuZGxlcjpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHRpZiggIXByb3R5cGUoIGhhbmRsZXIsIEZVTkNUSU9OICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgaGFuZGxlciBmdW5jdGlvblwiICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBjbGF6b2YoIGhhbmRsZXIsIFwiSGFuZGxlclwiICkgKXtcblx0XHRcdFx0aGFuZGxlci5saXN0KCApLmZvckVhY2goICggaGFuZGxlciApID0+IHRoaXMucHVzaCggaGFuZGxlciApICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiY29udGV4dFwiLCBmdW5jdGlvbiBjb250ZXh0KCBzZWxmICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcInNlbGY6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0XHQqL1xuXG5cdFx0XHR0aGlzWyBDT05URVhUIF0gPSB6ZWxmKCBzZWxmICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwicmVnaXN0ZXJcIiwgZnVuY3Rpb24gcmVnaXN0ZXIoIGV2ZW50ICl7XG5cdFx0XHQvKjtcblx0XHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcImV2ZW50OnJlcXVpcmVkXCI6IFwiRXZlbnRcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHRcdCovXG5cblx0XHRcdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzWyBFVkVOVCBdID0gZXZlbnQ7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKVxuXHRcdC5pbXBsZW1lbnQoIFwiY291bnRcIiwgZnVuY3Rpb24gY291bnQoICl7XG5cdFx0XHRyZXR1cm4gYXJrb3VudCggdGhpc1sgSEFORExFUiBdICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJmbHVzaFwiLCBmdW5jdGlvbiBmbHVzaCggKXtcblx0XHRcdHdoaWxlKCBmaWxsZWQoIHRoaXNbIEhBTkRMRVIgXSApICkgdGhpc1sgSEFORExFUiBdLnBvcCggKTtcblxuXHRcdFx0cmVsZWFzZSggKTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJsaXN0XCIsIGZ1bmN0aW9uIGxpc3QoICl7XG5cdFx0XHRyZXR1cm4gcmF6ZSggdGhpc1sgSEFORExFUiBdICk7XG5cdFx0fSApXG5cdFx0LmltcGxlbWVudCggXCJsb2NrXCIsIGZ1bmN0aW9uIGxvY2soICl7XG5cdFx0XHR0aGlzWyBIQU5ETEVSIF0uZm9yRWFjaCggKCBoYW5kbGVyLCBpbmRleCApID0+IHtcblx0XHRcdFx0dGhpc1sgSEFORExFUiBdWyBpbmRleCBdID0gY2FsbGVkLmJpbmQoIHRoaXNbIENPTlRFWFQgXSApKCBoYW5kbGVyICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0gKTtcblxuXHRIYW5kbGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggcGFyYW1ldGVyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJcIjogXCIuLi5cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRwYXJhbWV0ZXIgPSByYXplKCBhcmd1bWVudHMgKTtcblxuXHRcdHRoaXMuY29udGV4dCA9IEhhbmRsZXJbIENPTlRFWFQgXTtcblx0XHR0aGlzLmV2ZW50ID0gSGFuZGxlclsgRVZFTlQgXTtcblx0XHR0aGlzLmhhbmRsZXIgPSBIYW5kbGVyWyBIQU5ETEVSIF07XG5cblx0XHR0aGlzLmV4ZWN1dGUuYXBwbHkoIHRoaXMsIHBhcmFtZXRlciApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0SGFuZGxlci5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIGV4ZWN1dGUoIHBhcmFtZXRlciApe1xuXHRcdC8qO1xuXHRcdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwicGFyYW1ldGVyXCI6IFwiLi4uXCJcblx0XHRcdFx0fVxuXHRcdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0XHQqL1xuXG5cdFx0cGFyYW1ldGVyID0gcmF6ZSggYXJndW1lbnRzICk7XG5cblx0XHR0aGlzLmhhbmRsZXIucmV2ZXJzZSggKS5mb3JFYWNoKCAoIGhhbmRsZXIgKSA9PiB7XG5cdFx0XHR0cnl7XG5cdFx0XHRcdGhhbmRsZXIuYXBwbHkoIHRoaXMuY29udGV4dCwgcGFyYW1ldGVyICk7XG5cblx0XHRcdH1jYXRjaCggZXJyb3IgKXtcblx0XHRcdFx0dGhpcy5ldmVudC5lbWl0KCBcImVycm9yXCIsIGVycm9yICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBleGVjZCggaGFuZGxlciApICl7XG5cdFx0XHRcdHBvc3AoIHRoaXMuaGFuZGxlciwgaGFuZGxlciApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9O1xuXG5cdHJldHVybiBIYW5kbGVyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0ZW5lcjtcbiJdfQ==
//# sourceMappingURL=listener.support.js.map
