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

//유효성 검사 


const nameValid = document.querySelector('#name');
const phoneValid = document.querySelector('#phone');
const btn = document.querySelector('#submit'); // assuming the button has an id of 'submit'
const emailValid = document.querySelector('#email');
// 정규식
function validTest(phone) {
    let phonrule = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
    return phonrule.test(phone);
}

function validEmail(email) {
    let emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return emailRule.test(email);
}

function validName(name) {
    let checkKoR = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return checkKoR.test(name);
}

//input 이벤트 발생했을때 전화번호
phoneValid.addEventListener('input', debounce(function() {
    const phoneValue = phoneValid.value;
    validatePhoneNumber(phoneValue); // 메소드 불러오기 
    updateButtonState(); // Update button state based on both validations
}));

//
emailValid.addEventListener('input', debounce(function() {
    const emailValue = emailValid.value;
    validateEmail(emailValue);
    updateButtonState();
}))

// input 발생했을때 이름 input 이벤트 발생했을때 
nameValid.addEventListener('input', debounce(function() {
    const nameValue = nameValid.value;
    validateName(nameValue);
    updateButtonState(); // 해당 버튼 활성화 여부 
}));

// 유효성 검사 
function validatePhoneNumber(phoneValue) {
    if (!validTest(phoneValue) || phoneValue === "") {
        phoneValid.style.outline = 'solid 2px red';
    } else {
        phoneValid.style.outline = 'solid 2px yellow';
    }
}
//이메일 유효성검사 
function validateEmail(emailValue) {
    if(!validEmail(emailValue) || emailValue === "") {
        emailValid.style.outline = "solide 2px red";
    }
    else{
        emailValid.style.outline = 'solid 2px yellow';
    }
}

// 이름 유효성 검사 
function validateName(nameValue) {
    if (!validName(nameValue) || nameValue === "") {
        nameValid.style.outline = 'solid 2px red';
    } else {
        nameValid.style.outline = 'solid 2px yellow';
    }
}

// 버튼 활성화 메소드
function updateButtonState() {
    const isPhoneValid = validTest(phoneValid.value);
    const isNameValid = validName(nameValid.value);
    const isEmailValid = validEmail(emailValid.value);
    
    
    if (isPhoneValid && isNameValid && isEmailValid) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

// 로직
function debounce(func, delay = 300) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const result = document.getElementById('result');  // 결과를 보여줄 요소
const price = document.getElementById('price');  // 가격을 보여줄 요소

let i = 0;  // 초기값
let j = 330000;  // 가격

result.innerText = i;
price.innerText = j * i; 

price.style.color = 'red';
plus.addEventListener('click', function(e) {
    // 수량이 10보다 작을 때만 증가
    if (i < 10) {
        i++;  
        result.innerText = i;  // 수량 화면에 업데이트
     
        price.innerText = j * i;  
    }
   
});

// 'minus' 버튼 클릭 시
minus.addEventListener('click', function(e) {
    // 수량이 1보다 클 때만 감소
    if (i > 0) {
        i--;  // 수량 감소
      
        result.innerText = i;  // 수량 화면에 업데이트
        price.innerText = j * i; 
    }
    
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