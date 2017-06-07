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
			"called": "called",
			"clazof": "clazof",
			"diatom": "diatom",
			"execd": "execd",
			"exorcise": "exorcise",
			"falzy": "falzy",
			"filled": "filled",
			"kurse": "kurse",
			"posp": "posp",
			"protype": "protype",
			"raze": "raze",
			"statis": "statis",
			"zelf": "zelf"
		}
	@end-include
*/

const arkount = require( "arkount" );
const called = require( "called" );
const clazof = require( "clazof" );
const diatom = require( "diatom" );
const execd = require( "execd" );
const falzy = require( "falzy" );
const filled = require( "filled" );
const kurse = require( "kurse" );
const posp = require( "posp" );
const protype = require( "protype" );
const raze = require( "raze" );
const statis = require( "statis" );
const zelf = require( "zelf" );

//: @server:
const exorcise = require( "exorcise" );
//: @end-server

const CONTEXT = Symbol( "context" );
const EVENT = Symbol( "event" );
const HANDLER = Symbol( "handler" );

const listener = function listener( ){
	let Handler = diatom( "Handler" );

	//: @server:
	let release = exorcise( function flush( ){ Handler.flush( ); } );
	//: @end-server

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

			this[ HANDLER ].push( kurse( handler ) );

			return this;
		} )
		.implement( "merge", function merge( handler ){
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

			if( clazof( handler, "Handler" ) ){
				handler.list( ).forEach( ( handler ) => this.push( handler ) );
			}

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

			release( );

			return this;
		} )
		.implement( "list", function list( ){
			return raze( this[ HANDLER ] );
		} )
		.implement( "lock", function lock( ){
			this[ HANDLER ].forEach( ( handler, index ) => {
				this[ HANDLER ][ index ] = called.bind( this[ CONTEXT ] )( handler );
			} );

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

		this.handler.reverse( ).forEach( ( handler ) => {
			try{
				handler.apply( this.context, parameter );

			}catch( error ){
				this.event.emit( "error", error );
			}

			if( execd( handler ) ){
				posp( this.handler, handler );
			}
		} );

		return this;
	};

	return Handler;
};

module.exports = listener;
