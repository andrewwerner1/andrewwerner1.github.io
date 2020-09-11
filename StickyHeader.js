// JavaScript source code

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

function myFunction() {

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
