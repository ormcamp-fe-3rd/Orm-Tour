// 슬라이드 섹션 (section025) 관련 코드
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const slideCount = slideElements.length;
const progressSegments = document.querySelectorAll('.progress-segment');
const counter = document.querySelector('.counter');
const pauseButton = document.getElementById('pause');

let slideIndex = 3; // 시작 인덱스 조정 (복제된 요소 고려)
let autoSlide;
let isPaused = false;
const slidesToShow = 3; // 한 화면에 보일 슬라이드 수

// 마지막 슬라이드를 복제하여 처음으로 추가하고, 첫 슬라이드를 복제하여 끝에 추가
const firstSlides = [...slideElements].slice(0, slidesToShow);
const lastSlides = [...slideElements].slice(-slidesToShow);

firstSlides.forEach(slide => slides.appendChild(slide.cloneNode(true)));
lastSlides.forEach(slide => slides.insertBefore(slide.cloneNode(true), slideElements[0]));

function updateCounter() {
    const currentPage = ((slideIndex - slidesToShow) % slideCount) + 1;
    counter.textContent = `${currentPage} / ${slideCount}`;
}

function showNextSlide() {
    if (!isPaused) {
        slideIndex++;
        updateSlidePosition();
    }
}

function showPreviousSlide() {
    slideIndex--;
    updateSlidePosition();
}

function updateSlidePosition() {
    const slideWidthPercent = 100 / slidesToShow;
    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translateX(-${slideIndex * slideWidthPercent}%)`;

    updateCounter();
    updateProgress();

    // 무한 루프 효과
    if (slideIndex >= slideCount + slidesToShow) {
        setTimeout(() => {
            slides.style.transition = 'none';
            slideIndex = slidesToShow;
            slides.style.transform = `translateX(-${slideIndex * slideWidthPercent}%)`;
            updateCounter();
            updateProgress();
        }, 500);
    } else if (slideIndex < slidesToShow) {
        setTimeout(() => {
            slides.style.transition = 'none';
            slideIndex = slideCount + slidesToShow - 1;
            slides.style.transform = `translateX(-${slideIndex * slideWidthPercent}%)`;
            updateCounter();
            updateProgress();
        }, 500);
    }
}

function updateProgress() {
    const currentPage = ((slideIndex - slidesToShow) % slideCount) + 1;
    progressSegments.forEach((segment, index) => {
        segment.classList.toggle('active', index + 1 === currentPage);
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

// 캐러셀 섹션 (section02) 관련 코드
const carousel = document.querySelector('.carousel');
const products = document.querySelectorAll('.product');
const totalProducts = products.length;
let productIndex = 0;

document.querySelector('.carousel-button.left').addEventListener('click', () => {
    productIndex = (productIndex - 1 + totalProducts) % totalProducts;
    updateCarouselPosition();
});

document.querySelector('.carousel-button.right').addEventListener('click', () => {
    productIndex = (productIndex + 1) % totalProducts;
    updateCarouselPosition();
});

function updateCarouselPosition() {
    const offset = -productIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}