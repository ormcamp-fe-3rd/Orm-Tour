// 슬라이드 섹션 (section025) 관련 코드
// const slides = document.querySelector('.slides');
// const slideCount = document.querySelectorAll('.slide').length;
// const progressSegments = document.querySelectorAll('.progress-segment');
// const counter = document.querySelector('.counter');
// const pauseButton = document.getElementById('pause');

// let slideIndex = 0;
// let autoSlide;
// let isPaused = false;

// function updateCounter() {
//     counter.textContent = `${slideIndex + 1} / ${slideCount}`;
// }

// function showNextSlide() {
//     if (!isPaused) {
//         slideIndex = (slideIndex + 1) % slideCount;
//         updateSlidePosition();
//     }
// }

// function showPreviousSlide() {
//     slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//     updateSlidePosition();
// }

// function updateSlidePosition() {
//     const slideWidthPercent = 100 / 3;
//     slides.style.transform = `translateX(-${slideIndex * slideWidthPercent}%)`;
//     updateCounter();
//     updateProgress();
// }

// function updateProgress() {
//     progressSegments.forEach((segment, index) => {
//         if (index <= slideIndex) {
//             segment.classList.add('active');
//         } else {
//             segment.classList.remove('active');
//         }
//     });
// }

// function startAutoSlide() {
//     autoSlide = setInterval(showNextSlide, 3000);
// }

// function pauseAutoSlide() {
//     clearInterval(autoSlide);
//     isPaused = true;
//     pauseButton.textContent = '▶';
// }

// function resumeAutoSlide() {
//     isPaused = false;
//     startAutoSlide();
//     pauseButton.textContent = '❙❙';
// }

// updateCounter();
// startAutoSlide();

// document.getElementById('next').addEventListener('click', showNextSlide);
// document.getElementById('prev').addEventListener('click', showPreviousSlide);
// pauseButton.addEventListener('click', () => {
//     if (isPaused) {
//         resumeAutoSlide();
//     } else {
//         pauseAutoSlide();
//     }
// });

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