const express = require('express')
const cors = require('cors')

const sharks = require('./sharks')
const logger = require('./logger')

const app = express() //server 

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    res.status(200).send('Hello Reddy!!!!')
})

// http://localhost:3000/sharks
app.get('/sharks', (req, res) => {
    res.status(200).send(sharks)
})


app.get('/sharks/:id', (req, res) => {
    const idx = req.params.id - 1
    const shark = sharks[idx]

    if (!shark) {
        res.status(404).send({ error: "shark type not found", status: 404 })
      } else {
        res.status(200).send(shark)
      }
    })

app.post('/sharks', (req, res) => {
    const shark = req.body
    const lastShark = sharks[sharks.length - 1]
    
    const lastId = lastShark.id + 1
    shark.id = lastId
    
    sharks.push(shark)
    res.status(201).send(shark)
    })

app.patch('/sharks/:id', (req, res) => {

})

app.delete('/sharks/:id', (req, res) => {
    
})


module.exports = app



