const express = require('express')
const app = express()

app.use(express.static('build'))
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})