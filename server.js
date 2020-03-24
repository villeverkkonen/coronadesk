const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()
app.use(express.static('build'))
// app.use(express.static(path.join('src', 'build')))
// app.get('/', (req, res) => {
//   return res.sendFile(path.join('src', 'build', 'index.html'))
// })

app.listen(port)