const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MVC 패턴 적용
// ./routes/index: index는 생략 가능
const indexRouter = require('./routes'); // ./routes/index
// localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작
app.use('/', indexRouter);

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
