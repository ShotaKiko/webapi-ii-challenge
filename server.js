const express = require('express')
const server = require(express)

server.use(express.json())

server.get('/', (req, res) => {
    res.send(`
    <h1>Welcome to Web Api II</h1>
    `)
})

module.exports = server