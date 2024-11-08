const modal = document.getElementById("modal");
const cancelBtn = document.getElementById("cancel-button")
const confirmCancelBtn = document.getElementById("confirm-cancel")
let reservationStatus = document.getElementById("status");

cancelBtn.addEventListener("click", ()=>{
    modal.style.display = "block";
});

confirmCancelBtn.addEventListener("click", ()=>{
    modal.style.display = "none";
    reservationStatus.innerHTML = `<p id="status">예약취소</p>`;
    checkStatus();
});

function checkStatus() {
    reservationStatus = document.getElementById("status");

    if(reservationStatus.innerText === '예약취소') {
        cancelBtn.disabled = true;
    } else {
        cancelBtn.disabled = false;
    }
};