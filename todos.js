var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
//se na~retornar um valor de array passa um valor vazio([]);

/* [
    'Fazer café', 
    'Estudar JS', 
    'Atualizar Pipe'
];*/

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){

        var pos = todos.indexOf(todo);
        console.log(todo, pos);

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('button','a');
        var linkText = document.createTextNode('Excluir')

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'delTodo('+ pos +')');
        linkElement.appendChild(linkText)

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}
renderTodos();
function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);//pussh addiciona ao final de uma lista/array
    inputElement.value = '';
    renderTodos();
    saveStorage();
}

btnElement.onclick = addTodo;

function delTodo(pos){
    todos.splice(pos, 1);//retira elento de uma lista, pela posicao e qnt de idetens posteriores
    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}