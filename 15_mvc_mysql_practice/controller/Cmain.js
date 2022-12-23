const Main = require('../model/Main');

exports.main = (req, res) => {
  res.render('index', { title: 'MVC패턴과 MYSQL 연결' });
};

exports.getVisitors = (req, res) => {
  res.render('visitor', {data: Visitor.getVisitors()} )
};