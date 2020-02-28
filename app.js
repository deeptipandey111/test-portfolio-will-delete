const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/workarea'))
app.use('/docs', express.static(__dirname + '/documentation'))
app.use('/assets', express.static(__dirname + '/assets'))
app.use('/starter', express.static(__dirname + '/starter'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
