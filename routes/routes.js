const express = require('express')
const router = express.Router()

const PgClient = require('../client/pgclient')

router.get('/tasks', PgClient.getTasks)
router.get('/task/:id', PgClient.getTask)
router.post('/task', PgClient.insertTask)
router.put('/task', PgClient.updateTask)
router.delete('/task', PgClient.deleteTask)

router.get('/user/:id', PgClient.getUser)
router.post('/user', PgClient.insertUser)
router.put('/user', PgClient.updateUser)
router.delete('/user', PgClient.deleteUser)

router.get('/projects', PgClient.getProjects)
router.get('/project/:id', PgClient.getProject)
router.post('project/', PgClient.insertProject)
router.put('/project', PgClient.updateProject)
router.delete('/project', PgClient.deleteProject)

module.exports = router