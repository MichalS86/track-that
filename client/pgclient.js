const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'trackthat',
    password: 'T0morr0w!',
})

client
    .connect()
    .then(() => console.log("DB Client connected"))
    .catch((error) => console.error("DB Connection error", error.stack));



const getTask = (req, res) => {
    client.query('SELECT * FROM tracks.tasks')
        .then(response => {
            res.json({
                response
            })
        }).catch(error => {
            console.log(error);
        })

}

module.exports = {
    getTask
}



