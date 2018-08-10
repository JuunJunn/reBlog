var express = require('express');
var router = express.Router();


const utilApi = require('../model/utilApi')//数据处理Api


//根据id查询单个blog对象
router.get('/blog', async (req, res) => {
  const id = parseInt(req.query.id)
  if(id) {
    const result = await utilApi.findById(id)
    console.log(result.data)
    res.render('detail', {blogData: result.data})
  }else {
    res.send('404 Not Found')
  }
})


//根据id查询单个blog对象 编辑页面
router.get('/blog', async (req, res) => {
  const id = parseInt(req.query.id)
  if(id) {
    const result = await utilApi.findById(id)
    console.log(result.data)
    res.render('detail', {blogData: result.data})
  }else {
    res.send('404 Not Found')
  }
})


module.exports = router;
