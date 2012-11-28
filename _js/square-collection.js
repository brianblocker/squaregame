( function() {
	"use_strict";

	var SquareList = Backbone.Collection.extend( {
		targets : 0,
		initialize : function() {

		},
		model : App.Models.Square,
		comparator : function() {
			return 0.5 - Math.random();
		},
		shuffle : function() {
			this.sort()

			this.targets = this.where( { target : true } ).length
		},
		foundOne : function() {
			this.targets--;

			if ( this.targets < 1 )
				this.trigger( 'win' )
		},
		showThem : function() {
			var targets = this.where( { target : true } )

			_.each( targets, function( target ) {
				target.trigger( 'showMe' )
			})
		}
	});

	window.App.Collections.SquareList = SquareList;
})();