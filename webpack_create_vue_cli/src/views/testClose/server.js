const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())


app.get('/users', (req, res, next) => {
   const obj={
       name:'yhb',
       age:20
   }
   console.log('请求已到达')
    res.send(obj)
})