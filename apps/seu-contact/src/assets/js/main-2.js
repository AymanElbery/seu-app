(function ($) {
  "use strict";
  var nav = $('nav');
  var navHeight = nav.outerHeight();

  $(document).on("change", ".custom-file-input", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  $('.navbar-toggler').on('click', function () {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })

  // Preloader
  $(document).ready(function () {
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 3000);

  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $('.scrolltop-mf').on("click", function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  /*--/ Star Counter /--*/
  // $('.counter').counterUp({
  // 	delay: 15,
  // 	time: 7000
  // });

  /*--/ Star Scrolling nav /--*/
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
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
  // $('body').scrollspy({
  // 	target: '#mainNav',
  // 	offset: navHeight
  // });
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

  /*--/ Star Typed /--*/
  if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 20
    });
  }







  // Initiate the wowjs animation library
  //new WOW().init();

  // Initialize Venobox
  // $('.venobox').venobox({
  //    bgcolor: '',
  //           overlayColor: 'rgba(6, 12, 34, 0.85)',
  //           closeBackground: '',
  //           closeColor: '#fff' ,
  //          framewidth: '800px',
  //         frameheight: '600px',
  //             spinner :'cube-grid'
  // });


  //    $('.venoboxv').venobox({

  //    bgcolor: '',
  //           overlayColor: 'rgba(6, 12, 34, 0.85)',
  //           closeBackground: '',
  //           closeColor: '#fff' ,
  //          framewidth: '90%',
  //             spinner :'cube-grid'
  // });






  /*================================
  Swiper slider Activation
  ==================================*/
  // classes-carousel
  // new PerfectScrollbar('.sidebar-content', {
  //   wheelSpeed: 10,
  //   wheelPropagation: !0,
  //   minScrollbarLength: 5
  // });


  function classes_carousel() {
    var mySwiper = new Swiper('.classes-carousel', {
      speed: 400,
      loop: true,
      spaceBetween: 30,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      // Responsive breakpoints
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }
    });
  }
  //classes_carousel();

  // testimonials-carousel
  function testimonials_carousel() {
    var mySwiper = new Swiper('.testimonials-carousel', {
      speed: 400,
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }
  //testimonials_carousel();


  // adv-carousel
  function adv_carousel() {
    var mySwiper = new Swiper('.adv-carousel', {
      speed: 2000,
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }
  //adv_carousel();

  function new_ser() {
    var mySwiper = new Swiper('.new-ser', {
      speed: 2000,
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }
  //new_ser();





  // Gallery carousel (uses the Owl Carousel library)
  // $(".gallery-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   center: true,
  //   responsive: {
  //     0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: { items: 5 }
  //   }
  // });



  // tippy('button', {
  //   interactive: true,
  //   animation: 'perspective',
  //   duration: 500,
  //   content(reference) {
  //     const id = reference.getAttribute('data-template');
  //     const container = document.createElement('div');
  //     const linkedTemplate = document.getElementById(id);
  //     const node = document.importNode(linkedTemplate.content, true);
  //     container.appendChild(node);
  //     return container;
  //   }
  // });

})(jQuery);
