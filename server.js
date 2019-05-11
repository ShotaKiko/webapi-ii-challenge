const express = require('express')
const lotrRoutes = require('./router.js')

const server = express()

server.use(express.json())
server.use('/api/posts', lotrRoutes)


server.get('/', (req, res) => {
    res.send(`
    <h1>Web Api II</h1>
    `)
})

module.exports = server