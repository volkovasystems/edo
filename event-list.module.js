/*;
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

const clazof = require( "clazof" );
const diatom = require( "diatom" );
const een = require( "een" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const idntfy = require( "idntfy" );

const LIST = Symbol( "list" );

let EventList = diatom( "EventList" );

EventList.prototype.initialize = function initialize( event ){
	/*;
		@meta-configuration:
			{
				"event": "Event"
			}
		@end-meta-configuration
	*/

	harden( LIST, [ ], this );

	if( clazof( event, "Event" ) ){
		this.push( event );
	}

	return this;
};

EventList.prototype.push = function push( event ){
	/*;
		@meta-configuration:
			{
				"event": "Event"
			}
		@end-meta-configuration
	*/

	if( falzy( event ) || !clazof( event, "Event" ) ){
		throw new Error( "invalid event" );
	}

	if( !this.hasEvent( event ) ){
		this[ LIST ].push( event );
	}

	return this;
};

EventList.prototype.hasEvent = function hasEvent( event ){
	/*;
		@meta-configuration:
			{
				"event": "Event"
			}
		@end-meta-configuration
	*/

	if( falzy( event ) || !clazof( event, "Event" ) ){
		throw new Error( "invalid event" );
	}

	return een( this[ LIST ], event, ( element, event ) => idntfy( element, event ) );
};

EventList.prototype.release = function release( ){
	while( this[ LIST ].length ) this[ LIST ].pop( );

	return this;
};

module.exports = EventList;
