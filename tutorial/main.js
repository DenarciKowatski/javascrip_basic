/*class List{
    constructor(){
        this.vetor = [];
    }
    add(vetor){
        this.vetor.push(vetor);
        console.log(this.vetor)
    }
}

class TodoList extends List{//extends da de herança as propriades da função pai
    constructor(){
        super();//chama a função constructor do pai

        this.user = 'Dena'
    }
    mostraUser(){
        console.log(this.user);
    }

}

var MyList = new TodoList();

document.getElementById('newtodo').onclick = function(){
    MyList.add('novo todo');
}

MyList.mostraUser();

class Calcula{//metodos estaticos 
    constructor(){
        this.todos = [];
    }
    static soma(a,b){//
        
        return a + b;
    }
}
console.log(Calcula.soma(7,6));

const a = 1; //variavel sempre constante
a = 3;

const user = {nome: 'Dena'};
user.nome = 'Cleiton';//mutar a variavel

function teste(x){
    let y = 2//limita a variavel dentro do escopo

    if(x > 5){
        console.log(x,y);
    }
}
teste(10);

const array = [1,2,3,4,5,6,];

const newAre = array.map(function(item, index){
    return item * index;//percorre todo o array
});
console.log(array, newAre);


const sum = array. reduce(function(total, next){
    return total + next;//reduz o array a um unico valor
});
console.log(sum);

const filter = array.filter(function(item){
    return item % 2 === 0;//filtra valores da array
});

console.log(filter);

const find = array.find(function(item){
    return item === 4;
});

console.log(find);
const array = [1,2,3,4,5,6,];

const newAre = array.map(item => item * 2);
console.log(array, newAre);

const soma = (a = 3, b = 5)=> a + b;
console.log(soma(1));

const usuário = {
    nome: 'Denarci',
    idade: 24,
    endereço:{
        cidade: 'concordia',
        estado:'SC'
    },
};

console.log(usuário);

const { nome, idade, endereço:{ cidade}} = usuário;
console.log(nome, idade, cidade);


//REST

const usuário = {
    nome: 'Denarci',
    idade: 24,
    endereço:{
        cidade: 'concordia',
        estado:'SC'
    },
};

//soma();

const {nome, ...resto} = usuário;
console.log(nome);
console.log(resto);

const array = [1,2,3,45];
const [a, b, ...c] = array;
console.log(a);
console.log(b);
console.log(c);


function soma(a, b, ...params){
    return params.reduce((total, next) => total + next);
}

console.log(soma(1,3,5,6,7));


// SPREAD

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2];// vai unir as arrays

console.log(array3);


const usuario = {
    nome: 'Denarci',
    idade: 24,
    endereço:{
        cidade: 'concordia',
        estado:'SC'
    },
};

const usuario2 = { ...usuario, nome : 'Gabriel'};
console.log(usuario2);

*/

const nome = 'Dena'
const idade = 23;

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

const user = {
    nome, //nome: nome,
    idade, //idade: idade,
    empresa: 'Movitech'
}

console.log(user);
/*
const insertionSort = arr => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let el = arr[i];
      let j;
  
      for (j = i - 1; j >= 0 && arr[j] > el; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = el;
    }
    return arr;
  };


  ////////*/



