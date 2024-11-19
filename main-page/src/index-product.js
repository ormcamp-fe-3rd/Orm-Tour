const carousel = document.querySelector(".carousel");
const products = document.querySelectorAll(".product");
const totalProducts = products.length;
let productIndex = 0;

document
  .querySelector(".carousel-button.left")
  .addEventListener("click", () => {
    updateCarouselPosition(-1);
  });

document
  .querySelector(".carousel-button.right")
  .addEventListener("click", () => {
    updateCarouselPosition(1);
  });

function updateCarouselPosition(direction) {
  productIndex = (productIndex + direction + totalProducts) % totalProducts;
  const offset = -productIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}
