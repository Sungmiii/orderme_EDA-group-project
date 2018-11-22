const path = require('path')
const express = require('express')

const server = express()

const gameRoutes = require('./routes/game')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/game',gameRoutes)


module.exports = server
