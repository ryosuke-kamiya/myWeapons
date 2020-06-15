var lazyLoader ={
	init : function(){
		var $window = $(window);
		$('.jsc-post-container').children('li').each(function(){
			var $element = $(this);
			var $img = $element.find('img');
			$window.on('load scroll resize', function(){
				if($img.is(':visible')){
					return;
				};
				var windowHeight = $window.height();
				var windowTop = $window.scrollTop();
				var windowBottom = windowTop + windowHeight;
				var offset = $element.offset();
				var top = offset.top;
				var bottom = top + $element.height();

				if(windowTop < top && bottom < windowBottom || windowTop > top && bottom > windowBottom){
					var url = $img.data('url');
					$img.attr('src', url);	
				};
			});
			$img.on('load', function(){
				$img.fadeIn(1000);
			});
		});
	}
};