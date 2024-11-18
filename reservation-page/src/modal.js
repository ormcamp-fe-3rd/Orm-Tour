const modal = document.querySelector('.modal-1');
const header = document.querySelector('header');
const main = document.querySelector('main')
const checkBox = document.querySelector('.check-box');
const checkTab = document.querySelector('.check-tab');


let confirm = document.querySelector('.box2-submit button').addEventListener('click', function () {
    modal.classList.remove('active');
    modal.classList.add('active');
    header.classList.add('active');
    main.classList.add('active');

});

let cancle = document.querySelector('.modal-btn .cancle').addEventListener('click', function () {
    modal.classList.remove('active');
    header.classList.remove('active');
    main.classList.remove('active');
});


// 모달창 화면에 보이게 제작하기 
nameValid.addEventListener('change', function () {
    try {
        const Form1 = document.getElementById('name').value;

        const nameVal = document.getElementById('name-val');
        if (nameVal) {
            nameVal.innerText = Form1;
        } else {
            throw new Error('해당 화면 노출 값 못 찾음');
        }
    } catch (error) {

        console.error('에러 메세지:', error.message);
    }
});

phoneValid.addEventListener('change', function () {
    try {
        const Form2 = document.getElementById('phone').value;
        const phoneVal = document.getElementById('phone-val');
        if (phoneVal) {
            phoneVal.innerText = Form2;
        }
        else {
            throw new Error('해당 값 없음');
        }
    }
    catch (error) {
        console.log('값 없어요', error.message);
    }
});

emailValid.addEventListener('change', function () {
    try {
        const Form3 = document.getElementById('email').value;
        const emailVal = document.getElementById('email-val');
        if (emailVal) {
            emailVal.innerText = Form3
        }
        else {
            throw new Error('해당 값 없음')
        }
    }
    catch (error) {
        console.log('값 없어요', error.message);
    }
})

// 모달 레이어 팝업 종료하기
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-closebtn')) {
        event.target.closest('.modal').style.display = 'none';
    }
});

// 모달 레이어 팝업 실행하기
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal-pop')) {
        const targetModalId = event.target.getAttribute('data-target');
        document.querySelector(`div.${targetModalId}`).style.display = 'block';
    }
});

