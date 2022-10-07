console.log('connected')

// 반복문
// - for 문
// - while 문

// for 문
/*
for (초기값; 조건식; 증감값) {
  // 반복할 코드
}
*/

// i++
// i = i + 1

// i--
// i = i +- 1

for ( let i = 1; i < 6; i++ ) {
  console.log(i);
}

for (let i = 5; 0 < i; i--) {
  console.log(i);
}
console.log('반복문 끝')

for (let i = 1; i <= 10; i++){
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log('반복문 끝')

// for (let i = 2; i <= 10; i = i+2) {
//   console.log(i)
// }
var sum = 0;
for (let i = 1; i <= 10; i++){
  sum += i;
}
console.log(`1~10까지 모두 더한 값 : ${sum}`)

var sum = 0;
for (let i = 1; i <= 5; i++){
  sum += i*2
}
console.log(`1~10까지 짝수의 합 : ${sum}`)

/*
while (조건식) {
  // 반복할 코드
}
=> 조건식 만족: 블럭({}) 내부 코드 실행
=> 내부 코드 실행 완료 => 조건식으로 돌아가서 다시 반복 여부 결정
  - if문: 조건식 true; 블럭 내부 코드 1번 실행
  - while문: 조건식이 true; "계속" 반복
=> 조건식 false: 반복 종료
*/

// case1. 1~5 반복
var i = 1; // 반복 변수 초기값 설정
while (i <= 5) {
  console.log(i);
  i++;
}
console.log('반복문 끝');

var i = 9;
while (i >= 4) {
  console.log(i);
  i--;
}
console.log('반복문 끝');

var i = 1;
while (i <= 10) {
  if(i%2 === 0){
    console.log(i);
  }
  i++;
}
console.log('반복문 끝');

var i = 2;
while (i <= 10) {
  console.log(i)
  i = i + 2;
}

console.log('반복문 끝');

var i = 10;
while (i >= 1) {
  if(i%2 === 1){
    console.log(i);
  }
  i--;
}

console.log('반복문 끝');

var i = 9;
while (i >= 1) {
  console.log(i);
  i = i - 2;
}

// ========================
// 무한 루프
// : 반복문에서 조건식의 결과가 항상 참이되어 반복문을 탈출하지 못한 상태
// 이를 활용해 의도적으로 무한루프를 만들어서
// 특정 조건이 만족될 때까지 반복하여서 코드를 작성하기도 함

/*
while (true) {
  ...
  // 탈출 조건 만들ㄹ기
}
*/
// 조건문 등을 이용해 탈출 조건을 만들어 주고
// break 키워드 -> 블록 ({})을 빠져나옴

// let go = confirm('계속 진행할까요?');
// console.log(go);
// [확인]: true
// [취소]: false

// var count = 0;
// while (true) { // 무한루프
//   if ( confirm("계속 진행하시겠습니까?") === true){
//     alert(`${count}번째 반복입니다!`);
//     count = count + 1;
//   } else {
//     break;
//   }
// }
// console.log('무한루프 탈출 성공!')

var n = 0;
for (let i = 0; i < 100; i++){
  if(i%2 === 0) {
    n += i;
  } else if(i%3 === 0){
    n += i;
  }
} 
console.log(n)

for (let i = 2; i <= 9; i++){
    console.log(`**** ${i}단 ****`)
  for (let j = 1; j <= 9; j++){
    console.log(`${i} * ${j} = ${i*j}`)
  }
}