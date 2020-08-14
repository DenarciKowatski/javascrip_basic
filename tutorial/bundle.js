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
    let y = 2

    if(x > 5){
        console.log(x,y);
    }
}
teste(10);*/
"use strict";
