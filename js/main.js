// poppupSearch toggle 
const searchClossBtn = document.querySelector('.search');
const searchPop = document.querySelector('.poppup-search-area');
const removePop = document.querySelector('.clossSearch-Poppup');
// searchClossBtn
searchClossBtn.addEventListener('click', function(){
    console.log('click searchBtn here');
    searchPop.classList.add("active");
});

// removePop 
removePop.addEventListener('click', function(){
    console.log('click searchBtn here');
    searchPop.classList.remove("active");
});



// mobile manu toggle 
const MenuOverly = document.querySelector('.offcanver-overly');
const menuBar = document.querySelector('.menu_bar');
const mobileMenuToggle = document.querySelector('.mobileMenuToggle');
const closeToggle = document.querySelector('.closeToggle');
const mobile_content = document.querySelector('.offcanver-mobile-content');

mobileMenuToggle.addEventListener('click', function(){
    MenuOverly.classList.add('active');
    mobile_content.classList.add('active');
});

menuBar.addEventListener('click', function(){
    MenuOverly.classList.add('active');
    mobile_content.classList.add('active');
});


closeToggle.addEventListener('click', function(){
	MenuOverly.classList.remove('active');
    mobile_content.classList.remove('active');
});

MenuOverly.addEventListener('click', function(){
	MenuOverly.classList.remove('active');
    mobile_content.classList.remove('active');
});



// incriment and dicriment
const dicrimentNum = document.querySelector('.shop-qnty');
console.log(dicrimentNum);



(function ($) {
"use strict";




$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
	nav: true,
    responsive:{
        0:{
            items:2,
            navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
    		nav:true,
			dots:true
        },
        600:{
            items:2,
            navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
    		nav:true,
			dots:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true,
			navText:['<i class="fa-solid fa-arrow-left-long"></i>','<i class="fa-solid fa-arrow-right-long"></i>'],
    		nav:true,
			dots:true
        }
    }
});






// product-active 
$('.product-active ').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
	smartSpeed: 2000,
	nav: true,
    responsive:{
        0:{
            items:1,
            navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    		nav:true,
			dots:false,
        },
        600:{
            items:1,
            navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    		nav:false,
			dots:false,
        },
        1000:{
            items:1,
            nav:true,
            loop:true,
			navText:['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
    		nav:false,
			dots:false,
        }
    }
});







$('.features-active').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 15,
    responsive: [
      {
        breakpoint: 768,
        settings: {
            slidesToShow:2,
        }
      },
      {
        breakpoint: 480,
        settings: {
            slidesToShow:2,
        }
      }
    ]
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();





//splide.blog-active
splide = new Splide('.splide.blog-active', {
    gap: '15px',
    arrows: false,
    perPage: 1,
    padding:{right:'500px'},
    type: 'loop',
    pagination: false,
    keyboard: false,  // Splide listens to key events at the document level and moves ALL carousels when arrow keys are used. Also, keyboard controls are not expected by real users.
    slideFocus: false,  // removes tabindex="0" from each slide wrapper, since we only want our links inside each slide to receive focus.  
    
    breakpoints: {
      1400: {
        perPage: 1,
        padding: {
            right: '500px'
        },
      },
      1200: {
        perPage: 1,
        padding: {
            right: '400px'
        },
      },
      800: {
        perPage: 1,
        padding: {
            right: '300px'
        },
      },
      600: {
        perPage: 1,
        padding: {
            right: '100px'
        },
      }
    }
}).mount();









})(jQuery);