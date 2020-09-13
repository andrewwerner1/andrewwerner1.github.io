// JavaScript source code

//controls the way document responds to bookmark links
$(document).ready(function(){
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 500);
    });
});


// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

//makes the link associated with section user is viewing bold
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
