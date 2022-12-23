function call (name) {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      let result = name
      console.log(name);
      resolve(result)
    }, 1000)
  })
}

function back() {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      let result = 'back'
      console.log('back');
      resolve(result)
    }, 1000)
  })
}

function hell() {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      let result = 'callback hell'
      resolve(result)
    }, 1000)
  })
}

call('kim')
  .then(function (result) {
    console.log(result, '반가워')
    return back('back')
  })
  .then(function (result) {
    console.log(result, '을 실행했구나')
    return hell(result)
  })
  .then(function (result){
    console.log('여기는', result)
  })


// promise로 배경색 변경하기
let bg = document.body
function bgChange (color) {
  return new Promise(function(resolve,reject) {
    setTimeout(function() {
      let result = color
     bg.style.backgroundColor = color
     resolve(result)
    }, 1000)
  })
}

bgChange ('red')
  .then(function (result){
    return bgChange('orange')
  })
  .then(function (result){
    return bgChange('yellow')
  })
  .then(function (result){
    return bgChange('green')
  })
  .then(function (result){
    return bgChange('blue')
  })

  