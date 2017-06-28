
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

event2.on( "hey", function hey( value ){
	assert.equal( value, "hey", "should be equal" );

	console.log( "ok event 2" );
} );

event.on( "hey", function hey( value ){
	assert.equal( value, "hey", "should be equal" );

	console.log( "ok event 1" );
} );

event.emit( "hey", "hey" );

event2.emit( "hey", "hey" );

let event3 = edo( )( );

event3.on( "wah", function wah( value ){
	assert.equal( value, "wah", "should be equal" );

	console.log( "wah" );
} );

let event4 = edo( )( );

event4.on( "wee", function wee( value ){
	assert.equal( value, "wee", "should be equal" );

	console.log( "wee" );
} );

let event5 = edo( )( );

event5.on( "woo", function woo( value ){
	assert.equal( value, "woo", "should be equal" );

	console.log( "woo" );
} );

event3.merge( event4 );
event4.merge( event5 );

event3.emit( "woo", "woo" );


let event6 = edo( )( );

event6.on( "nah", function nah( value ){
	assert.equal( value, "nah", "should be equal" );

	console.log( "nah" );
} );

event6.on( "nah", function nah( value ){
	assert.equal( value, "nah", "should be equal" );

	console.log( "nah" );
} );

let event7 = edo( )( );

event7.on( "neh", function neh( value ){
	assert.equal( value, "neh", "should be equal" );

	console.log( "ok event7" );
} );

let event8 = edo( )( );

event8.on( "nih", function nih( value ){
	assert.equal( value, "nih", "should be equal" );

	console.log( "ok event8" );
} );

let event9 = edo( )( );

event9.on( "nuh", function nuh( value ){
	assert.equal( value, "nuh", "should be equal" );

	console.log( "ok event9" );
} );

event7.merge( event6 );
event8.merge( event7 );
event9.merge( event8 );

event9.emit( "neh", "neh" );
event9.emit( "nih", "nih" );
event9.broadcast( [ "nah", "nah" ], "nah" );
