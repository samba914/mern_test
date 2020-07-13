const express = require('express')
const usersR = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const UserR = require('../models/UserR')
usersR.use(cors())

process.env.SECRET_KEY = 'secret'

usersR.post('/register', (req, res) => {
  const today = new Date()
  const userRData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  UserR.findOne({
    email: req.body.email
  })
    .then(userR => {
      if (!userR) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userRData.password = hash
          UserR.create(userRData)
            .then(userR => {
              res.json({ status: userR.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'UserR already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

usersR.post('/login', (req, res) => {
  UserR.findOne({
    email: req.body.email
  })
    .then(userR => {
      if (userR) {
        if (bcrypt.compareSync(req.body.password, userR.password)) {
          // Passwords match
          const payload = {
            _id: userR._id,
            first_name: userR.first_name,
            last_name: userR.last_name,
            email: userR.email
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'UserR does not exist' })
        }
      } else {
        res.json({ error: 'UserR does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

usersR.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  UserR.findOne({
    _id: decoded._id
  })
    .then(userR => {
      if (userR) {
        res.json(userR)
      } else {
        res.send('UserR does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = usersR