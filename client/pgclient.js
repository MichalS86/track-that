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
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json(rows[0]);
    }
}

const insertTask = async (req, res) => {
    let task = {
        name: req.body.name,
        description: req.body.description,
        creator_id: req.body.creator_id
    }
    console.log(req.body)
    await pool.query("INSERT INTO tracks.tasks (name, description, creator_id) VALUES ('$1', '$2', $3 )", [task.name, task.description, task.creator_id])
}



module.exports = {
    getTasks, getTask, insertTask
}



