( function() {
	"use_strict";

	var Square = Backbone.Model.extend( {
		defaults : {
			target : false
		},
		select : function() {
			return this.get( 'target' )
		}
	})

	window.App.Models.Square = Square;
})();