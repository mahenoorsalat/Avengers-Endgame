const slider = document.querySelector('.slider-container');
const left = document.querySelector('.left-slide');
const right = document.querySelector('.right-slide');
const Ubtn = document.getElementById('up-btn');
const Dbtn = document.getElementById('down-btn');

const slideLength = right.querySelectorAll('div').length;
let activeSlideIndex = 0;

function nextSlide(direction) {
    const sliderHeight = slider.clientHeight;
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        }
    }
    right.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    left.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
}

Dbtn.addEventListener('click', () => nextSlide('up'));
Ubtn.addEventListener('click', () => nextSlide('down'));


