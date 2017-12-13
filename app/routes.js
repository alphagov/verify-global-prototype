var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/gov-ie/where-do-you-live', function (req, res) {
  res.render('gov_ie/where_do_you_live')
})

router.get('/gov-uk/guidence/living-in-ireland', function (req, res) {
  res.render('gov_uk/guidence/living-in-ireland')
})

// add your routes here

module.exports = router
