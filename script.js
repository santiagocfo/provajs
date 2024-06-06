let nomePessoa = document.getElementById("nomePessoa")
let Resposta = document.getElementById("Resposta")

function Enviar()
{
    Resposta.innerHTML = ("Olá") + nomePessoa.value +("tudo bem?");
}

let centimetros1 = document.getElementById("centimetros")
let resultado = document.getElementById("resultado")

function somar()
{
    resultado.innerHTML =(parseInt(centimetros.value)/100)
}

let numero = document.getElementById("numero")
let proximo = document.getElementById("proximo")
let anterior = document.getElementById("anterior")

function caculo()
{
    proximo.innerHTML = parseInt(numero.value) +1
    anterior.innerHTML = parseInt(numero.value) -1
}

let valores1 = document.getElementById("valores1")
let valores2 = document.getElementById("valores2")
let rEsultado = document.getElementById("rEsultado")

function maior()
{
    if
    (valores1 < valores2)
    {
        rEsultado.innerHTML = valores1.value
        
    }


    else
    {
        rEsultado.innerHTML = valores2.value
    }
}


console .clear()
var a=100;
while(a >=1)
{
    console.log(a)
    a = a-1;
}

console. clear()
var b=50;
while(b >=0)
{
    console.log(b)
    b=b-5
}