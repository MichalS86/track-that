const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('postgres://postgres:T0morr0w!@localhost:5432/trackthat')

const Projects = sequelize.define('Projects', {
    id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
}, {
    createdAt: 'created_at',
    schema: "tracks",
    tableName: 'projects',
    timestamps: false,
    updatedAt: false
});

const Tasks = sequelize.define('Tasks', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: 'created_at',
    schema: 'tracks',
    tableName: 'tasks',
    timestamps: false,
    updatedAt: false
});

const Users = sequelize.define('Users', {
    id: {
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
}, {
    createdAt: 'created_at',
    schema: "tracks",
    tableName: 'users',
    timestamps: false,
    updatedAt: false
});

const testconnection = () => {
    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully. HELLO');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


module.exports = {
    Projects, Tasks, Users
}