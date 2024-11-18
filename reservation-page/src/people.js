// 인원수 파악 버튼 
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const result = document.getElementById('result');
const price = document.getElementById('price');

let i = 1;
let j = 330000;

result.innerText = i;
price.innerText = j * i;

price.style.color = 'blue';
plus.addEventListener('click', function () {
    if (i < 10) {
        i++;
        result.innerText = i;
        price.innerText = j * i;
    }

});

minus.addEventListener('click', function () {

    if (i > 1) {
        i--;

        result.innerText = i;
        price.innerText = j * i;
    }

});