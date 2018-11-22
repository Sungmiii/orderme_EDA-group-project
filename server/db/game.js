const knex = require ('knex')
const config = require('../../knexfile').development
const db = knex(config)

function getGame(){
    return db('game').select()
}

module.exports = {
    getGame
}