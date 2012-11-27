( function( $ ) {
	"use_strict";

	var SquareList = Backbone.View.extend( {
		squares : [],
		className : 'square-list',
		events : {
			'failure' : 'failure',
			'success' : 'success'
		},
		initialize : function() {
			this.reset();
			this.render();
		},
		render : function() {
			var that = this;

			this.collection.each( function( square_model ) {
				var square = new App.Views.Square( { model : square_model } );

				that.$el.append( square.$el )
				that.squares.push( square )
			});
		},
		reset : function() {
			var square;

			while ( square = this.squares.pop() )
				square.undelegateEvents().remove()
			
			this.collection.sort();
		},
		failure : function() {
			for ( var i in this.squares ) {
				this.squares[ i ].undelegateEvents()
			}
		}
	});

	window.App.Views.SquareList = SquareList;
})( window.jQuery || window.Zepto );