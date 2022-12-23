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


document.documentElement
document.head
document.title
document.body

document.URL
document.domain

document.getElementById('아이디 속성값')
document.getElementsByClassName('클래스 속성값')
document.getElementsByTagName('태그 이름')
document.getElementsByName('name 속성값')

document.querySelector('css 선택자')
document.querySelectorAll('css 선택자')

document.createElement('html요소')
// document.createElement('li');
document.write('텍스트')

[].appendChile()
[].removeChilde()

[].append()
//  ul.append(newTodo)
[].removeChilde()

[].innerHTML = '내용'
// div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다. &hearts;';
[].ineerText = '내용'
// div1.innerText = '안녕하세요!!';
[].className = '클래스 이름'
