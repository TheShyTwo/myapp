const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let a = 1
    let b = 2
    let c = a + b
    return res.send('hello world! ha i')
})

app.listen(port, () => {
    console.log(`listening at http://127.0.0.1:${port}`)
})