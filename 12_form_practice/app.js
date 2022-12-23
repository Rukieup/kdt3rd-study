const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형태로 데이터를 전달받음

app.get('/', function (req, res) { 
  res.render('index', {title: '폼 실습'})});

app.get('/result26', function (req, res) {
  console.log(req.query);
  res.render('result', {
    success : '실습 26 폼 전송 완료!',
    userInfo : req.query,
  })
})

app.get('/result26', function (req, res) {
  console.log(req.body);
  res.render('result', {
    success: '실습 27 폼 전송 완료!',
    userInfo: req.body,
  })
})


app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`)
})