// JavaScript source code

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

    if ($(window).scrollTop() >= $('#WhyMargaret').offset().top - 400) {
        $('a#AboutLink').addClass('normal-font').removeClass('bold-font');
        $('a#WhyMargaretLink').addClass('bold-font').removeClass('normal-font');
    }
    else if ($(window).scrollTop() >= $('#AboutMargaret').offset().top - 200) {
        $('a#AboutLink').addClass('bold-font').removeClass('normal-font');
        $('a#WhyMargaretLink').addClass('normal-font').removeClass('bold-font');
    }
    else {
        $('a#AboutLink').removeClass('bold-font').addClass('normal-font');
        $('a#WhyMargaretLink').removeClass('bold-font').addClass('normal-font');
    };
}
