console.log('!');

// 이벤트 (Event)
// : 사용자들의 행동에 반응하는 작업
// ex: 클릭, 더블클릭, 폼 제출 등...


// 이벤트 리스너 (Event Listener)
// : 이벤트가 발생했을 때 실행할 함수
// 1. 인라인 방식 on 
// 2. onXX 속성 방식 on
// 3. addEventListener() 메소드 방식

// 1. 인라인 방식 
function showAlert() {
  alert('버튼1 클릭');
}

// 2. 속성(프로퍼티) 방식
let btn2 = document.querySelector('#btn2');
btn2.onclick = function() {
  alert('버튼2 클릭');
}

// 3. addEventListener 메서드 방식
// addEventListener(type, function)
// ㄴ type: 이벤트 종류 (클릭, 더블클릭, ...)
// ㄴ listener: 이벤트 발생시 처리할 함수
// let btn3 = document.querySelector('#btn3');
// btn3.addEventListener('click', function() {
//   alert('버튼3 클릭!!!');
// })

// let span1 = document.querySelector('#span1')
// console.log(span1)
// span1.ondblclick = function() {
//   alert('span1 클릭');
//   span1.style.backgroundColor = 'lime';
// }

// let span2 = document.querySelector('#span2');
// span2.onmouseover = function() {
//   span2.style.backgroundColor = 'red';
// }

// let span3 = document.querySelector('#span3');
// span3.onclick = function() {
//   span3.style.backgroundColor = 'orange';
// }

// mouseover 이벤트
// function mouseoverSpan1() {
//   let span1 = document.querySelector('#span1');
//   span1.style.color = 'blue';
// }

// let span2 = document.querySelector('#span2');
// span2.onmouseover = function() {
//   span2.style.backgroundColor = 'red';
// }

// let span3 = document.querySelector('#span3');
// span3.addEventListener('mouseover', function() {
//   alert('버튼3 클릭!!')
// })

// dblclick 이벤트
function dblclickSpan1() {
  let span1 = document.querySelector('#span1');
  span1.style.color = 'blue';
}

let span2 = document.querySelector('#span2');
span2.ondblclick = function() {
  span2.style.backgroundColor = 'red';
}

let span3 = document.querySelector('#span3');
span3.addEventListener('dblclick', function() {
  alert('버튼3 클릭!!')
})

