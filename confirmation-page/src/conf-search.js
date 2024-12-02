const resList = [
  {
    orderID: "F1101",
    name: "박수진",
    phoneNumber: "010-1234-1234",
    email: "orm@gmail.com",
    date: "2024-10-25",
    product: "북해도 3박 4일 온천 여행",
    guests: "성인 2명, 아동 1명",
    totalAmount: "3,500,000",
    status: "예약완료",
  },
  {
    orderID: "F1102",
    name: "김오름",
    phoneNumber: "010-5555-6666",
    email: "modu@naver.com",
    date: "2024-11-11",
    product: "[퀘백출발] 캐나다 단풍 여행 3박 5일",
    guests: "성인 1명",
    totalAmount: "상담 완료 후 확정",
    status: "예약 진행 중",
  },
];

function displayReservationDetails(event) {
  event.preventDefault(); // form 제출 후 새로고침 방지

  const orderName = document.getElementById("order-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const resultValue = document.getElementsByClassName("result-value");

  const reservation = resList.find(
    (a) => a.name === orderName && a.phoneNumber === phoneNumber
  );

  if (reservation) {
    resultValue[0].textContent = `${reservation.orderID}`;
    resultValue[1].textContent = `${reservation.date}`;
    resultValue[2].textContent = `${reservation.name}`;
    resultValue[3].textContent = `${reservation.email}`;
    resultValue[4].textContent = `${reservation.phoneNumber}`;
    resultValue[5].textContent = `${reservation.product}`;
    resultValue[6].textContent = `${reservation.guests}`;
    resultValue[7].textContent = `${reservation.totalAmount}`;
    resultValue[8].textContent = `${reservation.status}`;
  } else {
    for (let i = 0; i < resultValue.length; i++) {
      resultValue[i].textContent = "";
    }
    resultValue[0].textContent = "예약 내역을 찾을 수 없습니다.";
  }

  if (reservation) {
    document.getElementById("cancel-button").disabled = false;
  } else {
    document.getElementById("cancel-button").disabled = true;
  }
}

document
  .getElementById("search-form")
  .addEventListener("submit", displayReservationDetails);

function validateNameInput(event) {
  event.target.value = event.target.value
    .toUpperCase()
    .replace(/[^A-Zㄱ-힣]/s, "");
}

function autoHyphenPhoneNumber(event) {
  const revNum = event.target.value
    .replace(/-/g, "")
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/g, "$1-$2-$3");
  event.target.value = revNum;
}

document
  .getElementById("order-name")
  .addEventListener("input", validateNameInput);
document
  .getElementById("phone-number")
  .addEventListener("input", autoHyphenPhoneNumber);
