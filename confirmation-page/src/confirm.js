const resList = [
    {   
        orderID: "F1101",
        phoneNumber: "010-1234-1234",
        name: "박수진",
        date: "2024-10-25",
        product: "북해도 3박 4일 온천 여행",
        guests: "성인 2명, 아동 1명",
        totalAmount: "3,500,000",
        status: "예약완료"
    },
    {
        orderID: "F1102",
        phoneNumber: "010-4567-4567",
        name: "이민호",
        date: "2024-11-02",
        product: "발리 5박 6일 휴양 여행",
        guests: "성인 1명",
        totalAmount: "1,800,000",
        status: "예약완료"
    }
];

document.getElementById('search-form').addEventListener('submit', 
    function(event) {
        event.preventDefault();
        
        const orderID = document.getElementById('order-number').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const result = document.getElementById('result');
        
        const reservation = resList.find(a => 
            a.orderID === orderID && a.phoneNumber === phoneNumber);

        if (reservation) {
            result.innerHTML = `
            <h2>예약 내역</h2>
            <p>예약 번호: ${reservation.orderID}</p>
            <p>고객 이름: ${reservation.name}</p>
            <p>예약 날짜: ${reservation.date}</p>
            <p>예약 상품: ${reservation.product}</p>
            <p>예약 인원: ${reservation.guests}</p>
            <p>예약 금액: ${reservation.totalAmount}</p>
            <p>예약 상태: ${reservation.status}</p>
            `                       
        } else {
            result.innerHTML = `
            <h2>예약 내역</h2>
            <p>예약 내역을 찾을 수 없습니다.</p>
            `
        };
    }
);

// 예약번호 대문자 변환
document.getElementById('order-number').addEventListener('input', function(event) {
    event.target.value = event.target.value.toUpperCase();
});

// 전화번호 자동 하이픈
document.getElementById('phone-number').addEventListener('input', function(event) {
    const revNum = event.target.value.replace(/-/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/g, "$1-$2-$3");
    event.target.value = revNum;
})