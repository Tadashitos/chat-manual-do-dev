// Consulte a documentação do WS para ver esses métodos do WebSocketServer

const { WebSocketServer } = require('ws')
const dotenv = require('dotenv')

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", ws => {
    ws.on("error", console.error)

    ws.on("message", data => {
        wss.clients.forEach(client => client.send(data.toString())) // Pega todos os clientes e envia a mensagem para eles
    })

    console.log("Client connected")
})