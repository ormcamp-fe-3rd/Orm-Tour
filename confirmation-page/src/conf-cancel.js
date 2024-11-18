const modal = document.getElementById("modal");
const cancelBtn = document.getElementById("cancel-button");
const confirmCancelBtn = document.getElementById("confirm-cancel");
const cancelCancelBtn = document.getElementById("cancel-cancel");

let lastFocusedElement;

function openModal() {
  lastFocusedElement = document.activeElement;
  const modal = document.getElementById("modal");
  const firstFocusedElement = modal.querySelector("h2");

  modal.style.display = "block";
  firstFocusedElement.focus();
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  lastFocusedElement.focus();
}

function confirmedCancel() {
  reservationStatus = document.getElementById("status"); //클릭 시점에 불러옴
  reservationStatus.innerText = "예약취소";
  closeModal();
  checkStatus();
}

function canceledCancel() {
  closeModal();
  checkStatus();
}

cancelBtn.addEventListener("click", openModal);
confirmCancelBtn.addEventListener("click", confirmedCancel);
cancelCancelBtn.addEventListener("click", canceledCancel);

function checkStatus() {
  reservationStatus = document.getElementById("status");

  if (reservationStatus.innerText === "예약취소") {
    cancelBtn.disabled = true;
  } else {
    cancelBtn.disabled = false;
  }
}
