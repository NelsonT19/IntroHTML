const express = require('express')
const path = require('path')
const app = express()

//cliente so tem acesso ao public
app.use(express.static('./public'))



app.get('/', function (req, res)  {
 res.sendFile(path.join(__dirname,'/public/index.html'))
})

//app.get('/:Nelson', function (req, res)  {
 //   res.send(`Olá ${req.params.Nelson}`)
 // })

app.listen(1337)