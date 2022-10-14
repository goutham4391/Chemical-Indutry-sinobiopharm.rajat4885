
$(function(){
     
        var winH=$(window).height();
        var winW=$(window).width();
					
		
	  var mySwiper = new Swiper('.swiper-container1',{
			effect : 'fade',					
			pagination: '.pagination',
			autoplay : 5000,
			loop : true,
			paginationClickable: true,
			autoplayDisableOnInteraction:false,
			speed:500
	  })
	  
	function numFloat() {
		$('.gdnum').each(function () {
			var $this = $(this);
			var num = $this.attr('num') * 1;
			var times = 50,
				now = 0,
				float = true;
			if (Math.round(num) === num) {
				float = false;
			}
			var timer = window.setInterval(function () {
				now++;
				if (float) $this.html((num / times * now).toFixed(
					2));
				else $this.html((num / times * now).toFixed(0));
				if (now === times) {
					$this.html(num);
					clearInterval(timer);
				}
			}, 30);
		});
	}
	
	var gdnuminfo = 0;
	if ($(".gdnuminfo").length > 0) {$(".gdnuminfo .gdnum").html("0");}
	$(window).on("scroll", function () {
		if ($(".gdnuminfo").length > 0) {
			if ($(document).scrollTop() + $(window).height() < $(".gdnuminfo").offset().top) {
				$(".gdnuminfo .gdnum").html("0"), gdnuminfo = 0;
			} else if (gdnuminfo == 0){
				numFloat(); gdnuminfo = 1;
			}
		}
	});


	

})