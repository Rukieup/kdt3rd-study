console.log(document) // js
console.log($(document)) // jquery

// 1. Load Event
$(document).ready(function() {
  console.log('ready - 문서의 dome 트리가 완성되면 실행')
});

$(function () {
  console.log('안녕?');
})

//js
document.addEventListener('DOMContentLoaded', function() {
  console.log('documentloaded - 문서의 dom 트리가 완성되면 실행')
})

// 2. Mouse Event
$('.p-msg').click(function () {
  $('.p-msg').css('color','red')
})

console.log($('.num'))
// $('.num').click(function() {
//   // $('.num').css('color','blue')
//   // $(this): 자기자신을 의미, 클릭이 발생한 num만
//   $(this).css('color', 'blue') // 클릭이 발생한 그 요소를 의미
// });

// js

const nums = document.querySelectorAll('.num');
for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', function () {
        // console.log(nums[i]);
        // nums[i].style.color = 'blue';
        this.style.color = 'blue';
        console.log(this);
    });
}

// mouseover(): 요소에 마우스 올렸을 때
$('.numbers').mouseover(function () {
  $(this).css('background-color', 'skyblue');
  $(this).append('<div>.mouseover() called!!!</div>')
});

// hover(): 마우스 올렸을 때, 떼었을 때
// hover(inFunc, outFunc)
$('.div-hover').hover(
  function () {
    $(this).addClass('hover');
  },
  function () {
    $(this).removeClass('hover');
  })


// scroll(): 스크롤할 때
console.log(window); // js
console.log($(window)); // juery

$(window).scroll(function () {
  console.log('scroll!!!!!!!!');
})

// 3. Key Event
$('.input-key').keydown(function (e) {
  if(e.code == 'ArrowUp'){
    console.log('up')
  } else if(e.code == 'ArrowDown'){
    console.log('down')
  } else (
    console.log('Others')
  )
})

// 4. form Event
$('#todo-form').submit(function(e) {
  e.preventDefault();

  const todo = $('input[name="todo"]').val(); // input 값 저장
  $('.todos').append(`<li>${todo}</li>`) //li 자식 추가
  $('input[name="todo"]').val('') // input 초기화

})