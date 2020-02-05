const express = require('express')
const app = express()
const ctrl = require('./controllers/message_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messagesBaseURL = "/api/messages"
app.post(messagesBaseURL, ctrl.create)
app.get(messagesBaseURL, ctrl.read)
app.put(`${messagesBaseURL}/:id`, ctrl.update)
app.delete(`${messagesBaseURL}/:id`, ctrl.delete)

let port = 3001
app.listen(port, () => console.log(`We're working real good at ${port}.`))