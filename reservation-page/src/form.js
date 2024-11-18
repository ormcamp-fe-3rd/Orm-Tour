//예약하기 버튼
const reservationConfirm = document.querySelector("#submit");

function submitReservation() {
  modal.classList.remove("active");
  main.classList.remove("active");
  header.classList.remove("active");

  emailValid.disabled = "true";
  phoneValid.disabled = "true";
  nameValid.disabled = "true";
  reservationConfirm.disabled = "true";
  reservationConfirm.innerText = "예약완료";
  reservationConfirm.style.backgroundcolor = "gray";
}

checkBox.addEventListener("click", submitReservation);
