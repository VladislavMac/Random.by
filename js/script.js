var button       = document.querySelector('.button-start');
var firstInp     = document.querySelector('.input-min');
var secondInp    = document.querySelector('.input-max');
var outResult    = document.querySelector('.bottom-out');

button.onclick = function(){
    let ValFirstInp  = +firstInp.value;
    let ValSecondInp = +secondInp.value;

    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    outResult.innerHTML = getRandom(ValFirstInp, ValSecondInp);
}