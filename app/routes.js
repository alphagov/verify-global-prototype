var express = require('express');
var router = express.Router();

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});

router.get('/gov-ie/where-do-you-live', function (req, res) {
  res.render('gov_ie/where_do_you_live')
});

router.get('/gov-ie/how-long-have-you-lived-in-the-uk', function (req, res) {
  res.render('gov_ie/how_long')
});

router.get('/gov-uk/guidence/living-in-ireland', function (req, res) {
  res.render('gov_uk/guidence/living-in-ireland')
});

router.get('/revenue.ie/online-services/file-an-income-tax-return', function (req, res) {
  res.render('revenue_ie/irish_tax_return')
});

router.get('/revenue.ie/online-services/view_statement', function (req, res) {
  res.render('revenue_ie/view_statement')
});
// add your routes here

module.exports = router;