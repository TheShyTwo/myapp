const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
    return res.send('<h1>Home Page</h1>')
})

app.listen(port, () => {
    console.log(`listening at http://127.0.0.1:${port}`)
})