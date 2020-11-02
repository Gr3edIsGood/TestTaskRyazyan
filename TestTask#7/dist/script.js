
$(document).ready(function(){
	$('.about__inner').slick({
		arrows:false,
		dots:true,
		autoplay:true,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		swipe:true,
		infinite: true,
		responsive: [{
    		breakpoint: 376,
    		settings: 'unslick',
  		}],
  		mobileFirst:true,
  		
  		
	});
	$('.reasons__items').slick({
		arrows:false,
		dots:true,
		autoplay:true,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		swipe:true,
		infinite: true,
		responsive: [{
    		breakpoint: 376,
    		settings: 'unslick',
  		}],
  		mobileFirst:true,
  		
  		
	});
	$('.reviews__items').slick({
		arrows:false,
		dots:true,
		autoplay:true,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		swipe:true,
		infinite: true,
		responsive: [{
    		breakpoint: 376,
    		settings: 'unslick',
  		}],
  		mobileFirst:true,
  		
  		
	});
})