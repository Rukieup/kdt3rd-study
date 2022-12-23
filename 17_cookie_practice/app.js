const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(cookieParser()); // req.cookies 가능해짐

const cookieConfig = {
  // 옵션 속성들
  httpOnly: true, // 웹 서버를 통해서만 쿠키 접근 가능 (js에서 접근 불가능)
  maxAge: 60 * 1000, // 1min: 유효 시간 (단위: ms)
  // expire : 만료 날짜 설정
  // secure: https 에서만 쿠키 접근 (보안)
  // signed: 쿠키 암호화
};

// res.cookie()
app.get('/', (req, res) => {
  // req.cookies.popup
  // 쿠키 설정시: 'hide'
  // 쿠키 미설정시: ''
  res.render('index', { popup: req.cookies.popup });
});

app.post('/setCookie', (req, res) => {
  // 쿠키 설정 : popup 쿠키의 값을 설정
  res.cookie('popup', "hide", cookieConfig);
  // 응답: '쿠키 설정
  res.send('set cookie'); // 응답을 보냄
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});