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
  const result = document.getElementById("result");
  const resultTable = result.getElementsByTagName("p");

  const reservation = resList.find(
    (a) => a.name === orderName && a.phoneNumber === phoneNumber
  );

  if (reservation) {
    resultTable[0].textContent = `${reservation.orderID}`;
    resultTable[1].textContent = `${reservation.date}`;
    resultTable[2].textContent = `${reservation.name}`;
    resultTable[3].textContent = `${reservation.email}`;
    resultTable[4].textContent = `${reservation.phoneNumber}`;
    resultTable[5].textContent = `${reservation.product}`;
    resultTable[6].textContent = `${reservation.guests}`;
    resultTable[7].textContent = `${reservation.totalAmount}`;
    resultTable[8].textContent = `${reservation.status}`;
  } else {
    resultTable[0].textContent = "예약 내역을 찾을 수 없습니다.";
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
