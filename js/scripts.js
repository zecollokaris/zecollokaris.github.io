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



// TEXT UNDERLINER IN COLOR!

const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';


// 1. Get random number in range. Used to get random index from array.
const randNumInRange = max => Math.floor(Math.random() * (max - 1));

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
const mergeArrays = (arrOne, arrTwo) => arrOne
    .map((item, i) => `${item} ${arrTwo[i]}`)
    .join(', ');

// 3. Curried function to add a background to array of elms
const addBackground = (elms) => (color) => {
    elms.forEach(el => {
        el.style.backgroundImage = color;
    });
}
// 4. Function to get data from API
const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
const addBackgroundToUnderlines = addBackground(magicalUnderlines);


// 1. Build CSS formatted linear-gradient from API data
const buildGradient = (obj) => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
const applyGradient = async (url, callback) => {
    const data = await getData(url);
    const gradient = buildGradient(data[randNumInRange(data.length)]);
    callback(gradient);
}

applyGradient(gradientAPI, addBackgroundToUnderlines);



// SITE PRELOADER JS!
