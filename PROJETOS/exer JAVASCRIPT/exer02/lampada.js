/*ARRUMAR O BOTÃO ELE TEM QUE SOMENTE 1 BOTÃO E ELE VAI MUDAR SE ALMAPADA ESTIVER LIGADA, EÇE SEW TORNARA O BOTÃO DE DESLIGAR E VICEVERSA */
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function islampQuebrada(){
    return lamp.src.indexOf('quebrada') > -1;
}
function lampOn(){
    if(!islampQuebrada()){
        lamp.src = './img/ligada.jpg'
    }
}
function lampOff(){
    if(!islampQuebrada()){
        lamp.src = './img/desligada.jpg'
    }
}
function lampQuebra(){
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampQuebra);