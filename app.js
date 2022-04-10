import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const _PORT = process.env.PORT

app.get('/', (req, res) => { console.log(`Connect homepage`); res.send(`<h3>Home page</h3>`) })

app.post('/webhook', (req, res) => {
    console.log(JSON.stringify(req.body, 2, ''));
})

app.listen(_PORT, () => {
    console.log(`Server running on port ${_PORT} ... 🚗💨 ... 🚗💨 ... 🚗💨 ...`)
})