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
			"execd": "execd",
			"exorcise": "exorcise",
			"falzy": "falzy",
			"filled": "filled",
			"harden": "harden",
			"idntty": "idntty",
			"kurse": "kurse",
			"mrkd": "mrkd",
			"posp": "posp",
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
const harden = require( "harden" );
const idntty = require( "idntty" );
const kurse = require( "kurse" );
const mrkd = require( "mrkd" );
const posp = require( "posp" );
const raze = require( "raze" );
const statis = require( "statis" );
const zelf = require( "zelf" );

//: @server:
const exorcise = require( "exorcise" );
//: @end-server

const CONTEXT = Symbol( "context" );
const EVENT = Symbol( "event" );
const ID = Symbol( "id" );
const LABEL = Symbol( "label" );
const LINK = Symbol( "link" );
const HANDLER = Symbol( "handler" );
const OWNER = Symbol( "owner" );

const listener = function listener( ){
	let Handler = diatom( "Handler" );

	//: @server:
	let release = exorcise( function flush( ){ Handler.flush( ); } );
	//: @end-server

	statis( Handler )

		.attach( HANDLER, [ ] )

		.attach( LABEL, [ ] )

		/*;
			@static-method-documentation:
				Push multiple handler.
			@end-static-method-documentation
		*/
		.implement( "push", function push( handler ){
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

			let list = raze( handler ).reverse( );
			let index = list.length;
			while( length-- ){
				this.insert( list[ index ] );
			}

			return this;
		} )

		/*;
			@static-method-documentation:
				Insert single handler
			@end-static-method-documentation
		*/
		.implement( "insert", function insert( handler ){
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

			if( typeof handler != "function" ){
				throw new Error( "invalid handler function" );
			}

			/*;
				@note:
					We are adding trace ID to the handler before pushing,
						so that we can mark the handler properly
				@end-note
			*/
			this[ HANDLER ].push( kurse( handler ) );

			statis( handler )
				/*;
					@static-method-documentation:

					@end-static-method-documentation
				*/
				.implement( "ownedBy", function ownedBy( owner ){
					/*;
						@meta-configuration:
							{
								"owner:required": "Event"
							}
						@end-meta-configuration
					*/

					if( falzy( owner ) || !clazof( owner, "Event" ) ){
						throw new Error( "invalid owner" );
					}

					if( mrkd( OWNER, this ) ){
						return this;
					}

					harden( OWNER, idntty( owner ), this );

					return this;
				} )

				/*;
					@static-method-documentation:

					@end-static-method-documentation
				*/
				.implement( "linkedTo", function linkedTo( link ){
					/*;
						@meta-configuration:
							{
								"link:required": "Event"
							}
						@end-meta-configuration
					*/

					if( falzy( link ) || !clazof( link, "Event" ) ){
						throw new Error( "invalid link" );
					}

					if( mrkd( LINK, this ) ){
						return this;
					}

					harden( LINK, idntty( link ), this );

					return this;
				} )

				/*;
					@static-method-documentation:
						Return the owner Event ID.
					@end-static-method-documentation
				*/
				.implement( "getOwner", function getOwner( ){
					return this[ OWNER ];
				} )

				/*;
					@static-method-documentation:
						Return the linking Event ID.
					@end-static-method-documentation
				*/
				.implement( "getLink", function getLink( ){
					return this[ LINK ];
				} );

			handler.ownedBy( this[ EVENT ] );

			return this;
		} )

		/*;
			@static-method-documentation:

			@end-static-method-documentation
		*/
		.implement( "merge", function merge( handler ){
			/*;
				@meta-configuration:
					{
						"handler:required": "function"
					}
				@end-meta-configuration
			*/

			if( typeof handler != "function" ){
				throw new Error( "invalid handler function" );
			}

			if( clazof( handler, "Handler" ) ){
				let list = handler.list( ).reverse( );
				let length = list.length;
				while( length-- ){
					this.insert( list[ length ] );
				}

			}else{
				throw new Error( `cannot merge handler, ${ handler }` );
			}

			return this;
		} )

		/*;
			@static-method-documentation:

			@end-static-method-documentation
		*/
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

		/*;
			@static-method-documentation:
				Register Event instance to the Handler.
			@end-static-method-documentation
		*/
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

		/*;
			@static-method-documentation:

			@end-static-method-documentation
		*/
		.implement( "count", function count( ){
			return arkount( this[ HANDLER ] );
		} )

		/*;
			@static-method-documentation:
				Flush all handler function from this Handler.
			@end-static-method-documentation
		*/
		.implement( "flush", function flush( ){
			while( filled( this[ HANDLER ] ) ) this[ HANDLER ].pop( );

			//: @server:
			release( );
			//: @end-server

			return this;
		} )

		/*;
			@static-method-documentation:

			@end-static-method-documentation
		*/
		.implement( "list", function list( ){
			return raze( this[ HANDLER ] );
		} )

		/*;
			@static-method-documentation:
				Lock the handlers to a one time calling wrapper.
			@end-static-method-documentation
		*/
		.implement( "lock", function lock( ){

			let index = this[ HANDLER ].length;

			while( index-- ){
				let handler = this[ HANDLER ][ index ];

				this[ HANDLER ][ index ] = called.bind( this[ CONTEXT ] )( handler );
			}

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

	/*;
		@method-documentation:
			Execute all handler functions.
		@end-method-documentation
	*/
	Handler.prototype.execute = function execute( parameter ){
		/*;
			@meta-configuration:
				{
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		parameter = raze( arguments );

		let index = this.handler.length;
		while( index-- ){
			let handler = this.handler[ index ];

			try{
				handler.apply( this.context, parameter );

				//: @server:
				if( execd( handler ) ){
					setImmediate( ( handler ) => posp( this.handler, handler ), handler );
				}
				//: @end-server

				//: @client:
				if( execd( handler ) ){
					posp( this.handler, handler );
				}
				//: @end-client

			}catch( error ){
				this.event.emit( "error", new Error( `cannot execute handler properly, ${ error.stack }` ) );

			}finally{
				handler = undefined;
			}
		}

		return this;
	};

	return Handler;
};

module.exports = listener;
