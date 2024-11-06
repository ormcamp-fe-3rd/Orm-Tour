// 슬라이드 섹션 (section025)
const slides = document.querySelector('.slides');
const items = document.querySelectorAll('.slide');
const slideCount = document.querySelectorAll('.slide').length - 2;
const progressSegments = document.querySelectorAll('.progress-segment');
const counter = document.querySelector('.counter');
const pauseButton = document.getElementById('pause');

let slideIndex = 0;
let autoSlide;
let isPaused = false;

function showNextSlide() {
    slideIndex = (slideIndex + 1 + slideCount) % slideCount;
    updateSlidePosition();
}

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slideWidthPercent = 100 / 3;
    slides.style.transform = `translateX(-${slideIndex * slideWidthPercent}%)`;

    // 현재 카드 스타일링 강조
    const activeItem = items[slideIndex + 1];

    items.forEach(item => {
        item.classList.remove('active');
    });

    if (activeItem) {
        activeItem.classList.add('active');
    };
    
    updateCounter();
    updateProgress();
}

function updateCounter() {
    counter.textContent = `${slideIndex + 1} / ${slideCount}`;
}

function updateProgress() {
    progressSegments.forEach((segment, index) => {
        if (index <= slideIndex) {
            segment.classList.add('active');
        } else {
            segment.classList.remove('active');
        }
    });
}

function startAutoSlide() {
    autoSlide = setInterval(showNextSlide, 3000);
}

function pauseAutoSlide() {
    clearInterval(autoSlide);
    isPaused = true;
    pauseButton.textContent = '▶';
}

function resumeAutoSlide() {
    isPaused = false;
    startAutoSlide();
    pauseButton.textContent = '❙❙';
}

updateCounter();
startAutoSlide();

document.getElementById('next').addEventListener('click', showNextSlide);
document.getElementById('prev').addEventListener('click', showPreviousSlide);

pauseButton.addEventListener('click', () => {
    if (isPaused) {
        resumeAutoSlide();
    } else {
        pauseAutoSlide();
    }
});