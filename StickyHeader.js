// JavaScript source code


$(document).ready(function(){
    //controls the way document responds to bookmark links
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 175
        }, 500);
    });

    //when user clicks link in hamburger menu, close menu
    $('.nav-link').click(function(){
        $('.navbar-toggler').click();
    });

   // setActiveNav();
});


// When the user scrolls the page, execute myFunction
//window.onscroll = function () { setActiveNav() };

//makes the link associated with section user is viewing bold
//function setActiveNav() {
//    $('.nav-link').removeClass('nav-link-active');
//
//    if ($(window).scrollTop() <= $('#AboutMargaret').offset().top + 250) {
//        $('a#AboutLink').addClass('nav-link-active');
//    }
//    else if ($(window).scrollTop() <= $('#WhyMargaret').offset().top + 250) {
//        $('a#WhyMargaretLink').addClass('nav-link-active');
//    }
//}
