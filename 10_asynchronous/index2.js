// #1 프로미스 (Promise)
// - 비동기 함수를 동기처리 하기 위해 만든 객체
// - 성공, 실패를 분리해서 반환
// 성공이든 실패든 무언가의 "최종 결과"
// - fulfilled (resolve) : 성공
// - rejected (reject) : 실패

const { resolve } = require("path");

/*
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if(flag) {
      resolve(
        `⭕promise 상태는 fulfilled! then()으로 연결됩니다 \n 이때 flag가 ${flag} 입니다. `
      ); // true(성공)
    } else {
      reject(
        `❌promise 상태는 resected! catch()으로 연결됩니다 \n 이때 flag가 ${flag} 입니다. `
      ); // false (실패)
    }
  })
}

promise1(5 < 3) // true, false
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err);
  })
*/

// #2
// "promise"를 이용해 동기처리 해보자

/*
ㄹ

// #3 Promise 체이닝
// ex. 함수를 이용해 (4 + 3) * 2 - 1 = 13 연산을 해보자!
// add > mul > sub 순으로 연산 필요 
 
/*
function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2; // 
    callback(result);
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1;
    callback(result);
  }, 500);
}

add(4, 3, function (x) {
  // add 함수 정의부의 callback(result)
  console.log('1: ', x); // 7
  mul(x, function (y) {
    // mul 함수 정의부의 callback(result)
    console.log('2: ', y); // 14
    sub(y, function (z) {
      // sub 함수 정의부의 callback(result)
      console.log('3: ', z); // 13
    });
  });
});
*/

// step2. 프로미스 체이닝 사용
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result); // resolve(7)
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
      // *에러처리: 의도적으로 에러 일으킴
      // reject(new Error('의도적으로 에러를 일으켜봤음'))
    }, 500);
  });
}

add(4, 3) // add(4, 3) -> resolve(7) - then(7)
  .then(function (result) {
    console.log('1: ', result); // 7
    return mul(result); // return mul(7) - resolve(14) -> then(14)
  })
  .then(function (result) {
    console.log('2: ', result); // 14
    return sub(result); // return sub(14) -> resolve(13) -> then(13)
  })
  .then(function (result) {
    console.log('3: ', result); // 13
  }).catch(function (err) {
    console.log('실패!');
    console.log('err');
  });


  // ===============================================
  // 드림 코딩
  // Promise is a JavaScript object for asynchronous operation,
  // State: pending -> fulfilled or rejected
  // Producer vs Consumer

  // 1. Producer
  // when new Promise is created, the executor runs automatically.
  const promise = new Promise((resolve, rejected) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
      // resolve('ellie');
      reject(new Error('no network'));
    }, 2000);
  })

  // 2. Conumers: then, catch, finally
  // value: 프로미스가 잘 수행이 되어서 마지막으로 resolve 콜백 함수에서 전달된 값
  promise
    // 성공될 경우 then 실행
    .then((value) => {
    console.log(value);
  })
    // 실패햇을 경우 catch 실행
    .catch(error => {
      console.log(error);
    })
    // 성공 여부에 상관없이 실행
    .finally(()=> {
      console.log('finally')
    });

    // 3. Promise chaining
    const fetchNumber = new Promise((resolve, reject) => {
      setTimeout
    })

    // 4. Error Handling
    // 에러가 발생하는 곳에서 catch를 쓰면 끝까지 실행됨
    const getHen = () => 
      new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
      });

    const getEgg = hen => 
      new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${han} => 🥚`)), 1000)
        // resolve(`${hen} => 🥚`), 1000);
      });
    
    const cook = egg => 
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
      });

    getHen()    
      .then(getEgg)
      .catch(error => {
        return '🥖';
      })
      .then(cook)
      .then(console.log)
    // 콜백함수를 전달할 때 받아오는 value를 다른 함수로 바로 하나를 호출하는 경우
    // .then(hen => getEgg(hen)) ====> .then(getEgg)
    // .then(meal => console.log(meal)) ====> .then((console.log)