// o mais apropriado para pegaros elementos do html é o id
//variaveis globais

const calcular = document.getElementById('calcular');

//função

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //validação para saber se esta preenchido o campo
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura*altura)).toFixed(2);//arrendonda para duas casas depois da virgula
        //OUTRA MANIRA DE FAZER A CONTA Math.round(peso / (altura*altura));
        if(valorIMC < 18){//menor q 18 ABAIXO
            resultado.textContent ='O imc de '+nome+' é '+valorIMC+'.\n Está abaixo do peso ideal';
        } else if(valorIMC >= 18 && valorIMC <= 24){//maior que 18 e menor q 24 IDEAL
            resultado.textContent = 'O imc de '+nome+' é '+valorIMC+'.\n Está no peso ideal';
        } else{// maior q 24 ACIMA
            resultado.textContent = 'O imc de '+nome+' é '+valorIMC+'.\n Está acima do peso ideal';
        }
        /*
        let calssificacao = '';
        if(valorIMC < 18){//menor q 18 ABAIXO
           classificacao = 'abaixo do peso'
        } else if(valorIMC >= 18 && valorIMC <= 24){//maior que 18 e menor q 24 IDEAL
           classificacao = 'peso ideal';
        } else{// maior q 24 ACIMA
            classificacao = 'acima do peso';
        }
         resultado.textContent = 'O imc de $(nome) é $(valorIMC).\n Está $(classificacao)';
        */
    }else{
        resultado.textContent = "Preencha TODOS os CAMPOS!!"
    }
}

calcular.addEventListener('click', imc);//quando ele clivar ele vai execuitar a função imc
