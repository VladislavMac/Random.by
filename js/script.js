const button       = document.querySelector('.button-start');
const firstInp     = document.querySelector('.input-min');
const secondInp    = document.querySelector('.input-max');
const outResult    = document.querySelector('.bottom-out');

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

button.onclick = function(){
    let ValFirstInp  = +firstInp.value;
    let ValSecondInp = +secondInp.value;
    
    outResult.innerHTML = getRandom(ValFirstInp, ValSecondInp);
}
