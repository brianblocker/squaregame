( function( $ ) {
	"use_strict";

	var Square = Backbone.View.extend( {
		className : 'square',
		parent : false,
		events : {
			'click' : 'highlight'
		},
		highlight : function() {
			if ( this.model.select() ) {
				this.$el.addClass( 'highlight' )
				this.options.parent.trigger( 'success' )
			}
			else {
				this.$el.addClass( '' )
				this.options.parent.trigger( 'failure' )
			}

			this.undelegateEvents()
		}
	})

	window.App.Views.Square = Square
})( window.jQuery || window.Zepto );