const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const LoginModel = require('./models/Login-tailwindsDB')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.1:27017/tailwindsDB');

app.post('/register', (req, res) => {
  LoginModel.create(req.body)
  .then(login  =>  res.json(login))
  .catch(err => res.json(err))    
})

app.listen(3001, () => {
    console.log('server is running on port 3001')    
})
