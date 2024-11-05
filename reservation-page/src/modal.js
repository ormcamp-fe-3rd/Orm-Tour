const modal = document.querySelector('.modal-1');
    const header = document.querySelector('header');
    const main = document.querySelector('main')
    let confirm = document.querySelector('.box2-submit button').addEventListener('click', function(){
      modal.classList.remove('active');
      modal.classList.add('active');
      header.classList.add('active');
      main.classList.add('active');
      
    });
    
    let cancle = document.querySelector('.modal-btn .cancle').addEventListener('click', function(){
      modal.classList.remove('active');
      header.classList.remove('active');
      main.classList.remove('active');
    });


// 모달 레이어 팝업 종료하기
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("modalCloseBtn")) {
        event.target.closest(".modal").style.display = "none";
    }
});

// 모달 레이어 팝업 실행하기
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("modalPop")) {
        const targetModalId = event.target.getAttribute("data-target");
        document.querySelector(`div.${targetModalId}`).style.display = "block";
    }
});