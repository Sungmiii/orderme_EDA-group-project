const knex = require('knex')
var environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = knex(config)

function getGame() {
    return db('game').select()
}

module.exports = {
    getGame
}