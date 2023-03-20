const express = require('express')
const router = express.Router()

const PgClient = require('../client/pgclient')

router.get('/tasks', PgClient.getTasks)
router.get('/task/:id', PgClient.getTask)
router.post('/task', PgClient.insertTask)

module.exports = router