// 구조 분해 할당

// 1. 배열 구조 분해
// - 순서가 중요
// - 변수의 순서와 요소의 순서가 일치해야 함
// - 없는 값은 undefinde
// - 기본 값 설정 가능
const lists = ['apple', 'grape', [1, 2, 3]];
[item2, item1, item3 = 'peach'] = lists;
console.log('item2: ', item1);
console.log('item1: ', item2);
console.log('item3: ', item3);


// Swap : 두 변수의 값 교환
let x = 1, y = 2;
[x, y] = [y, x];
console.log('x:' , x);
console.log('y:' , y);

// 2. 객체 구조 분해
// - 키 값과 변수명 일치해야 함
// - 없는 키값을 변수로 받으면 undefined
const obj = {
  key1: 'one',
  key2: 'two',
};
const {key1, newKey1, key2, key3 = 'three'} = obj;
console.log(key1)
console.log(newKey1) // undefined
console.log(key2)
console.log(key3)

const {a, b} = {a:10, b:20};
console.log(a) // 10
console.log(b) // 20

const arr = ['a', 'b', 'c']

// [After]
const [one, two, three] = arr;
console.log(one)
console.log(two)
console.log(three)

// [After2]
const [one2, two2, three2, four2 = 'hello'] = arr;
console.log(one2)
console.log(two2)
console.log(three2)
console.log(four2)

const tv = {
  name: 'samsung tv',
  price: 300,
  size: '76inch',
  store: 'samsung'
}

// [Before]
// ver1. 점 연산자
console.log(tv.name)
console.log(tv.price)
console.log(tv.size)
console.log(tv.store)
// ver2. 대괄호 표기법
console.log(tv['name'])
console.log(tv['price'])
console.log(tv['size'])
console.log(tv['store'])

console.log('>>>>>>>>>>>>>>>>>>>>>')
// [After]
// key: 변수명 -> 새로운 변수명을 '키'로 사용
let {price : pricePrice, size, store, name, owner = 'Sean'} = tv;
console.log(name)
console.log(pricePrice)
console.log(size)
console.log(store)
console.log(owner)
// console.log(price)

// spread 연산자
// : 값을 펼치는 연산자

// object
const defaultInfo = {
  price: 2000,
  store: 'ceo'
}

const chocoIcecream = {
  ...defaultInfo,
  flavor: 'choco',
}

const strawberryIcecream = {
  ...defaultInfo,
  flavor: 'strawberry',
}

const mangoIcecream = {
  ...defaultInfo,
  flavor: 'mango',
}

console.log(chocoIcecream) // { price: 2000, store: 'ceo', flavor: 'choco' }
console.log(strawberryIcecream) // { price: 2000, store: 'ceo', flavor: 'strawberry' }
console.log(mangoIcecream) // { price: 2000, store: 'ceo', flavor: 'mango' }


// array
const nums1 = ['one', 'two', 'three']
const nums2 = ['four', 'five', 'six']

const nums = [...nums1, 'seven', ...nums2]
console.log(nums)
// [
//   'one',   'two',
//   'three', 'seven',
//   'four',  'five',
//   'six'
// ]


// 클래스
// - 객체를 생성하는 템플릿
// 클래스: 붕어빵 틀
// 객체: 붕어빵

class Cat {

  // 생성자
  constructor(name, age) {
    // 속성
    this.name = name;
    this.age = age;
  }

  // 메서드
  mew() {
    console.log('야옹~');
  }

  eat() {
    console.log('밥먹자!');
  }
}

let navi = new Cat('나비', 2);
let nyang = new Cat('냥', 3);
console.log(navi.name)
console.log(navi.age)
navi.mew(); // 야옹~
navi.eat(); // 밥먹자!

console.log(nyang.name)
console.log(nyang.age)
nyang.mew(); // 야옹~
nyang.eat(); // 밥먹자!

// 연습
// Person 클래스
// - 속성: 이름, 성별
// - 메서드: study()
// person 클래스로 만들어진 객체
// - minji
// - minku

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  
  study() {
    console.log('공부하다')
  }
}

let minji = new Person('minji', 'fm')
let minku = new Person('minku', 'm')

console.log(minji.name)
console.log(minji.gender)
console.log(minku.name)
console.log(minku.gender)