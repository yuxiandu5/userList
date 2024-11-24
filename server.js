const express = require('express');
const router = require('./router');
const cors = require('cors');
//create a web server
const app = express();
app.use(express.json())
//一定要在路由配置之前解决跨域问题
app.use(cors());
app.use('/api',router);

const PORT = 8000;
app.listen(PORT,function(){
    console.log('Server is running on http://localhost:8000')
})