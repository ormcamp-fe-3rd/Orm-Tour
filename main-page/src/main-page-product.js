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