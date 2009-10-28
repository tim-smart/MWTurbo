#ifndef _LIB_CLASS
#define _LIB_CLASS

function Class( params ) {
	var newClass = function() {
		if ( typeof this.construct === "function" )
			this.construct.apply( this, arguments );
	};
	newClass.prototype = params;
	if ( typeof params.Extends === "function" ) {
		var key;
		for ( key in params.Extends.prototype ) {
			if ( !newClass.prototype[ key ] && key !== "construct" )
				newClass.prototype[ key ] = params.Extends.prototype[ key ];
		}
		if ( typeof params.Extends.prototype.construct === "function" )
			newClass.prototype.parent = params.Extends.prototype.construct;
		delete newClass.Extends; delete params.Extends; key = null;
	}
	params = null;
	return newClass;
}
#endif
