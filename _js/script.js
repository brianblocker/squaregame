( function( $ ) {
	"use_strict";

	var square_count = 25
	,	target_squares = Math.ceil( square_count * 0.35 )

	var setupGame = function() {
		var squares = new App.Collections.SquareList

		for ( var i = 0; i < square_count; i++ ) {
			squares.add( { target : target_squares > 0 } )

			target_squares--;
		}
		
		squares.shuffle()

		window.App.data.squares = squares;
	}

	var displayGame = function( $game ) {
		var game_view = new App.Views.SquareList( { collection : App.data.squares } )
		,	game_width = $game.innerWidth()
		,	window_height = $( window ).height() - 100

		console.log( game_width + ' \n ' + window_height )

		$game.append( game_view.$el )

		if ( game_width <= window_height ) {
			$( '.square-list' ).css( { 'font-size' : game_width + 'px', width : game_width + 'px' } )
		}
		else {
			$( '.square-list' ).css( { 'font-size' : window_height + 'px', width : window_height + 'px' } )
		}

		game_view.banner( 'start' )
		
		window.App.game_view = game_view;
	}

	$( function() {
		var $game = $( '#game' )
		
		setupGame()
		displayGame( $game )
	})

})( window.jQuery || window.Zepto );