
const assert = require( "assert" );
const edo = require( "./edo.js" );

let event = edo( )( );

event.on( "hello", "hi", function hello( value ){
	assert.equal( value, "hello", "should be equal" );

	console.log( "called!" );
} );

event.broadcast( [ "hello", "hi" ], "hello" );

console.log( "ok" );
