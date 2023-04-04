const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/routes')

app.use(express.json());

app.listen(port || 3000, () => console.log('App available on port 3000'))

app.use("/api/", routes)
