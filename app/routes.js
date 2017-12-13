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

router.get('/revenue.ie/online-services/register_for_myaccount', function (req, res) {
  res.render('revenue_ie/register_for_myaccount')
});

router.get('/ros.ie/myaccount-register', function (req, res) {
  res.render('ros_ie/myaccount_register')
});

router.get('/ros.ie/myaccount-signin', function (req, res) {
  res.render('ros_ie/myaccount_signin')
});

router.get('/revenue.ie/online-services/where-are-you-from', function (req, res) {
  res.render('revenue_ie/where_are_you_from')
});

module.exports = router;