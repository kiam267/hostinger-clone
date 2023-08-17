$(document).ready(function () {
	//Nav link Hide & Show
	const $navbar = $('.nav_section');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 10) {
			$navbar.addClass('shadow');
		} else {
			$navbar.removeClass('shadow');
		}
	})


	// add 1:13 pm
	let clickEvent = true;
	// clickEvent && $("body-add-1").removeClass('body-add');

	$(".add-nav-click-event").click(function () {
		$(".hosting-child-section").css('display', 'block')
		$(".removeadd").removeClass('add-nav-click-event')
		clickEvent = false;
		$(".body-add-1").addClass('body-add');

    
		// $(".pro-child-section").css('display', 'none')
		// $(".icon-nav-direction-chnage").css('transform', "rotate(180deg)")
		// $(".icon-nav-direction-chnage1").css('transform', "rotate(360deg)")
	});
	

	// clickEvent && $("body-add-1").removeClass('body-add');
	$(".body-add").click(function () {
		// $(".icon-nav-direction-chnage").css('transform', "rotate(360deg)")
		$(".hosting-child-section").css('display', 'none')
		// console.log("JI");
	});

	$(".add-nav-click-event1").click(function () {
		$(".pro-child-section").css('display', 'block')
		$(".hosting-child-section").css('display', 'none')
		$(".icon-nav-direction-chnage1").css('transform', "rotate(180deg)")
		$(".icon-nav-direction-chnage").css('transform', "rotate(360deg)")
	});

	$(".allBody1").click(function () {
		$(".icon-nav-direction-chnage1").css('transform', "rotate(360deg)")
		$(".pro-child-section").css('display', 'none')
	});

	//  menu Icon

	let check = true;
	$('.menu-on').click(function () {
		if (check) {
			$('.menu-on').addClass('fa-xmark');
			$('.small_screen').css('top', "55px");
			check = false;
		} else {
			$('.menu-on').removeClass('fa-xmark');
			$('.small_screen').css('top', "-9999999px");
			check = true;
		}
	})



	// Card Function Add

	$('.card-show-1').click(function () {
		$('.card-icon').addClass('fa-chevron-up');
		$('.card-show-1').css('display','none');
		$('.card-show-2').css('display','block');
		$('.card-icon').removeClass('fa-angle-down');
		$('.card-up-down').css('display','block');
	})
	$('.card-show-2').click(function () {
		$('.card-icon').removeClass('fa-chevron-up');
		$('.card-show-1').css('display','block');
		$('.card-show-2').css('display','none');
		$('.card-icon').addClass('fa-angle-down');
		$('.card-up-down').css('display','none');
	})
	// Card Button Add
	// Degault Value
	var buttonPosition;
	 $('.hosting-child-2').addClass('addZindex'); 
	$('.hosting-button-1').click(function () {
		buttonPosition = $('.hosting-button-1').css('background', '#673DE6');
		buttonPosition = $('.hosting-button-2').css('background', '#fff');
		buttonPosition = $('.hosting-button-3').css('background', '#fff');
		$('.hosting-child').removeClass('button-2')
		$('.hosting-child').removeClass('button-3')
		$('.hosting-child').addClass('button-1')

		$('.hosting-child-1').addClass('button-1')
		$('.hosting-child-2').removeClass('button-2')
		$('.hosting-child-3').removeClass('button-3')

		$('.hosting-child-2').removeClass('addZindex');
	})
	$('.hosting-button-2').click(function () {
		buttonPosition = $('.hosting-button-1').css('background', '#fff');
		buttonPosition = $('.hosting-button-2').css('background', '#673DE6');
		buttonPosition = $('.hosting-button-3').css('background', '#fff');
		$('.hosting-child').removeClass('button-1')
		$('.hosting-child').removeClass('button-3')
		$('.hosting-child').addClass('button-2')


		$('.hosting-child-1').removeClass('button-1')
		$('.hosting-child-3').removeClass('button-3')
		$('.hosting-child-2').addClass('button-2')

		$('.hosting-child-2').removeClass('addZindex');
	})
	$('.hosting-button-3').click(function () {
		buttonPosition = $('.hosting-button-1').css('background', '#fff');
		buttonPosition = $('.hosting-button-2').css('background', '#fff');
		buttonPosition = $('.hosting-button-3').css('background', '#673DE6');
		$('.hosting-child').removeClass('button-1')
		$('.hosting-child').removeClass('button-2')
		$('.hosting-child').addClass('button-3')

		$('.hosting-child-1').removeClass('button-1')
		$('.hosting-child-2').removeClass('button-2')
		$('.hosting-child-3').addClass('button-3')

		$('.hosting-child-2').removeClass('addZindex');
	})
});