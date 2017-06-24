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
                                                                                                                                                                                                                			"path": "edo/event-list.module.js",
                                                                                                                                                                                                                			"file": "event-list.module.js",
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
                                                                                                                                                                                                                		EventList class.
                                                                                                                                                                                                                	@end-submodule-documentation
                                                                                                                                                                                                                
                                                                                                                                                                                                                	@include:
                                                                                                                                                                                                                		{
                                                                                                                                                                                                                			"clazof": "clazof",
                                                                                                                                                                                                                			"diatom": "diatom",
                                                                                                                                                                                                                			"een": "een",
                                                                                                                                                                                                                			"falzy": "falzy",
                                                                                                                                                                                                                			"harden": "harden",
                                                                                                                                                                                                                			"idntfy": "idntfy"
                                                                                                                                                                                                                		}
                                                                                                                                                                                                                	@end-include
                                                                                                                                                                                                                */

var clazof = require("clazof");
var diatom = require("diatom");
var een = require("falzy");
var harden = require("harden");
var idntfy = require("idntfy");

var LIST = (0, _symbol2.default)("list");

var EventList = diatom("EventList");

EventList.prototype.initialize = function initialize(event) {
	/*;
                                                             	@meta-configuration:
                                                             	@end-meta-configuration
                                                             */

	harden(LIST, [], this);

	if (clazof(event, "Event")) {
		this.push(event);
	}

	return this;
};

EventList.prototype.push = function push(event) {
	/*;
                                                 	@meta-configuration:
                                                 		{
                                                 			"event": "Event"
                                                 		}
                                                 	@end-meta-configuration
                                                 */

	if (falzy(event) || !clazof(event, "Event")) {
		throw new Error("invalid event");
	}

	if (!this.hasEvent(event)) {
		this[LIST].push(event);
	}

	return this;
};

EventList.prototype.hasEvent = function hasEvent(event) {
	/*;
                                                         	@meta-configuration:
                                                         		{
                                                         			"event": "Event"
                                                         		}
                                                         	@end-meta-configuration
                                                         */

	if (falzy(event) || !clazof(event, "Event")) {
		throw new Error("invalid event");
	}

	return een(this[LIST], event, function (element, event) {return idntfy(element, event);});
};

EventList.prototype.release = function release() {
	while (this[LIST].length) {this[LIST].pop();}

	return this;
};

