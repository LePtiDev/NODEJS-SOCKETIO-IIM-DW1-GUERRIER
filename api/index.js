const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')
const path = require('path')

const { getFilesByUrl } = require("./controller/files.js")
 
app.use(cors())

const url = "/Users/quentinguerrier/Desktop"
 
app.get('/', function (req, res) {
  res.send(getFilesByUrl(url))
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 80')
})