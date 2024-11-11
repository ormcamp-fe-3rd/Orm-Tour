const modal = document.getElementById("modal");
const cancelBtn = document.getElementById("cancel-button");
const confirmCancelBtn = document.getElementById("confirm-cancel");
const cancelCancelBtn = document.getElementById("cancel-cancel");

cancelBtn.addEventListener("click", ()=>{
    modal.style.display = "block";
});

confirmCancelBtn.addEventListener("click", ()=>{
    reservationStatus = document.getElementById("status"); //클릭 시점에 불러옴

    modal.style.display = "none";
    reservationStatus.innerText = "예약취소";
    checkStatus();
});

cancelCancelBtn.addEventListener("click", ()=>{
    modal.style.display = "none";
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