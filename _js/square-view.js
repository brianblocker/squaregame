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
				this.options.parent.success()
			}
			else {
				this.$el.addClass( 'error' )
				this.options.parent.failure()
			}

			this.undelegateEvents()
		},
		initialize : function() {
			this.render()

			var that = this;

			this.model.on( 'showMe', function() {
				that.$el.addClass( 'highlight' );

				setTimeout( function() { that.$el.removeClass( 'highlight' ) }, 5000 );
			})
		},
		render : function() {
			this.$el.html( '<span class="inner gradient" />' )
		}
	})

	window.App.Views.Square = Square
})( window.jQuery || window.Zepto );