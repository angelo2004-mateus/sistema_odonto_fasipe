const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('dotenv').config()

app.listen(3000, console.log('Servidor Rodando'))