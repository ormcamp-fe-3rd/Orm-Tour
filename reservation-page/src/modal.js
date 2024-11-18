const modal = document.querySelector(".modal-1");
const header = document.querySelector("header");
const main = document.querySelector("main");
const checkBox = document.querySelector(".check-box");
const checkTab = document.querySelector(".check-tab");

let confirm = document
  .querySelector(".box2-submit button")
  .addEventListener("click", function () {
    modal.classList.remove("active");
    modal.classList.add("active");
    header.classList.add("active");
    main.classList.add("active");
  });

let cancle = document
  .querySelector(".modal-btn .cancle")
  .addEventListener("click", function () {
    modal.classList.remove("active");
    header.classList.remove("active");
    main.classList.remove("active");
  });

function showNameValid() {
  const Form1 = document.getElementById("name").value;
  const nameVal = document.getElementById("name-val");
  if (nameVal) {
    nameVal.innerText = Form1;
  }
}

nameValid.addEventListener("change", showNameValid);

function showPhoneValid() {
  const Form2 = document.getElementById("phone").value;
  const phoneVal = document.getElementById("phone-val");
  if (phoneVal) {
    phoneVal.innerText = Form2;
  }
}

phoneValid.addEventListener("change", showPhoneValid);

function showEmailValid() {
  const Form3 = document.getElementById("email").value;
  const emailVal = document.getElementById("email-val");
  if (emailVal) {
    emailVal.innerText = Form3;
  }
}

emailValid.addEventListener("change", showEmailValid);

function closeModal(event) {
  if (event.target.classList.contains("modal-closebtn")) {
    event.target.closest(".modal").style.display = "none";
  }
}

document.addEventListener("click", closeModal);

// 모달 레이어 팝업 실행하기
function runModal(event) {
  if (event.target.classList.contains("modal-pop")) {
    const targetModalId = event.target.getAttribute("data-target");
    document.querySelector(`div.${targetModalId}`).style.display = "block";
  }
}

document.addEventListener("click", runModal);
