$(document).ready(function () {
    $('.hb-button').on('click', function () {
        $('nav ul').toggleClass('show');
    });
});


var slides = $('.slide');

slides.first().before(slides.last());

setInterval(show,4000);

function show(){
    slides = $('.slide');
    var activeSlide = $('.active');

    slide.last().after(slides.first());

    activeSlide.removeClass('active').next('.slide').addClass('active');
}
