"use strict";
const incre = document.getElementById('incre');
const number = document.getElementById('number');
const decre = document.getElementById('decre');
let counterNumber = 0;
function increDecre(clickon) {
    if (clickon == 'plus')
        counterNumber++;
    if (clickon == 'minus')
        counterNumber--;
    number.innerText = counterNumber.toString();
}
incre.addEventListener('click', () => increDecre('plus'));
decre.addEventListener('click', () => increDecre('minus'));
