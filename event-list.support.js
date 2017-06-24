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
var een = require("een");
var falzy = require("falzy");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWxpc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjbGF6b2YiLCJyZXF1aXJlIiwiZGlhdG9tIiwiZWVuIiwiZmFsenkiLCJoYXJkZW4iLCJpZG50ZnkiLCJMSVNUIiwiRXZlbnRMaXN0IiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsImV2ZW50IiwicHVzaCIsIkVycm9yIiwiaGFzRXZlbnQiLCJlbGVtZW50IiwicmVsZWFzZSIsImxlbmd0aCIsInBvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJnTkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsTUFBTUYsUUFBUyxLQUFULENBQVo7QUFDQSxJQUFNRyxRQUFRSCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssU0FBU0wsUUFBUyxRQUFULENBQWY7O0FBRUEsSUFBTU0sT0FBTyxzQkFBUSxNQUFSLENBQWI7O0FBRUEsSUFBSUMsWUFBWU4sT0FBUSxXQUFSLENBQWhCOztBQUVBTSxVQUFVQyxTQUFWLENBQW9CQyxVQUFwQixHQUFpQyxTQUFTQSxVQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUM1RDs7Ozs7QUFLQU4sUUFBUUUsSUFBUixFQUFjLEVBQWQsRUFBbUIsSUFBbkI7O0FBRUEsS0FBSVAsT0FBUVcsS0FBUixFQUFlLE9BQWYsQ0FBSixFQUE4QjtBQUM3QixPQUFLQyxJQUFMLENBQVdELEtBQVg7QUFDQTs7QUFFRCxRQUFPLElBQVA7QUFDQSxDQWJEOztBQWVBSCxVQUFVQyxTQUFWLENBQW9CRyxJQUFwQixHQUEyQixTQUFTQSxJQUFULENBQWVELEtBQWYsRUFBc0I7QUFDaEQ7Ozs7Ozs7O0FBUUEsS0FBSVAsTUFBT08sS0FBUCxLQUFrQixDQUFDWCxPQUFRVyxLQUFSLEVBQWUsT0FBZixDQUF2QixFQUFpRDtBQUNoRCxRQUFNLElBQUlFLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJLENBQUMsS0FBS0MsUUFBTCxDQUFlSCxLQUFmLENBQUwsRUFBNkI7QUFDNUIsT0FBTUosSUFBTixFQUFhSyxJQUFiLENBQW1CRCxLQUFuQjtBQUNBOztBQUVELFFBQU8sSUFBUDtBQUNBLENBbEJEOztBQW9CQUgsVUFBVUMsU0FBVixDQUFvQkssUUFBcEIsR0FBK0IsU0FBU0EsUUFBVCxDQUFtQkgsS0FBbkIsRUFBMEI7QUFDeEQ7Ozs7Ozs7O0FBUUEsS0FBSVAsTUFBT08sS0FBUCxLQUFrQixDQUFDWCxPQUFRVyxLQUFSLEVBQWUsT0FBZixDQUF2QixFQUFpRDtBQUNoRCxRQUFNLElBQUlFLEtBQUosQ0FBVyxlQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPVixJQUFLLEtBQU1JLElBQU4sQ0FBTCxFQUFtQkksS0FBbkIsRUFBMEIsVUFBRUksT0FBRixFQUFXSixLQUFYLFVBQXNCTCxPQUFRUyxPQUFSLEVBQWlCSixLQUFqQixDQUF0QixFQUExQixDQUFQO0FBQ0EsQ0FkRDs7QUFnQkFILFVBQVVDLFNBQVYsQ0FBb0JPLE9BQXBCLEdBQThCLFNBQVNBLE9BQVQsR0FBbUI7QUFDaEQsUUFBTyxLQUFNVCxJQUFOLEVBQWFVLE1BQXBCLEdBQTZCLEtBQU1WLElBQU4sRUFBYVcsR0FBYixHQUE3Qjs7QUFFQSxRQUFPLElBQVA7QUFDQSxDQUpEOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCWixTQUFqQiIsImZpbGUiOiJldmVudC1saXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZWRvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJlZG8vZXZlbnQtbGlzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImV2ZW50LWxpc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZWRvLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZWRvLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEV2ZW50TGlzdCBjbGFzcy5cblx0QGVuZC1zdWJtb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2xhem9mXCI6IFwiY2xhem9mXCIsXG5cdFx0XHRcImRpYXRvbVwiOiBcImRpYXRvbVwiLFxuXHRcdFx0XCJlZW5cIjogXCJlZW5cIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwiaWRudGZ5XCI6IFwiaWRudGZ5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2xhem9mID0gcmVxdWlyZSggXCJjbGF6b2ZcIiApO1xuY29uc3QgZGlhdG9tID0gcmVxdWlyZSggXCJkaWF0b21cIiApO1xuY29uc3QgZWVuID0gcmVxdWlyZSggXCJlZW5cIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGlkbnRmeSA9IHJlcXVpcmUoIFwiaWRudGZ5XCIgKTtcblxuY29uc3QgTElTVCA9IFN5bWJvbCggXCJsaXN0XCIgKTtcblxubGV0IEV2ZW50TGlzdCA9IGRpYXRvbSggXCJFdmVudExpc3RcIiApO1xuXG5FdmVudExpc3QucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiBpbml0aWFsaXplKCBldmVudCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aGFyZGVuKCBMSVNULCBbIF0sIHRoaXMgKTtcblxuXHRpZiggY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHR0aGlzLnB1c2goIGV2ZW50ICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50TGlzdC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2goIGV2ZW50ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZXZlbnRcIjogXCJFdmVudFwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHR9XG5cblx0aWYoICF0aGlzLmhhc0V2ZW50KCBldmVudCApICl7XG5cdFx0dGhpc1sgTElTVCBdLnB1c2goIGV2ZW50ICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50TGlzdC5wcm90b3R5cGUuaGFzRXZlbnQgPSBmdW5jdGlvbiBoYXNFdmVudCggZXZlbnQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJldmVudFwiOiBcIkV2ZW50XCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggZXZlbnQgKSB8fCAhY2xhem9mKCBldmVudCwgXCJFdmVudFwiICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBldmVudFwiICk7XG5cdH1cblxuXHRyZXR1cm4gZWVuKCB0aGlzWyBMSVNUIF0sIGV2ZW50LCAoIGVsZW1lbnQsIGV2ZW50ICkgPT4gaWRudGZ5KCBlbGVtZW50LCBldmVudCApICk7XG59O1xuXG5FdmVudExpc3QucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbiByZWxlYXNlKCApe1xuXHR3aGlsZSggdGhpc1sgTElTVCBdLmxlbmd0aCApIHRoaXNbIExJU1QgXS5wb3AoICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50TGlzdDtcbiJdfQ==
//# sourceMappingURL=event-list.support.js.map
