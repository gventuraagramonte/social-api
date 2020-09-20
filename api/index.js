const express = require('express')
const config = require('../config')
const user = require('./components/user/network')
const app = express()

// Rutas | Routes
app.use('/api/user',user)


// Listening | Escuchando
app.listen(config.api.port, () => {
    console.log('API escuchando en el puerto ', config.api.port)
})