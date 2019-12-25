const express = require('express')
const app = express()
app.get('/', (req, res) => {    
	//res.send('<html><br>Hello world from a Node.js appp- kesavan!<br><br> This comes from an automated pipeline</html>')
	//res.send('<html><br><p align="center"> HEY THERE!</p></html>')
	res.sendFile('C:/Users/m1039737/Desktop/Project/Node-Web-App/templates/body.html')
})
app.listen(3000, () => {
	console.log('Server is up on 3000')})
