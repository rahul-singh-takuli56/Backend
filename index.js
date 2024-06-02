require('dotenv').config()
const express = require("express");

const app = express();

const port = 3000

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/twitter', (req, res) => {
    res.send("I am twiiter");
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login here </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai or Code</h2>');
})

app.listen(process.env.PORT, () => {
    console.log("App is listening on port 3000");
})