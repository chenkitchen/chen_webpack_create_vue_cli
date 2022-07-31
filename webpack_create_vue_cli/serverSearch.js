const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/search', (req, res, next) => {
    const data = [
        { key: '春', result: ['春天', '春光明媚'] },
        { key: '春天', result: ['春风送暖', '春光无限'] },
        { key: '春天的', result: ['春天的风', '春天的风景'] },
        { key: '春天的风', result: ['春天的风是醉人的', '春天的风是芳香的'] }
    ]
    console.log(req.query.key);
    const key = req.query.key

    // 筛选
    const filter_data = data.filter(item => {
        return item.key === key
    })
    if (filter_data.length === 0) {
        return res.send([])
    }
    console.log(filter_data[0].key)
    res.send(filter_data[0].result || [])

})


app.listen(3089, () => {
    console.log('server is runnig at http://127.0.0.1:3089')
})