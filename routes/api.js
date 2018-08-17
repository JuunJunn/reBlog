var express = require('express');
var router = express.Router();


const utilApi = require('../model/utilApi')//数据处理Api


//根据id查询单个blog对象
router.get('/blog', async (req, res) => {
  const id = parseInt(req.query.id)
  if(id) {
    const result = await utilApi.findById(id)
    res.render('detail', {blogData: result.data})
  }else {
    res.send('404 Not Found')
  }
})


//根据id查询单个blog对象 编辑页面
router.get('/blogEditor', async (req, res) => {
  const id = parseInt(req.query.id)
  if(id) {
    const result = await utilApi.findById(id)
    res.render('editor', {blogData: result.data})
  }else {
    res.send('404 Not Found')
  }
})

//更新博客
router.post('/blog_update', async (req, res) => {
  const param = req.body
  const result = await utilApi.updateBlog(param)
  res.send(result)
})

//写博客 page
router.get('/blog_write', async (req, res) => {
  res.render('write', {})
})

//添加博客到数据库
router.post('/blog_create', async (req, res) => {
  const param = req.body
  const result = await utilApi.createBlog(param)
  res.send(result)
})


//删除一条博客
router.post('/blog_delete', async (req, res) => {
  const id =req.body.id
  const result = await utilApi.deleteBlog(id)
  res.send(result)
})
module.exports = router;
