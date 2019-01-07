const express = require('express')

const app = express()
const port = 8009

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.listen(port, (err) => {
	if (err) {
		return console.log('Failed: ' + err)
	}

	console.log('Server is listening on port: ' + port)
})