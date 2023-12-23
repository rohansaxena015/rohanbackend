require('dotenv').config()

const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('rohansng')
})

app.get('/login', (req, res) => {
    res.send('<h1> Welcome to Sajanpur </h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Welcome to Rohan youtube channel!! </h2>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})