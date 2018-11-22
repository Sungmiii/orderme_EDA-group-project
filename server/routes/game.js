const express = require('express')
const router = express.Router()

const db = require('../db/game')

router.get('/', (req, res)=>{
    db.getGame()
    .then(game =>{
        res.json({game})
    })
})

module.exports = router