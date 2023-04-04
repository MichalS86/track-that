const model = require('./../models/trackmodel')

const getProjects = async () => {
    return await model.Projects.findAll({
        attributes: ['id', 'name']
    })
}

const getProject = async (id) => {
    return await model.Projects.findOne({
        where: {
            id: id
        }
    });
}

const insertProject = async (projectData) => {
    return await model.Projects.create(projectData);
}

const updateProject = async (projectData) => {
    return await model.Projects.update(projectData, {
        where: {
            id: projectData.id
        }
    })
}

const deleteProject = async (id) => {
    return await model.Projects.destroy({
        where: {
            id: id
        }
    })
}

const getTasks = async () => {
    return await model.Tasks.findAll({
        attributes: ['id', 'name', 'description', 'creator_id']
    })
}

const getTask = async (id) => {
    return await model.Tasks.findOne({
        where: {
            id: id
        }
    });
}

const insertTask = async (taskData) => {
    return await model.Tasks.create(taskData);
}

const updateTask = async (taskData) => {
    return await model.Tasks.update(taskData, {
        where: {
            id: taskData.id
        }
    })
}

const deleteTask = async (id) => {
    return await model.Tasks.destroy({
        where: {
            id: id
        }
    })
}

const getUsers = async () => {
    return await model.Users.findAll({
        attributes: ['id', 'name']
    })
}

const getUser = async (id) => {
    return await model.Users.findOne({
        where: {
            id: id
        }
    });
}

const insertUser = async (userData) => {
    return await model.Users.create(userData);
}

const updateUser = async (userData) => {
    return await model.Users.update(userData, {
        where: {
            id: userData.id
        }
    })
}

const deleteUser = async (id) => {
    return await model.Users.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getProjects, getProject, insertProject, updateProject, deleteProject,
    getTasks, getTask, insertTask, updateTask, deleteTask,
    getUsers, getUser, insertUser, updateUser, deleteUser
}