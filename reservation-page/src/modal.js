const modal = document.querySelector('.modal-1');
const header = document.querySelector('header');
const main = document.querySelector('main')
const checkBox = document.querySelector('.checkBox');
const checkTab = document.querySelector('.check-tab');


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
    updateButtonState(); 
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



// 인원수 파악 버튼 
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const result = document.getElementById('result');  // 결과를 보여줄 요소
const price = document.getElementById('price');  // 가격을 보여줄 요소

let i = 1;  // 초기값
let j = 330000;  // 가격

result.innerText = i;
price.innerText = j * i; 

price.style.color = 'blue';
plus.addEventListener('click', function() {
    // 수량이 10보다 작을 때만 증가
    if (i < 10) {
        i++;  
        result.innerText = i;  // 수량 화면에 업데이트
     
        price.innerText = j * i;  
    }
   
});

// 'minus' 버튼 클릭 시
minus.addEventListener('click', function() {
    // 수량이 1보다 클 때만 감소
    if (i > 0) {
        i--;  // 수량 감소
      
        result.innerText = i;  // 수량 화면에 업데이트
        price.innerText = j * i; 
    }
    
});


// 모달창 화면에 보이게 제작하기 
nameValid.addEventListener('change', function() {
        try {
            // 'name' 입력 필드의 값을 가져옴
            const Form1 = document.getElementById('name').value;

            const nameVal = document.getElementById('nameVal');
            if (nameVal) {
                nameVal.innerText = Form1;
            } else {
                throw new Error('해당 화면 노출 값 못 찾음');
            }
        } catch (error) {
          
            console.error('에러 메세지:', error.message);
        }
});

phoneValid.addEventListener('change', function(){
    try{
        //  값 가져옴
        const Form2 = document.getElementById('phone').value;
        const phoneVal = document.getElementById('phoneVal');
        if(phoneVal){
            phoneVal.innerText = Form2;
        }
        else{
            throw new Error('해당 값 없음');
        }
    }
    catch(error){
        console.log('값 없어요' , error.message);
    }
});

emailValid.addEventListener('change', function(){
    try{
        const Form3 = document.getElementById('email').value;
        const emailVal = document.getElementById('emailVal');
        if(emailVal){
            emailVal.innerText = Form3
        }
        else{
            throw new Error('해당 값 없음')
        }
    }
    catch(error){
        console.log('값 없어요', error.message);
    }
})

