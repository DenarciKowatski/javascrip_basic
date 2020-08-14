/*class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
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
console.log(nome, idade, cidade);*/


//REST

const usuário = {
    nome: 'Denarci',
    idade: 24,
    endereço:{
        cidade: 'concordia',
        estado:'SC'
    },
};

const {nome, ...resto} = usuário;
console.log(nome);
console.log(resto);

const array = [1,2,3,45];
const [a, b, ...c] = array;
console.log(a);
console.log(b);
console.log(c);