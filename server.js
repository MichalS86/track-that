const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'trackthat',
    password: 'T0morr0w!',
    port: 5432, // or the port your database is running on
});

app.use(express.json());

// Get all users
app.get('/users', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM tracks.users');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a user by ID
app.get('/user/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { rows } = await pool.query('SELECT * FROM tracks.users WHERE id = $1', [id]);

        if (rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all projects
app.get('/projects', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM tracks.projects');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a project by ID
app.get('/project/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { rows } = await pool.query('SELECT * FROM tracks.projects WHERE id = $1', [id]);

        if (rows.length === 0) {
            res.status(404).json({ error: 'Project not found' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM tracks.tasks');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a task by ID
app.get('/task/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const { rows } = await pool.query('SELECT * FROM tracks.tasks WHERE id = $1', [id]);

        if (rows.length === 0) {
            res.status(404).json({ error: 'Task not found' });
        } else {
            res.json(rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port || 3000, () => console.log('App available on port 5000'))