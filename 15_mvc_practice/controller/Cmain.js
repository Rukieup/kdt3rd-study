const User = require('../model/User');

exports.main = (req, res) => {
    res.render('index', { title: '동적 폼 실습' });
  };

exports.practice30 = (req, res) => {
  // res.render('index', {userInfo: User.userInfo() })
  console.log(req.body);
  
  console.log(User.userInfo())
  const user = User.userInfo();
  console.log(User);

  // DB로부터 받아온 id, pw vs 사용자가 폼에 입력한 id, pw
  if (user.realId === req.body.userId && 
      user.realPw === req.body.userPw
  ) { return res.send({ userInfo: req.body, isSuccess: true });
  } else {
    return res.send({ isSuccess: false });
  }
};