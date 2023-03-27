const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'trackthat',
    password: 'T0morr0w!',
    port: 5432, // or the port your database is running on
});

const getTasks = (req, res) => {
    pool.query('SELECT * FROM tracks.tasks')
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            console.log(error);
        })
}

const getTask = async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query('SELECT * FROM tracks.tasks WHERE id = $1', [id])
    if (rows.length === 0) {
        res.status(404).json({ error: 'task not found' });
    } else {
        res.json(rows[0]);
    }
}

const insertTask = async (req, res) => {
    await pool.query('INSERT INTO tracks.tasks (name, description, creator_id) VALUES ($1, $2, $3 )', [req.body.name, req.body.description, req.body.creator_id])
    console.log("task inserted")
    res.status(200).json('task inserted')
}

const updateTask = async (req, res) => {
    if (req.body.id == null) {
        res.status(400).json('missing id parameter')
    }
    await pool.query('UPDATE tracks.tasks set name = $1, description = $2 WHERE id = $3', [req.body.name, req.body.description, req.body.id])
    res.status(200).json('task updated')
}

const deleteTask = async (req, res) => {
    if (req.body.id == null) {
        res.status(400).json("Missing id parameter")
    }
    await pool.query('DELETE FROM tracks.tasks WHERE id = $1', [req.body.id])
    res.status(200).json('task removed')
}

const getUser = async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query('SELECT * FROM tracks.users WHERE id = $1', [id])
    if (rows.length == 0) {
        res.status(404).json({ error: 'user not found' })
    } else {
        res.status(200).json(rows[0])
    }
}

const insertUser = async (req, res) => {
    await pool.query('INSERT INTO tracks.users (name) VALUES ($1 )', [req.body.name])
    res.status(200).json('user inserted')
}


const updateUser = async (req, res) => {
    if (req.body.id == null) {
        res.status(400).json('missing id parameter')
    }
    await pool.query('UPDATE tracks.users set name = $1, WHERE id = $2', [req.body.name, req.body.id])
    res.status(200).json('user updated')
}

const deleteUser = async (req, res) => {
    if (req.body.id == null) {
        res.status(400).json("missing id parameter")
    }
    await pool.query('DELETE FROM tracks.users WHERE id = $1', [req.body.id])
    res.status(200).json('user removed')
}


const getProjects = async (req, res) => {
    pool.query('SELECT * FROM tracks.projects')
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            console.log(error);
        })
}

const getProject = async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query('SELECT * FROM tracks.projects WHERE id = $1', [id])
    if (rows.length == 0) {
        res.status(404).json({ error: 'project not found' })
    } else {
        res.status(200).json(rows[0])
    }
}

const insertProject = async (req, res) => {
    await pool.query('INSERT INTO tracks.projects (name) VALUES ($1 )', [req.body.name])
    res.status(200).json('project inserted')
}


const updateProject = async (req, res) => {
    if (req.body.id == null) {
        res.status(400).json('missing id parameter')
    }
    await pool.query('UPDATE tracks.project set name = $1, WHERE id = $2', [req.body.name, req.body.id])
    res.status(200).json('user updated')
}

const deleteProject = async (req, res) => {
    if (req.body.id == null) {
        res.status(400).json("missing id parameter")
    }
    await pool.query('DELETE FROM tracks.projects WHERE id = $1', [req.body.id])
    res.status(200).json('user removed')
}

module.exports = {
    getTasks, getTask, insertTask, updateTask, deleteTask,
    getUser, insertUser, updateUser, deleteUser,
    getProjects, getProject, insertProject, updateProject, deleteProject
}



