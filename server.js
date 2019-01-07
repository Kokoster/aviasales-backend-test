const tickets = require('./resources/tickets.json')
const express = require('express')

const app = express()
const port = 8009

app.get('/tickets', (req, res) => {
	res.send(tickets)
})

app.use((err, req, res, next) => {
	console.log('Failed with error: ' + err)
	res.status(500).send('Something went wrong')
})

app.listen(port, err => {
	if (err) {
		console.log('Something went wrong')
	}

	console.log('Server is listenning on port: ' + port)
})