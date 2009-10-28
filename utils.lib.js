#ifndef _LIB_UTILS
#define _LIB_UTILS

// Trims whitespace off strings
String.prototype.trim = function() {
	return this.replace(/^\s*|\s*$/g, '');
};

// Get element by ID
function $i( id, context ) {
	return (context || document).getElementById( id );
}

// Get element by Class
function $c( className, context ) {
	if ( typeof document.getElementsByClassName === "function" )
		return (context || document).getElementsByClassName( className );
	else {
		return $xp_each( ".//*[contains(concat(' ', @class, ' '), ' " + className + " ')]", context );
	}
}

// Single Element XPath
function $xp1( xpath, context ) {
	context = context || document;
	var doc = context.evaluate ? context : ( context.ownerDocument ? context.ownerDocument : document );
	return doc.evaluate( xpath, context, null, 9, null ).singleNodeValue;
}

function $xp( xpath, context ) {
	context = context || document;
	var doc = context.evaluate ? context : ( context.ownerDocument ? context.ownerDocument : document ),
		xpath = doc.evaluate( xpath, context, null, 7, null ),
		array = [];
	for ( var i = 0, element; element = xpath.snapshotItem( i ); i++ )
		array.push( element );
	xpath = null;
	return array;
}

// Iterate over a xpath query
function $xp_each( xpath, fn, context ) {
	context = context || document;
	var doc = context.evaluate ? context : ( context.ownerDocument ? context.ownerDocument : document ),
		xpath = doc.evaluate( xpath, context, null, 7, null );
	for ( var i = 0, element; element = xpath.snapshotItem( i ); i++ )
		fn( element, i, xpath );
	xpath = null;
}

// Generic addEventListener
function $aE( selector, type, fn, context ) {
	selector = typeof selector === "string" ? $i( selector, context ) : selector;
	return selector.addEventListener( type, fn, false );
}

// Add Events to XPath query
function $aEX( xpath, type, fn ) {
	$xp_each( xpath, function() {
		this.addEventListener( type, fn, false );
	});
}
#endif
