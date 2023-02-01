const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const mqtt = require('mqtt')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const client = mqtt.connect('mqtt://82.208.107.202')

client.on('connect', () => {
  client.subscribe('/devices/wb-msw-v3_54/controls/#', (err) => {
    console.log('subcribed')
  })
})

client.on('message', (topic, message) => {
  param = topic.split('/').pop()
  obj = { param: param, value: message.toString() }
  console.log(obj)
  io.emit('message', obj)
})
