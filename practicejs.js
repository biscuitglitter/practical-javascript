function toggleAll() {

  if (todos[i].completed === true) {
    todos[i].completed = false;
  } else {
    todos[i].completed = true;
  }
}

var completedTodos = 0

for (var i = 0; i < todos.length; i++) {
  if (todos[i].completed === true) { // si un completedTodo === true (donc il est coché) donc il est parmi les completedTodos++
    completedTodos++;
  }
}
if (completedTodos === todos.length) { // si tous les todos dans l'array sont completedTodos (donc  cochés)
  for (var i = 0; i < todos.length; i++)
    todos[i].completed = false; // alors ils deviennent tous false (pas cochés)
}


////////////////////////////////


function toggleAll() {
  var completedTodos = 0;  

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
    completedTodos++;
    }
  }

  for (var i = 0; i < todos.length; i++) {
    if (completedTodos === todos.length) { 
    } else {
      todos[i].completed = true;
    }
  }
}

displaysTodos();
toggleAll();