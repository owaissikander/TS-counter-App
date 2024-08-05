

const incre = document.getElementById('incre') as HTMLButtonElement
const number = document.getElementById('number') as HTMLHeadingElement
const decre = document.getElementById('decre') as HTMLButtonElement

let counterNumber : number = 0

function increDecre(clickon : 'plus'| 'minus'){
    if(clickon=='plus') counterNumber++;
    if(clickon=='minus') counterNumber--;

    number.innerText = counterNumber.toString()
}

incre.addEventListener('click',()=> increDecre('plus'))
decre.addEventListener('click',()=> increDecre('minus'))

