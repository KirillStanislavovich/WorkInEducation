import './todo.css';

function todoList() {
  let btnAdd = document.querySelector('.add-todo');

  let list = document.querySelector('ol');

  let newTodo = document.querySelector('.new-todo');

  let nowTodo = document.querySelector('li');

  function clearTodo (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('del-todo');
    }
  }

  function addTodo(text) {
    let nextTodo = document.createElement('li');
    nextTodo.classList.add('list_item');
    nextTodo.innerHTML = `${text}`;
    list.append(nextTodo);
  }

  btnAdd.addEventListener('click', function() {
    let text = newTodo.value;
    if (text === '') {
      alert('Вы ничего не ввели');
      return;
    }
    addTodo(text);
    newTodo.value = '';
  });

  list.addEventListener('click', clearTodo);
}

export {todoList};