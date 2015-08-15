/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

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
			"packageName": "edo",
			"fileName": "edo.js",
			"moduleName": "Edo",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/edo.git",
			"testCase": "edo-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation	
*/

if( !( typeof window != "undefined" &&
	"harden" in window &&
	"EventEmitter" in window &&
	"async" in window &&
	"heredito" in window ) )
{
	var harden = require( "harden" );
	var EventEmitter = require( "wolfy87-eventemitter" );
	var async = require( "async" );
	var heredito = require( "heredito" );
}

if( typeof window != "undefined" && 
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" ); 
}

if( typeof window != "undefined" && 
	!( "EventEmitter" in window ) )
{
	throw new Error( "EventEmitter is not defined" ); 
}

if( typeof window != "undefined" && 
	!( "async" in window ) )
{
	throw new Error( "async is not defined" ); 
}

if( typeof window != "undefined" && 
	!( "heredito" in window ) )
{
	throw new Error( "heredito is not defined" ); 
}

var Edo = function Edo( ){
	if( this instanceof Edo ){

	}else{
		return new Edo( );
	}
};

heredito( Edo, EventEmitter );

Edo.prototype.on = function on( events, handler ){
	if( Array.isArray( events ) ){
		async.parallel( events
			.map( ( function onEachEvent( event ){
				return ( function listen( callback ){
					EventEmitter.prototype.on.call( this, event,
						( function onHandled( ){
							callback.apply( this, arguments );
						} ).bind( this ) );
				} ).bind( this );
			} ).bind( this ) ), 
			
			( function lastly( ){
				handler.apply( this, arguments );
			} ).bind( this ) );

	}else{
		EventEmitter.prototype.on.call( this, events, handler );
	}

	return this;
};

Edo.prototype.emit = function emit( event ){
	var delay = { "count": 1000 }; 

	var parameters = arguments;

	async.until( ( function checkEventListener( ){
			return ( this.getListeners( event ).length > 0 ||
				--delay.count == 0 );
		} ).bind( this ),

		function delay( callback ){
			delay.timeout = setTimeout( function onTimeout( ){
				callback( );

				clearTimeout( delay.timeout );
			}, delay.count );
		},

		( function execute( ){
			if( delay.count || 
				( this.getListeners( event ).length > 0 ) )
			{
				EventEmitter.prototype.emit.apply( this, parameters );

			}else{
				console.debug( "event emit failed", parameters );
			}
		} ).bind( this ) );

	return this;
};

if( typeof module != "undefined" ){ 
	module.exports = Edo; 
}

if( typeof global != "undefined" ){
	harden
		.bind( Edo )( "globalize", 
			function globalize( ){
				harden.bind( global )( "Edo", Edo );
			} );
}