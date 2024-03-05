import express from 'express'
// const express = require('express')
import cors from 'cors'
// const cors = require('cors')
import router from '../src/routes/estudiantes.route'
import routerUsuario from './routes/usuario.route'

const app = express()

app.set('port', 4040)

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(router)
app.use(routerUsuario)

export default app