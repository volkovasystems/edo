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
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
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
			"asyum": "asyum",
			"called": "called",
			"clazof": "clazof",
			"depher": "depher",
			"diatom": "diatom",
			"eqe": "eqe",
			"embedd": "embedd",
			"EventEmitter": "events",
			"falzy": "falzy",
			"harden": "harden",
			"heredito": "heredito",
			"idntfy": "idntfy",
			"idntty": "idntty",
			"ferge": "ferge",
			"infray": "infray",
			"kein": "kein",
			"kurse": "kurse",
			"leveld": "leveld",
			"plough": "plough",
			"pyp": "pyp",
			"protype": "protype",
			"pyck": "pyck",
			"raze": "raze",
			"shft": "shft",
			"symbiote": "symbiote",
			"valu": "valu",
			"zelf": "zelf"
		}
	@end-include
*/

const arid = require( "arid" );
const asea = require( "asea" );
const asyum = require( "asyum" );
const called = require( "called" );
const clazof = require( "clazof" );
const depher = require( "depher" );
const diatom = require( "diatom" );
const een = require( "een" );
const embedd = require( "embedd" );
const eqe = require( "eqe" );
const falzy = require( "falzy" );
const harden = require( "harden" );
const heredito = require( "heredito" );
const idntfy = require( "idntfy" );
const idntty = require( "idntty" );
const ferge = require( "ferge" );
const infray = require( "infray" );
const kein = require( "kein" );
const kurse = require( "kurse" );
const leveld = require( "leveld" );
const plough = require( "plough" );
const pyp = require( "pyp" );
const protype = require( "protype" );
const pyck = require( "pyck" );
const raze = require( "raze" );
const shft = require( "shft" );
const symbiote = require( "symbiote" );
const valu = require( "valu" );
const zelf = require( "zelf" );

//: @server:
const EventEmitter = require( "events" );
const EventList = require( "./event-list.js" );
const listener = require( "./listener.js" );
//: @end-server

//: @client:
const EventList = require( "./event-list.support.js" );
const listener = require( "./listener.support.js" );
//: @end-client

const EVENT = Symbol( "event" );
const HANDLER = Symbol( "handler" );
const LIMIT = Symbol( "limit" );
const LINK = Symbol( "link" );
const TIMEOUT = Symbol( "timeout" );

