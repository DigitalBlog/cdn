$(window).on('load', function(){
	"use strict";
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 450) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});
	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });
	$('.navbar-nav').onePageNav({
		filter: ':not(.external)'
	});
	$(".navbar-nav li a, a.scroll").on('click', function(e) {
	  if ($(this).hasClass('scrollable')) {
	    var full_url = this.href;
	    var parts = full_url.split("#");
	    var trgt = parts[1];
	    var target_offset = $("#" + trgt).offset();
	    var target_top = target_offset.top;
	    $('html,body').animate({ scrollTop: target_top - 70 }, 1000);
	    return false;
	  }
});
});
