console.log('!');

// document 요소 다루기 (읽고 쓰기)

// 1. html 요소 내용(content) 읽고 쓰기
let div1 = document.getElementById('div1');
console.log(div1);

// innerHTML 속성
// : 요소 안의 '코드'를 가져오거나 수정
// => 입력된 문자열을 HTML 형식으로! 
// 읽기: 요소.innerHTML
// 쓰기: 요소.innerHTML = 수정하려는 태그 
console.log(div1.innerHTML); // 읽기
div1.innerHTML = '여기는 <b>첫번째</b> 태그입니다. &hearts;'; // 쓰기
console.log(div1.innerHTML)

// innerText 속성
// : 요소 안의 '텍스트'만 가져오거나 수정 (태그빼고 )
// => 입력된 문자열을 그대로!!
// 읽기: 요소.ineerText
// 쓰기: 요소.ineerText = 수정하려는 텍스트
console.log(div1.innerText);
div1.innerText = '여기는 <b>첫번째</b> 태그입니다. &hearts;'; // 여기는 <b>첫번째</b> 태그입니다. &hearts;
div1.innerText = '안녕하세요!!';

// textContent 속성
// : innerText와 마찬가지로 텍스트 정보를 표시
// IE9 이전 버전에서는 사용 불가능 
console.log(div1.textContent);
div1.textContent = '안녕하세요2222!!!!!';

let div2 = document.getElementById('div2');
console.log(div2);

console.log(div2.innerHTML);
div2.innerHTML = '여기는 <b>두번째</b> 태그입니다';

// 2. 속성 접근
// 요소, 속성명
let city = document.getElementById('city');
console.log(city.id);
console.log(city.src);
console.log(city.width);
console.log(city.alt);

let google = document.getElementById('google');
console.log(google);
console.log(google.id);
console.log(google.href);

// getAttribute(): 속성값 가져오기
// setAttribute(): 속성값 설정오기
console.log(google.getAttribute('href'));
console.log(google.setAttribute('href', 'https://www.naver.com')); 
google.innerText = 'Naver';

let cloud = document.getElementById('city');
cloud.src ='./image/cloud.png';

// px로 바꾸면 적용 안 됌
console.log(cloud.width);
cloud.width = '300';
console.log(cloud.setAttribute('height', '300'))

console.log(cloud.setAttribute('id', 'cloud'));
console.log(cloud);

// =================================
// 3. 스타일(css) 제어
// : javascript로 css 설정 가능!

let h1 = document.querySelector('h1');

// // 3-1. 인라인 스타일 
// console.log(h1);
// console.log(h1.style);
// console.log(h1.style.fontSize); // camel case로 선택

// h1.style.color = 'limegreen';
// h1.style.backgroundColor = 'skyblue';
// h1.style.border = '4px solid brown';
// h1.style.textShadow = '2px 2px 10px #f005'

// // 배열 형태로 바꾸고 한번에 속성 바꾸기 
let lis = document.querySelectorAll('li');
// console.log(lis);


// //반복문을 이용해서 여러 요소 스타일을 한번에 설정
// // for (let i = 0; i < lis.length; i++){
// //   console.log(lis[i]);

// //   lis[i].style.color = 'rgb(0, 100, 200)';
// //   lis[i].style.fontSize = '20px';
// //   lis[i].style.backgroundColor = '#ddd';
// // }

// // for ... of 반복문
// const mylists = ['a', 'b', 'c', 'd'];
// for (let list of mylists){
//     console.log(list);
// }

// for (let li of lis){
//   li.style.color = 'rgb(0, 100, 200)';
//   li.style.fontSize = '20px';
//   li.style.backgroundColor = '#ddd';
// }

// 3-2. 클래스 제어 법칙 
// classList 속성
// - add(클래스명): 클래스 추가
// - remove(클래스명): 클래스 삭제
// - toggle(클래스명): 클래스 있으면 제거, 없으면 추가
// - contains(클래스명): 해당 클래스가 있는지 boolean 값으로 반환

console.log(h1);
console.log(h1.classList.add('h1'));
console.log(h1.classList);

// console.log(lis.classList.add('li'));
// console.log(lis.classList);

for(let li of lis){
  li.classList.add('li');
}


// remove()
console.log(h1.classList); // 삭제 전
h1.classList.remove('title');
console.log(h1.classList); // 삭제 후

// toggle()
h1.classList.toggle('happy'); // 없어서 추가
h1.classList.toggle('happy'); // 있어서 제거

// contains()
console.log(h1.classList.contains('header-color')); // true
console.log(h1.classList.contains('lukcy')); // false


// -------------------------
// 계층 이동 
// 부모, 자식, 형제
const apple = document.querySelector('li');
const fruits = document.querySelector('ul');
console.log(apple)

// 1. 부모 노드 찾기
//  직속 부모는 하나
console.log(apple.parentElement) // ul#fruits
console.log(apple.parentElement.parentElement) // body

// 2. 자식 노드 찾기
// 자식 요소는 여러개 
console.log(fruits.children) // li*4
console.log(fruits.children[0]) // 0번째 자식 요소
console.log(fruits.children[1]) // 1번째 자식 요소
console.log(fruits.children[2]) // 2번째 자식 요소
console.log(fruits.children[3]) // 3번째 자식 요소

// 3. 형제 노드
const lists = document.querySelectorAll('li');
console.log(lists); // li*4
const listOrange = lists[2]; // 동일: document.querySelectorAll('li')[2]
console.log(listOrange.previousElementSibling); // 앞에 형제
console.log(listOrange.nextElementSibling); // 뒤에 형제

const numbers = document.querySelector('.numbers');
console.log(numbers.children);
console.log(numbers.children[2]); // three
console.log(numbers.children[3].children[0]); // three-one

const number = document.querySelector('.number');
console.log(number)
console.log(number.children);
console.log(number.children[1]);
console.log(number.children[1].nextElementSibling);
console.log(number.children[1].previousElementSibling);