const DEFAULT_TIMEOUT = 1000;
const DEFAULT_LIMIT = 10;

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

	let Event = diatom( "Event" );

	Event.prototype.initialize = function initialize( ){
		this.delay( DEFAULT_TIMEOUT );
		this.restrict( DEFAULT_LIMIT );

		harden( HANDLER, { }, this );
		harden( LINK, [ ], this );

		kurse( this );

		let identity = idntty( this ).toString( );
		this.on( `${ identity }:on-listener-added`, function handle( ){ } );
		this.on( `${ identity }:once-listener-added`, function handle( ){ } );

		return this;
	};

	Event.prototype.on = function on( event, handler, option ){
		/*;
			@meta-configuration:
				{
					"event:required": [
						"string",
						"..."
					],
					"handler:required": [
						"function",
						"..."
					],
					"option": "object"
				}
			@end-meta-configuration
		*/

		let parameter = leveld( arguments );

		event = pyck( parameter, STRING );

		handler = pyck( parameter, FUNCTION );

		//: @note: Preserve the original handler. This will be used to emit notification.
		let handlerList = handler;

		option = depher( parameter, OBJECT, { } );

		/*;
			@note:
				Checks if the event-handler is already registered.

				Note that this will check the real handler function not the Handler instance.
			@end-note
		*/
		if( this.registered( event, handler ) ){
			return this;
		}

		if( this.haveEvent( event ) ){
			let index = event.length;
			while( index-- ){
				let name = event[ index ];
				if( this.hasEvent( name ) ){
					this.holder( name ).push( handler );

				}else{
					this.on.apply( this, [ name ].concat( handler ).concat( option ) );
				}
			}

		}else{
			let holder = listener( ).register( this ).context( self );

			handler = handler.reduce( ( listener, handler ) => listener.push( handler ), holder );

			if( asea.SERVER ){
				let emitter = ferge( this, "EventEmitter" );

				let index = event.length;
				while( index-- ){
					emitter.on( event[ index ], handler );
				}

			}else if( asea.CLIENT ){
				let index = event.length;
				while( index-- ){
					this.handle( event[ index ], handler );
				}

			}else{
				throw new Error( "cannot determine platform, platform not supported" );
			}
		}

		/*;
			@note:
				This is our own notification that the event has been added.

				Note that we will not notify if the event is an identity event or
					"disableOnListenerNotification" is enabled.
			@end-note
		*/
		if( !embedd( this, event ) && !option.disableOnListenerNotification ){
			this.emit( `${ idntty( this ).toString( ) }:on-listener-added`, event, handlerList );
		}

		return this;
	};

	Event.prototype.once = function once( event, handler, option ){
		/*;
			@meta-configuration:
				{
					"event:required": [
						"string",
						"..."
					],
					"handler:required": "function",
					"option": "object"
				}
			@end-meta-configuration
		*/

		let parameter = leveld( arguments );

		event = pyck( parameter, STRING );

		handler = pyck( parameter, FUNCTION );

		//: @note: Preserve the original handler. This will be used to emit notification.
		let handlerList = handler;

		option = depher( parameter, OBJECT, { } );

		/*;
			@note:
				Checks if the event-handler is already registered.

				Note that this will check the real handler function not the Handler instance.
			@end-note
		*/
		if( this.registered( event, handler ) ){
			return this;
		}

		handler = handler.map( ( handler ) => called.bind( self )( handler ) );

		if( this.haveEvent( event ) ){
			let index = event.length;
			while( index-- ){
				let name = event[ index ];
				if( this.hasEvent( name ) ){
					this.holder( name ).push( handler );

				}else{
					this.once.apply( this, [ name ].concat( handler ).concat( option ) );
				}
			}

		}else{
			let holder = listener( ).register( this ).context( self );

			handler = handler.reduce( ( listener, handler ) => listener.push( handler ), holder );

			if( asea.SERVER ){
				let emitter = ferge( this, "EventEmitter" );

				let index = event.length;
				while( index-- ){
					emitter.once( event[ index ], handler );
				}

			}else if( asea.CLIENT ){
				let index = event.length;
				while( index-- ){
					this.handle( event[ index ], handler, true );
				}

			}else{
				throw new Error( "cannot determine platform, platform not supported" );
			}
		}

		/*;
			@note:
				This is our own notification that the event has been added once.

				Note that we will not notify if the event is an identity event or
					"disableOnceListenerNotification" is enabled.
			@end-note
		*/
		if( !embedd( this, event ) && !option.disableOnceListenerNotification ){
			this.emit( `${ idntty( this ).toString( ) }:once-listener-added`, event, handlerList );
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

		parameter = shft( arguments );

		if( this[ LIMIT ] <= 0 ){
			this.restrict( DEFAULT_LIMIT );

			return this;
		}

		if( this.hasEvent( event ) ){
			this.restrict( DEFAULT_LIMIT );

			if( asea.SERVER ){
				let emitter = ferge( this, "EventEmitter" );

				emitter.emit.apply( this, [ event ].concat( parameter ) );

			}else if( asea.CLIENT ){
				this.notify.apply( this, [ event ].concat( parameter ) );

			}else{
				throw new Error( "cannot determine platform, platform not supported" );
			}

		}else{
			//: @server:
			let timeout = setImmediate( ( event, parameter ) => {
				this.emit.apply( this, [ event ].concat( parameter ) );

				clearImmediate( timeout );
			}, event, parameter );
			//: @end-server

			//: @client:
			let timeout = setTimeout( ( event, parameter ) => {
				this.emit.apply( this, [ event ].concat( parameter ) );

				clearTimeout( timeout );
			}, this[ TIMEOUT ], event, parameter );
			//: @end-client

			this[ LIMIT ]--;
		}

		return this;
	};

	Event.prototype.invoke = function invoke( event, parameter, limit ){
		/*;
			@meta-configuration:
				{
					"event:required": "string",
					"parameter": "...",
					"limit": "EventList"
				}
			@end-meta-configuration
		*/

		parameter = shft( arguments );

		limit = asyum( pyp( parameter, EventList ), function hasEvent( ){
			return false;
		} );

		if( limit.hasEvent( this ) ){
			return this;
		}

		asyum( pyp( parameter, EventList ), function push( event ){
			parameter.push( EventList( event ) );
		} ).push( this );

		if( this.hasEvent( event ) ){
			if( asea.SERVER ){
				let emitter = ferge( this, "EventEmitter" );

				emitter.emit.apply( this, [ event ].concat( parameter ) );

			}else if( asea.CLIENT ){
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

		if( falzy( timeout ) || typeof timeout != "number" ){
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

		if( falzy( limit ) || typeof limit != "number" ){
			throw new Error( "invalid limit" );
		}

		this[ LIMIT ] = limit;

		return this;
	};

	Event.prototype.broadcast = function broadcast( event, parameter ){
		/*;
			@meta-configuration:
				{
					"event:required": [
						"string",
						"[string]"
					],
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		event = plough( event ).reverse( );

		parameter = shft( arguments );

		let index = event.length;
		while( index-- ){
			this.emit.apply( this, [ event[ index ] ].concat( parameter ) );
		}

		return this;
	};

	Event.prototype.count = function count( event ){
		if( asea.SERVER ){
			return this.listenerCount( event );

		}else if( asea.CLIENT ){
			if( kein( event, this[ HANDLER ] ) ){
				return this[ HANDLER ][ event ].count( );
			}

			return 0;

		}else{
			throw new Error( "cannot determine platform, platform not supported" );
		}
	};

	Event.prototype.flush = function flush( ){
		let list = valu( this[ HANDLER ] );
		let index = list.length;
		while( index-- ){
			list[ index ].flush( );
		}

		list = Object.keys( this[ HANDLER ] );
		index = list.length;
		while( index-- ){
			delete this[ HANDLER ][ list[ index ] ];
		}

		//: @server:
		this.removeAllListeners( );
		//: @end-server

		while( this[ LINK ].length ) this[ LINK ].pop( ).flush( );

		return this;
	};

	/*;
		@method-documentation:
			Bi-directional forward flow merging of event handlers.
		@end-method-documentation
	*/
	Event.prototype.merge = function merge( event ){
		/*;
			@meta-configuration:
				{
					"event:required": "Event"
				}
			@end-meta-configuration
		*/

		if( falzy( event ) || !clazof( event, "Event" ) ){
			throw new Error( "cannot merge event" );
		}

		this.transfer( event );
		event.transfer( this );

		return this;
	};

	/*;
		@method-documentation:
			Transfer event handlers.
		@end-method-documentation
	*/
	Event.prototype.transfer = function transfer( event ){
		/*;
			@meta-configuration:
				{
					"event:required": "Event"
				}
			@end-meta-configuration
		*/

		if( falzy( event ) || !clazof( event, "Event" ) ){
			throw new Error( "cannot transfer from event" );
		}

		let self = this;

		infray( event.list( ), this.list( ) )
			.forEach( ( name ) => {
				/*;
					@note:
						Identity events are not copied.
					@end-note
				*/
				if( embedd( this, name ) || embedd( event, name ) ){
					return;
				}

				/*;
					@note:
						If event is already link, do not link it anymore.
					@end-note
				*/
				if( this.hasLink( name, event ) ){
					return;
				}

				let invoker = function invoker( ){
					let parameter = raze( arguments );

					asyum( pyp( parameter, EventList ), function push( event ){
						parameter.push( EventList( event ) );
					} ).push( self );

					event.invoker.apply( event, [ name ].concat( parameter ) );
				};

				this.on( name, invoker );

				asyum( invoker, function linkedTo( ){ } ).linkedTo( event );
			} );

		let identity = idntty( this ).toString( );
		this.on( `${ identity }:on-listener-added`, function onListenerAdded( name ){
			/*;
				@note:
					Name of events are in array.
				@end-note
			*/

			if( event.haveLink( name, self ) ){
				return;
			}

			let invoker = function invoker( ){
				let parameter = raze( arguments );

				asyum( pyp( parameter, EventList ), function push( event ){
					parameter.push( EventList( event ) );
				} ).push( event );

				name.forEach( ( name ) => self.invoke.apply( self, [ name ].concat( parameter ) ) );
			};

			event.on( name, invoker );

			asyum( invoker, function linkedTo( ){ } ).linkedTo( self );
		} );

		this.on( `${ identity }:once-listener-added`, function onceListenerAdded( name ){
			/*;
				@note:
					Name of events are in array.
				@end-note
			*/

			if( event.haveLink( name, self ) ){
				return;
			}

			let invoker = function invoker( ){
				let parameter = raze( arguments );

				asyum( pyp( parameter, EventList ), function push( event ){
					parameter.push( EventList( event ) );
				} ).push( event );

				name.forEach( ( name ) => self.invoker.apply( self, [ name ].concat( parameter ) ) );
			};

			event.once( name, invoker );

			asyum( invoker, function linkedTo( ){ } ).linkedTo( self );
		} );

		this.link( event );

		return this;
	};

	Event.prototype.link = function link( event ){
		/*;
			@meta-configuration:
				{
					"event:required": "Event"
				}
			@end-meta-configuration
		*/

		if( falzy( event ) || !clazof( event, "Event" ) ){
			throw new Error( "cannot link event" );
		}

		if( !een( this[ LINK ], event, ( link, event ) => idntfy( link, event ) ) ){
			this[ LINK ].push( event );
		}

		return this;
	};

	/*;
		@method-documentation:
			List registered event names.
		@end-method-documentation
	*/
	Event.prototype.list = function list( ){
		if( asea.SERVER ){
			return this.eventNames( );

		}else if( asea.CLIENT ){
			return Object.keys( this[ HANDLER ] );

		}else{
			throw new Error( "cannot determine platform, platform not supported" );
		}
	};

	/*;
		@method-documentation:
			List the handlers of the event.
		@end-method-documentation
	*/
	Event.prototype.handler = function handler( event ){
		/*;
			@meta-configuration:
				{
					"event:required": "string"
				}
			@end-meta-configuration
		*/

		if( falzy( event ) || typeof event != "string" ){
			return [ ];
		}

		if( asea.SERVER ){
			return this.listeners( event ).reduce( ( list, handler ) => {
				if( clazof( handler, "Handler" ) ){
					return list.concat( handler.list( ) );

				}else{
					list.push( handler );

					return list;
				}
			}, [ ] );

		}else if( asea.CLIENT ){
			if( !kein( event, this[ HANDLER ] ) ){
				return [ ];
			}

			return this[ HANDLER ][ event ].list( );

		}else{
			throw new Error( "cannot determine platform, platform not supported" );
		}
	};

	/*;
		@method-documentation:
			Return the Handler that holds the handler procedures.

			There should only be one Handler for a specific event name.
		@end-method-documentation
	*/
	Event.prototype.holder = function holder( event ){
		/*;
			@meta-configuration:
				{
					"event:required": [
						"string",
						"[string],
						"...
					]
				}
			@end-meta-configuration
		*/

		event = pyck( plough( arguments ), STRING );

		if( asea.SERVER ){
			return event.reduce( ( holder, event ) => {
				return this.listeners( event ).reduce( ( holder, handler ) => {
					if( clazof( handler, "Handler" ) ){
						return handler;
					}

					return holder;
				}, undefined );
			}, undefined );

		}else if( asea.CLIENT ){
			return event.reduce( ( holder, event ) => {
				return this[ HANDLER ][ event ];
			}, undefined );

		}else{
			throw new Error( "cannot determine platform, platform not supported" );
		}
	};

	/*;
		@method-documentation:
			Checks if the event-handler is registered.
		@end-method-documentation

		@todo:
			This needs optimization.
		@end-todo
	*/
	Event.prototype.registered = function registered( event, handler ){
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

		handler = pyck( plough( arguments ), FUNCTION );

		return pyck( plough( arguments ), STRING ).some( ( event ) => {
			return this.handler( event ).some( ( listener ) => {
				return handler.some( ( handler ) => {
					return idntfy( listener, handler ) || eqe( listener, handler );
				} );
			} );
		} );
	};

	Event.prototype.hasEvent = function hasEvent( event ){
		/*;
			@meta-configuration:
				{
					"event:required": "string"
				}
			@end-meta-configuration
		*/

		if( falzy( event ) || typeof event != "string" ){
			throw new Error( "invalid event" );
		}

		return een( this.list( ), event );
	};

	Event.prototype.haveEvent = function haveEvent( event ){
		/*;
			@meta-configuration:
				{
					"event:required": "[string]"
				}
			@end-meta-configuration
		*/

		event = pyck( plough( arguments ), STRING );

		let list = this.list( );

		return event.some( ( event ) => een( list, event ) );
	};

	Event.prototype.hasLink = function hasLink( event, link ){
		/*;
			@meta-configuration:
				{
					"event:required": "string",
					"link:required": "Event"
				}
			@end-meta-configuration
		*/

		if( falzy( event ) || typeof event != "string" ){
			throw new Error( "invalid event" );
		}

		if( falzy( link ) || !clazof( link, "Event" ) ){
			throw new Error( "invalid link" );
		}

		let holder = this.holder( event );
		if( falzy( holder ) ){
			return false;
		}

		if( !een( this[ LINK ], link, ( event, link ) => idntfy( event, link ) ) ){
			return false;
		}

		link = idntty( link );

		return een( holder.list( ), link, ( handler, link ) => ( handler.getLink( ) === link ) );
	};

	Event.prototype.haveLink = function haveLink( event, link ){
		/*;
			@meta-configuration:
				{
					"event:required": [
						"[string]",
						"..."
					],
					"link:required": "Event"
				}
			@end-meta-configuration
		*/

		let parameter = raze( arguments );

		event = pyck( plough( parameter ), STRING );

		if( arid( event ) ){
			throw new Error( "invalid event" );
		}

		link = pyp( parameter, "Event" );

		if( falzy( link ) || !clazof( link, "Event" ) ){
			throw new Error( "invalid link" );
		}

		return event.some( ( event ) => this.hasLink( event, link ) );
	};

	//: @client:
	Event.prototype.notify = function notify( event, parameter ){
		/*;
			@meta-configuration:
				{
					"event:required": "string",
					"parameter": "..."
				}
			@end-meta-configuration
		*/

		if( kein( event, this[ HANDLER ] ) ){
			parameter = shft( arguments );

			this[ HANDLER ][ event ].apply( self, parameter );
		}

		return this;
	};

	Event.prototype.handle = function handle( event, handler, once ){
		/*;
			@meta-configuration:
				{
					"event:required": "string",
					"handler:required": "function",
					"once": "boolean"
				}
			@end-meta-configuration
		*/

		if( falzy( event ) || typeof event != "string" ){
			throw new Error( "invalid event" );
		}

		if( falzy( handler ) || typeof handler != "function" ){
			throw new Error( "invalid handler" );
		}

		/*;
			@note:
				If the event is not yet registered, create a handler collection.
			@end-note
		*/
		if( !kein( event, this[ HANDLER ] ) ){
			if( !clazof( handler, "Handler" ) ){
				if( once === true ){
					handler = called.bind( self )( handler );
				}

				handler = listener( ).push( handler ).context( self ).register( this );
			}

			this[ HANDLER ][ event ] = handler;

		}else{
			/*;
				@note:
					If the event is registered, make sure we are pushing the handler function
						not the handler collection, if we encounter a handler collection,
						merge it.
				@end-note
			*/
			if( clazof( handler, "Handler" ) ){
				if( once === true ){
					handler.lock( );
				}

				this[ HANDLER ][ event ].merge( handler );

			}else{
				if( once === true ){
					handler = called.bind( self )( handler );
				}

				this[ HANDLER ][ event ].push( handler );
			}
		}

		return this;
	};
	//: @end-client

	//: @server:
	Event = heredito( Event, EventEmitter );

	Event = symbiote( Event, EventEmitter );
	//: @end-server

	if( arid( parameter ) ){
		return Event;

	}else{
		return Event.apply( null, parameter );
	}
};

module.exports = edo;
