const fs = require('fs')
const http = require('http')
const express = require('express')

const app = express()

// const server = http.createServer((req, resp) => {
//     console.log(req)
//     resp.end('Hello from the server!')
// })

// server.listen(8000, '127.0.0.1', () => {
//     console.log("Hello pretty bitch!")
// })

app.get('/', (req, res) => {
    res.status(200).send('Hello server!')
})

app.listen(3000, () => {
    console.log('HELLO from the server')
})