/*Selectors*/

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");



/*Eventlistener*/

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);





/*Functions*/

function addTodo(event){

    /*Prevent form from submitting*/
    event.preventDefault();

    /*Todo DIV*/
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    /*Create LI*/
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    /*Completed button*/
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

     /*Delete button*/
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("trash-btn");
    todoDiv.appendChild(deleteButton);

     /*Append to list*/
    todoList.appendChild(todoDiv);

    /*Clear Todo Input Value*/
    todoInput.value = "";
}


    function deleteCheck(e){
    const item = e.target;

    /*Delete Todo*/
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;

    /*Animation*/    
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
       
    }

    /*Completed Todo*/
     if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');  
        }
    }



    

    function savelocalTodos(todo){
        let todos;
        if(localStorage.getItem('todos') === null){
            todos =[];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }