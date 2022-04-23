import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'
import diff from 'dialogflow-fulfillment'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

import fs from 'fs'
let review = JSON.parse(fs.readFileSync('./data/review.json'));

import { i_reviewnganh } from './intents/i_review'
import { i_bandocoso } from './intents/i_bandocoso'
import { i_hocphi } from './intents/i_hocphi'
import { i_websitekhoa } from './intents/i_websitekhoa'
import { i_vpk } from './intents/i_vpk'
import { i_diemchuan } from './intents/i_diemchuan'
import { i_nganhdaotao } from './intents/i_nganhdaotao'

const _PORT = process.env.PORT

app.get('/', (req, res) => { console.log(`Connect homepage`); res.send(`<h3>Home page</h3>`) })

app.post('/webhook', (req, res) => {
    const agent = new diff.WebhookClient({
        request: req,
        response: res
    })

    let intentMap = new Map()

    intentMap.set('i_reviewnganh', i_reviewnganh)
    intentMap.set('i_bandocoso', i_bandocoso)
    intentMap.set('i_hocphi', i_hocphi)
    intentMap.set('i_websitekhoa', i_websitekhoa)
    intentMap.set('i_vpk', i_vpk)
    intentMap.set('i_diemchuan', i_diemchuan)
    intentMap.set('i_nganhdaotao', i_nganhdaotao)

    agent.handleRequest(intentMap)

})

app.listen(_PORT, () => {
    console.log(`Server running on port ${_PORT} ... 🚗💨 ... 🚗💨 ... 🚗💨 ...`)
})
