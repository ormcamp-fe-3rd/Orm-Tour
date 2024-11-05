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
        event.preventDefault();  // form 제출 후 새로고침 방지
        
        const orderID = document.getElementById('order-number').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const result = document.getElementById('result');

        console.log(orderID)
        console.log(phoneNumber)
        
        const reservation = resList.find(a => 
            a.orderID === orderID && a.phoneNumber === phoneNumber);

        if (reservation) {
            result.innerHTML = `
            <p>${reservation.orderID}</p>
            <p>${reservation.date}</p>
            <p>${reservation.name}</p>
            <p>${reservation.phoneNumber}</p>
            <p>${reservation.product}</p>
            <p>${reservation.guests}</p>
            <p>${reservation.totalAmount}원</p>
            <p id="status">${reservation.status}</p>
            `                       
        } else {
            result.innerHTML = `
            <p>예약 내역을 찾을 수 없습니다.</p>
            `
        };

        checkStatus();  // 예약취소 버튼 상태 변경
    }
);

// 예약번호 대문자 변환, 알파벳과 숫자만 입력
document.getElementById('order-number').addEventListener('input', function(event) {
    event.target.value = event.target.value.toUpperCase().replace(/[^A-Z0-9]/g,'');
});

// 전화번호 자동 하이픈
document.getElementById('phone-number').addEventListener('input', function(event) {
    const revNum = event.target.value.replace(/-/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/g, "$1-$2-$3");
    event.target.value = revNum;
})