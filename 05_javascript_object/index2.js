console.log('!');

// JS 표준 내장 객체
// 기본적으로 (이미) 가지고 있는 객체
// String 


// ================================
var now = new Date();
console.log(now);

// ms
// 1970-01-01 09:00:00 기준으로
console.log(new Date(0));
console.log(new Date(80000));

// new Date(y, m, d, h, m, s, ms)
// year: 4자리
// month: 0(1월) ~ 11(12월) -> 주의
// date: 1 ~ 31 -> 생략하면 1으로 처리
// hour, minutes, seconds, ms
console.log(new Date(2018, 2, 2));
console.log(new Date(2018, 2, 2, 18, 20, 30));

console.log(new Date(2022, 8, 30, 10, 53));

// Date 객체 메서드
// 메서드를 이용해서 년, 월, 일 등의 값을 열기
console.log(now);

console.log(now.getFullYear()); // 2021
console.log(now.getMonth()); // 8(9월)
console.log(now.getDate()); // 30
console.log(now.getHours()); // 10
console.log(now.getMinutes()); // 56
console.log(now.getSeconds()); // 39
console.log(now.getMilliseconds()); // 881
console.log(now.getDay()); // 요일: 0(일) ~ 6(토)

// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
// if 문

var now = new Date()
var day = now.getDay();

// switch case 여러개
// 사용자가 어떤 값을 입력할지 모르기 때문에 항상 default 같이 쓰면 좋음
switch (day) {
  case 0:
  case 6:
    console.log('주말');
    break;
  case 1:
  case 2:  
  case 3:
  case 4:
  case 5:
    console.log('평일');
    break;
}

if (day == 0 || day == 6) {
  console.log('주말');
}else console.log('평일');

// Math 객체
// 수학적인 상수와 함수를 위한 속성과 메서드 

// 속성
console.log(Math.E); // 자연로그 밑 2.718281828459045
console.log(Math.PI); 
console.log(Math.SQRT2); // 2의 제곱근


// 메서드
// 속성과 메서드 차이는 괄호가 있느냐 없느냐 
console.log(Math.min(100, 200, 30, 7)); // 최소값
console.log(Math.max(100, 200, 30, 7)); // 최대값
console.log(Math.round(6.5)); // 반올림
console.log(Math.floor(6.5)); // 내림 (소숫점 지움)
console.log(Math.floor(6.8)); // 6
console.log(Math.ceil(6.1)); // 올림

// 메서드를 메서드로 감싸서도 사용 가능
console.log(Math.floor(Math.max(1.1, 2.2, 3.3, 7.7))); // 7

console.log(Math.random()); // 0 <=  x < 1 범위의 난수 

// 0 <= x < 10
console.log(Math.floor(Math.random() * 10)); // 0 <=  x < 10 범위의 난수 

console.log(Math.floor(Math.random() * 10 + 1));  // 1 <= x < 11
console.log(Math.floor(Math.random() * 100 + 1)); // 1 <= x < 101

// 0 <= x < 1
// 0 <= x < 3
// 20 <= x < 23
console.log(Math.floor(Math.random() * 3) + 20);  // 20 <= x < 23

// 규칙
// Math.floor(Math.random() * 구하려는 숫자의 갯수) + 나머지 수 


