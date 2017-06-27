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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWxpc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJjbGF6b2YiLCJyZXF1aXJlIiwiZGlhdG9tIiwiZWVuIiwiZmFsenkiLCJoYXJkZW4iLCJpZG50ZnkiLCJMSVNUIiwiRXZlbnRMaXN0IiwicHJvdG90eXBlIiwiaW5pdGlhbGl6ZSIsImV2ZW50IiwicHVzaCIsIkVycm9yIiwiaGFzRXZlbnQiLCJlbGVtZW50IiwicmVsZWFzZSIsImxlbmd0aCIsInBvcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJnTkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLE1BQU1GLFFBQVMsS0FBVCxDQUFaO0FBQ0EsSUFBTUcsUUFBUUgsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNSSxTQUFTSixRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1LLFNBQVNMLFFBQVMsUUFBVCxDQUFmOztBQUVBLElBQU1NLE9BQU8sc0JBQVEsTUFBUixDQUFiOztBQUVBLElBQUlDLFlBQVlOLE9BQVEsV0FBUixDQUFoQjs7QUFFQU0sVUFBVUMsU0FBVixDQUFvQkMsVUFBcEIsR0FBaUMsU0FBU0EsVUFBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDNUQ7Ozs7O0FBS0FOLFFBQVFFLElBQVIsRUFBYyxFQUFkLEVBQW1CLElBQW5COztBQUVBLEtBQUlQLE9BQVFXLEtBQVIsRUFBZSxPQUFmLENBQUosRUFBOEI7QUFDN0IsT0FBS0MsSUFBTCxDQUFXRCxLQUFYO0FBQ0E7O0FBRUQsUUFBTyxJQUFQO0FBQ0EsQ0FiRDs7QUFlQUgsVUFBVUMsU0FBVixDQUFvQkcsSUFBcEIsR0FBMkIsU0FBU0EsSUFBVCxDQUFlRCxLQUFmLEVBQXNCO0FBQ2hEOzs7Ozs7OztBQVFBLEtBQUlQLE1BQU9PLEtBQVAsS0FBa0IsQ0FBQ1gsT0FBUVcsS0FBUixFQUFlLE9BQWYsQ0FBdkIsRUFBaUQ7QUFDaEQsUUFBTSxJQUFJRSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSSxDQUFDLEtBQUtDLFFBQUwsQ0FBZUgsS0FBZixDQUFMLEVBQTZCO0FBQzVCLE9BQU1KLElBQU4sRUFBYUssSUFBYixDQUFtQkQsS0FBbkI7QUFDQTs7QUFFRCxRQUFPLElBQVA7QUFDQSxDQWxCRDs7QUFvQkFILFVBQVVDLFNBQVYsQ0FBb0JLLFFBQXBCLEdBQStCLFNBQVNBLFFBQVQsQ0FBbUJILEtBQW5CLEVBQTBCO0FBQ3hEOzs7Ozs7OztBQVFBLEtBQUlQLE1BQU9PLEtBQVAsS0FBa0IsQ0FBQ1gsT0FBUVcsS0FBUixFQUFlLE9BQWYsQ0FBdkIsRUFBaUQ7QUFDaEQsUUFBTSxJQUFJRSxLQUFKLENBQVcsZUFBWCxDQUFOO0FBQ0E7O0FBRUQsUUFBT1YsSUFBSyxLQUFNSSxJQUFOLENBQUwsRUFBbUJJLEtBQW5CLEVBQTBCLFVBQUVJLE9BQUYsRUFBV0osS0FBWCxVQUFzQkwsT0FBUVMsT0FBUixFQUFpQkosS0FBakIsQ0FBdEIsRUFBMUIsQ0FBUDtBQUNBLENBZEQ7O0FBZ0JBSCxVQUFVQyxTQUFWLENBQW9CTyxPQUFwQixHQUE4QixTQUFTQSxPQUFULEdBQW1CO0FBQ2hELFFBQU8sS0FBTVQsSUFBTixFQUFhVSxNQUFwQixHQUE2QixLQUFNVixJQUFOLEVBQWFXLEdBQWIsR0FBN0I7O0FBRUEsUUFBTyxJQUFQO0FBQ0EsQ0FKRDs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQlosU0FBakIiLCJmaWxlIjoiZXZlbnQtbGlzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBzdWJtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXN1Ym1vZHVsZS1saWNlbnNlXG5cblx0QHN1Ym1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImVkb1wiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZWRvL2V2ZW50LWxpc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJldmVudC1saXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJlZG9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Vkby5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcImVkby10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRFdmVudExpc3QgY2xhc3MuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNsYXpvZlwiOiBcImNsYXpvZlwiLFxuXHRcdFx0XCJkaWF0b21cIjogXCJkaWF0b21cIixcblx0XHRcdFwiZWVuXCI6IFwiZWVuXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImlkbnRmeVwiOiBcImlkbnRmeVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGNsYXpvZiA9IHJlcXVpcmUoIFwiY2xhem9mXCIgKTtcbmNvbnN0IGRpYXRvbSA9IHJlcXVpcmUoIFwiZGlhdG9tXCIgKTtcbmNvbnN0IGVlbiA9IHJlcXVpcmUoIFwiZWVuXCIgKTtcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBoYXJkZW4gPSByZXF1aXJlKCBcImhhcmRlblwiICk7XG5jb25zdCBpZG50ZnkgPSByZXF1aXJlKCBcImlkbnRmeVwiICk7XG5cbmNvbnN0IExJU1QgPSBTeW1ib2woIFwibGlzdFwiICk7XG5cbmxldCBFdmVudExpc3QgPSBkaWF0b20oIFwiRXZlbnRMaXN0XCIgKTtcblxuRXZlbnRMaXN0LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gaW5pdGlhbGl6ZSggZXZlbnQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGhhcmRlbiggTElTVCwgWyBdLCB0aGlzICk7XG5cblx0aWYoIGNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0dGhpcy5wdXNoKCBldmVudCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudExpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoKCBldmVudCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImV2ZW50XCI6IFwiRXZlbnRcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBldmVudCApIHx8ICFjbGF6b2YoIGV2ZW50LCBcIkV2ZW50XCIgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGV2ZW50XCIgKTtcblx0fVxuXG5cdGlmKCAhdGhpcy5oYXNFdmVudCggZXZlbnQgKSApe1xuXHRcdHRoaXNbIExJU1QgXS5wdXNoKCBldmVudCApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudExpc3QucHJvdG90eXBlLmhhc0V2ZW50ID0gZnVuY3Rpb24gaGFzRXZlbnQoIGV2ZW50ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwiZXZlbnRcIjogXCJFdmVudFwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIGV2ZW50ICkgfHwgIWNsYXpvZiggZXZlbnQsIFwiRXZlbnRcIiApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZXZlbnRcIiApO1xuXHR9XG5cblx0cmV0dXJuIGVlbiggdGhpc1sgTElTVCBdLCBldmVudCwgKCBlbGVtZW50LCBldmVudCApID0+IGlkbnRmeSggZWxlbWVudCwgZXZlbnQgKSApO1xufTtcblxuRXZlbnRMaXN0LnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gcmVsZWFzZSggKXtcblx0d2hpbGUoIHRoaXNbIExJU1QgXS5sZW5ndGggKSB0aGlzWyBMSVNUIF0ucG9wKCApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudExpc3Q7XG4iXX0=
//# sourceMappingURL=event-list.support.js.map
