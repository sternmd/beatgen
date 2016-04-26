var express = require('express');
var router = express.Router();

/* GET homepage. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beat Generation Quote Generator' });
});

/* GET ginsberg */
router.get('/kerouac', function(req, res, next) {
  res.render('kerouac', { title: 'Jack Kerouac Quotes' });
});

/* GET ginsberg */
router.get('/ginsberg', function(req, res, next) {
  res.render('ginsberg', { title: 'Allen Ginsberg Quotes' });
});

/* GET snyder */
router.get('/snyder', function(req, res, next) {
  res.render('snyder', { title: 'Gary Snyder Quotes' });
});

/* GET burroughs */
router.get('/burroughs', function(req, res, next) {
  res.render('burroughs', { title: 'William S. Quotes' });
});


module.exports = router;
