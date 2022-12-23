// 배열을 받아오기 위해서 연결
const Comment = require('../model/Comment');

// exports로 선언함과 동시에 내보내기
// 내보내기 해야 접근 가능
exports.main = (req, res) => {
  res.render('index');
};

exports.comments = (req, res) => {
  console.log(Comment.commentInfos()); // 댓글 목록 확인용
  res.render('comments', { commentInfos: Comment.commentInfos() });
};

exports.comment = (req, res) => {
  console.log(req.params); // 라우트 매개변수(:id)에 대한 정보 담겨 있음
  console.log(req.params.id); // id 값 추출 

  // 댓글 목록 확인용: [ {}, {}, {}, {} ]
  const comments = Comment.commentInfos();
  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log( comments[commentId - 1]); // 댓글 목록에서 특정 댓글 정보 추출

  // 1. :id - 존재하지 않는 댓글 id x (0, 음수, 댓글 배열 길이보다 큰 값)
  if (commentId < 1 || commentId > comments.length) {
    // res.send('잘못된 접근입니다!!!');
    return res.render('404');
  };
  // 2. :id - 숫자가 아닌 것이 들어오면 x
  if (isNaN(commentId)) {
    // res.send('잘못된 접근입니다!!!');
    return res.render('404');
  };

  res.render('comment', { commentInfo: comments[commentId - 1] });
};