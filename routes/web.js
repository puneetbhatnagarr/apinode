const express = require('express')
const router = express.Router();
const Blogcontroller = require('../controller/Blogcontroller.js');

router.get('/getall',Blogcontroller.getall);
router.post('/bloginsert',Blogcontroller.bloginsert);
router.get('/blogview/:id',Blogcontroller.blogview);
router.put('/blogupdate/:id',Blogcontroller.updateblogs);
router.delete('/blogdelete/:id',Blogcontroller.blogdelete);

module.exports = router;