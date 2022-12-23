console.log('!');

// 이벤트 객체
// event 
// 이벤트 발생; 브라우저는 발생한 이벤트에 대한 정보를 담은
// 이벤트 객체(event object)를 이벤트 리스너에게 전달
const clickMe = document.querySelector('#clickme');
clickMe.addEventListener('click', function (event) {
	console.log(event);
	// event: 이벤트 객체에 대한 정보를 담고 있음
});


const todoForm = document.querySelector('#todo-form');
const ul = document.querySelector('.todos');

todoForm.addEventListener('submit', function (event) {
	// form의 submit 이벤트는 제출되는 것이 기본 동작
	// 제출: 새로고침 
	// console.log('Add 버튼 클릭');


	// preventDefault: 브라우저에서 구현된 기본 동작 취소
	// 폼 이벤트: 폼이 제출되면 새로고침되는 기본 동작을 취소
	event.preventDefault();
  
	const todoInput2 = document.querySelector('input');
  console.log(todoInput2);
  
  //input vs input[name="todo"] 차이
	const todoInput = document.querySelector('input[name="todo"]');
	console.log(todoInput);
	console.dir(todoInput); // console.dir(): 객체를 트리구조로 보여주는 명령어
	console.dir(todoInput.value);

  let todo = todoInput.value; // 사용자가 input에 입력한 값

  // li 태그를 만들어서, li태그의 content로 input.value 값이 담기도록
  const newTodo = document.createElement('li'); // <li></li>
  newTodo.textContent = todo; //<li>사용자가 입력한 input값</li>
  ul.append(newTodo); // <ul><li>사용자가 입력한 input값</li></ul>

  // input 초기화 
  todoInput.value = ''; // input의 value를 빈 문자열로 설정해 초기화	
});


// ==================================
// 블로그 작성할 때 미리 작성 등
// input창 실시간 감지

const chgInput = document.getElementById('changeInput')
console.log(chgInput);

chgInput.addEventListener('input', function() {
	// inpu: 입력창에 변경이 일어나는 순간을 계속 감지

	const div = document.querySelector('.intro')
	div.textContent = chgInput.value;
});


// ==================================
// 키보드 이벤트
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keydown', function(e) {
	// keydown: 키를 누르고 있을 때
	console.log(e); // 이벤트 발생 출력
	console.log(e.code); // 입력한 code값 출력

	// 검색창에 엔터 눌러도 검색이 되도록 구현
	if (e.code === 'Enter') {
		keyInput.style.backgroundColor = 'orange';
	} else if (e.code === 'ArrowRight') {
		console.log('RIGHT!!!')
	} else if (e.code === 'ArrowLeft') {
		console.log('Left!!!')
	} else if (e.code === 'ArrowDown') {
		console.log('Down!!!')
	} else {
		console.log('Others')
	}

});

