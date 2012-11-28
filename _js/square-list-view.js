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
			var that = this;

			this.collection.on( 'win', function() {
				that.collection.shuffle()
				that.banner.call( that, 'win' )
			})

			this.render();
		},
		render : function() {
			var that = this;

			this.collection.each( function( square_model ) {
				var square = new App.Views.Square( { model : square_model, parent : that } );

				that.$el.append( square.$el )
				square.render();
				that.squares.push( square )
			});
		},
		banner : function( type ) {
			this.pause();

			var banner_view = new App.Views.BannerView( { type : type, parent : this } );

			banner_view.$el.appendTo( 'BODY' ).addClass( 'show' )
		},
		reset : function() {
			var square;

			while ( square = this.squares.pop() ) {
				square.undelegateEvents()
				square.remove()
			}
			
			this.collection.shuffle();
			this.render()
		},
		start : function() {
			this.collection.showThem();
		},
		pause : function() {
			_.each( this.squares, function( square ) {
				square.undelegateEvents()
			})
		},
		play : function() {
			_.each( this.squares, function( square ) {
				square.delegateEvents()
			})
		},
		failure : function() {
			this.banner( 'lose' )
		},
		success : function() {
			this.collection.foundOne()
		}
	});

	window.App.Views.SquareList = SquareList;
})( window.jQuery || window.Zepto );