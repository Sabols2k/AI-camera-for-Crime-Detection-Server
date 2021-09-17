class NewsController {
  //[GET] /news
  index(req, res) {
    res.render('news');
  }

  // [GET] /news/:slug  // slug là 1 biến động
  show(req, res) {
    res.send('New Detail!!!');
  }
}
module.exports = new NewsController();

const newController = require('./NewsController');
