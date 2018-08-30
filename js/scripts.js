$(document).ready(function () {
    $('.hb-button').on('click', function () {
        $('nav ul').toggleClass('show');
    });
});

// CUROSEL FOR IMAGE SLIDER
var slides = $('.slide');

var flag = 0;

slides.first().before(slides.last());

setInterval(show,4000);

function show(){
    slides = $('.slide');
    var activeSlide = $('.active');

    slides.last().after(slides.first());

    activeSlide.removeClass('active').next('.slide').addClass('active');

    if (flag==0){
        $(".box").css({'-webkit-clip-path':"polygon(0% 100%,100% 100%,100% 90%,85% 95%,10% 78%,7% 11%,90% 5%,85% 95%,100% 95%, 100% 0%,0% 0%,0% 100%)"});
        flag = 1;
    }
    else{
        $(".box").css({ '-webkit-clip-path':"polygon(0% 100%, 100% 100%,100% 80%,93% 85%,8% 95%, 15% 6%,89% 22%,93% 85%,100% 80%,100% 0%,0% 0%,0% 100%)"});
        flag=0;
    }
}

// MOUSE SLIDER WITH MY SKILLS INFO
document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }
  
  wrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
  
    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});


/* SKILL SECTION */
$(function () {

    // Rotate Skill Badges
    var $badges = $(".amg-badge img");

    function rotateBadge(passedBadge, speed) {
        var rotateSpeed = speed / 180,
            current = 0;

        function badgeRotation(passedBadge) {
            current = (current == 90) ? 271 : current + 1;

            passedBadge.css({
                "-webkit-transform": "rotate3d(0,1,0," + current + "deg)",
                "-moz-transform": "rotate3d(0,1,0," + current + "deg)",
                "transform": "rotate3d(0,1,0," + current + "deg)"
            });

            if (current == 360) {
                clearInterval(rotateInterval);
                passedBadge.removeAttr('style').removeClass('spinning');
            }
        }

        var rotateInterval = setInterval(function () { badgeRotation(passedBadge) }, rotateSpeed);
    }

    $badges.mouseenter(function () {
        if ($(this).hasClass('spinning')) {
            return false;
        } else {
            rotateBadge($(this), 500);
            $(this).addClass('spinning');
        }
    });

});




