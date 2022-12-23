const { render } = require('ejs');
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads')); // upload 폴더 접근 가능하게끔

// multer 설정
const multer = require('multer');
const path = require('path');
// const upload = multer({
//   dest: 'uploads/',
// });
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done){
      done(null, 'uploads/')
    },
    filename(req, file, done){
      const ext = path.extname(file.originalname); // 확장자 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
  },
}),
  limits: { fileSize: 5 * 1024 * 1024 },
})

app.get('/', function (req, res) {
  res.render('index', { title: '파일 업로드 실습31' })
});

app.post('/result', uploadDetail.single('profile'), function (req, res){
  console.log(req.file);  
  console.log(req.body) ; 
  res.render('result', {
    title: 'post 요청 성공',
    userInfo: req.body,
    imgSrc: req.file.path,
  })
})

app.listen(PORT, function (req, res) {
  console.log(`http://localhost:${PORT}`)
})