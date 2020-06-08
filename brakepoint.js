RESIZE_CONTROLLER = {
	SP: {
		breakpoint: 736,
		isSP: false
	},
	TAB: {
		breakpoint: 1199,
		isTAB: false
	},
	init: function(){
		this.setParams();
		this.bindEvents();
		this.checkDevice();
	},
	setParams: function(){
		this.$window = $(window);
	},
	bindEvents: function(){
		this.$window.on('resize',$.proxy(this.checkDevice,this));
	},
	checkDevice: function(){
		if(this.$window.width() > this.TAB.breakpoint){
			this.TAB.isTAB = false;
		}else{
			this.TAB.isTAB = true;
		}

		if(this.$window.width() > this.SP.breakpoint){
			this.SP.isSP = false;
		}else{
			this.SP.isSP = true;
		}
	},
	isSP: function(){
		return this.SP.isSP;
	},
	isTAB: function(){
		return this.TAB.isTAB;
	}
};
