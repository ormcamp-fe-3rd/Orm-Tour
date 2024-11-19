const slides = document.querySelector(".slides");
const slideElements = document.querySelectorAll(".slide");
const slideCount = slideElements.length;
const progressSegments = document.querySelectorAll(".progress-segment");
const counter = document.querySelector(".counter");
const pauseButton = document.getElementById("pause");

let slideIndex = 3; // 시작 인덱스 조정 (복제된 요소 고려)
let autoSlide;
let isPaused = false;
const slidesToShow = 3; // 한 화면에 보일 슬라이드 수

function addCloneToEdges() {
  const firstSlides = [...slideElements].slice(0, slidesToShow);
  const lastSlides = [...slideElements].slice(-slidesToShow);

  firstSlides.forEach((slide) => slides.appendChild(slide.cloneNode(true)));
  lastSlides.forEach((slide) =>
    slides.insertBefore(slide.cloneNode(true), slideElements[0])
  );
}

addCloneToEdges();

function updateCounter() {
  const currentPage = ((slideIndex - slidesToShow) % slideCount) + 1;
  if (currentPage <= 0) {
    return;
  }
  counter.textContent = `${currentPage} / ${slideCount}`;
}

function showNextSlide() {
  slideIndex++;
  updateSlidePosition();
}

function showPreviousSlide() {
  slideIndex--;
  updateSlidePosition();
}

function updateSlidePosition() {
  const slideDuration = 0.5;
  const slideDurationinMilliseconds = slideDuration * 1000;
  const slideWidthPercent = 100 / slidesToShow;
  slides.style.transition = `transform ${slideDuration}s ease`;
  slides.style.transform = `translateX(-${slideIndex * slideWidthPercent}%)`;

  updateCounter();
  updateProgress();

  // 무한 루프 효과
  if (slideIndex >= slideCount + slidesToShow) {
    setTimeout(() => {
      slides.style.transition = "none";
      slideIndex = slidesToShow;
      slides.style.transform = `translateX(-${
        slideIndex * slideWidthPercent
      }%)`;
      updateCounter();
      updateProgress();
    }, slideDurationinMilliseconds);
  } else if (slideIndex < slidesToShow) {
    setTimeout(() => {
      slides.style.transition = "none";
      slideIndex = slideCount + slidesToShow - 1;
      slides.style.transform = `translateX(-${
        slideIndex * slideWidthPercent
      }%)`;
      updateCounter();
      updateProgress();
    }, slideDurationinMilliseconds);
  }

  // 현재 카드 스타일링 강조
  const totalSlideCount = slides.children.length;

  document.querySelectorAll(".slide").forEach((item) => {
    item.classList.remove("active");
  });
  document.querySelectorAll(".slide")[slideIndex + 1].classList.add("active");

  if (slideIndex === totalSlideCount - slidesToShow) {
    document
      .querySelectorAll(".slide")
      [slidesToShow + 1].classList.add("active");
  }

  if (slideIndex === slidesToShow - 1) {
    document
      .querySelectorAll(".slide")
      [totalSlideCount - slidesToShow].classList.add("active");
  }
}

function updateProgress() {
  const currentPage = ((slideIndex - slidesToShow) % slideCount) + 1;
  progressSegments.forEach((segment, index) => {
    segment.classList.toggle("active", index + 1 === currentPage);
  });
}

function startAutoSlide() {
  autoSlide = setInterval(showNextSlide, 3000);
}

function pauseAutoSlide() {
  clearInterval(autoSlide);
  isPaused = true;
  pauseButton.textContent = "▶";
}

function resumeAutoSlide() {
  isPaused = false;
  startAutoSlide();
  pauseButton.textContent = "❙❙";
}

updateCounter();
startAutoSlide();

document.getElementById("next").addEventListener("click", showNextSlide);
document.getElementById("prev").addEventListener("click", showPreviousSlide);

pauseButton.addEventListener("click", () => {
  if (isPaused) {
    resumeAutoSlide();
  } else {
    pauseAutoSlide();
  }
});
