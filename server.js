const express = require('express')
const app = express()
app.get('/', (req, res) => {    
	res.send('<html><title>Node Web App</title><h1>Hello world from a Node.js app !!!</h1><p><h4> This comes from an automated pipeline created by Kesavan Rangan using AWS PipeLine</h4></p><br><br>Thanks</html>')
})
app.listen(3000, () => {
	console.log('Server is up on 3000')})
