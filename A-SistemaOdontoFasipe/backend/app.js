const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./src/db/conn')

app.use(cors({
    origin: true,
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// Rotas Relacionada a Paciente
const { cadastrarPaciente, buscarTodosPacientes, buscarPaciente } = require('./src/controllers/PacienteController')
const { cadastrarAnamnese } = require('./src/controllers/AnamneseController');

app.post('/anamnese/cadastrar', cadastrarAnamnese)


app.post('/paciente/cadastrar', cadastrarPaciente)
app.get('/paciente/todos_pacientes', buscarTodosPacientes);
app.get('/paciente/buscar_paciente', buscarPaciente);

// Rotas relacionadas ao Supervisor


require('dotenv').config()

const env = process.env.NODE_ENV
const { port } = require(`./src/config/config.${env}.json`)

app.listen(port, console.log('Servidor Rodando na porta', port))
 