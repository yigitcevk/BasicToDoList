let todoInput = document.querySelector('.todoInput');
let todoButton = document.querySelector('.todoButton');
let todoList = document.querySelector('.todoList');

todoButton.addEventListener('click', addListener);
todoList.addEventListener('click',deleteAndCheck);

function deleteAndCheck(event){

    let item = event.target;

    if(item.classList[0] === 'trashButton'){
        let todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === 'completedButton'){
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function addListener(event){

    event.preventDefault();

    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add('todoItem');
    todoDiv.appendChild(newTodo);

    let completedButton = document.createElement('button');
    completedButton.innerText = 'Check';
    completedButton.classList.add('completedButton');
    todoDiv.appendChild(completedButton);

    let trashButton = document.createElement('button');
    trashButton.innerText = 'Delete';
    trashButton.classList.add('trashButton');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = '';
}