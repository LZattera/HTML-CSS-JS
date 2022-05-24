'use strict';
//variaveis
let somaMussarela =0;
let somaPortuguesa =0;
let somaQuatroQueijos =0;
let vendaMussarela =0.00;
let vendaPortguesa =0.00;
let vendaQuatroQueijos =0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções
function venda(e){
    if(document.getElementById('Mussarela').checked){
        somaMussarela = somaMussarela + 1;
        vendaMussarela= vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML= vendaMussarela.toFixed(2);
    }else if(document.getElementById('Portuguesa').checked){
        somaPortuguesa= somaPortuguesa + 1;
        vendaPortguesa= vendaPortguesa + 25.00;
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
        document.getElementById('vendaPortuguesa').innerHTML= vendaPortguesa.toFixed(2);
    }else if(document.getElementById('QuatroQueijos').checked){
        somaQuatroQueijos= somaQuatroQueijos + 1;
        vendaQuatroQueijos= vendaQuatroQueijos + 25.00;
        document.getElementById('resultadoQuatroQueijos').innerHTML = somaQuatroQueijos;
        document.getElementById('vendaQuatroQueijos').innerHTML= vendaQuatroQueijos.toFixed(2);
    }
}

function estorno(e){
    if(document.getElementById('Mussarela').checked){
        somaMussarela = somaMussarela - 1;
        vendaMussarela= vendaMussarela - 25.00;
        if(somaMussarela < 0){
            somaMussarela = 0;
            vendaMussarela = 0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML= vendaMussarela.toFixed(2);
    }else if(document.getElementById('Portuguesa').checked){
        somaPortuguesa= somaPortuguesa - 1;
        vendaPortguesa= vendaPortguesa - 25.00;
        if(somaPortuguesa < 0){
            somaPortuguesa = 0;
            vendaPortguesa = 0.00;
        }
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
        document.getElementById('vendaPortuguesa').innerHTML= vendaPortguesa.toFixed(2);
    }else if(document.getElementById('QuatroQueijos').checked){
        somaQuatroQueijos= somaQuatroQueijos - 1;
        vendaQuatroQueijos= vendaQuatroQueijos - 25.00;
        if(somaQuatroQueijos < 0){
            somaQuatroQueijos = 0;
            vendaQuatroQueijos = 0.00;
        }
        document.getElementById('resultadoQuatroQueijos').innerHTML = somaQuatroQueijos;
        document.getElementById('vendaQuatroQueijos').innerHTML= vendaQuatroQueijos.toFixed(2);
    }
}

function planilha(e){
    TableToExcel.convert(document.getElementById('table'))
}
