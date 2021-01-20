(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })
    
  
 	$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show'); 
  $('ul.nav a').click(function (e) {
     $(this).tab('show');
     var scrollmem = $('body').scrollTop();
     window.location.hash = this.hash;
  });
});
    
    // Preloader
     $(document).ready(function () {
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 1000);

  });
  
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});



    
	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight - 40)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

    /*--/ Star Scrolling nav /--*/
	$('a.js-scroll2[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});
    
    
    
  // Initiate the wowjs animation library
  new WOW().init();


   
       var swiper = new Swiper('.home-slide', {
          effect: 'cube',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },cube: {
        shadow: true,
        slideShadows: true,
        
    },
           
         speed: 2000,
            loop: true,
            grabCursor: true,
           autoplay: false ,
                pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
     
    });
    
     

     var swiper = new Swiper('.page-slide', {
          effect: 'coverflow',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
         speed: 2000,
            loop: true,
            grabCursor: true,
           autoplay: {
        delay: 7000,
        disableOnInteraction: false, } ,
                pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
     
    });
    
    
    
    $('.dropdown .dropdown-menu').on('click', function(event){
    // The event won't be propagated up to the document NODE and 
    // therefore delegated events won't be fired
    event.stopPropagation();
});
    
    
     $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     $(this).toggleClass('active');
                 });
    

    //top Menu
        $(".top-menu").click(function() {
            $('#header').toggle(function() {
                $('#header .top-menu').show();
                
            });
        });
    
     $(".top-menu").click(function() {
            $('.logos , .log').toggle(function() {
                $('#header .top-menu').hide();
                
            });
        });
    
   
        //Nav Menu
        $(window).scroll(function() {
            if(window.innerWidth > 500) {
             
            if ($(this).scrollTop() > 5) {
                $('#header').slideDown('.1s').addClass('fixed');
                $('#header .top-menu').hide();
                  $('.logos , .log').hide();
                
          
            } else {
                $('#header').removeClass('fixed').slideUp('slow');
                 $('.logos , .log').fadeIn();
            }
        }
            else {
               
            }
            
        });
    
    
     var winH =$(window).height(),
        topH =$('.top-nav').innerHeight(),
        navH =$('.nav').innerHeight();
    
    $(' ').height(winH - (topH + navH));
   
    
    $(".searchBox").hover(function() {
	$(this).addClass("hovered");
    $("#intro , .intro").on("click", function() {
     $(".searchBox").removeClass("hovered");
});
    });
    
 
    
})(jQuery);