module.exports = EventList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWxpc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjbGF6b2YiLCJyZXF1aXJlIiwiZGlhdG9tIiwiZWVuIiwiaGFyZGVuIiwiaWRudGZ5IiwiTElTVCIsIkV2ZW50TGlzdCIsInByb3RvdHlwZSIsImluaXRpYWxpemUiLCJldmVudCIsInB1c2giLCJmYWx6eSIsIkVycm9yIiwiaGFzRXZlbnQiLCJlbGVtZW50IiwicmVsZWFzZSIsImxlbmd0aCIsInBvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJnTkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsTUFBTUYsUUFBUyxPQUFULENBQVo7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmOztBQUVBLElBQU1LLE9BQU8sc0JBQVEsTUFBUixDQUFiOztBQUVBLElBQUlDLFlBQVlMLE9BQVEsV0FBUixDQUFoQjs7QUFFQUssVUFBVUMsU0FBVixDQUFvQkMsVUFBcEIsR0FBaUMsU0FBU0EsVUFBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDNUQ7Ozs7O0FBS0FOLFFBQVFFLElBQVIsRUFBYyxFQUFkLEVBQW1CLElBQW5COztBQUVBLEtBQUlOLE9BQVFVLEtBQVIsRUFBZSxPQUFmLENBQUosRUFBOEI7QUFDN0IsT0FBS0MsSUFBTCxDQUFXRCxLQUFYO0FBQ0E7O0FBRUQsUUFBTyxJQUFQO0FBQ0EsQ0FiRDs7QUFlQUgsVUFBVUMsU0FBVixDQUFvQkcsSUFBcEIsR0FBMkIsU0FBU0EsSUFBVCxDQUFlRCxLQUFmLEVBQXNCO0FBQ2hEOzs7Ozs7OztBQVFBLEtBQUlFLE1BQU9GLEtBQVAsS0FBa0IsQ0FBQ1YsT0FBUVUsS0FBUixFQUFlLE9BQWYsQ0FBdkIsRUFBaUQ7QUFDaEQsUUFBTSxJQUFJRyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSSxDQUFDLEtBQUtDLFFBQUwsQ0FBZUosS0FBZixDQUFMLEVBQTZCO0FBQzVCLE9BQU1KLElBQU4sRUFBYUssSUFBYixDQUFtQkQsS0FBbkI7QUFDQTs7QUFFRCxRQUFPLElBQVA7QUFDQSxDQWxCRDs7QUFvQkFILFVBQVVDLFNBQVYsQ0FBb0JNLFFBQXBCLEdBQStCLFNBQVNBLFFBQVQsQ0FBbUJKLEtBQW5CLEVBQTBCO0FBQ3hEOzs7Ozs7OztBQVFBLEtBQUlFLE1BQU9GLEtBQVAsS0FBa0IsQ0FBQ1YsT0FBUVUsS0FBUixFQUFlLE9BQWYsQ0FBdkIsRUFBaUQ7QUFDaEQsUUFBTSxJQUFJRyxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBT1YsSUFBSyxLQUFNRyxJQUFOLENBQUwsRUFBbUJJLEtBQW5CLEVBQTBCLFVBQUVLLE9BQUYsRUFBV0wsS0FBWCxVQUFzQkwsT0FBUVUsT0FBUixFQUFpQkwsS0FBakIsQ0FBdEIsRUFBMUIsQ0FBUDtBQUNBLENBZEQ7O0FBZ0JBSCxVQUFVQyxTQUFWLENBQW9CUSxPQUFwQixHQUE4QixTQUFTQSxPQUFULEdBQW1CO0FBQ2hELFFBQU8sS0FBTVYsSUFBTixFQUFhVyxNQUFwQixHQUE2QixLQUFNWCxJQUFOLEVBQWFZLEdBQWIsR0FBN0I7O0FBRUEsUUFBTyxJQUFQO0FBQ0EsQ0FKRDs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQmIsU0FBakIiLCJmaWxlIjoiZXZlbnQtbGlzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWRvL2V2ZW50LWxpc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJldmVudC1saXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlZG9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vkby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVkby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFdmVudExpc3QgY2xhc3MuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZWVuXCI6IFwiZWVuXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImlkbnRmeVwiOiBcImlkbnRmeVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgaWRudGZ5ID0gcmVxdWlyZSggXCJpZG50ZnlcIiApO1xuXG5jb25zdCBMSVNUID0gU3ltYm9sKCBcImxpc3RcIiApO1xuXG5sZXQgRXZlbnRMaXN0ID0gZGlhdG9tKCBcIkV2ZW50TGlzdFwiICk7XG5cbkV2ZW50TGlzdC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIGluaXRpYWxpemUoIGV2ZW50ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRoYXJkZW4oIExJU1QsIFsgXSwgdGhpcyApO1xuXG5cdGlmKCBjbGF6b2YoIGV2ZW50LCBcIkV2ZW50XCIgKSApe1xuXHRcdHRoaXMucHVzaCggZXZlbnQgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRMaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCggZXZlbnQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJldmVudFwiOiBcIkV2ZW50XCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBldmVudFwiICk7XG5cdH1cblxuXHRpZiggIXRoaXMuaGFzRXZlbnQoIGV2ZW50ICkgKXtcblx0XHR0aGlzWyBMSVNUIF0ucHVzaCggZXZlbnQgKTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRMaXN0LnByb3RvdHlwZS5oYXNFdmVudCA9IGZ1bmN0aW9uIGhhc0V2ZW50KCBldmVudCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImV2ZW50XCI6IFwiRXZlbnRcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFjbGF6b2YoIGV2ZW50LCBcIkV2ZW50XCIgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV2ZW50XCIgKTtcblx0fVxuXG5cdHJldHVybiBlZW4oIHRoaXNbIExJU1QgXSwgZXZlbnQsICggZWxlbWVudCwgZXZlbnQgKSA9PiBpZG50ZnkoIGVsZW1lbnQsIGV2ZW50ICkgKTtcbn07XG5cbkV2ZW50TGlzdC5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uIHJlbGVhc2UoICl7XG5cdHdoaWxlKCB0aGlzWyBMSVNUIF0ubGVuZ3RoICkgdGhpc1sgTElTVCBdLnBvcCggKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRMaXN0O1xuIl19
//# sourceMappingURL=event-list.support.js.map
