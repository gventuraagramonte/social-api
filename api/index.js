const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')
const user = require('./components/user/network')
const app = express()

app.use(bodyParser.json())

// Rutas | Routes
app.use('/api/user',user)


// Listening | Escuchando
app.listen(config.api.port, () => {
    console.log('API escuchando en el puerto ', config.api.port)
})