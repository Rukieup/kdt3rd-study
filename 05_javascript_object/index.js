console.log('!!');

/**
 자료형
 - 기본형 (primitive)
 - 객체 (object)
  - 배열
  - 객체 리터럴(객체)
 */

// 1. 배열
// 배열 생성방법1
const arr1 = ['red', 'orange', 'yellow', 1,2,3];
// 배열 생성방법2
const arr2 = new Array('red', 'orange', 'yellow', 1,2,3);
console.log(arr1);
console.log(typeof(arr1)); // object
console.log(arr2);

// 배열 원소(요소) 읽기
// 인덱스 : 배열 원소 위치값
// 숫자는 0부터 시작 주의
let str = 'Greenn';
console.log(str[0]);
console.log(arr1[0]);
console.log(arr1[5]);

// 배열 웤소값 변경
arr1[2] = '파란';
console.log(arr1);
arr1[4] = 100;
console.log(arr1);

// 원소 추가
arr1[6] = '추가';
console.log(arr1);
arr1[7] = '추추가';
console.log(arr1);

// 동떨어진 인덱스 번호로 원소값 추가; 그 사이에 빈 값
arr1[10] = '얍';
console.log(arr1);
console.log(arr1[8]); // undefined
console.log(arr1[9]); // undefined

// 배열에서 자주 사용되는 속성과 메서드
// 1. length : 배열 길이 = 요소 개수 (속성)
console.log(arr2);
console.log(arr2.length); // 6

// 배열에서 마지막 인덱스 번호: 배열 길이 -1
console.log(arr2[arr2.length - 1]);

// 2. push(x): x를 맨 뒤에 추가
arr2.push(4);
arr2.push(5);
arr2.push(6);
// 여러개 추가도 가능
arr2.push(7, 8, 9);
console.log(arr2);

// 3. pop(): 맨 뒤 요소를 제거
arr2.pop();
console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.pop();
console.log(arr2);

// 4. unshift(x): 맨 앞에 x를 추가
arr2.unshift('hi');
console.log(arr2);
arr2.unshift('a','b');
console.log(arr2);

// 5. shift(): 맨 앞 요소를 제거
arr2.shift();
console.log(arr2);
arr2.shift();
console.log(arr2);

// 6. indexOf(x): 배열 원소에 x가 있는지 찾음
console.log(arr2.indexOf('orange')); // 2
console.log(arr2.indexOf('xxx')); // -1 : 없는 값을 찾으면 -1 반환

// -1 보다 크면 존재
// -1 나오면 없음

// 응용
// 2차원 배열 
const korean = [
  ['가', '나', '다'],
  ['라', '마', '바'],
  ['사', '아', '자'],
];

console.log(korean);
console.log(korean[0]); // ['가', '나', '다']
console.log(korean[1]); // ['라', '마', '바']
console.log(korean[2]); // ['사', '아', '자']

console.log(korean[0][0]); // 가
console.log(korean[1][0]); // 라
console.log(korean[2][0]); // 사

// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
  ['사', '스', '자', '크'],
  ['진', '안', '리', '이'],
  ['가', '수', '림', '나'],
  ['아', '으', '차', '운'],
];

console.log(letters);
console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);


// 3차원 배열
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

console.log(nums);
console.log(nums[1][0][1]);

// ########################################
// 2. 객체 리터럴, 딕셔너리 (object)
// 배열: 순서가 있음
// 객체: 키-값 형태 
// {}를 이용해 생성
// {key1: value1, key2: value2, key3: value3, ...}

const cat = {
  name: '나비',
  age: 1,
  mew: function () {
    return '냐옹';
  },
};

console.log(cat); // {name: '나비', age: 1, mew: ƒ}

// 객체 접근하기
// 1, 점 표기법
console.log(cat.name); // 나비
console.log(cat.age); // 1
console.log(cat.mew()); // 냐옹

// value 변경하기
cat.age = 3;
console.log(cat); // {name: '나비', age: 3, mew: ƒ}
// key-value 추가하기
cat.gender = 'F';
console.log(cat); // {name: '나비', age: 3, gender: 'F', mew: ƒ}

// 2. 대괄호 표기법
console.log(cat['name']) // 나비
console.log(cat['gender']) // F
console.log(cat['mew']) // 

// value 변경하기
cat['age'] = 5;
console.log(cat);
// key-value 추가하기
cat['weight'] = 5;
console.log(cat);


// value값: boolean, array, number, string, object ...
const dog = {
  name: 'Coco',
  isPoodle: true,
  age: 3,
  sibling: ['Max', 'Lucy', 'Bella'],
};

console.log(dog);
console.log(dog.name); // Coco
console.log(dog.isPoodle);
console.log(dog.age);
console.log(dog.sibling[0]); 
console.log(dog.sibling[1]); 
console.log(dog.sibling[2]); 

// 객체 타입 확인하기
console.log(typeof dog); // object
console.log(typeof(dog)); // object 
