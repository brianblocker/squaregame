(function ($) {
	"use strict";

	var BannerView = Backbone.View.extend({
		className : 'banner gradient',
		events : {
			'click A.start' : 'start'
		},
		initialize : function () {
			this.render();
		},
		render : function () {
			var html = '';

			this.$el.addClass(this.options.type);

			switch (this.options.type) {
				case 'win' :
					html = '<h1>Congratulations!</h1><p>You win. Play again?</p><p><a class="btn btn-success start">Play Again</a></p>';
					break;
				case 'lose' :
					html = '<h1>Boo Hoo :(</h1><p>Sorry, you lose. Try again?</p><p><a class="btn btn-success start">Play Again</a></p>';
					break;
				case 'start' :
					html = '<h1>Remember the Tiles!</h1><p>Pay attention to which tiles are highlighted, then click them!</p><p><a class="btn btn-success start">Start</a></p>';
					break;
			}

			this.$el.html(html);
		},
		start : function () {
			this.undelegateEvents();
			this.remove();
			this.options.parent.reset();
			this.options.parent.start();
		}
	});

	window.App.Views.BannerView = BannerView;
}(window.jQuery || window.Zepto));
