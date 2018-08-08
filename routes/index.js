var express = require('express');
var router = express.Router();

const utilApi = require('../model/api')//数据处理Api

/* GET home page. */
router.get('/', async (req, res, next) => {
  const result = await utilApi.findBloglist({limit: 10, offset: 0})
  const blogList = result.data.list
  res.render('index', { blogList: blogList});
});

module.exports = router;
