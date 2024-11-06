const video = document.getElementById("backgroundVideo");
const header = document.querySelector(".header");
const banner = document.querySelector(".banner");
const fadeOutTime = 0.5; // 애니메이션 시작 시간 (초)

video.addEventListener("timeupdate", () => {
    // 비디오의 남은 시간이 fadeOutTime 이하일 때 애니메이션 시작
    //비디오의 전체 길이(재생 시간)-비디오가 현재 재생된 시점
    if (video.duration - video.currentTime <= fadeOutTime) {
        video.classList.add("fade-out");
        header.classList.add("show-header"); // header가 서서히 나타나도록 설정

        // header가 나타난 후 0.2초 후에 banner가 서서히 나타나도록 설정
        setTimeout(() => {
            banner.classList.add("show-banner");

            // 각 글자에 순차적으로 animation-delay 적용
            const letters = document.querySelectorAll(".banner-text span");
            letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.1}s`;
            });
        }, 200); // 200ms 지연 후에 show-banner 클래스 추가
    }
});

video.addEventListener("ended", () => {
    // 비디오를 DOM에서 제거
    video.remove();

});