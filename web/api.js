const dbClient = require('../client/dbclient')

const getProjects = async (req, res) => {
    dbClient.getProjects().then(response => res.json(response))
}

const getProject = async (req, res) => {
    const { id } = req.params
    dbClient.getProject(id)
        .then(response => res.json(response))
}

const insertProject = async (req, res) => {
    console.log(req.body)
    await dbClient.insertProject(req.body)
        .then(result => res.json(result))
}

const updateProject = async (req, res) => {
    await dbClient.updateProject(req.body)
        .then(result => res.json(result))
}

const deleteProject = async (req, res) => {
    const { id } = req.params
    await dbClient.deleteProject(id)
        .then(response => res.json(response))
}

const getTasks = async (req, res) => {
    dbClient.getTasks().then(response => res.json(response))
}

const getTask = async (req, res) => {
    const { id } = req.params
    dbClient.getTask(id)
        .then(response => res.json(response))
}

const insertTask = async (req, res) => {
    console.log(req.body)
    await dbClient.insertTask(req.body)
        .then(result => res.json(result))
}

const updateTask = async (req, res) => {
    await dbClient.updateTask(req.body)
        .then(result => res.json(result))
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    await dbClient.deleteTask(id)
        .then(response => res.json(response))
}

const getUsers = async (req, res) => {
    dbClient.getUsers().then(response => res.json(response))
}

const getUser = async (req, res) => {
    const { id } = req.params
    dbClient.getUser(id)
        .then(response => res.json(response))
}

const insertUser = async (req, res) => {
    console.log(req.body)
    await dbClient.insertUser(req.body)
        .then(result => res.json(result))
}

const updateUser = async (req, res) => {
    await dbClient.updateUser(req.body)
        .then(result => res.json(result))
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    await dbClient.deleteUser(id)
        .then(response => res.json(response))
}

module.exports = {
    getProjects, getProject, insertProject, updateProject, deleteProject,
    getTasks, getTask, insertTask, updateTask, deleteTask,
    getUsers, getUser, insertUser, updateUser, deleteUser
}