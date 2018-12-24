// NAV-BAR CODE TO TOGGLE 
$(document).ready(function () {
    $('.hb-button').on('click', function () {
        $('nav ul').toggleClass('show');
    });
});


// CUROSEL FOR IMAGE SLIDER
var slides = $('.oneslide');

var flag = 0;

slides.first().before(slides.last());

setInterval(show,4000);

function show(){
    slides = $('.oneslide');
    var activeSlide = $('.activeone');

    slides.last().after(slides.first());

    activeSlide.removeClass('activeone').next('.oneslide').addClass('activeone');

    if (flag==0){
        $(".onebox").css({'-webkit-clip-path':"polygon(0% 100%,100% 100%,100% 90%,85% 95%,10% 78%,7% 11%,90% 5%,85% 95%,100% 95%, 100% 0%,0% 0%,0% 100%)"});
        flag = 1;
    }
    else{
        $(".onebox").css({ '-webkit-clip-path':"polygon(0% 100%, 100% 100%,100% 80%,93% 85%,8% 95%, 15% 6%,89% 22%,93% 85%,100% 80%,100% 0%,0% 0%,0% 100%)"});
        flag=0;
    }
}
