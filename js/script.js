$(document).ready(function(){
	//Set Options
	var speed = 1000; //fade speed
	var autoswitch = true; //auto slider options
	var autoswitchSpeed = 3000; //auto slider speed

	//Add initial active class

	$('.slide').first().addClass('active');

	// Hide all other slides
	$('.slide').hide();

	//show first slide 
	$('.active').show();

	//Next Handler
	$('#next').on('click', nextSlide);
	//Prev Handler
	$('#prev').on('click', prevSlide);

	if(autoswitch === true){
		setInterval(nextSlide, autoswitchSpeed);
	}

			function nextSlide(){
				$('.active').removeClass('active').addClass('oldActive');
					if($('.oldActive').is(':last-child')){
					$('.slide').first().addClass('active');
					} else {
					$('.oldActive').next().addClass('active');
					}
					$('.oldActive').removeClass('oldActive');
					$('.slide').fadeOut(speed);
					$('.active').fadeIn(speed);
					}

			function prevSlide(){
				$('.active').removeClass('active').addClass('oldActive');
					if($('.oldActive').is(':first-child')){
					$('.slide').last().addClass('active');
					} else {
					$('.oldActive').prev().addClass('active');
						}
					$('.oldActive').removeClass('oldActive');
					$('.slide').fadeOut(speed);
				$('.active').fadeIn(speed);

				}


});