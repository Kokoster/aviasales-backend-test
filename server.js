const tickets = require('./resources/tickets.json')
const http = require('http')
const express = require('express')

const app = express()
const port = 8009

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

const sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

app.get('/tickets', async (req, res) => {
	await sleep(3000)
	res.send(tickets)
})

app.use((err, req, res, next) => {
	console.log('Failed with error: ' + err)
	res.status(500).send('Something went wrong')
})

const httpServer = http.createServer(app)
httpServer.listen(port, err => {
	if (err) {
		console.log('Something went wrong')
	}

	console.log('Server is listenning on port: ' + port)
})