var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos =  JSON.parse(localStorage.getItem('list_todos'))|| [];

 



function renderTodos(){
    listElement.innerHTML = '';

  for(todo of todos){
   var todoElement = document.createElement('li');
   var todoText = document.createTextNode(todo);

   var linkElement = document.createElement('a');
   var linkText = document.createTextNode('Excluir');
   
   linkElement.appendChild(linkText);

   linkElement.setAttribute('href', '#');


   var pas = todos.indexOf(todo);
   linkElement.setAttribute('onclick', deleteTodo('+ pas +'));



   todoElement.appendChild(todoText);
   
   todoElement.appendChild(linkElement);

   listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo(){

    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
buttonElement.onlick = addTodo;

function deleteTodo(pas){
    todos.splice(pas,1);
    renderTodos();
    saveToStorage();
}


function saveToStorage(){

localStorage.setItem('list_todo', JSON.stringify(todos));

}


// JSON - javaScript object notation