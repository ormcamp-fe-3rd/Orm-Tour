//리뷰 캐러셀
let currentIndex = 0;
const reviewContainers = document.querySelector('.review-containers');
const reviewContainer = document.querySelector('.review-container');
const totalReviews = document.querySelectorAll('.review-container').length;

document.querySelector('.prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalReviews - 1;
    updateCarousel();
});

document.querySelector('.next-button').addEventListener('click', () => {
    currentIndex = (currentIndex < totalReviews - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * reviewContainer.clientWidth;
    reviewContainers.style.transform = `translateX(${offset}px)`;
}

// 창 크기 조절 시 슬라이드 크기 업데이트
window.addEventListener('resize', updateCarousel);

// 리뷰 별점 모아보기
const ratingElements = document.querySelectorAll('.review-containers .rating');

let sum = 0;
let count = 0;

for (let i = 0; i < ratingElements.length; i++) {
    const ratingValue = parseFloat(ratingElements[i].innerText);
    sum += ratingValue;
    count++;
}

// 평균 별점 계산
const averageRating = count > 0 ? (sum / count).toFixed(1) : 0;

// 평균 별점과 총 리뷰 수를 표시
document.querySelector('.gather .rating').innerText = '★' + `${averageRating}/5`;
document.querySelector('.gather .review-count').innerText = `(${count}명 리뷰)`;

// 모든 .keyword 요소를 선택
const keywordElements = document.querySelectorAll('.tag');

const keywordCounts = {}; // 키워드와 그 횟수를 객체에 저장

// 각 keyword 요소의 값을 가져와서 중복을 카운팅
for (let i = 0; i < keywordElements.length; i++) {
    const keywordText = keywordElements[i].innerText.trim();

    // 객체에 키워드가 이미 있는 경우 카운트를 증가시키고, 없는 경우 초기화
    if (keywordCounts[keywordText]) {
        keywordCounts[keywordText]++;
    } else {
        keywordCounts[keywordText] = 1;
    }
}

// .keywords 안에 키워드와 카운트를 표시
const keywordsContainer = document.querySelector('.gather .keywords');
keywordsContainer.innerHTML = '';

// keywordCounts 객체를 순회하며 키워드와 횟수를 표시
for (let keyword in keywordCounts) {
    const count = keywordCounts[keyword];
    const keywordDisplay = document.createElement('div');
    keywordDisplay.className = 'big-box'
    keywordDisplay.innerHTML = `<div class='keyword-text'>${keyword}<div class='gradation'></div></div> <span class='keyword-count'>${count}명</span>`;

    const gradationElement = keywordDisplay.querySelector('.gradation');
    gradationElement.style.width = `${count * 10}%`;

    keywordsContainer.appendChild(keywordDisplay); // 키워드 요소를 추가
}