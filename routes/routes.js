const express = require('express')
const router = express.Router()

const api = require('../web/api')

router.get('/tasks', api.getTasks)
router.get('/task/:id', api.getTask)
router.post('/task', api.insertTask)
router.put('/task', api.updateTask)
router.delete('/task/:id', api.deleteTask)

router.get('/users', api.getUsers)
router.get('/user/:id', api.getUser)
router.post('/user', api.insertUser)
router.put('/user', api.updateUser)
router.delete('/user/:id', api.deleteUser)

router.get('/projects', api.getProjects)
router.get('/project/:id', api.getProject)
router.post('/project', api.insertProject)
router.put('/project', api.updateProject)
router.delete('/project/:id', api.deleteProject)

module.exports = router