const titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio'


function Console () {
    console.log('O botão foi clicado')
}

function Alerta (){
    return window.alert('Eu amo JS')
}

function exibirPrompt (){
    let cidade = prompt('Me fale uma cidade do Brasil')
    
        return window.alert(`Estive em ${cidade} e lembrei de você`)
    }


function Soma(){
    let num1 = prompt('Número 1');
    let num2 = prompt('Número 2');
    let soma = parseInt(num1) + parseInt(num2)

    

    alert(`O resultado da soma de ${num1} e ${num2} é ${soma}`)
    
}