//예약하기 버튼
checkBox.addEventListener('click', function(){
    modal.classList.remove('active');
    main.classList.remove('active');
    header.classList.remove('active');
    checkTab.classList.add('active');
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


// const chatChart = document.querySelector('textarea') || document.querySelector('input'); 

// chatChart.addEventListener('change', function(e) { 
//     try {
//         e.target.value('');
//         const chatting = chatChart.value; 
//         const chattingVal = document.getElementById('content-comment'); 
        
//         if (chattingVal) {
//             chattingVal.innerText = chatting; // 
//         } else {
//             throw new Error('content-comment 요소를 찾을 수 없습니다.'); 
//         }
//     } catch (error) {
//         console.error('에러 발생: ', error.message); // 에러 메시지 출력
//     }
// });

// const writer = document.querySelector('#writer');
// writer.addEventListener('change', function(){
//     try{
//         e.target.value('');
//         const writting = writer.value;
//         const writeBoard = document.querySelector('#writer-board');

//         if(writeBoard){
//             writeBoard.innerText = writting;
//         }
//         else{
//             throw new Error('writer-board가 없어요');
//         }
//     }
//     catch(error){
//         console.log('error 발생', error.message);
//     }
// })



// 더 좋은 방법 있으면 알려주세요 ... ㅠㅠㅠ 
const btnUpload = document.querySelector('.upload');

const chatContainer = document.querySelector('.comment-container'); // 채팅 댓글을 추가할 부모 요소

// btnUpload.addEventListener('click', function() {
//     const chatChart = document.getElementById('chat'); // 사용자 입력을 받는 텍스트 영역
//     const comment = chatChart.value.trim(); // 공백 제거 후 값 저장
//     const write = document.getElementById('writer');
//     const writer = write.value.trim();
//     // 댓글이 비어 있지 않으면 실행
//     if (comment !== '' || writer !=='') {


//         const chatCommentDiv = document.createElement('div');
//         chatCommentDiv.classList.add('chat-comment'); // 새로운 채팅 댓글에 클래스 추가

//         // 채팅 이미지와 사용자 이름
//         const chatImgDiv = document.createElement('div');
//         chatImgDiv.classList.add('chat-img');
//         const userSpan = document.createElement('span');
        
//         const userImg = document.createElement('img');
//         userImg.src = '../img/user.jpg'; 
//         userImg.alt = 'user image'; 

        
//         // 채팅 박스
//         const chatContentDiv = document.createElement('div');
//         chatContentDiv.classList.add('chat-content');
        
//         // content-comment 요소 (댓글 내용)
//         const contentCommentDiv = document.createElement('div');
//         contentCommentDiv.id = 'content-comment'; // id를 content-comment로 설정
       
//         contentCommentDiv.textContent = comment; // 사용자가 입력한 댓글 내용 설정

//         const contentReviewDiv = document.createElement('div');
//         contentReviewDiv.classList.add('content-rivew');
      
//         // chat-content
//         chatContentDiv.appendChild(contentCommentDiv);
//         chatContentDiv.appendChild(contentReviewDiv);
//         // 이미지와 사용자 이름을 chat-img div에 추가
//         chatImgDiv.appendChild(userSpan);
//         chatImgDiv.appendChild(userImg);
        
//         // chat-comment
//         chatCommentDiv.appendChild(chatImgDiv);
//         chatCommentDiv.appendChild(chatContentDiv);

//         // chat-container
//         chatContainer.appendChild(chatCommentDiv);


//         chatChart.value = ''; // 댓글 입력란 초기화
//         writer.value = '';
//     }

// });

const btnnUpload = document.querySelector('.upload');
const chattContainer = document.querySelector('.comment-container'); // 부모 요소 (채팅 댓글을 추가할 부분)

btnnUpload.addEventListener('click', function() {
    const chatChart = document.getElementById('chat'); // 사용자 입력을 받는 텍스트 영역
    const comment = chatChart.value.trim(); // 공백 제거 후 값 저장
    const write = document.getElementById('writer'); 
    const writer = write.value.trim(); // 작성자명 저장

    // 댓글이 비어 있지 않으면 실행
    if (comment !== '' && writer !== '') {
        // 새로운 채팅 댓글 생성
        const chatCommentDiv = document.createElement('div');
        chatCommentDiv.classList.add('chat-comment');

        // 채팅 이미지와 사용자 이름
        const chatImgDiv = document.createElement('div');
        chatImgDiv.classList.add('chat-img');
        const userSpan = document.createElement('span');
        userSpan.textContent = writer; // 사용자 이름을 여기에 추가
        const userImg = document.createElement('img');
        userImg.src = '../img/user.jpg'; 
        userImg.alt = 'user image';

        // 채팅 박스
        const chatContentDiv = document.createElement('div');
        chatContentDiv.classList.add('chat-content');

        // 댓글 내용
        const contentCommentDiv = document.createElement('div');
        contentCommentDiv.classList.add('content-comment'); // id 대신 class로 변경
        contentCommentDiv.textContent = comment; // 사용자가 입력한 댓글 내용 설정

        // 리뷰 내용 (여기에 기능 추가 가능)
        const contentReviewDiv = document.createElement('div');
        contentReviewDiv.classList.add('content-review');

        // chat-content에 댓글 내용과 리뷰 내용 추가
        chatContentDiv.appendChild(contentCommentDiv);
        chatContentDiv.appendChild(contentReviewDiv);

        // chat-img에 사용자 이미지와 이름 추가
        chatImgDiv.appendChild(userSpan);
        chatImgDiv.appendChild(userImg);

        // chat-comment에 이미지와 채팅 내용 추가
        chatCommentDiv.appendChild(chatImgDiv);
        chatCommentDiv.appendChild(chatContentDiv);

        // comment-container에 댓글 추가
        chattContainer.appendChild(chatCommentDiv);

        // 댓글 입력란 초기화
        chatChart.value = '';
        write.value = '';
    }
});
