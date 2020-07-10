"use strict";

// all variables
const todoForm = document.querySelector(".todoForm"),
    todoInput = document.querySelector(".todoInput"),
    todoList = document.querySelector(".todoList"),
    todoButton = document.querySelector(".todoButton");


let todos;
if (localStorage.getItem('todos') === null) {
    todos = [];
} else {
    todos = JSON.parse(localStorage.getItem('todos'));
}

localStorage.setItem('todos', JSON.stringify(todos));
const data = JSON.parse(localStorage.getItem('todos'))




//create elements
function createList(todoInputValue){
    let li = document.createElement("li"),
    span = document.createElement("span")

    //add class name
    li.className = "todoItem";
    span.className = "todoDeleteButton"

    // create textNode and append to li
    li.appendChild(document.createTextNode(todoInputValue))
    span.appendChild(document.createTextNode("x"))

    // append span into li
    li.appendChild(span)


    // append li into todoList
    todoList.appendChild(li)
}


// run todo 
function runTodo(e) {
    e.preventDefault()

    if(todoInput.value === "") {
        alert("Input field should not be emtpy!");
        return;
    }

    todos.push(todoInput.value);
    localStorage.setItem('todos',JSON.stringify(todos));

    //create elements
    createList(todoInput.value);

    // clear input and focus
    todoInput.value = "";
    todoInput.focus();
}

for(let x of data){
    createList(x);
}

function deleteTodoItem(e) {
    if (e.target.classList.contains("todoDeleteButton")) {
        if(confirm("Would you like to delete?")) {
            localStorage.removeItem(JSON.stringify(e.target.parentElement));
            e.target.parentElement.remove();
            
        }
    }
}

/* function storelocalStorage(val) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(val);

    localStorage.setItem('todos', JSON.stringify(todos));
} */
    
todoForm.addEventListener("submit", runTodo)
todoList.addEventListener("click", deleteTodoItem)

