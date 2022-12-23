const express = require("express");
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'))
app.use(express.urlencoded( { extended: true}))
app.use(express.json())

//Routing (경로 설정)
app.get('/', function (req, res) {
  res.render('dynamic', {title : '동적 폼 실습'})
});

app.get('/practice29', function(req, res) {
  // 서버측: 터미널에 찍힘
  console.log(req.query); // { username: 'aa' }
  res.send(req.query); // res.send({ username: 'aa' })
});

// db에서 가져왔다고 가정
const realId = 'banana';
const realPw = '4321';

app.post('/practice30', function (req, res) {
  console.log(req.body); // { userId: 'aa' }
  res.send(req.body);

  // 진짜 아이디/ 비번 vs 사용자가 입력한 아이디/비번
  if (realId === req.body.userId && realPw === req.body.userPw) {
    console.log('로그인 성공');
    res.send({ userInfo: req.body, msg: '로그인 성공'})
  } else {
    console.log('로그인 실패')
    res.send({msg: '로그인 실패'})
  }cl
})

app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`)
});