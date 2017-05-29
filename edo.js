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
*/

const arid = require( "arid" );
const arkount = require( "arkount" );
const asea = require( "asea" );
const budge = require( "budge" );
const called = require( "called" );
const clazof = require( "clazof" );
const diatom = require( "diatom" );
const falzy = require( "falzy" );
const filled = require( "filled" );
const harden = require( "harden" );
const heredito = require( "heredito" );
const inface = require( "inface" );
const kein = require( "kein" );
const leveld = require( "leveld" );
const plough = require( "plough" );
const protype = require( "protype" );
const pyck = require( "pyck" );
const raze = require( "raze" );
const statis = require( "statis" );
const symbiote = require( "symbiote" );
const valu = require( "valu" );
const zelf = require( "zelf" );

//: @server:
const EventEmitter = require( "events" );
const exorcise = require( "exorcise" );
//: @end-server

const CONTEXT = Symbol( "context" );
const EVENT = Symbol( "event" );
const HANDLER = Symbol( "handler" );
const LIMIT = Symbol( "limit" );
const TIMEOUT = Symbol( "timeout" );

const DEFAULT_TIMEOUT = 1000;
const DEFAULT_LIMIT = 1000;

const edo = function edo( parameter ){
	/*;
		@meta-configuration:
			{
				"parameter": "..."
			}
		@end-meta-configuration
	*/

	parameter = raze( arguments );

	let self = zelf( this );

	let Handler = diatom( "Handler" );
	statis( Handler )
		.attach( HANDLER, [ ] )
		.implement( "push", function push( handler ){
			/*;
				@meta-configuration:
					{
						"handler:required": "function"
					}
				@end-meta-configuration
			*/

			if( !protype( handler, FUNCTION ) ){
				throw new Error( "invalid handler function" );
			}

			this[ HANDLER ].push( handler );

			return this;
		} )
		.implement( "context", function context( self ){
			/*;
				@meta-configuration:
					{
						"self:required": "*"
					}
				@end-meta-configuration
			*/

			this[ CONTEXT ] = zelf( self );

			return this;
		} )
		.implement( "register", function register( event ){
			/*;
				@meta-configuration:
					{
						"event:required": "Event"
					}
				@end-meta-configuration
			*/

			if( falzy( event ) || !clazof( event, "Event" ) ){
				throw new Error( "invalid event" );
			}

			this[ EVENT ] = event;

			return this;
		} )
		.implement( "count", function count( ){
			return arkount( this[ HANDLER ] );
		} )
		.implement( "flush", function flush( ){
			while( filled( this[ HANDLER ] ) ) this[ HANDLER ].pop( );

			return this;
		} );

	Handler.prototype.initialize = function initialize( parameter ){
		/*;
			@meta-configuration:
				{
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		parameter = raze( arguments );

		this.context = Handler[ CONTEXT ];
		this.event = Handler[ EVENT ];
		this.handler = Handler[ HANDLER ];

		this.execute.apply( this, parameter );

		return this;
	};

	Handler.prototype.execute = function execute( parameter ){
		/*;
			@meta-configuration:
				{
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		parameter = raze( arguments );

		this.handler.forEach( ( handler ) => {
			try{
				handler.apply( this.context, parameter );

			}catch( error ){
				this.event.emit( "error", error );
			}
		} );

		return this;
	};

	let Event = diatom( "Event" );

	Event.prototype.initialize = function initialize( ){
		this.delay( DEFAULT_TIMEOUT );
		this.restrict( DEFAULT_LIMIT );

		harden( HANDLER, { }, this );

		return this;
	};

	Event.prototype.on = function on( event, handler ){
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

		let parameter = leveld( arguments );

		event = pyck( parameter, STRING );

		handler = pyck( parameter, FUNCTION )
			.reduce( ( delegate, handler ) => delegate.push( handler ), Handler )
			.context( self )
			.register( this );

		if( asea.server ){
			let emitter = inface( this, EventEmitter );

			event.forEach( ( event ) => emitter.on( event, handler ) );

		}else if( asea.client ){
			event.forEach( ( event ) => this.record( event, handler ) );

		}else{
			throw new Error( "cannot determine platform, platform not supported" );
		}

		return this;
	};

	Event.prototype.once = function once( event, handler ){
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

		let parameter = leveld( arguments );

		event = pyck( parameter, STRING );

		handler = pyck( parameter, FUNCTION )
			.map( ( handler ) => called.bind( self )( handler ) )
			.reduce( ( delegate, handler ) => delegate.push( handler ), Handler )
			.context( self )
			.register( this );

		handler = called( handler );

		if( asea.server ){
			let emitter = inface( this, EventEmitter );

			event.forEach( ( event ) => emitter.once( event, handler ) );

		}else if( asea.client ){
			event.forEach( ( event ) => this.record( event, handler, true ) );

		}else{
			throw new Error( "cannot determine platform, platform not supported" );
		}

		return this;
	};

	Event.prototype.emit = function emit( event, parameter ){
		/*;
			@meta-configuration:
				{
					"event:required": "string",
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		parameter = budge( arguments );

		if( this[ LIMIT ] <= 0 ){
			this.restrict( DEFAULT_LIMIT );

			return this;
		}

		if( this.count( event ) <= 0 ){
			let timeout = setTimeout( ( ) => {
				this.emit.apply( this, [ event ].concat( parameter ) );

				clearTimeout( timeout );
			}, this[ TIMEOUT ] );

			this[ LIMIT ]--;

		}else{
			this.restrict( DEFAULT_LIMIT );

			if( asea.server ){
				let emitter = inface( this, EventEmitter );

				emitter.emit.apply( this, [ event ].concat( parameter ) );

			}else if( asea.client ){
				this.notify.apply( this, [ event ].concat( parameter ) );

			}else{
				throw new Error( "cannot determine platform, platform not supported" );
			}
		}

		return this;
	};

	Event.prototype.delay = function delay( timeout ){
		/*;
			@meta-configuration:
				{
					"timeout:required": "number"
				}
			@end-meta-configuration
		*/

		if( falzy( timeout ) || !protype( timeout, NUMBER ) ){
			throw new Error( "invalid timeout" );
		}

		this[ TIMEOUT ] = timeout;

		return this;
	};

	Event.prototype.restrict = function restrict( limit ){
		/*;
			@meta-configuration:
				{
					"limit:required": "number"
				}
			@end-meta-configuration
		*/

		if( falzy( limit ) || !protype( limit, NUMBER ) ){
			throw new Error( "invalid limit" );
		}

		this[ LIMIT ] = limit;

		return this;
	};

	Event.prototype.broadcast = function broadcast( event, parameter ){
		/*;
			@meta-configuration:
				{
					"event:required": "[string]",
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		event = plough( [ event ] );

		parameter = budge( arguments );

		event.forEach( ( event ) => this.emit.apply( this, [ event ].concat( parameter ) ) );

		return this;
	};

	Event.prototype.count = function count( event ){
		if( asea.server ){
			return this.listenerCount( event );

		}else if( asea.client ){
			if( kein( event, this[ HANDLER ] ) ){
				return this[ HANDLER ][ event ].count( );
			}

			return 0;

		}else{
			throw new Error( "cannot determine platform, platform not supported" );
		}
	};

	Event.prototype.flush = function flush( ){
		if( asea.server ){
			this.removeAllListeners( );

		}else if( asea.client ){
			valu( this[ HANDLER ] ).forEach( ( handler ) => handler.flush( ) );

		}else{
			throw new Error( "cannot determine platform, platform not supported" );
		}

		return this;
	};

	

	//: @server:
	Event = heredito( Event, EventEmitter );

	Event = symbiote( Event, EventEmitter );

	exorcise( function flush( ){
		Handler.flush( );
	} );
	//: @end-server

	if( arid( parameter ) ){
		return Event;

	}else{
		return Event.apply( null, parameter );
	}
};

module.exports = edo;
