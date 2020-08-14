//Modulo 1
/*        
//Intro
console.log('Hellow World');

var nome = "Denarci";//String
var idade = 18;//Int
var peso = 81.6;//Float
var humano = false;//Bolean

var alunos = ['Sanso', 'Denicio', 'Xande', 'Gabi'];//Vetorial
var aluno = {
    nome: alunos[1],
    idade: 18,
    peso: 82.7,
    humano: true 
};//Objeto

console.log(alunos, alunos[1]);
console.log(aluno.nome);

//Variaveis
var x = 10, y = 3, z = "20";
var res = x + y;
var con = x + z;
var modu = x % y;
x *= y;

console.log( x, y, res, con, modu);


//Funcoes
function soma ( x, y){
    var res = x + y;
    return res;
}

var res = soma(1,3);

console.log(res);


//Condicionais
function retornaSexo (sexo){

    if(sexo == 'M'){
        return 'masculino'
    } else if (sexo == 'F'){
        return 'feminino'
    } else{
        return 'outro'
    }
    
}

var res = retornaSexo('Mf');

console.log(res);

function retornaSexo(sexo){
    switch (sexo){
        case 'M':
            return 'masculino';
        case 'F':
            return 'feminino';
        default:
            return 'outro';
    }
}

var res = retornaSexo('');
console.log(res);

//Operadores Logicos
var sexo = 'M', idade = 23, mas;

if (sexo === 'M' || idade > 18){
    console.log ('Masculino ou maior de 18');
    mas = true;
} else{
    mas = false;
}

if (sexo === 'M' && idade > 18){
    console.log ('Masculino e maior de 18');
}

if (sexo !== 'M' && idade >= 23){
    console.log ('Femino e maior ou igual de 23');
}

console.log(mas);

//operadores ternarios
var sexo = 'F';

var retorno = (sexo == 'M') ? true : false;
console.log(retorno);

//Loops
for (var i = 0; i <= 100; i ++){
    //console.log('Xandão',i );
}

var j = 0;
while(j <= 100){
    //  console.log(j);
    //  j++;

}

var k = 52525;
while(k > 100){
    console.log(k);
    k/= 5;
}

//Delay
function exibe(){
    console.log('Hello World');
}
//setInterval(exibe, 1000);

setTimeout(exibe, 5000);//Apenas uma vez
*/
//Modulo 2

/*
//Parte 1:M2
function mostraMes() {
    alert("Me fugio agora");
}

var inputElement = document.getElementById('nome');
var inputTag = document.getElementsByTagName('input')[0];
var inputQuery = document.querySelector('body div#app input#nome');

console.log(inputElement, inputTag, inputQuery);

var btnElement = document.querySelector('button.btn');
btnElement.onclick = function(){
    var text = inputElement.value;
    alert(text + ' adicionado');
}

//Parte 1:M2
var linkElement = document.createElement('a');

linkElement.setAttribute('href', 'http://circular.movitech.com.br/');
linkElement.setAttribute('title', 'Site Phoda');


var textElement = document.createTextNode('Acessar o todem');
linkElement.appendChild(textElement);

var conatinerElement = document.querySelector('#app');
conatinerElement.appendChild(linkElement);


var inputElement  = document.querySelector('#idade');
conatinerElement.removeChild(inputElement);

//Parte 3:M2
var boxElement = document.querySelector('.box');

boxElement.style.width = '100px';
boxElement.style.height = '100px';
boxElement.style.backgroundColor = '#f00';

function getRandomColor(){
    var letters = '0123456789abcdef';
    var color = '#';
    for(var i = 0; i < 6; i ++){
        color += letters[Math.floor(Math.random()* 16)];
    }
    boxElement.style.backgroundColor = color;
}*/