
const assert = require( "assert" );
const edo = require( "./edo.js" );

let event = edo( )( );

event.once( "hello", "hi", function hello( value ){
	assert.equal( value, "hello", "should be equal" );

	console.log( "ok" );
} );

event.on( "yeah", function yeah( value ){
	assert.equal( value, "yeah", "should be equal" );

	console.log( "ok" );
} );

event.broadcast( [ "hello", "hi" ], "hello" );

let event2 = edo( )( );

event2.merge( event );

event2.emit( "yeah", "yeah" );
