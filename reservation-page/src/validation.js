//유효성 검사 
const nameValid = document.querySelector('#name');
const phoneValid = document.querySelector('#phone');
const btn = document.querySelector('#submit'); // assuming the button has an id of 'submit'
const emailValid = document.querySelector('#email');
// 정규식
function validTest(phone) {
    let phonrule = /^(01[016789]{1})[-\s]?[0-9]{3,4}[-\s]?[0-9]{4}$/;
    return phonrule.test(phone);
}
function birthFormatter(num) {
    if (!num) {
        return "";
    }
    var formatNum = '';
    num = num.replace(/\s/gi, "");
    if (num.length == 8) {
        formatNum = num.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    } else {
        formatNum = num;
    }
    return formatNum;
}

function phoneFormatter(num) {
    var formatNum = '';
    try {
        if (num.length == 11) {
            formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        } else if (num.length == 8) {
            formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
        } else {
            if (num.indexOf('02') == 0) {
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
            } else {
                formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }
        }
    } catch (e) {
        formatNum = num;
    }
    return formatNum;
}

function validEmail(email) {
    let emailRule = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return emailRule.test(email);
}

function validName(name) {
    let checkKoR = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    return checkKoR.test(name);
}

//input 이벤트 발생했을때 전화번호
phoneValid.addEventListener('input', debounce(function () {
    const phoneValue = phoneValid.value;
    validatePhoneNumber(phoneValue); // 메소드 불러오기 
    updateButtonState();
}));

//
emailValid.addEventListener('input', debounce(function () {
    const emailValue = emailValid.value;
    validateEmail(emailValue);
    updateButtonState();
}))

// input 발생했을때 이름 input 이벤트 발생했을때 
nameValid.addEventListener('input', debounce(function () {
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
    if (!validEmail(emailValue) || emailValue === "") {
        emailValid.style.outline = "solid 2px red";
    }
    else {
        emailValid.style.outline = 'solid 2px yellow';
    }
}

// 이름 유효성 검사 
function validateName(nameValue) {
    if (!validName(nameValue) || nameValue === "") {

    } else {

    }
}

// 버튼 활성화 메소드
function updateButtonState() {
    const isPhoneValid = validTest(phoneValid.value);

    const isEmailValid = validEmail(emailValid.value);


    if (isPhoneValid && isEmailValid) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

// 로직
function debounce(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}