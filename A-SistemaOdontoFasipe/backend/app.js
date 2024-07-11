const express = require('express');
const app = express();
const cors = require('cors');
const conn = require('./src/db/conn');

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const { cadastrarPaciente, buscarTodosPacientes, buscarPaciente } = require('./src/controllers/PacienteController');
const { cadastrarAnamnese } = require('./src/controllers/AnamneseController');
const PlanoTratamentoController = require('./src/controllers/PlanoTratamentoController'); 


app.post('/paciente/cadastrar', cadastrarPaciente);
app.get('/paciente/todos_pacientes', buscarTodosPacientes);
app.get('/paciente/buscar_paciente', buscarPaciente);


app.post('/paciente/cadastrarAnamnese', cadastrarAnamnese);


app.use('/plano-tratamento', PlanoTratamentoController);

// Outras rotas ...

const env = process.env.NODE_ENV;
const { port } = require(`./src/config/config.${env}.json`);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
