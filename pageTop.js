var pageTopMoving = {
	init: function(){
		this.setParameters();
		this.bindEvents();
	},
	setParameters: function () {
		this.$anchor = $('.jsc-navigator-to-top');
		this.$target = $('html, body');
	},
	bindEvents: function () {
		var myself = this;
		this.$anchor.on('click', function (event) {
			myself.moveTop(event);
		});
		$(window).on('scroll', function(){
			myself.fadeInOut();
		});
		this.hoverAnimation();
	},
	moveTop: function (event) {
		event.preventDefault();
		if (this.$target.is(':animated')) return;
		this.$target.animate({scrollTop : 0}, 500);
	},
	fadeInOut: function () {
		this.$anchor.stop();
		this.top = $(window).scrollTop();
		if(this.top > 1){
			this.$anchor.animate({opacity : 1}, 300);
		}else{
			this.$anchor.animate({opacity : 0}, 300);
		}
	},
	hoverAnimation: function () {
		var myself = this;
		if(!spAction.judge()){
			this.$anchor.hover(
				function(){
					myself.$anchor.css({opacity : 0.8});
				},
				function(){
					myself.$anchor.css({opacity : 1});
				}
			);
		}
	}
};
