// switch of class ==============================================
// (@append dynamicAdapt.js)

// burger =======================================================
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .menu-header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
	// slader =======================================================
	$('.slider').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 2000,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 7000,
		waitForAnimate: false

	});
	$('.brands-reviews__body').slick({
		arrows: false,
		dots: false,
		infinite: true,
		speed: 2000,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 1500,
		slidesToShow: 7,
		slidesToScroll: 2,
		waitForAnimate: false,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 501,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 404,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 326,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				}
			},
		]
	});

	$('.inst-reviews__body').slick({
		arrows: true,
		dots: false,
		infinite: true,
		speed: 2000,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 4000,
		centerMode: true,
		variableWidth: true,
		waitForAnimate: false
	});


});


// scroll + header fixed
$("body").on('click', '[href*="#"]', function (e) {
	const offsetHeight = document.getElementById('header').offsetHeight;
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - offsetHeight }, 1000);
	e.preventDefault();
});