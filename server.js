const express = require('express')
const app = express()
app.get('/', (req, res) => {    
	res.send('<html><title>Node Web App FROM JENKINS</title><body><font face="Courier New" color="Red"><h1>Hello world from a <b>Node.js app!!!</b></h1><p><h4> This comes from an automated pipeline created by <i>Kesavan Rangan</i> using <b>JENKINS PIPELINE</b>.</h4></p><br>This is one of the best creations of Mankind and thy rule the world.</font></body></html>')
})
app.listen(80, () => {
	console.log('Server is up on 3000')})
