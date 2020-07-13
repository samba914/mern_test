
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI ="mongodb+srv://samba914:samba914@cluster0.euoie.gcp.mongodb.net/samba914?retryWrites=true&w=majority";

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var UsersR = require('./routes/UsersR')

app.use('/usersR', UsersR)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})