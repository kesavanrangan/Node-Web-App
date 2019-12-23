const express = require('express')
const app = express()
app.get('/', (req, res) => {    
	res.send('Hello world from a Node.js appp- kesavan! This comes from an automated pipeline')
})
app.listen(3000, () => {
	console.log('Server is up on 3000')})
