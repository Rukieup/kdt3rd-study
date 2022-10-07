console.log('!');

const clickMe = document.querySelector('#clickme');
clickMe.addEventListener('click', function (ev) {
  console.log(ev);
})

const todoForm = document.querySelector('#todo-form') //<form>
const ul = document.querySelector('.todos') // <ul>

todoForm.addEventListener('submit', function(ev) {
  
  ev.preventDefault();

  const todoInput = document.querySelector('input');
  let todo = todoInput.value;
  
  const newTodo = document.createElement('li');
  newTodo.textContent = todo;
  ul.append(newTodo) // append(): 선택된 요소의 마지막에 새로운 html 요소 추가

  todoInput.value = '';
  
})
