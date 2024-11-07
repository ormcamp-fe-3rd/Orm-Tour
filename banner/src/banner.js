const video = document.getElementById("backgroundVideo");
const header = document.querySelector(".header");
const banner = document.querySelector(".banner");
const footer = document.querySelector(".footer");
const bannerTexts = document.querySelectorAll(".banner-text span");
const fadeOutTime = 0.5; // 애니메이션 시작 시간 (초)

let animationCompleted = false; // 초기 애니메이션 완료 여부를 추적하는 변수

video.addEventListener("timeupdate", () => {
    if (video.duration - video.currentTime <= fadeOutTime) {
        video.classList.add("fade-out");
        header.classList.add("show-header"); // header가 보여지게

        setTimeout(() => {
            banner.classList.add("show-banner"); // banner가 보여지게
            footer.classList.add("show-footer"); // footer가 보여지게

            // 초기 애니메이션을 순차적으로 실행
            bannerTexts.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.1}s`;
            });

            // 초기 애니메이션이 완료된 후 플래그를 true로 설정
            setTimeout(() => {
                animationCompleted = true;
            }, bannerTexts.length * 100); // 마지막 글자의 애니메이션 시간까지 대기
        }, 100);
    }
});

// 마우스 hover 애니메이션 추가
bannerTexts.forEach((bannerText) => {
    bannerText.addEventListener("mouseenter", () => {
        if (animationCompleted) { // 초기 애니메이션이 끝났을 때만 hover 애니메이션 적용
            bannerText.classList.add("hover-animation");
        }
    });

    bannerText.addEventListener("mouseleave", () => {
        if (animationCompleted) {
            bannerText.classList.remove("hover-animation");
        }
    });
});

video.addEventListener("ended", () => {
    video.remove();
});
