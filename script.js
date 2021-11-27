"use strict";


var todos = [
  { todoText: "play with taco", completed: false },
  { todoText: "reading", completed: false },
  { todoText: 'take medicine', completed: false },
];

function add() {
  var initialTodoText = addInput.value;
  todos.push({ todoText: initialTodoText, completed: false });
  addInput.value = "";
  displaysTodos();
}

function edit() {
  var position = editPositionInput.value;
  var newTodoTest = editTextInput.value;
  todos[position].todoText = newTodoTest;
  editPositionInput.value = "";
  editTextInput.value = "";
  displaysTodos();
}

function remove() {
  var position = removePositionInput.value;
  todos.splice(position, 1);
  removePositionInput = "";
  displaysTodos();
}

function toggle() {
  var position1 = toggleInput.value;
  for (var i = 0; i < todos.length; i++) {
    if (todos[position1].completed === true) {
      todos[position1].completed = false;
    } else {
      todos[position1].completed = true;
    }
    toggleInput.value = "";
    displaysTodos();
  }
}


function displaysTodos() {
  var todosUl = document.getElementById("todos-list-ul");
  todosUl.innerHTML = "";

  for (var i = 0; i < todos.length; i++) {

    var todoList = document.createElement("li");

    if (todos[i].completed === false) {
      todoList.innerText = "[yes] " + todos[i].todoText;
    } else {
      todoList.innerText = "[X] " + todos[i].todoText;
    }
    todosUl.appendChild(todoList);

  }
}

function toggleAll() {
  var completedTodos = 0;
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      completedTodos++;
    }
  }
  // le but de la for loop c'est que à chaque fois qu'un todo est coché, on l'ajoute 
  if (completedTodos === todos.length) {
    for (var i = 0; i < todos.length; i++) {
      todos[i].completed = false;
    }
  } else {
    for (var i = 0; i < todos.length; i++) {
      todos[i].completed = true;
    }
  }
  displaysTodos();
}

var displayTodosButton = document.getElementById("display-todos-button");
displayTodosButton.addEventListener("click", displaysTodos);

var toggleAllbutton = document.getElementById("toggleall-button");
toggleAllbutton.addEventListener("click", toggleAll);


var addButton = document.getElementById("add-button");
var addInput = document.getElementById("add-input");
addButton.addEventListener("click", add);
var editButton = document.getElementById("edit-button");
editButton.addEventListener("click", edit);
var editPositionInput = document.getElementById("edit-position-input");
var editTextInput = document.getElementById("edit-text-input");

var removeButton = document.getElementById("remove-button");
var removePositionInput = document.getElementById("remove-position-input");
removeButton.addEventListener("click", remove);


var toggleButton = document.getElementById("toggle-button");
var toggleInput = document.getElementById("toggle-input");
toggleButton.addEventListener("click", toggle);


