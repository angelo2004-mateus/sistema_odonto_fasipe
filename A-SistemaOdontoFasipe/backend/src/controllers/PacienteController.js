const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const conn = require('../db/conn')

function cadastrarPaciente(req, res) {
    const { cpf_pac, nome_pac, cod_pac, tel_pac, cep_pac, logra_pac, num_logra_pac, compl_pac, bairro_pac, cidade_pac, uf_pac, rg_pac, est_rg_pac, nome_mae_pac, data_nasc_pac } = req.body;

  // Verifica se todos os campos obrigatórios estão presentes
  if (!cpf_pac || !nome_pac || !cod_pac || !tel_pac || !data_nasc_pac) {
    return res.status(400).json({ mensagem: 'Todos os campos obrigatórios devem ser preenchidos.' });
  }

  // Verifica se o CPF já está cadastrado
  conn.query('SELECT * FROM paciente WHERE cpf_pac = ?', [cpf_pac], (error, results) => {
    if (error) {
      console.error('Erro ao verificar CPF:', error);
      return res.status(500).json({ mensagem: 'Erro ao cadastrar paciente.' });
    }

    if (results.length > 0) {
      return res.status(400).json({ mensagem: 'Este CPF já está cadastrado.' });
    }

    // Insere o paciente no banco de dados
    conn.query('INSERT INTO paciente SET ?', { cpf_pac, nome_pac, cod_pac, tel_pac, cep_pac, logra_pac, num_logra_pac, compl_pac, bairro_pac, cidade_pac, uf_pac, rg_pac, est_rg_pac, nome_mae_pac, data_nasc_pac }, (error, results) => {
      if (error) {
        console.error('Erro ao cadastrar paciente:', error);
        return res.status(500).json({ mensagem: 'Erro ao cadastrar paciente.' });
      }

      return res.status(201).json({ mensagem: 'Paciente cadastrado com sucesso.' });
    });
  });
};

function buscarTodosPacientes(req, res) {
    conn.query('SELECT * FROM paciente', (error, results) => {
        if (error) {
            console.error('Erro ao buscar pacientes:', error);
            return res.status(500).json({ mensagem: 'Erro ao buscar pacientes.' });
        }
        return res.status(200).json(results);
    });
}

// Função para buscar paciente por nome ou CPF
function buscarPaciente(req, res) {
    const { query } = req;
    const { nome_pac, cpf_pac } = query;

    let queryStr = 'SELECT * FROM paciente WHERE ';
    let values = [];

    if (nome_pac) {
        queryStr += 'nome_pac = ?';
        values.push(nome_pac);
    } else if (cpf_pac) {
        queryStr += 'cpf_pac = ?';
        values.push(cpf_pac);
    } else {
        return res.status(400).json({ mensagem: 'É necessário fornecer um nome ou CPF para buscar o paciente.' });
    }

    conn.query(queryStr, values, (error, results) => {
        if (error) {
            console.error('Erro ao buscar paciente:', error);
            return res.status(500).json({ mensagem: 'Erro ao buscar paciente.' });
        }

        if (results.length === 0) {
            return res.status(404).json({ mensagem: 'Paciente não encontrado.' });
        }

        return res.status(200).json(results);
    });
}

module.exports = {
    cadastrarPaciente,
    buscarPaciente,
    buscarTodosPacientes
}

