
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

console.log( event.hasEvent( "yeah" ), event2.hasEvent( "yeah" ) );

event2.emit( "yeah", "yeah" );

event2.on( "hey", function hey( value ){
	assert.equal( value, "hey", "should be equal" );

	console.log( "ok" );
} );

event.emit( "hey", "hey" );

//
// let event3 = edo( )( );
//
// event3.on( "wah", function wah( value ){
// 	assert.equal( value, "wah", "should be equal" );
//
// 	console.log( "wah" );
// } );
//
// let event4 = edo( )( );
//
// event4.on( "wee", function wee( value ){
// 	assert.equal( value, "wee", "should be equal" );
//
// 	console.log( "wee" );
// } );
//
// let event5 = edo( )( );
//
// event5.on( "woo", function woo( value ){
// 	assert.equal( value, "woo", "should be equal" );
//
// 	console.log( "woo" );
// } );
//
// event3.merge( event4 );
// event4.merge( event5 );
//
// event3.emit( "woo", "woo" );
